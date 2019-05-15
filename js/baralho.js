
const QTDE_CARTAS = 52
const VALORES = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const NAIPES = ['&diams;', '&spades;', '&hearts;', '&clubs;']

const Carta = function(valor, naipe, prox) {
  this.valor = valor
  this.naipe = naipe
  this.prox = prox
}

const Pilha = function() {
  this.cartas = {}
  this.push = carta => {
    carta.prox = this.cartas
    this.cartas = carta
  }
  this.pop = () => {
    let carta = this.cartas
    this.cartas = this.cartas.prox
    carta.prox = undefined
    return carta
  }
}

const Baralho = function() {
  (this.embaralhar = () => {
    this.cartas = new Array(QTDE_CARTAS)
    for (let naipe of NAIPES) {
      for (let valor of VALORES) {
        while (true) {
          let aleatorio = Math.floor(Math.random() * QTDE_CARTAS)
          if (!this.cartas[aleatorio]) {
            this.cartas[aleatorio] = new Carta(valor, naipe)
            break
          }
        }
      }
    }
  })()
}
