let input = document.getElementById("userinput");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
let del = document.querySelectorAll(".delete");

function inputLength() {
	return input.value.length;
}
function addBook() {
	if (inputLength() > 0) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

		let span = document.createElement("button");
		span.appendChild(document.createTextNode("Hapus"));
		span.classList.add("delete");
		li.appendChild(span);
		span.onclick = removeParent;
	}
}
function keyPress(event) {
	if (inputLength() > 0 && event.which === 13) {
		addBook();
	}
}
function removeParent(evt){
	evt.target.parentNode.remove();
}

button.addEventListener("click", addBook);
input.addEventListener("keypress", keyPress);