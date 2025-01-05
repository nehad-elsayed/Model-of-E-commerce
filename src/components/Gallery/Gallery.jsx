import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Gallery() {
  return (
    <>
      <section className=" gallery overflow-hidden">
        <div className="container bg-white my-3">
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li>
                  <Link to={""}>Price </Link>{" "}
                </li>
                <li>
                  <Link to={"quantity"}> Quantity</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-9">
                <Outlet/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
