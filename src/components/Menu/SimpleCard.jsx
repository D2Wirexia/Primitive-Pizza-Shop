import React, {useEffect, useState} from "react";
import s from './Menu.module.css';

const SimpleCard = ({item, addItemOnBasket}) => {
	const activeStyle = {
		background: "#2980ff",
		color: "#fff",
	};

	const [valuePizza, setValuePizza] = useState(item.value);
	const [doughPizza, setDoughPizza] = useState(0);
	const [bonusPizzaArr, setBonusPizzaArr] = useState([]);
	const [bonusPizza, setBonusPizza] = useState(null);
	const correctionValueDependingOnSizeDough =  ind => {
		 setDoughPizza(ind);
};
	const correctionValueDependingOnSupplements =  ind => {
		let newArrBonusPizza = [];
		newArrBonusPizza[ind] = true;
		if(bonusPizzaArr[ind]){
			newArrBonusPizza[ind] = false;
			setBonusPizza(null);
		}else{
			setBonusPizza(ind);
		}
		 setBonusPizzaArr(newArrBonusPizza);
	};

	useEffect(()=>{
		if(bonusPizza !== null){
			setValuePizza(item.value + item.valueDough[doughPizza] + item.valueAdditionally[bonusPizza]);
		}else{
			setValuePizza(item.value + item.valueDough[doughPizza]);
		}
	}, [doughPizza, bonusPizza]);

	const addPizzaOnBasket = () => {
		addItemOnBasket({
			img: item.img,
			name: item.name,
			value: valuePizza,
			sizeDough: item.sizeDough[doughPizza],
			supplements : item.supplements[bonusPizza],
			storage: item.storage
		});
	};
	return (
		 <div className={s.card}>
			 <div className={s.photoPizza}>
				 <img src={item.img} alt="pizza"/>
			 </div>
			 <div className={s.pushPizza} onClick={()=>addPizzaOnBasket()}>
				 <i className="far fa-plus-square"/>
			 </div>
			 <div className={s.namePizza}>{item.name}</div>
			 <div className={s.price}>{valuePizza} UAH</div>
			 <div className={s.parameterSelection}>
				 <div className={s.sizePizza}>
					 {item.sizeDough.map((dough, i) => <div key={dough}
																		 onClick={()=>correctionValueDependingOnSizeDough(i)}
																		 style={doughPizza === i ? activeStyle : null}
																		 className={s.sizeDough}>{dough}</div>)}
				 </div>
			 </div>
			 <div className={s.bonusPizza}>
				 {item.supplements.map((el, i) => <div key={el}
																	onClick={()=>{
																		correctionValueDependingOnSupplements(i);

																	}}
																	style={bonusPizza === i ? activeStyle : null}
																	className={s.supplements}>{el}</div>)}
			 </div>
			 <div className={s.storage}><span>{item.storage}</span></div>
		 </div>
	)
};
export default SimpleCard;