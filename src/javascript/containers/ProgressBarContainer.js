import { connect } from 'react-redux';
import ProgressBar from '../components/ProgressBar';

const mapStateToProps = state => ({
  steps: state.get('movies').length,
  currentStep: state.get('countRatedMovies'),
});

const ProgressBarContainer = connect(mapStateToProps)(ProgressBar);

export default ProgressBarContainer;
