import "./Product.css";

function Product({ title, price, inStock, rating }) {
  const stars = '⭐'.repeat(Math.floor(rating));

  return (
    <div className="product">
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
      <p className={`product-stock ${inStock ? 'in-stock' : 'out-of-stock'}`}>
        {inStock ? '✓ In Stock' : '✗ Out of Stock'}
      </p>
      <div className="product-rating">
        <span className="stars">{stars}</span>
        <span className="rating-number">({rating})</span>
      </div>
    </div>
  );
}

export default Product;