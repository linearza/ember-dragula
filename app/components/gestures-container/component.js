import RecognizerMixin from 'ember-gestures/mixins/recognizers';
import Ember from 'ember';

const {
  Component, Logger: { info }, inject: { service }
} = Ember;

export default Component.extend(RecognizerMixin, {

  classNames: ['c_gestures-container'],

  recognizers: 'pan tap press',

  pan() {
    info('gestures-container: PAN');
  },

  tap() {
    info('gestures-container: TAP');
  },

  press() {
    info('gestures-container: PRESS');
  },

  dragula: service(),

  dragulaContainerSelector: '.dragula-container',

  willInsertElement() { 
    // this.set('dragula.options', {});
    // this.get('dragula.containers').pushObjects(this.$('.c_drag-group').get());
    this.get('dragula.containers').pushObjects(this.$('.drag-container').get());

    console.log(this.get('dragula.containers'));

    this.get('dragula').setup();
  },

  willDestroyElement() {
    this.get('dragula').destroy();
  }

});