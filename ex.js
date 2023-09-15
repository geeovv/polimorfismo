class Cachorro {
    constructor(name, raca) {
      this.name = name;
      this.raca = raca;
    }
  
    latir() {
      console.log(`${this.name} (raça: ${this.raca}) late.`);
    }
  }

  class labrador extends Cachorro {
    constructor(name) {
      super(name, 'labrador');
    }
  
    latir() {
      console.log(`${this.name} (raça: ${this.raca}) late como um labrador.`);
    }
  }

  class pinscher extends Cachorro {
    constructor(name) {
      super(name, 'pinscher');
    }
  
    latir() {
      console.log(`${this.name} (raça: ${this.raca}) late como um pinscher.`);
    }
  }

  function makeCachorrolatir(Cachorro) {
    Cachorro.latir();
  }
  
  const labradorCachorro = new labrador('lilo');
  const pinscherCachorro = new pinscher('stitch');
  
  makeCachorrolatir(labradorCachorro);
  makeCachorrolatir(pinscherCachorro);
  
