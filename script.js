// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
	document.getElementById("ny").classList.add("opaque");
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("steel-column").classList.remove("steel-black");
	document.getElementById("ny-column").classList.remove("ny-blue");
}

/*function removeClass (el) {
	el.classList.remove ("ny-blue");
}*/