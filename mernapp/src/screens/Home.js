import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import '../css/Home.css'

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      // Handle error state or retry logic here if needed
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <div
    id="carouselExampleFade"
    className="carousel slide carousel-fade"
    data-bs-ride="carousel"
    style={{ objectFit: "contain !important" }}
  >
    <div className="carousel-inner" id="carousel">
      <div className="carousel-caption" style={{ zIndex: "10" }}>
        <div className="d-flex justify-content-center">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search} onChange={(e)=>{setSearch(e.target.value)}}
          />
          {/*<button className="btn btn-outline-success text-white bbg-success" type="submit">
            Search
          </button>*/}
        </div>
      </div>
      <div className="carousel-item active">
        <img
          src="https://b.zmtcdn.com/data/pictures/7/100017/ba0ace0f3ce2794fbd54cc762ea3de8f.jpg"
          className="d-block w-100" alt="..."
          style={{ filter: "brightness(30%)", objectFit: "contain", height: "100%" }}
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://knowinsiders.com/stores/news_dataimages/lyht/042021/12/17/3001_best-foods-20.jpg?rt=20210412173059"
          className="d-block w-100" alt="..."
          style={{ filter: "brightness(30%)", objectFit: "contain", height: "100%" }}
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://i0.wp.com/blog.suvie.com/wp-content/uploads/2020/02/Pasta-scaled.jpg?ssl=1"
          className="d-block w-100" alt="..."
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
      <div className="container">
        {
        foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem.length > 0 ? (
                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                      .map((filterItems) => {
                        return (
                          <div keys={filterItems._id} className="col-12 col-md-6 col-lg-3">
                            <Card foodItem={filterItems}
                                options={filterItems.options[0]}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No Such Data Found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
