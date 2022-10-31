import data from './data/ghibli/ghibli.js';
import {order} from './data.js';
import datacopy from './data/ghibli/ghibli2.js';


//console.log(order(pelis));

document.getElementById('botonUno').addEventListener('click', show);
function show() {
   let showFilms = '';

   for (let i = 0; i < data.films.length; i++) {
      showFilms += `
     <ul>
      <li><h3>${data.films[i].title}</h3></li>
      <li>${data.films[i].release_date}</li>
      <li><img src="${data.films[i].poster}"</li><br><br>
     </ul>
     `
      //console.log(showFilms);

      document.getElementById('basico').innerHTML = showFilms;
   }
}



document.getElementById('botonDos').addEventListener('click', ordenar);
function ordenar() {
   const pelis = order(datacopy.films);
   let showFilmsOrder = '';

   for (let i = 0; i < pelis.length; i++) {
      showFilmsOrder += `
     <ul>
      <li><h3>${pelis[i].title}</h3></li>
      <li><img src="${pelis[i].poster}"</li><br><br>
     </ul>
     `
      document.getElementById('basico').innerHTML = showFilmsOrder;
   }
}



// document.getElementById('botonTres').addEventListener('click', filtrar);
// function filtrar() {
//    let showFilmsFiltered = '';

//    for (let i = 0; i < filteredMuvis.length; i++) {
//       showFilmsFiltered += `
//      <ul>
//       <li><h3>${filteredMuvis[i].title}</h3></li>
//       <li>${filteredMuvis[i].director}</li>
//       <li><img src="${filteredMuvis[i].poster}"</li><br><br>
//      </ul>`
//       //console.log(showFilmsFiltered);
//       document.getElementById('basico').innerHTML = showFilmsFiltered;

//    }
//    //console.log('estaaaas son las filtradas' + showFilmsFiltered);
// }





  
