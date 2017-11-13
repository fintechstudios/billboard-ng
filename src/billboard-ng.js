import angular from 'angular';
import { bb } from 'billboard.js';

class BillboardController {
  static get $inject() {
    return ['$element', '$timeout'];
  }

  constructor($element, $timeout) {
    this.$element = $element;
    this.$timeout = $timeout;
  }

  _generate() {
    if (this.chart) {
      this.chart.destroy();
    }

    this.$timeout(() => {
      // timeout ensures element is sized in DOM before initializing bb
      this.chart = bb.generate(Object.assign(
        {bindto: this.$element[0]},
        this.options
      ));
    })
  }

  $onChanges(changes) {
    if (changes.options && this.chart) {
      this._generate();
    }
  }

  $postLink() {
    this._generate();
  }

  $onDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}

angular.module('billboard-ng', [])
  .component('billboard', {
    controller: BillboardController,
    bindings: {
      options: '<',
    }
  });

export default 'billboard-ng';