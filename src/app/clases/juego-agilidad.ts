import { Juego } from '../clases/juego';

export class JuegoAgilidad extends Juego {

    primerNumero: number;
    operador: number;
    segundoNumero: number;
    resultado: number;
    respuesta = 0;


    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Adivina el número', gano, jugador);        
        this.primerNumero = Math.floor(Math.random() * 10);
        this.segundoNumero = Math.floor(Math.random() * 10);
        this.operador = Math.floor(Math.random() * 4);

    }

    realizarCuenta(): number
    {
        let retorno = 0;

        if (this.operador == 0)
        {
            retorno = this.primerNumero + this.segundoNumero;
        }
        else if (this.operador == 1)
        {
            retorno = this.primerNumero - this.segundoNumero;

        }
        else if (this.operador == 2)
        {
            retorno = this.primerNumero * this.segundoNumero;
        }
        else if (this.operador == 3)
        {
            retorno = this.primerNumero / this.segundoNumero;

        }
        return retorno;
    }

    public verificar(juegoNuevo: JuegoAgilidad) {

        if (juegoNuevo.realizarCuenta() == this.respuesta) {


        
        }


    }




}
