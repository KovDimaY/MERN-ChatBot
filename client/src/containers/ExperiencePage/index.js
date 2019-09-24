import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ExperiencePage from 'components/Pages/Experience';

import {
  selectDiscovered, selectCornerjob,
  selectBigfinite, selectEnixan,
  selectMbas, selectIcicle,
  selectDiscoveryPercent,
} from './selectors';


export const ExperiencePageContainer = props => (
  <ExperiencePage
    discovered={props.discovered}
    cornerjob={props.cornerjob}
    bigfinite={props.bigfinite}
    enixan={props.enixan}
    mbas={props.mbas}
    icicle={props.icicle}
    discoveryPercent={props.discoveryPercent}
  />
);

const mapStateToProps = createStructuredSelector({
  discovered: selectDiscovered(),
  cornerjob: selectCornerjob(),
  bigfinite: selectBigfinite(),
  enixan: selectEnixan(),
  mbas: selectMbas(),
  icicle: selectIcicle(),
  discoveryPercent: selectDiscoveryPercent(),
});

ExperiencePageContainer.propTypes = {
  discovered: PropTypes.bool.isRequired,
  cornerjob: PropTypes.object.isRequired,
  bigfinite: PropTypes.object.isRequired,
  enixan: PropTypes.object.isRequired,
  mbas: PropTypes.object.isRequired,
  icicle: PropTypes.object.isRequired,
  discoveryPercent: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ExperiencePageContainer);
