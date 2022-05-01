const t = document.getElementById('test');

const add = () => {
	let livingRoom = document.getElementById('livingRoomList');

	let li = document.createElement('li');
	let button = document.createElement('button');
	button.className = 'btn btn-link';
	button.setAttribute('data-bs-toggle', 'modal');
	button.setAttribute('data-bs-target', '#TV');
	button.innerHTML = 'TV';

	li.append(button);
	livingRoom.append(li);
	console.log('success');
};

const technology = () => {
	const livingRoom = document.getElementById('livingRoomList');

	furniture.style.display = 'none';
};
