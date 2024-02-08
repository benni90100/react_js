import "./Card.css"
export function Card({product}) {
    
  return (
    <div className="card">
      <div className="image-container">
      <img src={product.image} alt="" className="image"/>
      </div>
      <div className="content-container">
      <h2 className="title">{product.title}</h2>
      <p className="price">{product.price}</p>
      </div>
    </div>
  );
}
