import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProjectsPage from 'components/Pages/Projects';

import {
  selectDiscovered, selectTrips,
  selectCharts, selectChat,
  selectMemory, selectKovdimay,
} from './selectors';


export const ProjectsPageContainer = props => (
  <ProjectsPage
    discovered={props.discovered}
    trips={props.trips}
    charts={props.charts}
    chat={props.chat}
    memory={props.memory}
    kovdimay={props.kovdimay}
  />
);

const mapStateToProps = createStructuredSelector({
  discovered: selectDiscovered(),
  trips: selectTrips(),
  charts: selectCharts(),
  chat: selectChat(),
  memory: selectMemory(),
  kovdimay: selectKovdimay(),
});

ProjectsPageContainer.propTypes = {
  discovered: PropTypes.bool.isRequired,
  trips: PropTypes.object.isRequired,
  charts: PropTypes.object.isRequired,
  chat: PropTypes.object.isRequired,
  memory: PropTypes.object.isRequired,
  kovdimay: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ProjectsPageContainer);
