const button = document.querySelectorAll(".next-btn");
const sections = document.querySelector(".section-container");
const selectStudia = document.querySelector("#dropdown");
const overflow = document.querySelector(".no-overflow");
const error = document.querySelectorAll('.error');

let menuIndex = 0
let sectionIndex = 0;
let counter = 0

const nextSection = () =>{
	sections.style.transform = `translate(-${sectionIndex * 101}%)`
}


function checkForm(){
	const form = document.querySelector('#survey-form');
	const imie = document.querySelector('#name');
	const email = document.querySelector('#email');
	const wiek = document.querySelector('#number');
	
	let arr = [imie, email, wiek];
	let validate = [false, false, false];
	let checkWhiteSpace = (s) => s.trim().length ===0;
	let empty = (element) => !element || checkWhiteSpace(element);
	let regex = /\d/g;
	let emailValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	let date = i => empty(i)? new Date(): new Date(i);
	let ageCalc= (uY,uM,uD) => {
		let year = date().getFullYear() - uY;
		let month = (date().getMonth()+1) - (uM+1);
		let day = date().getDate() - uD;

		return month < 0 ? year-1: month > 0 ? year: day < 0? year -1: year;
	}
	let userAge = ageCalc(date(wiek.value).getFullYear(), date(wiek.value).getMonth(), date(wiek.value).getDate());
	
	
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
			error[index].innerHTML = "Za mały wiek!";
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
		console.log(sectionIndex)
		return button.forEach((press) => press.addEventListener("click", updateSection));
	}
	else{
		return check;
	}
}


const dropDownMenu = () => {
	menuIndex = selectStudia.value;
	if(menuIndex == 2 || menuIndex == 0){
		overflow.style = "display: none";
		error[3].innerHTML = "";
	}
	else{
		overflow.style = "display: block";
		error[3].innerHTML = "";
	}
}


const menuCheck = () =>{
	if(menuIndex == 0){
		error[3].innerHTML = "Wybierz opcje";
		counter = 1;
	}
	else if(menuIndex == 2){
		return location.reload();
	}
	else{
		error[3].innerHTML = "";
		counter +=1;
	}
}


const updateSection = () =>{
	counter +=1
	if(counter != 2){
		sectionIndex = sectionIndex === 3? 0: sectionIndex = sectionIndex +1;
		nextSection();
	}
}




