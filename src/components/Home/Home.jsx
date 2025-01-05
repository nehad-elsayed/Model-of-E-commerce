import { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
import axios from "axios";

export default function Home() {
  let [products, setProducts] = useState([]);

  async function getProducts() {
    let {
      data: { data: myData },
    } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    console.log(myData);
    setProducts(myData);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.length == 0 ? (
        <div className="loading">
          <span className="loader"></span>
        </div>
      ) : (
        <section className="home bg-dark mt-5 overflow-hidden">
          <h1 className=" text-center p-3 mt-3">Products </h1>
          <div className="container">
            <div className="row  my-3 g-3">
              {products.map((product, index) => {
                return (
                  <div key={index} className="col-md-3">
                    <div className="inner ">
                      <img
                        className="img-fluid rounded-top-4"
                        src={product.imageCover}
                        alt={product.title.split(" ", 2).join("/")}
                      />
                      <h4 className="bg-light p-2 text-success rounded-bottom-4">
                        {product.title.split(" ", 2).join("/")}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
