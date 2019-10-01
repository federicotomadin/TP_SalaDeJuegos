
import { BG } from './boton-grilla';


export class ProcesaGrilla {

    evaluaRespuesta(pMatriz, pMatrizRespuestas): number
    {
        let contador = 0;
        let encontroPalabra = true;

        pMatrizRespuestas.forEach(palabraBuscada => {

            encontroPalabra = true;

            pMatriz.forEach(element => {

                for (let index = 0; index < element.length; index++) {

                    if (this.esRespuesta(element[index], palabraBuscada) === false)
                    {
                        encontroPalabra = false;
                    }
                }

            });

            if (encontroPalabra) {
                contador = contador + 1;
            }
        });

        return contador;

    }

    esRespuesta(casilla: BG, palabraBuscada: BG[]): boolean
    {
        let estaMarcada = true;

        palabraBuscada.forEach(element => {

            if (element.id == casilla.id)
            {
                estaMarcada = casilla.seleccionado;
            }

         });
         return estaMarcada;

    }

}
