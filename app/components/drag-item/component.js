import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  
  classNames: ['c_drag-item'],
  
  attributeBindings: ['data-draggable', 'data-handle', 'sort-id'],
  'data-draggable': true,
  'data-handle': 'handle'

});
