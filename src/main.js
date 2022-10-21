//import { example } from './data.js';
 //import data from './data/ghibli/ghibli.js';

//import data from './data/pokemon/pokemon.js';
import data from './data/ghibli/ghibli.js';
console.log(data.films);


let showFilms='';

  for (let i=0; i<data.films.length; i++){
     showFilms+= `
     <ul>
      <li><h3>${data.films[i].title}</h3></li>
     
  
      
      <li>${data.films[i].release_date}</li>
      
      <li><img src="${data.films[i].poster}"</li><br><br>
     
     </ul>
     
     `

  console.log(showFilms);
  document.getElementById('basico').innerHTML=showFilms;


  }
 


  
