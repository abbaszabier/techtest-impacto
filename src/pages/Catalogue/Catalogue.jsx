import { useState } from "react";
import "./Catalogue.css";
import { productList, priceList } from "../../constans";
import CardProduct from "../../components/Card/CardProduct";

export default function Catalogue() {
  const [category, setCategory] = useState("all");

  const renderProducts = () => {
    if (category === "all") {
      return [...productList[0].ATK, ...productList[0].FURNITURE];
    } else if (category === "ATK") {
      return productList[0].ATK;
    } else if (category === "Furniture") {
      return productList[0].FURNITURE;
    }
  };
  const products = renderProducts();

  const getPrice = (key) => {
    const priceCategory = [...priceList[0].ATK, ...priceList[0].FURNITURE];
    const item = priceCategory.find((item) => item.key === key);
    return item ? item.value : 0;
  };

  return (
    <>
      <div className="wrapper-category">
        <header className="category">
          <button className="button" onClick={() => setCategory("all")}>
            All
          </button>
          <button className="button" onClick={() => setCategory("ATK")}>
            ATK
          </button>
          <button className="button" onClick={() => setCategory("Furniture")}>
            Furniture
          </button>
        </header>
      </div>
      <CardProduct products={products} getPrice={getPrice} />
    </>
  );
}
