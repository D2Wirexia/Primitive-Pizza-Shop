import peperoni from './../library/peperoni.png';
import california from './../library/california.png';
import bbq from './../library/bbq.png';
import margarita from './../library/margarita.jpg';
import cheese from './../library/chees.png';
import hawaiian from './../library/hawaiian.png';

const ADD_ITEM_ON_BASKET = 'ADD_ITEM_ON_BASKET';
const DELETE_CARD = 'DELETE_CARD';

const initialState ={
	itemCards: [
		{
			img: peperoni,
			name: "Peperoni",
			value: 104,
			sizeDough: ["24 cm", "29 cm", "34 cm"],
			valueDough: [0, 20, 40],
			supplements : ["Cheese side ", "Hot-dog side"],
			valueAdditionally: [40, 25],
			storage: "Pilate sauce, mozzarella, hot salami, tomatoes, peppers, basil",
		},
		{
			img: california,
			name: "California",
			value: 114,
			sizeDough: ["24 cm", "29 cm", "34 cm"],
			valueDough: [0, 20, 40],
			supplements : ["Cheese side ", "Hot-dog side"],
			valueAdditionally: [40, 25],
			storage: "Barbecue sauce, mozzarella, hunting sausages, salami, ham, corn, blue onions",
		},
		{
			img: bbq,
			name: "B-B-Q",
			value: 95,
			sizeDough: ["24 cm", "29 cm", "34 cm"],
			valueDough: [0, 20, 40],
			supplements : ["Cheese side ", "Hot-dog side"],
			valueAdditionally: [40, 25],
			storage: "BBQ sauce, Mozzarella, hunting sausages, chicken fillet, pickles, blue onion",
		},
		{
			img: margarita,
			name: "Margarita",
			value: 79,
			sizeDough: ["24 cm", "29 cm", "34 cm"],
			valueDough: [0, 20, 40],
			supplements : ["Cheese side ", "Hot-dog side"],
			valueAdditionally: [40, 25],
			storage: "Pilate sauce, mozzarella, basil",
		},
		{
			img: cheese,
			name: "4 Cheese",
			value: 140,
			sizeDough: ["24 cm", "29 cm", "34 cm"],
			valueDough: [0, 20, 40],
			supplements : ["Cheese side ", "Hot-dog side"],
			valueAdditionally: [40, 25],
			storage: "Cream sauce, mozzarella, brie, Dorblu, Parmesan, basil",
		},
		{
			img: hawaiian,
			name: "Hawaiian",
			value: 104,
			sizeDough: ["24 cm", "29 cm", "34 cm"],
			valueDough: [0, 20, 40],
			supplements : ["Cheese side ", "Hot-dog side"],
			valueAdditionally: [40, 25],
			storage: "Pilate sauce, mozzarella, chicken fillet, corn, pineapple, cherry tomatoes, basil"
		},
	],
	basket: [],
};

const itemReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM_ON_BASKET:
			return {
				...state,
				basket: [...state.basket, action.item]
			};
		case DELETE_CARD:
			return {
				...state,
				basket: state.basket.filter(el => el !== action.card)
			};
		default: return state
	}
};

export const addItemOnBasket = item => ({type: ADD_ITEM_ON_BASKET, item});
export const deleteCard = card => ({type: DELETE_CARD, card});

export default itemReducer;