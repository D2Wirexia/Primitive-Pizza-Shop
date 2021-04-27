import React from "react";
import s from './Basket.module.css'
import {NavLink} from "react-router-dom";
import './../../css/all.min.css'

const Basket = ({basket, deleteCard}) => {
	let sum = 0;
	for (let i = 0; i < basket.length; i++) {
		sum += basket[i].value
	}
	return (
		 <div className={s.basket}>
			 <NavLink to={"/"}>
				 <div className={s.btn}>
					 <i className="fas fa-long-arrow-alt-left"/>
					 <span>Back to change menu</span>
				 </div>
			 </NavLink>
			 {basket.length > 0
				  ? <div className={s.containerBasket}>
				  <div className={s.cardBasket}>
					  {basket.map(item => <div className={s.itemCard} key={item.name}>
						  <div className={s.photoPizza}>
							  <img src={item.img} alt={"pizza"}/>
						  </div>
						  <div className={s.description}>
							  <div className={s.namePizza}>{item.name}</div>
							  <div className={s.storage}>{item.storage}</div>
						  </div>
							<div className={s.bough}>
								<div className={s.title}>Bough</div>
								<div className={s.value}>{item.sizeDough}</div>
							</div>
							<div className={s.supplements}>
								<div className={s.title}>Supplements</div>
								<div className={s.value}>{item.supplements ? item.supplements : "empty"}</div>
							</div>
						  <div className={s.price}>{item.value} UAH</div>
						  <div className={s.deleteCard} onClick={()=>deleteCard(item)}>
							  <i className="fas fa-times"/>
						  </div>
					  </div>)}
				  </div>
					  <div className={s.totalValue}>Total to pay: {sum} UAH</div>
				  </div>
				  : <div className={s.voidBasket}>In your basket void</div>
			 }
		 </div>
	)
};
export default Basket;