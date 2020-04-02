import React from 'react';
import PropTypes from 'prop-types';

const Decision = ({ decision, saveDecision }) => (
  <button className={decision} onClick={() => saveDecision(decision)} type="button">
    <span className="copy">{decision}</span>
    <span className={`${decision}__icon`}>
      {decision === 'reject' ? '\u2715' : '\u2714'}
    </span>
  </button>
);

Decision.propTypes = {
  decision: PropTypes.string.isRequired,
  saveDecision: PropTypes.func.isRequired,
};

export default Decision;
