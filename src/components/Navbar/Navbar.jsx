import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success-subtle fixed-top">
        <div className="container">
          <NavLink className=" fw-bolder fs-3 navbar-brand" to={"/"}>
            E-Commerce-App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <NavLink className="fw-bolder fs-3 nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item e-2">
                <NavLink className="fw-bolder fs-3 nav-link" to={"about"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item e-2">
                <NavLink className="fw-bolder fs-3 nav-link" to={"gallery"}>
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
