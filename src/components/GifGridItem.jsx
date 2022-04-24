import PropTypes from 'prop-types';

export default function GifGridItem({ image }) {
  const { id, title, url } = image;
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        <img alt={id} src={url} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}

GifGridItem.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
};
