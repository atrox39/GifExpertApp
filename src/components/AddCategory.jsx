import { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({ addEvent }) {
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim().length >= 2) {
      addEvent(category);
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-10">
          <input
            type="text"
            name="txtCategory"
            id="txtCategory"
            onChange={handleChange}
            value={category}
            placeholder="Category"
            minLength="2"
            className="form-control"
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary form-control" type="submit">Add Category</button>
        </div>
      </div>
    </form>
  );
}

AddCategory.propTypes = {
  addEvent: PropTypes.func.isRequired,
};
