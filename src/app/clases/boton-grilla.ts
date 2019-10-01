export class BG {

    id: string;
    seleccionado = false;
    contenido: string;

    /* Test*/



    constructor(pId: string, pCont: string) {
        this.id = pId;
        this.contenido = pCont;

    }


    // Parametros: matrizJuego,arrayRespuestas;
    // evalua si cada palabra del arrayRespuestas está en matrizJuego y va sumando puntos
    evaluaRespuesta()
    {

    const  _H0 = new BG('H0', 'H');
    const  _H1 = new BG('H1', 'O');
    const  _H2 = new BG('H2', 'L');
    const  _H3 = new BG('H3', 'A');
    const  _H4 = new BG('H4', 'X');
    const  _H5 = new BG('H5', 'X');
    const  _H6 = new BG('H6', 'X');
    const  _H7 = new BG('H7', 'X');
    const  _H8 = new BG('H8', 'X');


     const  linea1 = [_H8, _H8, _H8, _H8, _H8, _H8, _H8, _H8, _H8, _H8];
     const  linea7 = [_H0, _H1, _H2, _H3, _H4, _H5, _H6, _H7, _H8, _H8];

      const _matrizPrincipal = [linea1, linea1, linea1, linea1, linea1, linea1, linea1, linea7];

        for (let index = 0; index < _matrizPrincipal.length; index++) {


            // for (let index = 0; index < array.length; index++) {
            //     const element = array[index];

            // }

        }

    }

}
