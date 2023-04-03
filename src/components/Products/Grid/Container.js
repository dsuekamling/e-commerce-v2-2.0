// // import React from "react";
// // import { connect } from "react-redux";
// // import axios from 'axios';
// // import Filter from "../Filter/Filter";
// // import ItemCard from "./ItemCard/ItemCard";
// // import * as actionTypes from '../../../store/actions';

// // // class ProductGrid extends React.Component {

// // //   componentDidMount() {
// // //     axios.get('http://localhost:3001/products')
// // //     .then(({ data }) => {
// // //       this.props.updateState(data);
// // //     })
// // //     .catch((error) => {
// // //       throw new Error("Couldn't fetch the data from the database: " + error);
// // //     });    
// // //   }

// // //   render() {
// // //     return (
// // //       <div>
// // //         <Filter />

// // //         <div className="ProductGrid">
// // //           {this.props.items &&
// // //             this.props.items.map(product => {
// // //               return (
// // //                 <ItemCard
// // //                   key={product.name}
// // //                   src={require(`../../../assets/img${product.image}`)}
// // //                   alt={product.name}
// // //                   name={product.name}
// // //                   price={product.price}
// // //                   desc={product.description}
// // //                 />
// // //               );
// // //             })}
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // function mapStateToProps(state) {
// // //   return {
// // //     items: state.items,
// // //     products: state.products
// // //   };
// // // };

// // // function mapDispatchToProps(dispatch) {
// // //   return {
// // //     updateState: (data) => dispatch({type: actionTypes.UPDATESTATE, data})
// // //   }
// // // }

// // // export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
// // class ProductGrid extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       products: []
// //     };
// //   }
// //   componentDidMount() {
// //     axios
// //       .get("http://localhost:3001/products")
// //       .then(({ data }) => {
// //         this.setState({ products: data });
// //       })
// //       .catch(error => {
// //         console.log(error);
// //       });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <Filter />
// //       <div className="ProductGrid">
         
// //         {this.state.products.map(product => {
// //    return (
// //     <ItemCard
// //       key={product.name}
// //       src={`../../../assets/img${product.image}`}
// //       alt={product.name}
// //       name={product.name}
// //       price={product.price}
// //       desc={product.description}
// //     />
// //   );
// //   })}
// //       </div>
// //       </div>
// //     );
// //   }
// // }
// // function mapStateToProps(state) {
// //   return {
// //     items: state.items,
// //     products: state.products
// //   };
// // }

// // function mapDispatchToProps(dispatch) {
// //   return {
// //     updateState: data => dispatch({ type: actionTypes.UPDATESTATE, data })
// //   };
// // }

// // export default connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(ProductGrid);
import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import Filter from "../Filter/Filter";
import ItemCard from "./ItemCard/ItemCard";
import * as actionTypes from '../../../store/actions';

class ProductGrid extends React.Component {
constructor(props) {
super(props);
this.state = {
products: []
};
}
componentDidMount() {
axios
.get("http://localhost:3001/products")
.then(({ data }) => {
this.setState({ products: data });
})
.catch(error => {
console.log(error);
});
}

render() {
return (
<div>
<Filter />
<div className="ProductGrid">
{this.state.products.map(product => {
return (
<ItemCard
key={product.productName}
src={require(`../../../assets/img${product.productURL}`)}
alt={product.productName}
name={product.productName}
price={product.price}
desc={product.productDesc}
/>
);
})}
</div>
</div>
);
}
}

function mapStateToProps(state) {
return {
items: state.items,
products: state.products
};
}

function mapDispatchToProps(dispatch) {
return {
updateState: data => dispatch({ type: actionTypes.UPDATESTATE, data })
};
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(ProductGrid);
// import React from "react";
// import { connect } from "react-redux";
// import axios from 'axios';
// import Filter from "../Filter/Filter";
// import ItemCard from "./ItemCard/ItemCard";
// import * as actionTypes from '../../../store/actions';

// class ProductGrid extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:3001/products")
//       .then(({ data }) => {
//         this.setState({ products: data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     const filteredProducts = this.state.products.filter(product => product.productTag === this.props.selectedTag);

//     return (
//       <div>
//         <Filter />
//         <div className="ProductGrid">
//           {filteredProducts.map(product => {
//             return (
//               <ItemCard
//                 key={product.productName}
//                 src={require(`../../../assets/img${product.productURL}`)}
//                 alt={product.productName}
//                 name={product.productName}
//                 price={product.price}
//                 desc={product.productDesc}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     selectedTag: state.filter.selectedTag,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     updateState: data => dispatch({ type: actionTypes.UPDATESTATE, data })
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProductGrid);
