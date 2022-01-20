let restaurant_A = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_charge: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33
			  
			},
			10: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			11: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			12: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			13: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			14: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		} 
	}
 };
  let restaurant_B = {
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_charge: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: {
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
 };
  let restaurant_C = {
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_charge: 6,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: {
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}
		  
		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
 };
  
 // ----------------------------------------------- //
  
 //VARIABLES

 let restaurants = [restaurant_A, restaurant_B, restaurant_C];

 orderInfo = {};

 subtotal = 0;
 delivery_charge = 0;
 tax = 0;
 total = 0;
  
 left = document.getElementById('menuCatul');
 middle = document.getElementById('menuItemsul');
 right = document.getElementById('menuOrderul');

 subTotalL = document.getElementById('subtotal');
 deliveryL = document.getElementById('delivery');
 taxL = document.getElementById('tax');
 totalL = document.getElementById('total');
 minwarnL = document.getElementById('minwarn');

 submit = document.getElementById('submit');
 clear = document.getElementById('clear');
  
 // ---------------------------------------------- //
  
 //Dynamically-populated dropdown list that lets you select the restaurant you want.
 for (var i = 0; i < restaurants.length; i++){
	let option = document.createElement('option');
	option.textContent = restaurants[i].name;
	option.value = i;
	document.getElementById('rList').appendChild(option);
 }
  
 //Changes restaurant info if user clicks on a new one.
 refreshMenu();

 //Modifies the site styling to reflect changes to the window size.
 window.onresize = resize;
 
 //Event listener that advises user to be confirm if they really want to switch restaurants if they have an order in their current one.
 document.getElementById('rList').onchange = () => {
	if (Object.keys(orderInfo).length > 0){
		var con = confirm('You have items in your order. Please confirm that you would like to clear your out.');
		if (con){
			refreshMenu();
		}
	}
	else {
		refreshMenu();
	} 
 }
  
 //Function that refreshes the stores menu.
 function refreshMenu(){

	//Modifies the site styling to reflect changes to the window size.
	resize();

	selectedR = restaurants[document.getElementById('rList').value];

	//Change the background color of the site depending on the restaurant
	if (selectedR.name == "Aragorn's Orc BBQ"){
		document.body.style.backgroundColor = "#b1e0d2";
	}  else if (selectedR.name == "Lembas by Legolas"){
		document.body.style.backgroundColor = "#b1cde0";
	} else {
		document.body.style.backgroundColor = "#e0cdb1";
	}
  
	document.getElementById('n').innerHTML = selectedR.name;
	document.getElementById('m').innerHTML = "Minimum Order Amount: $" + parseFloat(selectedR.min_order).toFixed(2);
	document.getElementById('d').innerHTML = "Minimum Delivery Charge: $" + parseFloat(selectedR.delivery_charge).toFixed(2);
  
	//Resets info when switching restaurants.
	left.innerHTML = "";
	middle.innerHTML = "";
	right.innerHTML = "";

	//Resets subtotal/tax/total amounts and reflects their text contents.
	subtotal = 0;
	subTotalL.innerHTML = "Subtotal Amount: $" + subtotal.toFixed(2);

	delivery_charge = selectedR.delivery_charge;
	deliveryL.innerHTML = 'Delivery Charge: $' + parseFloat(selectedR.delivery_charge).toFixed(2);

	tax = 0;
	taxL.innerHTML = 'Tax: $' + parseFloat(tax).toFixed(2);

	total = 0;
	totalL.innerHTML = "Total Amount: $" + total.toFixed(2);

	minwarnL.innerHTML = 'You must add $' + parseFloat(selectedR.min_order-subtotal).toFixed(2)  + ' more to your order before submitting.';
	
	//Resets order as it should be empty.
	orderInfo = {};

	//Hides these buttons as they aren't needed at the moment.
	submit.style.visibility = "hidden";
	clear.style.visibility = 'hidden';
  
	//Populates left category of the site (Categories).
	for (var i = 0; i < Object.keys(selectedR.menu).length; i++ ){

		selectedRitems = selectedR.menu[Object.keys(selectedR.menu)[i]];

		left.innerHTML += "<h3 style='text-transform:uppercase'><a id = 'link' href = '#" + Object.keys(selectedR.menu)[i] + "'>" + Object.keys(selectedR.menu)[i]; + "</a></h3>"
  
		//Populates middle category of the site (Menu).

		//Labels each category of item clearly and makes sure to space them out.
		catMid = document.createElement('h3');
		catMid.textContent = Object.keys(selectedR.menu)[i];
		catMid.id = Object.keys(selectedR.menu)[i];

		middle.append(catMid);

		//Prints out the menu choices.
		for (var j = 0; j < Object.keys(selectedRitems).length; j++){
			li = document.createElement("li");
			li.id = selectedRitems[Object.keys(selectedRitems)[j]].price.toFixed(2);
			li.innerHTML = "<br>($" + parseFloat(selectedRitems[Object.keys(selectedRitems)[j]].price).toFixed(2) + ") " + selectedRitems[Object.keys(selectedRitems)[j]].name + "<br><i>" + selectedRitems[Object.keys(selectedRitems)[j]].description + "</i><br>";
  
			middle.append(li);
  
			//Creates add button for each item.
			a = document.createElement('button');
			a.textContent = '+';
			a.name = 'a';
			a.id = getKeyByValue(selectedRitems,selectedRitems[Object.keys(selectedRitems)[j]]) + 'a';
			a.value = selectedRitems[Object.keys(selectedRitems)[j]].name;
			a.class = 'a';
			a.style =  'background-color: #AFFFBC; color: black;'

			li.append(a);
		}
		middle.innerHTML += '<br></br>';
  
	}
  
	//Implements add event listeners to all add buttons.
	for (var i = 0; i < document.getElementsByName('a').length; i++){
		a_id = document.getElementsByName('a')[i].id;
  
		//Add event listener.
		document.getElementById(a_id).onclick = (e) => {
			item = document.getElementById(e.target.id).value;
			price = document.getElementById(e.target.id).parentElement.id;
  
			//Modifies order info object which tracks the user's order.
			if (item in orderInfo){
				orderInfo[item][0]++;
			}
			else {
				orderInfo[item] = [1,price];
			}

			refreshOrder();
	
			//Recalculates subtotal/tax/total values.
			subtotal = 0;
			for (var i = 0; i < Object.keys(orderInfo).length; i++){
				subtotal += Object.values(orderInfo)[i][0] * Object.values(orderInfo)[i][1];
  
			}
			subTotalL.innerHTML = "Subtotal Amount: $" + subtotal.toFixed(2);

			tax = subtotal/10;
			taxL.innerHTML = "Tax: $" + tax.toFixed(2);

			total = subtotal + tax + delivery_charge;
			totalL.innerHTML = "Total Amount: $" + total.toFixed(2);

			//Confugures min delivery message if it needs to be there.
			if (subtotal < selectedR.min_order) {minwarnL.innerHTML = 'You must add $' + parseFloat(selectedR.min_order-subtotal).toFixed(2)  + ' more to your order before submitting.';}
			else {minwarnL.innerHTML = "";}

			//Configures submit button if it needs to be there.
			if (subtotal >= selectedR.min_order){
				submit.style.visibility = 'visible';
			} else {
				submit.style.visibility = 'hidden';
			}
		}
	}
  
  
 }
  
 //Populates right category (Order).
 function refreshOrder(){

	//Configures clear button if it needs to be there.
	if (Object.keys(orderInfo).length > 0){
		clear.style.visibility = 'visible';
	} else {
		clear.style.visibility = 'hidden';
	}

	//Resets subtotal/tax/total amounts and reflects their text contents.
	right.innerHTML = "";
	subTotalL.innerHTML = "Subtotal Amount: $" + subtotal.toFixed(2);
	
	tax = subtotal/10;
	taxL.innerHTML = "Tax: $" + tax.toFixed(2);

	total = subtotal + tax + delivery_charge;
	totalL.innerHTML = "Total Amount: $" + total.toFixed(2);

	minwarnL.innerHTML = 'You must add $' + parseFloat(selectedR.min_order-subtotal).toFixed(2)  + ' more to your order before submitting.';

	//Iterates over order info object and display's each item, quantity, and it's OWN total price.
	for (var i = 0; i < Object.keys(orderInfo).length; i++){
		li = document.createElement('li');
		li.textContent = Object.values(orderInfo)[i][0] + "x " + Object.keys(orderInfo)[i] + " (Total: $" + parseFloat(Object.values(orderInfo)[i][1]*Object.values(orderInfo)[i][0]).toFixed(2) + ") " ;
		right.append(li);

		//Creates remove button for each item.
		r = document.createElement('button');
		r.textContent = '-';
		r.name = 'r';
		r.id = i + 'r';
		r.value = Object.keys(orderInfo)[i];
		r.class = 'r';
		r.style =  'background-color: #FFB7AF; color: black;'

		li.append(r);

		//Implements remove event listeners for all remove buttons.
		r_id = document.getElementsByName('r')[i].id;
		document.getElementById(r_id).onclick = (e) => {

			item = document.getElementById(e.target.id).value;
			price = document.getElementById(e.target.id).parentElement.id;
		   
			//Modifies order info object to take into account the removal.
			if (orderInfo[item][0] == 1){
				delete orderInfo[item];
			}
			else if (Object.keys(orderInfo).length > 0 && item in orderInfo) {
				orderInfo[item][0]--;
			}
			refreshOrder();

			//Recalculates subototal/tax/total amounts.
			subtotal = 0;
			for (var i = 0; i <Object.keys(orderInfo).length; i++){
				subtotal += Object.values(orderInfo)[i][0] * Object.values(orderInfo)[i][1];
			}
			subTotalL.innerHTML = "Subtotal Amount: $" + subtotal.toFixed(2);

			tax = subtotal/10;
			taxL.innerHTML = "Tax: $" + tax.toFixed(2);

			total = subtotal + tax + delivery_charge;
			totalL.innerHTML = "Total Amount: $" + total.toFixed(2);

			//Configures min order message if it needs to be there.
			if (subtotal < selectedR.min_order) {minwarnL.innerHTML = 'You must add $' + parseFloat(selectedR.min_order-subtotal).toFixed(2)  + ' more to your order before submitting.';}
			else {minwarnL.innerHTML = "";}

			//Configues submit button if it needs to be there.
			if (subtotal >= selectedR.min_order){
				submit.style.visibility = 'visible';
			} else {
				submit.style.visibility = 'hidden';
			}
		}
	}
}

//Function that modifies the site styling to reflect changes to the window size.
function resize(){
	labels = document.getElementsByClassName("label");
	if (window.innerWidth < 880){
		for (i = 0; i < labels.length; i++){
			labels[i].style.visibility = 'hidden';
			left.style.visibility = 'hidden';
		}
	}
	else {
		for (i = 0; i < labels.length; i++){
			labels[i].style.visibility = 'visible';
			left.style.visibility = 'visible';
		}
	}
}

 //Function that returns the key given the object and the value.
 function getKeyByValue(o, v) {
	return Object.keys(o).find(k => o[k] === v);
 }
 

//Clear button event handler.
clear.onclick = () => {
	orderInfo = {};
	subtotal = 0;
	total = 0;
	submit.style.visibility = 'hidden';
	refreshOrder();
}
//Submit button event handler.
submit.onclick = () => {
	alertL = 'Order submitted. Thanks for choosing ' + selectedR.name + '!';
	alert(alertL);
	refreshMenu();
}