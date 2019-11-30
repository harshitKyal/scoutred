var topNav = new Vue({
	el: '#top-nav',
	data:{
		showMenu: false
	},
	methods: {
		toggleShowMenu: function(){
			this.showMenu = !this.showMenu;
		}
	}
});