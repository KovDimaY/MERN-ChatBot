import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ExperiencePage from 'components/Pages/Experience';

import {
  selectDiscovered, selectCornerjob,
  selectBigfinite, selectEnixan,
  selectMbas, selectIcicle,
} from './selectors';


export const ExperiencePageContainer = props => (
  <ExperiencePage
    discovered={props.discovered}
    cornerjob={props.cornerjob}
    bigfinite={props.bigfinite}
    enixan={props.enixan}
    mbas={props.mbas}
    icicle={props.icicle}
  />
);

const mapStateToProps = createStructuredSelector({
  discovered: selectDiscovered(),
  cornerjob: selectCornerjob(),
  bigfinite: selectBigfinite(),
  enixan: selectEnixan(),
  mbas: selectMbas(),
  icicle: selectIcicle(),

});

ExperiencePageContainer.propTypes = {
  discovered: PropTypes.bool.isRequired,
  cornerjob: PropTypes.object.isRequired,
  bigfinite: PropTypes.object.isRequired,
  enixan: PropTypes.object.isRequired,
  mbas: PropTypes.object.isRequired,
  icicle: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ExperiencePageContainer);
