function checkForm(){
	const imie = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const wiek = document.querySelector('#number').value;
	const error = document.querySelectorAll('.error');
	
	let arr = [imie, email, wiek];
	let checkWhiteSpace = (s) => s.trim().length ===0;
	let empty = (element) => !element || checkWhiteSpace(element);
	let regex = /\d/g;
	let emailValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	//let ageCalc
	//auto scroll do bledu
	//moze obwodki czerwone  na input kiedy jest blad
	//jesli kazdy input poprawnymozna wyslas do bazy danych

	return arr.map((element, index) => {
		if(empty(element)){
			error[index].innerHTML = "Troszke pusto tutaj";
		}
		else if(index === 0 && regex.test(element)){
			error[index].innerHTML = "Wprowadź poprawne dane";
		}
		else if(index === 1 && !emailValid.test(element)){
			error[index].innerHTML = "Czy to jest e-mail ?!";
		}
		else{
			error[index].innerHTML = "";
		}
	}); 
}

