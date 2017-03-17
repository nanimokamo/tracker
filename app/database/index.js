import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBrg9QV5g7qqSNgBa_LYHsl1ss1enpAEeA",
  authDomain: "track-dfe62.firebaseapp.com",
  databaseURL: "https://track-dfe62.firebaseio.com",
  storageBucket: "track-dfe62.appspot.com",
  messagingSenderId: "460164743927"
};

firebase.initializeApp(config);

export const database = firebase.database();

export const set = (location: string, data: object) => database.ref(location).set(data);

export const get = (location: string): Promise<object> => new Promise((resolve, reject) => {
	database.ref(location).once('value').then((data) => resolve(data.val()));
});

export const push = (location: string, data: object): Promise<object> =>
	new Promise((resolve, reject) => {
		const ref = database.ref(location).push();
		ref.set(data, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve({
					id: ref.key,
					...data,
				});
			}
		})
	});

export const listen = (location, cb) => {
	const ref = database.ref(location);
	let subscriptions = [
		ref.on('value', (data) => {
			cb.call(undefined, 'VALUE', { [data.key]: data.val() });
		}),

		// ref.limitToFirst(1).on('child_added', (data) => {
		// 	cb.call(undefined, 'CHILD_ADDED', { [data.key]: data.val() });
		// }),

		// ref.on('child_changed', (data) => {
		// 	cb.call(undefined, 'CHILD_CHANGED', { [data.key]: data.val() });
		// }),

		// ref.on('child_removed', (data) => {
		// 	cb.call(undefined, 'CHILD_REMOVED', { [data.key]: data.val() });
		// }),
	];

	return {
		stop() {
			subscriptions.forEach(item => item());
			subscriptions = [];
		},
	};
};
