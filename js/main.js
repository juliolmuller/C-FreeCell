
/**
 * Global arrays
 */

const CARD_DECK = {
  suits: [
    { name: 'club', logo: '♣' },
    { name: 'diamond', logo: '♦' },
    { name: 'heart', logo: '♥' },
    { name: 'spade', logo: '♠' }
  ],
  cards: [
    { name: 'ace', numb: 'A', class: 'suit' },
    { name: 'two', numb: '2', class: 'suit' },
    { name: 'three', numb: '3', class: 'suit' },
    { name: 'four', numb: '4', class: 'suit' },
    { name: 'five', numb: '5', class: 'suit' },
    { name: 'six', numb: '6', class: 'suit' },
    { name: 'seven', numb: '7', class: 'suit' },
    { name: 'eight', numb: '8', class: 'suit' },
    { name: 'nine', numb: '9', class: 'suit' },
    { name: 'ten', numb: '10', class: 'suit' },
    { name: 'jack', numb: 'J', class: 'face' },
    { name: 'queen', numb: 'Q', class: 'face' },
    { name: 'king', numb: 'K', class: 'face' }
  ]
}

const SUIT_DICT = {
  club: { color: 'b', accepts: ['diamond', 'heart'] },
  diamond: { color: 'r', accepts: ['club', 'spade'] },
  heart: { color: 'r', accepts: ['club', 'spade'] },
  spade: { color: 'b', accepts: ['diamond', 'heart'] }
}

const NUMB_DICT = {
  A: { cascDrop: '', founDrop: '2' },
  2: { cascDrop: 'A', founDrop: '3' },
  3: { cascDrop: '2', founDrop: '4' },
  4: { cascDrop: '3', founDrop: '5' },
  5: { cascDrop: '4', founDrop: '6' },
  6: { cascDrop: '5', founDrop: '7' },
  7: { cascDrop: '6', founDrop: '8' },
  8: { cascDrop: '7', founDrop: '9' },
  9: { cascDrop: '8', founDrop: '10' },
  10: { cascDrop: '9', founDrop: 'J' },
  J: { cascDrop: '10', founDrop: 'Q' },
  Q: { cascDrop: 'J', founDrop: 'K' },
  K: { cascDrop: 'Q', founDrop: '' }
}

/**
 * Global variables
 */
var cardOffset = 50
var gAudioCtx = new (window.AudioContext || window.webkitAudioContext)()
var gTimer



// Define 'shuffle()' method to Array type
Array.prototype.shuffle = function() {
  var i = this.length
  if (i == 0) return this
  var j, temp
  while (--i) {
    j = Math.floor(Math.random() * (i + 1))
    temp = this[i]
    this[i] = this[j]
    this[j] = temp
  }
  return this
}



/**
 * Game setup
 */

// SETUP: Table backgrounds
var gGameTableBkgds = {}
gGameTableBkgds.pattern = { url: 'img/table_pattern.jpg' }
gGameTableBkgds.circles = { url: 'img/table_circles.jpg' }
gGameTableBkgds.felt = { url: 'img/table_felt.jpg' }
gGameTableBkgds.plain = { url: 'img/table_plain.png' }

// SETUP: Game Options / Defaults
var gGameOpts = {}
gGameOpts.allowFounReuse = false
gGameOpts.cheatUnlimOpen = false
gGameOpts.debugOneLeft = false
gGameOpts.showTips = true
gGameOpts.sound = true
gGameOpts.tableBkgdUrl = gGameTableBkgds.pattern.url

// SETUP: Define / Start async load of sounds files
// NOTE: iOS (as of iOS9) is unable to play ogg files, so we are using MP3 for everything
var gGameSounds = {}
gGameSounds.cardFlip = { buffer: null, url: 'sounds/cardFlip.mp3', src: 'freesound.org/people/f4ngy/sounds/240776/' }
gGameSounds.cardShuffle = { buffer: null, url: 'sounds/cardShuffle.mp3', src: 'freesound.org/people/deathpie/sounds/19245/' }
gGameSounds.crowdCheer = { buffer: null, url: 'sounds/crowdCheer.mp3', src: 'soundbible.com/1700-5-Sec-Crowd-Cheer.html' }
gGameSounds.sadTrombone = { buffer: null, url: 'sounds/sadTrombone.mp3', src: 'freesound.org/people/Benboncan/sounds/73581/' }

$(document).ready(function() { appStart() })
