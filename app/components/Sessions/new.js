import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import Dialog from '../shared/Dialog';
// import List from '../shared/List';
// import ListItem from '../shared/List/ListItem';

import { toggleWindowsVisibility, moveSelectedTabsToWindow } from '../../store/actions.js';
import { getShowWindows, getWindows } from '../../store/selectors.js';

class Sessions extends React.Component {
  static propTypes = {
    windows: React.PropTypes.array,
    hideWindows: React.PropTypes.func,
    open: React.PropTypes.bool,
    moveSelectedTabsToWindow: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.moveToWindow = this.moveToWindow.bind(this);
    this.moveToNewWindow = this.moveToNewWindow.bind(this);
    this.renderWindowsItem = this.renderWindowsItem.bind(this);
    this.renderNewWindowsItem = this.renderNewWindowsItem.bind(this);
  }

  moveToNewWindow() {
    this.props.moveSelectedTabsToWindow();
  }

  moveToWindow({ id }) {
    this.props.moveSelectedTabsToWindow(id);
  }

  // renderWindowsItem(props, i) {
  //   return (
  //     <ListItem
  //       key={props.id}
  //       onClick={this.moveToWindow}
  //       onClickData={{ id: props.id }}
  //       disabled={props.focused}
  //       aside={`${props.tabs.length}`}
  //     >
  //       {`Window ${i + 1}`}
  //     </ListItem>
  //   );
  // }

  // renderNewWindowsItem() {
  //   return (
  //     <List size="large">
  //       <ListItem onClick={this.moveToNewWindow} icon="add">
  //         New window
  //       </ListItem>
  //     </List>
  //   );
  // }

  render() {
    const { windows, hideWindows, open } = this.props;

    return (
      <div>
        Sessions
      </div>
    );
  }
}

const mapDispatchToProps = {
  moveSelectedTabsToWindow,
  hideWindows: toggleWindowsVisibility,
};

const mapStateToProps = createStructuredSelector({
  windows: getWindows,
  open: getShowWindows,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
