import React from "react";
import SimpleCard from "./SimpleCard";
import s from './Menu.module.css';

const Menu = props => {
	return(
		 <div className={s.containerItems}>
			 {props.itemCards.map((el, i) => <SimpleCard key={el.name} item={el}
																		addItemOnBasket={props.addItemOnBasket}/>)}
		 </div>
	)
};

export default Menu;