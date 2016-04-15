import Ember from 'ember';

const {
  isEmpty
} = Ember;

export default Ember.Controller.extend({

  dragItems: [
    {
      id: '1',
      title: 'item 1'
    },
    {
      id: '2',
      title: 'item 2'
    },
    {
      id: '3',
      title: 'item 3'
    },
    {
      id: '4',
      title: 'item 4'
    },
    {
      id: '5',
      title: 'item 5'
    },
    {
      id: '6',
      title: 'item 6'
    }
  ],

  oldOrder: [],
  newOrder: [],

  actions: {
    saveNewOrder(order){
      if (isEmpty(this.get('oldOrder'))) {
        this.set('oldOrder', this.get('dragItems').mapBy('id'));
      } else {
        this.set('oldOrder', this.get('newOrder'));
      }
      this.set('newOrder', order);

      console.log('--------------------------------------');
      console.log('oldOrder', this.get('oldOrder'));
      console.log('newOrder', this.get('newOrder'));
      console.log('--------------------------------------');
    }
  }


});
