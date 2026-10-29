import { useState } from 'react';

export default function ProductCard({ product, onAdd }) {
  const [saved, setSaved] = useState(false);
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        <button className={saved ? 'save-button is-saved' : 'save-button'} aria-label={`Save ${product.name}`} onClick={() => setSaved(!saved)}>{saved ? '♥' : '♡'}</button>
        <button className="quick-add" onClick={() => onAdd(product)}>Add to bag</button>
      </div>
      <p className="product-type">{product.type}</p>
      <div className="product-details"><h3>{product.name}</h3><span>{product.price}</span></div>
    </article>
  );
}
