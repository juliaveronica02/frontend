// import React from 'react'
// import Detail from './../detail/detail'

// const Home = () => {
//     // const itemList = data.map((item, index) => {
//     //     const {name,price,description,quantity,imageUrl,categoryId} = item;
//     //     return(
//     //         <div className="col-md-3">
//     //                 <div class="card mb-4">
//     //                     <img src={item.imageUrl} class="card-img-top" alt="..."/>
//     //                     <div class="card-body">
//     //                         <h4 className="card-title">{item.name}</h4>
//     //                         <h5 className="card-subtitle mb-2">{item.price}</h5>
//     //                         <h6 className="card-subtitle mb-2">Stock : {item.quantity}</h6>
//     //                         <p class="card-text">{item.description}</p>
//     //                         <Detail/>
//     //                          <div className="pt-4">
//     //                          <a href="/" class="card-link">Buy Now</a>
//     //                          <a href="/" class="card-link">Add To Cart</a>
//     //                          </div>
//     //                     </div>
//     //                 </div>
//     //          </div>
//     //     )
//     // });

//     return(
//             <div className="container-fluid content">
//             <h4 className="pb-5">Item List</h4>
//                 <div className="row">
//                     {/* {itemList} */}
//                     <div className="col-md-3">
//                         <div class="card mb-4">
//                             <img src={require("../img/1.png")} class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h4 className="card-title">Ferdinand</h4>
//                                 <h5 className="card-subtitle mb-2">Rp 20.000</h5>
//                                 <h6 className="card-subtitle mb-2">Stock : Banyak</h6>
//                                 <p class="card-text">Di jual teman gak guna karena tidak berguna</p>
//                                 <Detail/>
//                                 <div className="pt-4">
//                                 <a href="/" class="card-link">Buy Now</a>
//                                 <a href="/" class="card-link">Add To Cart</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }

// export default Home

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Detail from "./../detail/detail";
import { getItem } from "./../actioncreators/Item";

const Home = (props) => {
  useEffect(() => {
    props.getItem();
  });
  const handleClick = (id) => {
    this.props.addToCart(id);
  };
  console.log(props);
  const itemList = props.data.map((item) => {
    return (
      <div className="col-md-4 col-sm-12 my-2">
        <div className="card" key={item.id}>
          <img src={item.imageUrl} alt={item.name} className="card-img-top" />
          <h4 className="card-title">{item.name}</h4>
          <div className="card-content">
            <p>{item.description}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
          <br />
          <Detail />
          <button to="/" className="btn btn-outline-dark" onClick={handleClick}>
            <Link to="/cart">Add Item</Link>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="row pt-0 mt-0">{itemList}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.item.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getItem
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
