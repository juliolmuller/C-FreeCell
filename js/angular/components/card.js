(function () {
  'use strict'

  MY_APP.component ('card', {
    bindings: {
      value: '=',
      suit: '='
    },
    controller: function() {
      this.$onInit = () => {
        this.img = './img/cards_suits_' + this.suit + '.png'
        this.empty = this.value ? '' : 'my-card-empty'
        this.color =  (this.suit == 'clubs' || this.suit == 'spades') ? 'my-card-black' : 'my-card-red'
      }
    },
    template: `
      <div class="my-card col-xs-12" ng-class="$ctrl.empty">
        <div class="row">
          <div class="col-xs-1"></div>
          <div class="my-card-value col-xs-2" ng-class="$ctrl.color">
            {{ $ctrl.value }}
          </div>
          <div class="col-xs-5" ng-if="$ctrl.suit">
            <img src="{{ $ctrl.img }}" class="my-card-suit" />
          </div>
        </div>
      </div>
    `
  })

})()
