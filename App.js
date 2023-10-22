import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
const Title = () => {
  return (
    <div>
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src="https://i.pinimg.com/originals/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
        />
      </a>
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const LeonsBurger = [
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r4ufflqojich0r29efvc",
    name: "Leon's Burger",
    cuisine: ["Burger", "American"],
    rating: "4.2",
  },
];
const RestroCard = () => {
  return (
    <div className="card">
      <img src={LeonsBurger.image} alt="image" />
      <h2>{LeonsBurger.name}</h2>
      <h3>{LeonsBurger.cuisine.join(",")}</h3>
      <h4>{LeonsBurger.rating} Stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <RestroCard />
      <RestroCard />
      <RestroCard />
      <RestroCard />
      <RestroCard />
      <RestroCard />
      <RestroCard />
      <RestroCard />
      <RestroCard />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <h4>Footer</h4>
    </div>
  );
};
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
