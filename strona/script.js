function checkForm(){
	const form = document.querySelector('#survey-form');
	const imie = document.querySelector('#name');
	const email = document.querySelector('#email');
	const wiek = document.querySelector('#number');
	const error = document.querySelectorAll('.error');
	
	let arr = [imie, email, wiek];
	let validate = [false, false, false];
	let checkWhiteSpace = (s) => s.trim().length ===0;
	let empty = (element) => !element || checkWhiteSpace(element);
	let regex = /\d/g;
	let emailValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	let ageCalc= (cY,cM,cD,uY,uM,uD) => {
		let year = cY - uY;
		let month = (cM+1) - (uM+1);
		let day = cD - uD;

		return month < 0 ? year-1: month > 0 ? year: day < 0? year -1: year;
	}
	let date = i => empty(i)? new Date(): new Date(i);
	let userAge = ageCalc(date().getFullYear(), date().getMonth(), date().getDate(), date(wiek.value).getFullYear(), date(wiek.value).getMonth(), date(wiek.value).getDate());
	
	

	let check = arr.map((element, index) => {
		if(empty(element.value)){
			error[index].innerHTML = "Troszke pusto tutaj";
			element.style = "border-color: red";
			element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
		}
		else if(index === 0 && regex.test(element.value)){
			error[index].innerHTML = "Wprowadź poprawne dane";
			element.style = "border-color: red";
			element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
		}
		else if(index === 1 && !emailValid.test(element.value)){
			error[index].innerHTML = "Czy to jest e-mail ?!";
			element.style = "border-color: red";
			element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
		}
		else if(index === 2 && userAge <=10){
			error[index].innerHTML = "Pójdź oglądać Disney Channel!";
			element.style = "border-color: red";
			element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
		}
		else{
			error[index].innerHTML = "";
			element.style = "border-color: #555";
			validate[index] = true;
		}
	}); 

	if(validate.every(current => current === true)){
		return form.submit();
	}
	else{
		return check;
	}
}

