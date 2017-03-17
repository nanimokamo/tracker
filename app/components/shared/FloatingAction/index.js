import React from 'react';

import Icon from '../Icon';

const FloatingAction = ({ icon, onClick }) => {
  return (
    <div
      className="FloatingAction"
      onClick={onClick}
    >
      <Icon name={icon} />
    </div>
  );
};

FloatingAction.propTypes = {
  icon: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default FloatingAction;
