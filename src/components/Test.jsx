import PropTypes from 'prop-types';

function Test({ mensaje }) {
  return (
    <div>
      <h1>{mensaje}</h1>
    </div>
  );
}

Test.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Test;
