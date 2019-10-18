export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;
  public puntaje = 0;

  constructor(nombre?: string, gano?: boolean, jugador?: string, puntaje?: number) {
    if (nombre) {
      this.nombre = nombre;
    }
    if (gano) {
     this.gano = gano;
    }
    if (jugador) {
      this.jugador = jugador;
    } 
    if (puntaje) {
      this.puntaje = puntaje;
    } else {
      this.jugador = localStorage.getItem('email');
    }
  }

  public abstract verificar(): boolean;

  public retornarAyuda() {

    return 'NO hay Ayuda definida';
  }
}
