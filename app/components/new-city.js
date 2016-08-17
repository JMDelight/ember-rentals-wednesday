import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },

    saveCity1(){
      var params = {
        name: this.get('addCity'),
        country: this.get('country'),
      };
      this.set('addNewCity', false);
      this.sendAction('saveCity2', params);
    }
  }
});
