var forgotPassword = new Vue({
    el: '#forgot-password',
    delimiters: ['${', '}'],
    data:{
        alert: null,
        error: null,
        user: {
            email: ''
        }
    },
    methods: {
        sendResetLink: function(e){
            var me = this;
            axios.post(e.target.action,this.user).then(function (res) {
                console.log(res);
                me.error = null;
                me.alert = "success! check your email for instructions";
            })
            .catch(function (error) {
                if (error.response){
                    me.alert = null;
                    me.error = error.response.data.error; 
                }
            });
        },
        clearNotification: function(){
            this.error = null;
            this.alert = null;
        }
    }
});