
const  initialState = []

export const AccountReducer = (state = initialState, action) => {

    switch(action.type){
        case 'FETCH_ALL':
            return  action.payload
        default:
            return {initialState}
    }
}
