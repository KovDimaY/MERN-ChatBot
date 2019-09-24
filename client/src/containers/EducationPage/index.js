import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EducationPage from 'components/Pages/Education';

import {
  selectDiscovered, selectCertificates,
  selectMaster, selectBachelor,
  selectDiscoveryPercent,
} from './selectors';


export const EducationPageContainer = props => (
  <EducationPage
    discovered={props.discovered}
    certificates={props.certificates}
    bachelor={props.bachelor}
    master={props.master}
    discoveryPercent={props.discoveryPercent}
  />
);

const mapStateToProps = createStructuredSelector({
  discovered: selectDiscovered(),
  certificates: selectCertificates(),
  bachelor: selectBachelor(),
  master: selectMaster(),
  discoveryPercent: selectDiscoveryPercent(),
});

EducationPageContainer.propTypes = {
  discovered: PropTypes.bool.isRequired,
  certificates: PropTypes.bool.isRequired,
  bachelor: PropTypes.object.isRequired,
  master: PropTypes.object.isRequired,
  discoveryPercent: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(EducationPageContainer);
