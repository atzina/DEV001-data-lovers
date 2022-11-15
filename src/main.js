import data from './data/ghibli/ghibli.js';
import {order,filteredMuvis,filtroPersonaje, sumarPersonajes} from './data.js';
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

      
   }
   document.getElementById('basico').innerHTML = showFilms;
}



document.getElementById('botonDos').addEventListener('click', showSortMovies);
function showSortMovies() {
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


document.getElementById('director-names').addEventListener('change', filtrar);
function filtrar(event){
   const directors=event.target.value;
   const muvies = filteredMuvis(data.films,directors);

   console.log(directors, muvies);
   let showFilmsDr='';

   muvies.forEach(cadaPeli => {

   showFilmsDr += `
     <ul>
      <li><h3>${cadaPeli.title}</h3></li>
      <li><img src="${cadaPeli.poster}"</li><br><br>
     </ul>
     `

 })
 document.getElementById('basico').innerHTML = showFilmsDr;
}
 
document.getElementById('personajesPorPelicula').addEventListener('change', filtroPersonajes);
function filtroPersonajes(event){
   const peliculas = event.target.value;

   const traerPeliculas = filtroPersonaje(data.films,peliculas);
   console.log(peliculas, traerPeliculas);
  
   let showPeople = '';
   traerPeliculas.forEach( cadaPeliFilter =>{
      return cadaPeliFilter.people.forEach(cadaElemento =>{
         
         showPeople += `
      
         <ul>
         <li><h3>${cadaElemento.name}</h3></li>
         <li><img src="${cadaElemento.img}"</li><br><br>
         <li><h3>Género:${cadaElemento.gender}</h3></li>
         <li><h3>Edad:${cadaElemento.age}</h3></li>
         <li><h3>Especie:${cadaElemento.specie}</h3></li>
         
           
         </ul>
            `
      })
      
   })
                             
document.getElementById('basico').innerHTML = showPeople;

}  

document.getElementById('botonTres').addEventListener('click', estadisticas);
function estadisticas(){
   let showStatistics = '';
   const statistics = sumarPersonajes(data.films);
   //<li><h3>Aquí encontrarás una estadística simple a cerca de los personajes divididos por su especie, de todas las animaciones de Estuido Ghibli</h3></li>
 for (const property in statistics){
   showStatistics += `
   <ul>
   
   <li><h2>${property}: ${statistics[property]}</h2></li>
   </ul>
   
   `
  
 }

   
   document.getElementById('basico').innerHTML = showStatistics;
   console.log(sumarPersonajes(data.films));
}
