new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods : {
            showAlert : function(){
                alert('ALERT!!');
            },
            changeValue: function(event){
                this.value = event.target.value;
            }
        }
    });