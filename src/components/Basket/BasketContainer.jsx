import React from "react";
import Basket from "./Basket";
import {connect} from "react-redux";
import {deleteCard} from "../../redux/itemReducer";

class BasketContainer extends React.Component{
	render() {
		return <Basket {...this.props}/>
	}
}


const mapStateToProps = state => {
	return{
		basket: state.itemPage.basket
	}
};

export default connect(mapStateToProps, {deleteCard})(BasketContainer)