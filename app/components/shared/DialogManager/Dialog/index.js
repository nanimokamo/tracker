import React from 'react';

const isScrolled = (e) => () => ({ isScrolled: e.target.scrollTop > 0 });

class Dialog extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    children: React.PropTypes.node,
    title: React.PropTypes.string,
    onCancel: React.PropTypes.func,
    onDone: React.PropTypes.func,
    open: React.PropTypes.bool,
  }

  static childContextTypes = {
    dialog: React.PropTypes.object,
  };

  getChildContext() {
    return {
      dialog: {
        onCancel: this.cancel,
        onDone: this.done,
      },
    };
  }

  state = {
    isScrolled: false
  }

  constructor(props) {
    super(props)
    this.handleScroll = ::this.handleScroll;
    this.handleClickCover = ::this.handleClickCover;
    this.done = ::this.done;
    this.cancel = ::this.cancel;
  }

  handleScroll(e) {
    e.persist();
    this.setState(isScrolled(e));
  }

  handleClickCover() {
    this.cancel();
  }

  cancel() {
    this.props.onCancel(this.props.id);
  }

  done(data) {
    this.props.onDone(this.props.id, data);
  }

  render() {
    const { isScrolled } = this.state;
    const { children, title, open } = this.props;

    return (
      <div className={`Dialog ${open ? 'is-open' : ''} ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="Dialog-cover" onClick={this.handleClickCover} />
        <div className="Dialog-wrapper">
          {title ?
            <div className="Dialog-title">
              {title}
            </div>
          : null}
          <div
            className="Dialog-content"
            onScroll={this.handleScroll}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
