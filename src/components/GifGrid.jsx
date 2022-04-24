import PropTypes from 'prop-types';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }) {
  const { data, loading } = useFetchGifs(category);

  return (
    <div>
      <h4 style={{ color: '#FFF' }}>{category}</h4>
      { loading && <h6>Cargando...</h6> }
      <div className="row">
        {
          data.map((image) => (
            <GifGridItem key={image.id} image={image} />
          ))
        }
      </div>
    </div>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
