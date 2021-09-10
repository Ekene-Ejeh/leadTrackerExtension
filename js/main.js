const inputBtn = document.getElementById("input-btn");
const inputElement = document.getElementById("input-el");
let myLeads = [];
const ulEl = document.getElementById("uList");

inputBtn.addEventListener("click", () => {
	myLeads.push(inputElement.value);
	inputElement.value = "";
	renderLeads();
});

let renderLeads = () => {
	let listItems = "";
	for (let i = 0; i < myLeads.length; i++) {
		listItems += `
			<li>
				<a target='_blank' href='${myLeads[i]}'>
				${myLeads[i]}
				</a>
			</li>`;
		// 0;
		//wrap the lead in an anchor tag (<a>) inside the <li>
		// can you make the link open in a new tab?

		//target='_black'

		// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
		// const listItem = document.createElement("li");
		// listItem.textContent = myLeads[i];
		// ulEl.append(listItem);
	}
	ulEl.innerHTML = listItems;
};

const containerElement = document.getElementById("container");
containerElement.innerHTML = "<button onClick='buy()' >Buy!</button>";

let buy = () => {
	containerElement.innerHTML += "<p>Thank you for buying!<p/>";
};

// let box = document.getElementById("box");
// box.addEventListener("click", () => {
// 	console.log("I want to Open the Box!");
// });

const recipient = "John";
const email = `Hey ${recipient}! How is it going? Cheers Per`;
console.log(email);
