let input = document.getElementById("userinput");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
let del = document.querySelectorAll(".delete");

function addBook() {
	if (input.value.length > 0) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

		let span = document.createElement("button");
		span.appendChild(document.createTextNode("delete"));
		span.classList.add("delete");
		li.appendChild(span);
		span.onclick = removeParent;
	}
}
function removeParent(evt){
	evt.target.parentNode.remove();
}

button.addEventListener("click", addBook)