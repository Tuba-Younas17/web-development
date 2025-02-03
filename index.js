const btns = document.querySelectorAll('.btn');
const counter = document.getElementById('count');

let cont = localStorage.getItem('cartCounter') ? parseInt(localStorage.getItem('cartCounter')) : 0;
counter.innerText = cont; 
btns.forEach(btn => btn.addEventListener('click', function(e) {
    e.preventDefault();

    cont++; 
    localStorage.setItem('cartCounter', cont); 
    counter.innerText = cont; 
}));

