function checkForm(){
	let imie = document.querySelector('#name').value;
	let email = document.querySelector('#email').value;
	let wiek = document.querySelector('#number').value;
	let error = document.querySelectorAll('.error');
	
	let arr = [imie, email, wiek];
	let checkWhiteSpace = (s) => s.trim.length === 0;
	let empty = (element) => !element || checkWhiteSpace(element);
	let regex = /\d/g;
	let emailValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
	if(empty(imie) || regex.test(imie)){
		return error[0].innerHTML = "Wprowadź poprawne dane";
	}
	
	if(empty(email) || !emailValid.test(email)){
		return error[1].innerHTML = "Wprowadź poprawne dane";
	}
	
}

console.log(checkForm());