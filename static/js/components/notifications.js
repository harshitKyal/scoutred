Vue.component('notification',{
	props:{
		alert: String,
		error: [String, Object]
	},
	computed: {
		message: function(){
			// alerts are simple
			if (this.alert){
				return this.alert;
			}

			// errors or overloaded. need to clean this up and only pass in messages
			if(!this.error){
				return '';
			}
			if(!this.error.response){
				return this.error;
			}

			// convenience for displaying http errors
			switch (this.error.response.status){
				case 404:
					return 'not found';
				break;
				case 500:
					return 'internal server error';
				break;
				default:
					return this.error.response.data.error;
				break;
			}
		}
	},
	watch: {
		// close the alert after 5 seconds
		alert: function(newVal, oldVal){
			var me = this;
			setTimeout(function(){
				me.close();
			}, 5000);
		},

		error: function(newVal, oldVal){
			var me = this;
			setTimeout(function(){
				me.close();
			}, 5000);			
		}
	},
	methods: {
		close: function(e){
			this.$emit('close');
		},
	}
});