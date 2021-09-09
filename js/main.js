const inputBtn = document.getElementById("input-btn");
const inputElement = document.getElementById("input-el");
let myLeads = ["www.awesomeLead.com", "www.epicLead.com", "www.greatLead.com"];
const ulEl = document.getElementById("uList");

inputBtn.addEventListener("click", () => {
	myLeads.push(inputElement.value);
	console.log(myLeads);
});

for (let i = 0; i <= myLeads.length; i++) {
	ulEl.textContent += myLeads[i] + ", ";
}

// let box = document.getElementById("box");
// box.addEventListener("click", () => {
// 	console.log("I want to Open the Box!");
// });
