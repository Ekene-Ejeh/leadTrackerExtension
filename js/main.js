let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputElement = document.getElementById("input-el");
const ulEl = document.getElementById("uList");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// console.log(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	renderLeads();
}

// the render leads on the page function
function renderLeads() {
	let listItems = "";
	for (let i = 0; i < myLeads.length; i++) {
		listItems += `
			<li>
				<a target='_blank' href='${myLeads[i]}'>
					${myLeads[i]}
				</a>
			</li>`;

		//wrap the lead in an anchor tag (<a>) inside the <li>
		// can you make the link open in a new tab?

		//target='_black'

		// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
		// const listItem = document.createElement("li");
		// listItem.textContent = myLeads[i];
		// ulEl.append(listItem);
	}
	ulEl.innerHTML = listItems;
}

// the save button
inputBtn.addEventListener("click", () => {
	myLeads.push(inputElement.value);
	inputElement.value = "";
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	renderLeads();
});

//the delete button
deleteBtn.addEventListener("dblclick", () => {
	localStorage.clear();
	myLeads = [];
	renderLeads();
});

// // let name = localStorage.setItem("myName", "John");
// let name = localStorage.getItem("myName");
// console.log(name);
// // localStorage.clear();

// //turns a string to an array
// // JSON.parse();

// //turns an array to a string
// // JSON.stringify();

// let myNames = `["paul"]`;

// console.log(typeof myNames);
// //1. turn myNames string into an array
// myNames = JSON.parse(myNames);
// console.log(typeof myNames);

// //2. push a new value to the
// myNames.push("Doe");
// console.log(typeof myNames);
// console.log(myNames);
// // console.log(myNames);

// //3. turn the array into a string again
// myNames = JSON.stringify(myNames);

// console.log(leadsFromLocalStorage);

// //4. console.log the string using typeof to verify that it's a string
// console.log(typeof myNames);
// //a function that puts the input value into the myLeads array,
// //empties the input tag and starts the renderLeads function

//a function that renders the myLeads array on the page,
//turns it to a link and opens the link on a new tab

//how to creat a button with javascript.
// const containerElement = document.getElementById("container");
// containerElement.innerHTML = "<button onClick='buy()' >Buy!</button>";

//a function that renders a text on the page when the button is clicked.
// let buy = () => {
// 	containerElement.innerHTML += "<p>Thank you for buying!<p/>";
// };
