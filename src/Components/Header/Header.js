import React from "react";
// import Background from "../../img/shoes.webp";
// import Typed from "react-typed";
import redShoes from "../../img/red-shoes.png";
import "./navbar.scss";
import Home from "../../Pages/Home/Home"

function Header() {
  return (
    <>
     {/* Hero */}
     <div id="hero">
     <div className="hero-left">
       <div className="hero-el">
         <h1>Boost Up Your Style</h1>
         <h1>A Happy Future.</h1>
       </div>
       <div className="hero-el">
         <p>
           Get ready for greatness, We only provide the best of the best
           quality.
         </p>
       </div>
       <div>
         <button>Shop Now</button>
       </div>
     </div>
     <div className="hero-right">
       <img src={redShoes} alt="shoes1" />
     </div>
   </div>
      <Home/>
   </>
  );
}

export default Header;
// const headerStyle = {
//   backgroundImage: `url(${Background})`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   display: "block",
// };
// const textStyle = {
//   minHeight: "70vh",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#fff",
//   fontSize: "18px",
//   fontWeight: 400,
// };