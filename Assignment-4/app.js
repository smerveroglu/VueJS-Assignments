new Vue({
  el: '#exercise',
  data: {
    effects: {
      highlight: false,
      shrink: true
    },
    size: true,
    noSize: false,
    user: '',
    style:{
      backgroundColor: 'purple',
      width: '50px',
      height: '50px'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'plum'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effects.highlight = !vm.effects.highlight;
        vm.effects.shrink = !vm.effects.shrink;
      }, 2000);
  },
  startProgress: function() {
    var vm = this;
      var width = 0;
     
    setInterval(function() {
      width = width + 10;
      vm.progressBar.width = width + 'px';
      }, 500);
    }   
}
});
