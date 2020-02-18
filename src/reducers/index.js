export const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image:
			'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: []
	},
	additionalFeatures: [
		{ id: 1, name: 'V-6 engine', price: 1500 },
		{ id: 2, name: 'Racing detail package', price: 1500 },
		{ id: 3, name: 'Premium sound system', price: 500 },
		{ id: 4, name: 'Rear spoiler', price: 250 }
	]
};

export const featureReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_FEATURE':
			// find clicked feature
			const addedFeature = state.additionalFeatures.find(
				item => item.id === action.payload
			);

			return {
				...state,
				// first, adjust additional price of features
				additionalPrice: (state.additionalPrice += addedFeature.price),

				// then, add feature into car.features state
				car: {
					...state.car,
					features: [...state.car.features, addedFeature]
				},
				// last, remove feature from additionalFeatures state
				additionalFeatures: state.additionalFeatures.filter(
					item => item.id !== action.payload
				)
			};

		case 'REMOVE_FEATURE':
			// find clicked feature
			const removedFeature = state.car.features.find(
				item => item.id === action.payload
			);
			console.log(removedFeature);

			return {
				...state,
				// first, subtract feature price from additional price
				additionalPrice: (state.additionalPrice -= removedFeature.price),

				// then, remove feature from car.features state
				car: {
					...state.car,
					features: state.car.features.filter(
						item => item.id !== action.payload
					)
				},
				// last, add feature back to additionalFeatures state
				additionalFeatures: [...state.additionalFeatures, removedFeature]
			};
		default:
			return state;
	}
};
