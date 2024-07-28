import "./CardProduct.css";
import { rupiahFormat } from "../../utils/formatter";

/* eslint-disable react/prop-types */
export default function CardProduct({ products, getPrice }) {
  return (
    <div className="wrapper-products">
      {products?.map((item) => (
        <div className="product" key={item.key}>
          <span className="product-name">{item.value}</span>
          <span className="product-price">
            {rupiahFormat(getPrice(item.key))}
          </span>
        </div>
      ))}
    </div>
  );
}
