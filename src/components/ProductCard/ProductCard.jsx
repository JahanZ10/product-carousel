import './ProductCard.css'

function ProductCard({ product }) {
  const { title, type, price, compareAtPrice, image, available } = product
  return (
    <div className="product-card">
      <div className='product-img'>
        <img src={image} alt={title} />
        {!available && <span className='badge'>Sold out</span>}
      </div>
      <div className='card-info'>
        <h3 className='product-title'>{title}</h3>
        <p className='product_type'>{type}</p>
        <div className='product-price'>
          {compareAtPrice && <s>${compareAtPrice}</s>}
          <p className='price'>${price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard