var auth = new Vue({
    el: '#auth',
    delimiters: ['${', '}'],
    data:{
        alert: null,
        error: null,
        user: {
            email: '',
            password: ''
        }
    },
    methods: {
        auth: function(e){
            var me = this;
            axios.post(e.target.action,this.user).then(function (res) {
                //  set a cookie
                if(res.data.token) {
                    // cookie lives for 365 days
                    Cookies.set('scout',res.data.token, {expires:365});
                }

                var urlVars = me.getUrlVars();
                //  if we have a redirect GET var redirec the user there
                if (urlVars["redirect"]){
                    window.location = decodeURIComponent(urlVars["redirect"]);
                } else {
                    //  route to maps
                    window.location = "/maps";
                }
            })
            .catch(function (error) {
                if (error.response){
                    me.error = error.response.data.error;
                }
            });
        },

        // getUrlVars will read the query string params from the URL and return 
        // an object of key value pairs
        getUrlVars: function(){
            var vars = {};
         
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                vars[key] = value;
            });
         
            return vars;
        },

        clearNotification: function(){
            this.error = null;
            this.alert = null;
        }
    }
});