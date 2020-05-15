window.addEventListener('mousemove', function (event) {
    document.querySelector('.cordinateX').innerHTML = 'X: ' + event.clientX;
    document.querySelector('.cordinateY').innerHTML = 'Y: ' + event.clientY;
});

let btHide = document.querySelector('.hide-btn');
btHide.onclick = function () {
    btHide.style.visibility = 'hidden';
};

document.querySelector('.to-hide-elem').addEventListener('click', function () {
    document.querySelector('#hide').style.visibility = 'hidden';
});

// window.addEventListener('click', function (event) {
//     document.querySelector('.move-it').style.left = event.clientX + 'px';
//     document.querySelector('.move-it').style.top = event.clientY + 'px';
// });

let ul = document.querySelector('.list');
document.querySelector('#add-li').addEventListener('click', function (event) {
    let li = document.createElement("li");
    li.innerHTML = 'пункт';
    ul.appendChild(li);
});

ul.addEventListener('click', function (event) {
    event.target.innerHTML = 'пункт!'
});

let table = document.querySelector('#table');
document.querySelector('#send-info').addEventListener('click', function(event) {
    let userName = document.querySelector('#user-name');
    let userSurname = document.querySelector('#user-surname');
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let tdName = document.createElement("td");
    let tdSurname = document.createElement("td");
    tdName.innerHTML = userName.value;
    tr.appendChild(tdName);
    tdSurname.innerHTML = userSurname.value;
    tr.appendChild(tdSurname);
});

table.addEventListener('click', function(event) {
    event.target.innerHTML = prompt('Введите измененые данные');

});

