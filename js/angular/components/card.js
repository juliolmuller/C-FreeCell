(function () {
  'use strict'

  MY_APP.component ('card', {
    bindings: {
      value: '=',
      suit: '=',
      isCell: '='
    },
    controller: function() {
      this.$onInit = () => {
        this.img = './img/cards_suits_' + this.suit + '.png'
        this.class = (this.value ? '' : 'my-card-empty') + ' ' + (this.isCell ? 'my-cell' : '')
        this.color =  (this.suit == 'clubs' || this.suit == 'spades') ? 'my-card-black' : 'my-card-red'
      }
    },
    template: `
      <div class="my-card col-xs-12" ng-class="$ctrl.class">
        <div class="row">
          <div class="my-card-value col-xs-4" ng-class="$ctrl.color">
            {{ $ctrl.value }}
          </div>
          <div class="col-xs-2" ng-if="$ctrl.suit"></div>
          <div class="col-xs-4" ng-if="$ctrl.suit">
            <img src="{{ $ctrl.img }}" class="my-card-suit" />
          </div>
        </div>
      </div>
    `
  })

})()
