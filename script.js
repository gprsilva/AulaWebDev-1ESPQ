// console.log("Guilherme")
// console.info("Informação")
// console.warn("Aviso")
// console.error("Erro")


// console.group("Grupo de logs")
// console.log("Guilherme")
// console.info("Informação")
// console.warn("Aviso")
// console.error("Erro")

// console.groupEnd()



// console.time("Timer")

//     let nome = "Guilherme"
//     if (nome==="Guilherme"){
//         console.log("ok")
//     }

// console.timeEnd("Timer")


// Comentário (Ctrl + ;)


// var antigo = "Forma Antiga de escrever uma variável"

// let userName = "Maria"

// const API_URL = "url"

// let texto = "Olá"

// console.log("texto:"+texto+" tipo:"+typeof(texto))


// let numero = 42

// console.log("numero:"+numero+" tipo:"+typeof(numero))


// let isCompleted = false

// console.log("isCompleted:"+isCompleted+" tipo:"+typeof(isCompleted))


// let semValor 

// console.log("semValor:"+semValor+" tipo:"+typeof(semValor))


// let nulo = null

// console.log("nulo:"+nulo+" tipo:"+typeof(nulo))


// let uniqueId = Symbol("id")

// console.log(uniqueId)
// console.log( typeof(uniqueId))


// let BigNum = 9999999999n

// console.log("BigNum:"+BigNum+" tipo:"+typeof(BigNum))


let task = {
  id: 1,
  title: "Aprender JavaScript",
  completed: false,
  assignee: {
    name: "João",
    email: "joao@example.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  }
};