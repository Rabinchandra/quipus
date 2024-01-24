import React from "react";

function CompanyItem({ name, rank }) {
  return (
    <div className="company-item">
      <section
        className="image"
        style={{
          backgroundImage:
            'url("https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg")',
        }}
      ></section>
      <section className="desc">
        <h2>#Rank {rank}</h2>
        <h3>{name}</h3>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae.
        </small>
      </section>
    </div>
  );
}

export default CompanyItem;
