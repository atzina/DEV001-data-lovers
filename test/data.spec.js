import { order,filteredMuvis,filtroPersonaje} from '../src/data.js';
//import { films } from './data/ghibli/ghibli.js';
//import datacopy from './data/ghibli/ghibli2.js'




describe('quiero testear sort', () => {
  it('que order sea funcion', () => {
    expect(typeof order).toBe('function');
  });

  it('tiene que ordenar a-z`', () => {
    const nombrePruebas = [
      { title: "Whisper of the Heart" }, { title: "Pom Poko" }, { title: "Castle in the Sky" }, { title: "Pom Poko" }, { title: "My Neighbor Totoro" }
    ]
    const resultado = [{ title: "Castle in the Sky" }, { title: "My Neighbor Totoro" }, { title: "Pom Poko" }, { title: "Pom Poko" }, { title: "Whisper of the Heart" }]
    expect(order(nombrePruebas)).toEqual(resultado);
  });
});


 describe('quiero testear filteredMuvis', () => {
  it('que sea funcion', () => {
     expect(typeof filteredMuvis).toBe('function');
  });

  it('Tiene que filtrar por director', () => {
    const nombreDirectores = [
      {
        title:"Castle in the Sky",
        director: "Hayao Miyazaki"
      },
      {
        title:"Grave of the Fireflies",
        director: "Isao Takahata"
      },
     
      { 
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō"
      },
    ]
    const director= "Hayao Miyazaki";
    let resultadoReal = filteredMuvis(nombreDirectores,director);
    let resultadoEsperado = [{title:"Castle in the Sky", director: "Hayao Miyazaki"}]
     expect(resultadoReal).toEqual(resultadoEsperado);
   });
 });

 describe('quiero testear filtroPersonaje', () => {
  it('que sea funcion', () => {
     expect(typeof filtroPersonaje).toBe('function');
  });

  it('Tiene que filtrar por título', () => {
    const nombreTitulos = [{title:"Kiki's Delivery Service"},{ title: "Porco Rosso" }, {title: "The Secret World of Arrietty" },{title: "The Wind Rises"}, { title:"When Marnie Was There"} ]
    const unTitulo= "Porco Rosso";
    let resultadoReal = filtroPersonaje(nombreTitulos,unTitulo);
    let resultadoEsperado = [{title:"Porco Rosso"}]
     expect(resultadoReal).toEqual(resultadoEsperado);
   });
 });

 