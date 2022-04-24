import { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

export default function GifExpertApp() {
  const [categories, setCategories] = useState(['Javascript', 'Python', 'Golang']);

  const addCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 style={{ color: '#FFF' }}>Gif Expert App</h1>
      <AddCategory addEvent={addCategory} />
      <hr />
      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </div>
  );
}
