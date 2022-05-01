const add = () => {
	const selectRoom = document.getElementById('selectRoom').value;
	const itemName = document.getElementById('itemName').value;
	const description = document.getElementById('description').value;
	const value = document.getElementById('value').value;

	const allModals = document.getElementById('allModals');

	let divOne = document.createElement('div');
	divOne.className = 'modal fade';
	divOne.id = itemName.replace(/\s/g, '');
	divOne.setAttribute('tabindex', '-1');
	divOne.setAttribute('aria-labelledby', `${itemName}Label`);
	divOne.setAttribute('aria-hidden', 'true');

	let divTwo = document.createElement('div');
	divTwo.className = 'modal-dialog modal-fullscreen-sm-down';

	let divThree = document.createElement('div');
	divThree.className = 'modal-content';

	let divFour = document.createElement('div');
	divFour.className = 'modal-header';

	let hFiveOne = document.createElement('h5');
	hFiveOne.className = 'modal-title';
	hFiveOne.id = `${itemName}Label`;
	hFiveOne.innerHTML = itemName;

	let modalButtonOne = document.createElement('button');
	modalButtonOne.className = 'btn-close';
	modalButtonOne.type = 'button';
	modalButtonOne.setAttribute('data-bs-dismiss', 'modal');
	modalButtonOne.setAttribute('aria-label', 'close');

	let divFive = document.createElement('div');
	divFive.className = 'modal-body';

	let divSix = document.createElement('div');
	divSix.className = 'household-item';
	divSix.id = itemName;

	let hTwo = document.createElement('h2');
	hTwo.innerHTML = itemName;

	let imgSrc = document.createElement('img');
	imgSrc.src =
		'https://cdn.discordapp.com/attachments/472998894960246794/968923342201585684/unknown.png';

	let table = document.createElement('table');

	let trOne = document.createElement('tr');
	let tdOne = document.createElement('td');
	let hFiveTwo = document.createElement('h5');
	hFiveTwo.innerHTML = 'Item';
	let tdTwo = document.createElement('td');
	let hFiveThree = document.createElement('h5');
	hFiveThree.innerHTML = itemName;

	let trTwo = document.createElement('tr');
	let tdThree = document.createElement('td');
	let hFiveFour = document.createElement('h5');
	hFiveFour.innerHTML = 'Price';
	let tdFour = document.createElement('td');
	let hFiveFive = document.createElement('h5');
	hFiveFive.innerHTML = value;

	let trThree = document.createElement('tr');
	let tdFive = document.createElement('td');
	let hFiveSix = document.createElement('h5');
	hFiveSix.innerHTML = 'Description';
	let tdSix = document.createElement('td');
	let p = document.createElement('p');
	p.innerHTML = description;

	let divSeven = document.createElement('div');
	divSeven.className = 'modal-footer';

	let modalButtonTwo = document.createElement('button');
	modalButtonTwo.className = 'btn btn-secondary';
	modalButtonTwo.type = 'button';
	modalButtonTwo.setAttribute('data-bs-dismiss', 'modal');
	modalButtonTwo.innerHTML = 'Close';

	allModals.append(divOne);

	divOne.append(divTwo);
	divTwo.append(divThree);
	divThree.append(divFour);
	divFour.append(hFiveOne);
	divFour.append(modalButtonOne);
	divThree.append(divFive);
	divFive.append(divSix);
	divSix.append(hTwo);
	divSix.append(imgSrc);
	divSix.append(table);
	table.append(trOne);
	table.append(trTwo);
	table.append(trThree);

	trOne.append(tdOne);
	trOne.appendChild(tdTwo);
	tdOne.append(hFiveTwo);
	tdTwo.append(hFiveThree);

	trTwo.append(tdThree);
	trTwo.append(tdFour);
	tdThree.append(hFiveFour);
	tdFour.append(hFiveFive);

	trThree.append(tdFive);
	trThree.append(tdSix);
	tdFive.append(hFiveSix);
	tdSix.append(p);

	divThree.append(divSeven);
	divSeven.append(modalButtonTwo);

	console.log(
		`Room: ${selectRoom}\nItem: ${itemName}\nDescription: ${description}\nValue: ${value}`
	);

	const livingRoom = document.getElementById('livingRoomList');
	const kitchen = document.getElementById('kitchenList');
	const bedroom = document.getElementById('bedroomList');

	let li = document.createElement('li');
	let button = document.createElement('button');
	button.className = 'btn btn-link';
	button.setAttribute('data-bs-toggle', 'modal');
	button.setAttribute('data-bs-target', `#${itemName.replace(/\s/g, '')}`);
	button.innerHTML = itemName;
	li.append(button);

	if (selectRoom === '1') livingRoom.append(li);
	else if (selectRoom === '2') kitchen.append(li);
	else bedroom.append(li);

	console.log('success');
};
