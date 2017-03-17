import React from 'react';
import generateId from 'uuid/v1';

import Dialog from './Dialog';

class DialogManager extends React.Component {
	state = {
		dialogs: [],
	}

	constructor(props) {
		super(props);
		this.renderDialog = ::this.renderDialog;
		this.close = ::this.close;
		this.cancel = ::this.cancel;
	}

	open(component, props = {}) {
		let resolve, reject;
		const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });

		this.setState({
			dialogs: [
				...this.state.dialogs,
				{
					id: generateId(),
					component,
					props,
					promise: { resolve, reject },
				},
			],
		});

		return promise;
	}

	cancel(id) {
		this.close(id, null, false);
	}

	close(id, data, passData = true) {
		this.setState({
			dialogs: this.state.dialogs.filter(d => {
				if (d.id !== id) {
					if (passData) {
						d.promise.resolve(data);
					} else {
						d.promise.reject();
					}
					return false;
				}
				return true;
			}),
		});
	}

	renderDialog(dialog) {
		return (
			<Dialog
				key={dialog.id}
				onCancel={this.cancel}
				onDone={this.close}
				open
			>
				{React.createElement(
					dialog.component,
					dialog.props,
				)}
			</Dialog>
		);
	}

	render() {
		const { dialogs } = this.state;

		return (
			<div className="DialogManager">
				{dialogs.map(this.renderDialog)}
			</div>
		);	
	}
}

export default DialogManager;
