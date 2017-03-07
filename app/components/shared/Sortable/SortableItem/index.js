import React from 'react';

import { excludeProps } from '../../../../utils.js';

const SortableItem = (Component) => class SortableItem extends React.Component {
	static propTypes = {
		index: React.PropTypes.number,
		collection: React.PropTypes.string,

		isDraggedOverProps: React.PropTypes.object,
		isBeingDraggedProps: React.PropTypes.object,
	}

	static defaultProps = {
		isDraggedOverProps: {},
		isBeingDraggedProps: {},
	}

	static contextTypes = {
		isActive: React.PropTypes.bool,
		onDragStart: React.PropTypes.func,
		onDragEnd: React.PropTypes.func,
		onDragOver: React.PropTypes.func,
		draggingIndexes: React.PropTypes.array,
	}

	state = {
		isDraggedOver: false,
		isBeingDragged: false,
	}

	constructor(props) {
		super(props);
		this.onDragStart = this.onDragStart.bind(this);
		this.onDragEnd = this.onDragEnd.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
		this.onDragLeave = this.onDragLeave.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (nextContext.draggingIndexes !== this.context.draggingIndexes) {
			this.setState({ isBeingDragged: nextContext.draggingIndexes.includes(this.props.index) });
		}
	}

	onDragStart(e) {
		// e.dataTransfer.setDragImage(document.createElement('div'), 0, 0);
		this.context.onDragStart(this.props.index);
	}

	onDragEnd() {
		this.setState({ isDraggedOver: false });
		this.context.onDragEnd(this.props.index)
	}

	onDragOver() {
		if (this.state.isDraggedOver || !this.context.isActive || this.state.isBeingDragged) return;
		this.setState({ isDraggedOver: true });
		this.context.onDragOver(this.props.index);
	}

	onDragLeave() {
		this.setState({ isDraggedOver: false });
	}

	render() {
		const isDraggedOverProps = this.state.isDraggedOver ? this.props.isDraggedOverProps : {};
		const isBeingDraggedProps = this.state.isBeingDragged ? this.props.isBeingDraggedProps : {};

		return (
			<Component
				{...excludeProps(Object.keys(this.constructor.propTypes), this.props)}
				onDragStart={this.onDragStart}
				onDragEnd={this.onDragEnd}
				onDragOver={this.onDragOver}
				onDragLeave={this.onDragLeave}
				draggable
				{...isDraggedOverProps}
				{...isBeingDraggedProps}
			/>
		);
	}
};

export default SortableItem;
