import { JugadoresService } from '../servicios/jugadores.service';

export class Jugador {

    public id ? = '123';
    public email ? = 'sinEmail';
    public nombre ? = 'sinNombre';
    public apellido ? = 'sinApellido';
    public password ? = 'sinPass';
    public puntaje ? = '0';

    constructor(id?: string, email?: string, nombre?: string, apellido?: string, password?: string, puntaje?: string) {

        this.id = id;
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = password;
        this.puntaje = puntaje;


    }
}
