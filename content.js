//code to change the background color of paragraph element to pink

//variable paragraph set to target paragraph element
let paragraphs = document.getElementsByTagName('p');
//for of loop, interate through code, and targets the paragraph variable
//for each paragraph element, it will change the background color to pink, #FF00FF
for (elt of paragraphs) {
	elt.style['background-color'] = '#FF00FF';
}

