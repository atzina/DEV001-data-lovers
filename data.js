import data from './data/ghibli/ghibli.js';
//import datacopy from './data/ghibli/ghibli2.js';
//console.log(data.films);

//const pelis = datacopy.films;

export const order = (movies) => {
    return movies.sort((a, b) => {

        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;

        }
    })

};
//console.log(order(pelis));

//export const anotherExample = () => {
//return 'OMG';
//};



const muvis = data.films

export const filteredMuvis = muvis.filter(function (muvis) {
    return muvis.director == "Hayao Miyazaki";

});
//console.log(filteredMuvis);
