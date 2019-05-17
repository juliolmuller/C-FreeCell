
/**
 * Start Dialog Box buttons
 */
function handleHowToPlayBtn() {

  // Open how-to-play instructions in a new tab
  window.open('http://cardgameheaven.com/single-player-games/freecell-solitaire.html', '_blank')
}
function handleStartBtn() {
  
  // Close dialog box
  $('#dialogStart').dialog('close')

  // Play sound
  if (gGameOpts.sound) 
    playSound(gGameSounds.cardShuffle)

  // Fill out board
  doRespConfig()
  doFillBoard()
}
function toggleOptionsButton() {
  
  // Check/Unckeck sound status based on previous settings
  $('#chkOptSound').prop('checked', gGameOpts.sound)

  // Switch dialog box visibility according to current status
  const target = '#dialogOptions'
  if ($(target).dialog('isOpen')) {

    // Update sound options
    gGameOpts.sound = $('#chkOptSound').prop('checked')

    // Set background
    var strBkgdUrl = $('input[type="radio"][name="radBkgd"]:checked').data('url')
    if (strBkgdUrl) 
      $('body').css('background', 'url("' + strBkgdUrl + '")')

    // Close dialog box
    $(target).dialog('close')
  
  // Open dialog box
  } else {
    $(target).dialog('open')
  }
}



/**
 * Pause Dialog Box buttons
 */
function togglePauseDialog() {

  // Switch dialog box visibility according to current status
  const target = '#dialogPause'
  if ($(target).dialog('isOpen')) {
    $(target).dialog('close')
  } else {
    $(target).dialog('open')
    $(target + ' button').blur()
  }
}
function handleNewGameBtn() {
  
  // Play sound
  if (gGameOpts.sound)
    playSound(gGameSounds.sadTrombone)

  // Close dialog box
  $('#dialogPause').dialog('close')

  // Fill out board
  doFillBoard()
}
