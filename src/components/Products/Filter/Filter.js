// // import React from 'react';
// // import { connect } from 'react-redux';
// import axios from 'axios';
// // import * as actionTypes from '../../../store/actions';
// import React, { useState, useEffect } from 'react';
// import ItemCard from "./ItemCard/ItemCard";
// // function Filter (props) {
// //   return(
// //   <div className="Filter">
// //     <h2 className="Filter__header">Filters</h2>
// //     <div className="Filter__filters">
// //       { props.options &&
// //         props.options.map((option) => (
// //           <button
// //             key={option.productTag}
// //             name={option.productTag} 
// //             type="button" 
// //             className="Filter__button" 
// //             onClick={(e) => {
// //               e.target.classList.toggle('Active');
// //               return props.search(option.productTag)
// //             }}
// //           >{option.label}</button>
// //         ))
// //       }
// //     </div>
// //   </div>
// // )};

// // function mapStateToProps (state) {
// //   return {
// //     options : state.filter.options
// //   };
// // }

// // function mapDispatchToProps (dispatch) {
// //   return {
// //     search: (productTag) => dispatch({type: actionTypes.SEARCH, productTag})
// //   };
// // }

// // export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// // import React from 'react';
// // import { connect } from 'react-redux';

// // import * as actionTypes from '../../../store/actions';

// // function Filter (props) {
// //   return(
// //     <div className="Filter">
// //       <h2 className="Filter__header">Filters</h2>
// //       <div className="Filter__filters">
// //         {props.options &&
// //           props.options.map((option) => (
// //             <button
// //               key={option.productTag}
// //               name={option.productTag} 
// //               type="button" 
// //               className={`Filter__button ${props.selectedTag === option.productTag ? 'Active' : ''}`} 
// //               onClick={() => {
// //                 props.selectTag(option.productTag);
// //               }}
// //             >
// //               {option.label}
// //             </button>
// //           ))
// //         }
// //       </div>
// //     </div>
// //   );
// // };

// // function mapStateToProps (state) {
// //   return {
// //     options: state.filter.options,
// //     selectedTag: state.filter.selectedTag,
// //   }
// // }

// // function mapDispatchToProps (dispatch) {
// //   return {
// //     selectTag: (productTag) => dispatch({type: actionTypes.SELECT_TAG, productTag})
// //   };
// // }

// // export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// // const Filter = () => {
// //   const [Products, setProducts] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [searchPrice, setSearchPrice] = useState("");
// //   useEffect(() => {
// //     const fetchAllProducts = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:3000/products");
// //         setProducts(res.data);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };
// //     fetchAllProducts();
// //   }, []);
// //   const filteredProducts = Products.filter((product) => {
// //     return (
// //       product.product_title.toLowerCase().includes(searchTerm.toLowerCase()) &&
// //       (searchPrice === "" || product.product_price <= parseInt(searchPrice))
// //     );
// //   });
// // // return (
// // //   <div>
// // //       <h1 className="producthead">Products Page</h1>
// // //       <div className="search-filters">
// // //         <input
// // //           type="text"
// // //           placeholder="Search by Name"
// // //           value={searchTerm}
// // //           onChange={(e) => setSearchTerm(e.target.value)}
// // //         />
// // //         <input
// // //           type="number"
// // //           placeholder="Search by Maximum Price"
// // //           value={searchPrice}
// // //           onChange={(e) => setSearchPrice(e.target.value)}
// // //         />
// // //       </div>
// // // )}
// const Filter = () => {
//   const [Products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchPrice, setSearchPrice] = useState("");
//   useEffect(() => {
//     const fetchAllProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:3001/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllProducts();
//   }, []);
//   const filteredProducts = Products.filter((product) => {
//     return (
//       product.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (searchPrice === "" || product.price <= parseInt(searchPrice))
//     );
//   });
// return (
//   <div className="Filter">
//       <h1 className="Filter__header">Products Page</h1>
//       <div className="Filter__filters">
//         <input
//           type="text"
//           placeholder="Search by Name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Search by Maximum Price"
//           value={searchPrice}
//           onChange={(e) => setSearchPrice(e.target.value)}
//         />
//       </div>
//       <div className="products-container">
//         {filteredProducts.map((product) => ( (
// <ItemCard
// key={product.productName}
// src={require(`../../../assets/img${product.productURL}`)}
// alt={product.productName}
// name={product.productName}
// price={product.price}
// desc={product.productDesc}
// />
// )))};
        
//       </div>
//     </div>
//   );
// };
// export default Filter;