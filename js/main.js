let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputElement = document.getElementById("input-el");
const ulEl = document.getElementById("uList");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const saveTabBtn = document.getElementById('save-tab-btn');

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	render(myLeads);
}

// the render leads on the page function
function render(leads) {
	let listItems = "";
	for (let i = 0; i < leads.length; i++) {
		listItems += `
			<li>
				<a target='_blank' href='${leads[i]}'>
					${leads[i]}
				</a>
			</li>`;  
		//option 2 to render the leads on the page
		// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
		// const listItem = document.createElement("li");
		// listItem.textContent = myLeads[i];
		// ulEl.append(listItem);
	}
	ulEl.innerHTML = listItems;
}

// the save input button
inputBtn.addEventListener("click", () => {
	myLeads.push(inputElement.value); //to push the input value into the array
	inputElement.value = ""; //to empty the input tab after its been pushed
	localStorage.setItem("myLeads", JSON.stringify(myLeads)); //to store the value in the localStorage
	render(myLeads);
});

// the save tab button
saveTabBtn.addEventListener('click', () => {
	chrome.tabs.query({active: true, currentWindow:true}, function(tabs){ //grabs the url from the tab
		myLeads.push(tabs[0].url);
		localStorage.setItem('myLeads', JSON.stringify(myLeads));
		render(myLeads);
	})

});

//the delete all button
deleteBtn.addEventListener("dblclick", () => {
	localStorage.clear(); // to clear the localStorage
	myLeads = []; //to empty the array
	render(myLeads); //to render an empty array, there by clearing the leads on the page.
});




//some useful commented code snippets

//saving data into the local storage
// let name = localStorage.setItem("myName", "John");
// let name = localStorage.getItem("myName");
// console.log(name);
// localStorage.clear();

//turns a string to an array
// let name = JSON.parse('name');

//turns an array to a string
// let name = JSON.stringify('name');

//how to creat a button with javascript.
// const containerElement = document.getElementById("container");
// containerElement.innerHTML = "<button onClick='buy()' >Buy!</button>";

//a function that renders a text on the page when the button is clicked.
// let buy = () => {
// 	containerElement.innerHTML += "<p>Thank you for buying!<p/>";
// };
