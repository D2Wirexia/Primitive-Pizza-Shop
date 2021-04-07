import {connect} from "react-redux";
import Menu from "./Menu";
import {addItemOnBasket} from "../../redux/itemReducer";

const mapStateToProps = state => {
	return{
		itemCards: state.itemPage.itemCards
	}
};

export default connect(mapStateToProps, {
	addItemOnBasket
})(Menu);