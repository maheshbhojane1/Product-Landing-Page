import React from "react";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="content">
          <h1>YOUR FEET DESERVE <br />THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="btn">
            <button>Shop Now</button>
            <button className="cat">Category</button>
          </div>

          <div className="shop">
            <p>Also Avilable On</p>
            <div className="shop-icon">
                <img src="/images/amazon.png" alt="amezon.logo" />
                <img src="/images/flipkart.png" alt="flipkart.logo" />
            </div>
          </div>
        </div>
        <div className="content-image">
            <img src="/images/hero-image.png" alt="shoes" />
        </div>
      </div>
    </>
  );
}
