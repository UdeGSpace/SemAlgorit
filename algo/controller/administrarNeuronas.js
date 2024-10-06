import Neurona from '../models/neurona';

class AdministrarNeuronas {
  constructor() {
    this._neuronas = [];
  }

  agregarInicio(neurona) {
    if (neurona instanceof Neurona) {
      this._neuronas.unshift(neurona);
    } else {
      throw new Error('El objeto no es una instancia de Neurona');
    }
  }

  agregarFinal(neurona) {
    if (neurona instanceof Neurona) {
      this._neuronas.push(neurona);
    } else {
      throw new Error('El objeto no es una instancia de Neurona');
    }
  }

  // Devuelve la información de todas las neuronas
  mostrar() {
    return this._neuronas.map(neurona => neurona.print());
  }

  // Getter para la lista de neuronas (devuelve una copia)
  get listaNeuronas() {
    return [...this._neuronas];
  }
}
export default AdministrarNeuronas;
