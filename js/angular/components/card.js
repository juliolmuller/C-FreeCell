(function () {
  'use strict'

  MY_APP.component ('card', {
    bindings: {
      obj: '=',
      isCell: '='
    },
    controller: function() {
      this.$onInit = () => {
        this.img = './img/cards_suits_' + this.obj.suit + '.png'
        this.class = (this.obj.value ? '' : 'my-card-empty') + ' ' + (this.isCell ? 'my-cell' : '')
        this.obj.color = 'my-card-' + this.obj.color
      }
    },
    template: `
      <div class="my-card col-xs-12" ng-class="$ctrl.class">
        <div class="row">
          <div class="my-card-value col-xs-4" ng-class="$ctrl.obj.color">
            {{ $ctrl.obj.value }}
          </div>
          <div class="col-xs-2" ng-if="$ctrl.obj.suit"></div>
          <div class="col-xs-4" ng-if="$ctrl.obj.suit">
            <img src="{{ $ctrl.img }}" class="my-card-suit" />
          </div>
        </div>
      </div>
    `
  })

})()
