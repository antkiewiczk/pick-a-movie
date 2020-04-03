import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ steps, currentStep }) => (
  <div
    className="progressBar"
    style={{ width: `${(currentStep / steps) * 100}vw` }}
  />
);

ProgressBar.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default ProgressBar;
