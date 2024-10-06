class Neurona {
    constructor(id_, voltaje, posicion_x, posicion_y, red, green, blue) {
      this._id = id_; // Prefix with underscore to match getter convention
      this._voltaje = voltaje;
      this._posicion_x = posicion_x;
      this._posicion_y = posicion_y;
      this._red = red;
      this._green = green;
      this._blue = blue;
    }
  
    print() {
      console.log(`ID: ${this._id}, Voltaje: ${this._voltaje}, Posición: (${this._posicion_x}, ${this._posicion_y}), Color RGB: (${this._red}, ${this._green}, ${this._blue})`);
    }
  
    // Getters
    get id() {
      return this._id;
    }
    get voltaje() {
      return this._voltaje;
    }
    get posicion_x() {
      return this._posicion_x;
    }
    get posicion_y() {
      return this._posicion_y;
    }
    get red() {
      return this._red;
    }
    get green() {
      return this._green;
    }
    get blue() {
      return this._blue;
    }
  }

  export default Neurona;
  