import React, { useState, useEffect } from 'react';

const PixabaySearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      if (query.trim() === '') return;

      const apiKey = '38996745-9d9549023107b5d5694f84e6e';
      const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des images');
        }
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher des images..."
        onChange={handleInputChange}
        value={query}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <div className="grid grid-cols-2 gap-4 m">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.previewURL}
            alt={image.tags}
            className="w-full h-auto margin-x-4"
          />
        ))}
      </div>
    </div>
  );
};

export default PixabaySearch;
