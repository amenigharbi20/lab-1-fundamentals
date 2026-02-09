const inStock = true
function Product({ title, price, inStock, rating }) {
  
  return (
    <div className="product-card" style={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>
      <p style={{ color: inStock ? 'green' : 'red' }}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <p>
        {Array.from({ length: Math.round(rating) }, () => '⭐').map((star, index) => (
        <span key={index}>{star}</span>
        ))}
      </p>

    </div>
  )
}
export default Product;