
const CardComponent = {
  bindings: {
    obj: '=',
    isCell: '=',
  },
  controller() {
    const vm = this

    vm.$onInit = () => {
      vm.img = `assets/images/cards-suits-${vm.obj.suit}.png`
      vm.class = `${vm.obj.value ? '' : 'my-card-empty'} ${vm.isCell ? 'my-cell' : ''}`
      vm.obj.color = `my-card-${vm.obj.color}`
    }
  },
  template: `
    <div class="my-card" ng-class="$ctrl.class">
      <div class="my-card-value" ng-class="$ctrl.obj.color">
        {{ $ctrl.obj.value }}
      </div>
      <div class="col-4" ng-if="$ctrl.obj.suit">
        <img ng-src="{{ $ctrl.img }}" class="my-card-suit" />
      </div>
    </div>
  `,
}

export default CardComponent
