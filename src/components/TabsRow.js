import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tab = styled.div`
  display: inline-block;
  padding: 5px;
`;

const tabType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
});

function TabLink({ tab }) {
  return (
    <Tab>
      <NavLink exact={tab.exact} activeClassName="active-link" to={tab.path}>
        {tab.name}
      </NavLink>
    </Tab>
  );
}
TabLink.propTypes = { tab: tabType };

export default function TabsRow({ tabs }) {
  return (
    <div>
      {tabs.map((tab, idx) => (
        <TabLink key={idx} tab={tab} />
      ))}
    </div>
  );
}

TabsRow.propTypes = {
  tabs: PropTypes.arrayOf(tabType).isRequired,
};
