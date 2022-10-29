import { order} from '../src/data.js';
//import { films } from './data/ghibli/ghibli.js';
//import datacopy from './data/ghibli/ghibli2.js'




describe('quiero testear sort', () => {
  it('que order sea funcion', () => {
    expect(typeof order).toBe('function');
  });

  it('tiene que ordenar a-z`', () => {
    const nombrePruebas = [
      {title: "Whisper of the Heart" }, {title: "Pom Poko" }, {title: "Castle in the Sky" }, {title: "My Neighbor Totoro" }
    ]
    const resultado = [{ title: "Castle in the Sky" }, { title: "My Neighbor Totoro" }, { title: "Pom Poko" }, { title: "Whisper of the Heart" }]
    expect(order(nombrePruebas)).toEqual(resultado);
  });
});


// describe('quiero testear filter', () => {
//   it('que sea funcion', () => {
//     expect(typeof filteredMovies).toEqual('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toEqual('OMG');
//   });
// });
