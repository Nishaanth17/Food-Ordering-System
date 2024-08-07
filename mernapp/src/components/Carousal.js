import React from "react";

export default function Carousal() {
  return (
    <div>
  <div
    id="carouselExampleFade"
    className="carousel slide carousel-fade"
    data-bs-ride="carousel"
    style={{ objectFit: "contain !important" }}
  >
    <div className="carousel-inner" id="carousel">
      <div className="carousel-caption" style={{ zIndex: "10" }}>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success text-white bbg-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="carousel-item active">
        <img
          src="https://b.zmtcdn.com/data/pictures/7/100017/ba0ace0f3ce2794fbd54cc762ea3de8f.jpg"
          className="d-block w-100"
          style={{ filter: "brightness(30%)", objectFit: "contain", height: "100%" }}
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://knowinsiders.com/stores/news_dataimages/lyht/042021/12/17/3001_best-foods-20.jpg?rt=20210412173059"
          className="d-block w-100"
          style={{ filter: "brightness(30%)", objectFit: "contain", height: "100%" }}
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://i0.wp.com/blog.suvie.com/wp-content/uploads/2020/02/Pasta-scaled.jpg?ssl=1"
          className="d-block w-100"
          style={{ filter: "brightness(30%)", objectFit: "contain", height: "100%" }}
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
  );
}
