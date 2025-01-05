import axios from "axios";
import { useEffect, useState } from "react";

export default function About() {
  let [text, setText] = useState("");

  async function getData() {
    let {
      data: { data: newData },
    } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    console.log(newData);
    setText(newData);
  }

  useEffect(() => {
    console.log("component did mount");
    getData();
  }, []);

  //the empty array in useEffect [] is called Dependecny List and we put it to avoid infinte loop //

  // useEffect(() => {
  //   return () => {
  //     console.log("component will unmount");
  //   };
  // }, []);

  // useEffect(() => {
  //   if (count == 0) return;
  //   console.log("component did update");
  // }, [count]);

  // function changeCount() {
  //   setCount(Math.random);
  // }

  return (
    <>
      {text.length == 0 ? (
        <div className="loading">
          <div className="loader"></div>
        </div>
      ) : (
        <section className="about bg-dark mt-5 overflow-hidden">
          <h1 className=" text-center  p-3 mt-3">Products Details </h1>

          <div className="container mt-2">
            <div className="row g-3 p-3 mt-2">
              {text.map((title, index) => {
                return (
                  <div key={index} className="col-md-3">
                    <div className="inner rounded-3">
                      <h3 className=" p-2 text-success bg-light rounded-3">
                        {title.title.split(" ", 2).join("/")}
                      </h3>
                      <p className="p-3 text-muted bg-light">
                        {title.description.split(" ", 15).join(" ")}
                      </p>
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
