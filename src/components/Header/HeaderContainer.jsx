import Header from "./Header";
import {connect} from "react-redux";

const mapStateToProps = state => {
	return{
		basket: state.itemPage.basket
	}
};

export default connect(mapStateToProps, {})(Header);