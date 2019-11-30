var config = {
	mapbox: {
		mapId: 'arolek.i19ncdmc',
		token: 'pk.eyJ1IjoiYXJvbGVrIiwiYSI6ImNqeDQ1MzdoZDA2NmczempxaTI1anZ3NnoifQ.YWBiMYCELkzKR11kIle5bQ'
	},
	resourceTypes:{
		parcel: 1
	},
	atlas:{
		satelliteMap: 'https://styles.scoutred.com/v1/scoutred-satellite.json',
		vectorMap: 'https://styles.scoutred.com/v1/scoutred.json'
	},
	urls: {
		cards: '/api/stripe/cards',
		charges: '/api/charges',
		customers:{
			acceptInvite: '/api/customers/accept-invite',
			inviteUser: '/api/customers/:cid/invites',
			deleteUser: '/api/customers/:cid/users/:uid',
			deleteInvite: '/api/customers/:cid/invites/:id'
		},
		login: '/api/login',
		products: '/api/products',
		subscriptions: '/api/subscriptions',
		users: {
			updateEmail: '/api/users/:uid/email',
			forgotPasswordSend: '/api/users/forgot-password/send'
		}
	}
};