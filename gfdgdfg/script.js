let imie = document.getElementById('name');
let email = document.getElementById('email');
let wiek = document.getElementById('number');

function checkForm(){
	let arr = [];
	
	arr.push = imie;
	arr.push = email;
	
	reg = /\W/ig;
	
	
	return arr.tab(element => {
		if(!reg.test(element)){
			alert("Wypełnij poprawnie dane")
		}
	})
	
}