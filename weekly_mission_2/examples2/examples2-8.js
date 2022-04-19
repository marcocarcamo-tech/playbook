class Toolbox {
  static getMostUsefulTools(){
    return ["Command line", "git", "Text Editor"]
  }
}

console.log("Ejemplo 8: Métodos static")
// Puedo llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())
// Si intentamos instanciar un objeto, no podremos llamar este método static
//const toolbox = new Toolbox()
//console.log(toolbox.getMostUsefulTools()) // is not a function

