import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import axios from 'axios';
// import Filter from "../Filter/Filter";
import ItemCard from "./ItemCard/ItemCard";
import * as actionTypes from '../../../store/actions';

const ProductGrid = () => {
  const [Products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);
  const filteredProducts = Products.filter((product) => {
    return (
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchPrice === "" || product.price <= parseInt(searchPrice))
    );
  });
return (
  <div className="Filter">
      <h1 className="Filter__header">Products Page</h1>
      <div className="Filter__filters">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Search by Maximum Price"
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)}
        />
      </div>
      <div className="ProductGrid">
        {filteredProducts.map((product) => ( (
<ItemCard
key={product.productName}
src={require(`../../../assets/img${product.productURL}`)}
alt={product.productName}
name={product.productName}
price={product.price}
desc={product.productDesc}
/>
)))};
        
      </div>
    </div>
  );
};

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
