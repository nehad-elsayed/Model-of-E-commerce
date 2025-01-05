import React from "react";

export default function NotFound() {
  return (
    <>
      <section className=" overflow-hidden d-flex flex-column align-items-center justify-content-center h-100 mt-5">
        <div className="container text-center mt-4 mb-5">
          <h1 className="text-white mt-4">Error 404! Not found</h1>
          <h className="text-white mb-4">THIS PAGE DOESNOT EXIST!</h>
        </div>
      </section>
    </>
  );
}
