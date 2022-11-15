import data from './data/ghibli/ghibli.js';
import datacopy from './data/ghibli/ghibli2.js';
//console.log(data.films);

const pelis = datacopy.films;

export const order = (movies) => {
    return movies.sort((a, b) => {

        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;

        }
        return 0;
    })

};
console.log(order(pelis));

const muvis = data.films;
  export const filteredMuvis = (datafilms,directors)=> {
    
  return datafilms.filter(muvi => muvi.director===directors)//se itera cada pelicula con su director y se compara con los directores seleccinados
  
  };
 
console.log(filteredMuvis(muvis));

const muvies = data.films;

export const filtroPersonaje = (datafilms,peliculas)=> {
   
    return datafilms.filter(muvi => muvi.title === peliculas ) //se itera cada peli con sus datos de people y se comapara con las peliculas seleccionadas el problema es que muvi.people no tiene datos del nombre de la pelis
};
console.log(filtroPersonaje(muvies));

// estadísticas
// export const sumatoriaEdad = (datafilms,edades) => {
//     return muvies.forEach(peli => {
//         return 
        
//     });
// }


export const sumarPersonajes = (datafilms) => {
    const result = datafilms.map(item=> item.people).flat();
    const resultFlat =result.map(people=> people.specie);
    const resultReduce = resultFlat.reduce((personaje, specie)=>{
        if (personaje[specie]){
            personaje[specie] = personaje[specie] + 1;
        } else {
            personaje[specie] = 1;
        }
        return personaje;
    },{});
 
 console.log(resultReduce);
 return resultReduce;

}

















