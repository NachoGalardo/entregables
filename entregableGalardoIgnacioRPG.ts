class Personaje {
    nombre: string;
    nivel: number;
    puntosDeVida: number;
  
    constructor(nombre: string, puntosDeVida: number) {
      this.nombre = nombre;
      this.nivel = 1;
      this.puntosDeVida = puntosDeVida;
    }
  
    atacar(): void {
      console.log(`${this.nombre} está atacando.`);
    }
  
    defender(): void {
      console.log(`${this.nombre} está defendiendo.`);
    }
  
    mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre}, Nivel: ${this.nivel}, Puntos de Vida: ${this.puntosDeVida}`);
    }
  
    evolucionar(): Personaje {
      console.log(`${this.nombre} no tiene evolución.`);
      return this;
    }
  }
  
  class Arquero extends Personaje {
    constructor(nombre: string, puntosDeVida: number) {
      super(nombre, puntosDeVida);
    }
  
  
    evolucionar(): ArqueroLegendario {
      console.log(`${this.nombre} ha evolucionado a Arquero Legendario!`);
      return new ArqueroLegendario(this.nombre, this.puntosDeVida + 50);
    }
  }
  
  class ArqueroLegendario extends Arquero {
    constructor(nombre: string, puntosDeVida: number) {
      super(nombre, puntosDeVida);
      this.nivel = 10;
    }
}
  
  class Mago extends Personaje {
    constructor(nombre: string, puntosDeVida: number) {
      super(nombre, puntosDeVida);
    }
  
    atacar(): void {
      console.log(`${this.nombre} lanza un hechizo de fuego.`);
    }
  
    evolucionar(): MagoLegendario {
      console.log(`${this.nombre} ha evolucionado a Mago Legendario!`);
      return new MagoLegendario(this.nombre, this.puntosDeVida + 30);
    }
  }
  
  class MagoLegendario extends Mago {
    constructor(nombre: string, puntosDeVida: number) {
      super(nombre, puntosDeVida);
      this.nivel = 10;
    }
  
    atacar(): void {
      console.log(`${this.nombre} lanza un hechizo!`);
    }
  }  
  
 class Luchador extends Personaje {
    constructor(nombre: string, puntosDeVida: number) {
      super(nombre, puntosDeVida);
    }
  
    atacar(): void {
      console.log(`${this.nombre} está luchando.`);
    }
  
    evolucionar(): LuchadorLegendario {
      console.log(`${this.nombre} ha evolucionado a Luchador Legendario!`);
      return new LuchadorLegendario(this.nombre, this.puntosDeVida + 30);
    }
  }
  
  class LuchadorLegendario extends Luchador {
    constructor(nombre: string, puntosDeVida: number) {
      super(nombre, puntosDeVida);
      this.nivel = 10;
    }
  
    atacar(): void {
      console.log(`${this.nombre} está luchando!`);
    }
  }
  
  
