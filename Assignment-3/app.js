new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function(){
                return this.value === 37 ? 'Equal 37' : 'Is not equal 37' ;
            }
        },
        watch: {
            result : function(){
                var vm = this;
                setTimeout(() => {
                    vm.value = 0;
                }, 3000);
            }
        }, 
    });