import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import Dialog from '../shared/Dialog';
// import List from '../shared/List';
// import ListItem from '../shared/List/ListItem';

// import { toggleWindowsVisibility, moveSelectedTabsToWindow } from '../../store/actions.js';
import { getSession } from '../../store/selectors.js';

class Session extends React.Component {
  static propTypes = {
    session: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
    // this.moveToWindow = this.moveToWindow.bind(this);
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
    const { session } = this.props;

    return (
      <div>
        <h1>Session</h1>
        <ul>
          <li>{session.datetime}</li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = {
  // moveSelectedTabsToWindow,
  // hideWindows: toggleWindowsVisibility,
};

const mapStateToProps = createStructuredSelector({
  sessions: getSession,
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
