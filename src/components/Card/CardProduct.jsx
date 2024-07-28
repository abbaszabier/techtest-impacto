import "./CardProduct.css";

/* eslint-disable react/prop-types */
export default function CardProduct({ products, getPrice }) {
  return (
    <div className="wrapper-products">
      {products?.map((item) => (
        <div className="product" key={item.key}>
          <span className="product-name">{item.value}</span>
          <span className="product-price">Rp {getPrice(item.key)}</span>
        </div>
      ))}
    </div>
  );
}
