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
  }
  
});