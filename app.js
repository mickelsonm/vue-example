function getApiURL(endpoint) {
  return "http://goapi.curtmfg.com/" + endpoint +
    "?key=883d4046-8b96-11e4-9475-42010af00d4e";
}

var app = new Vue({
  el: '#app',
  data: {
    states: [],
    countries: []
  },
  methods: {
    getStates: function() {
      this.$http.get(getApiURL('geography/states')).then(function(resp) {
        console.log(resp.body);
        this.states = resp.body;
      }, function(err) {
        console.log(err);
      });
    },
    getCountries: function() {
      this.$http.get(getApiURL('geography/countries')).then(function(resp) {
        console.log(resp.body);
        this.countries = resp.body;
      }, function(err) {
        console.log(err);
      });
    }
  },
  mounted: function() {
    this.getStates();
    this.getCountries();
  }
});

app.$mount('#app');
