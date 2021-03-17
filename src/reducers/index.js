import { ADD_FEATURE, REMOVE_FEATURE} from "../actions";



const initialState = {

        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: [
            //   { id: 1, name: 'V-6 engine', price: 1500 }
            ]
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]

}

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        state.additionalFeatures[action.payload - 1] 
                    ]
                },
                additionalPrice: (state.additionalPrice + state.additionalFeatures[action.payload - 1].price)


            };
        case REMOVE_FEATURE:
            const newArr = state.car.features.filter(carFeature => carFeature.id !== action.payload)
            return {
                ...state,
                car: {
                    ...state.car,
                    features: newArr
                },
                additionalPrice: (state.additionalPrice - state.additionalFeatures[action.payload - 1].price)

            }

        default:
            return state;
    }
}