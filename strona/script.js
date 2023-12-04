function checkForm(){
	let imie = document.querySelector('#name').value;
	let email = document.querySelector('#email').value;
	let wiek = document.querySelector('#number').value;
	let error = document.querySelectorAll('.error');

	let arr = [imie, email, wiek];
	return arr.map((element, index) => element === ""? error[index].innerHTML = `pusto`: "");
}

console.log(checkForm());