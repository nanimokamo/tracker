import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ items }) => {
  return (
    <nav className="Tabs">
      {items.map((item, i) => {
        return (
          <NavLink
            exact
            key={i}
            to={item.link}
            className="Tabs-item"
            activeClassName="is-active"
          >
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

Tabs.propTypes = {
  items: React.PropTypes.array,
};

export default Tabs;
