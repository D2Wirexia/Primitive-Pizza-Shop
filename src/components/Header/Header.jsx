import React from "react";
import './../../css/all.min.css'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = props => {
	return(
		 <header>
			 <div className={s.logo}>PizZa W-Club</div>
				<div className={s.shopCard}>
					<div className={s.info}>Poke here, check the basket -></div>
					<NavLink to={"/basket"}>
					<i className="fas fa-shopping-cart"/>
					</NavLink>
					<span>{props.basket.length}</span>

				</div>
		 </header>
	)
};

export default Header;