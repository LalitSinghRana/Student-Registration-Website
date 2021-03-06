let myBool = true;

function myFunction() {
	event.preventDefault();

	if (validate()) {
		let name = form.elements['name'].value;
		let email = form.elements['email'].value;
		let website = form.elements['website'].value;
		let image = form.elements['image'].value;
		let gender = form.elements['gender'].value;
		let str = '';
		let skills = form.elements['skills'];

		for (let i = 0; i < skills.length; i++) {
			if (skills[i].checked) {
				if (str === '') str += skills[i].value;
				else str += ', ' + skills[i].value;
			}
		}

		let div1 = document.createElement('div');
		div1.className = 'card-left';
		div1.innerHTML = `<strong>${name}</strong> <br/> 
											${gender} <br/> 
											${email} <br/> 
											<a href="${website}" target="_blank">${website.split('/')[2]}</a> <br/> 
											${str} <br/>`;

		let div2 = document.createElement('div');
		div2.innerHTML = `<img src="${image}">`;
		div2.className = 'card-right';

		if (myBool) {
			div1.style.backgroundColor = '#FFF';
			div2.style.backgroundColor = '#FFF';
			myBool = false;
		} else {
			div1.style.backgroundColor = '#EDF6DD';
			div2.style.backgroundColor = '#EDF6DD';
			myBool = true;
		}

		document.getElementById('card-dis').appendChild(div1);
		document.getElementById('card-img').appendChild(div2);
	}
}

// Validating checkbox group
function validate() {
	let form_data = new FormData(document.querySelector('form'));

	if (!form_data.has('skills')) {
		alert('Please select at least 1 skill');
		return false;
	} else {
		return true;
	}
}
