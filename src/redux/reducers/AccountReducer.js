
const  initialState = () =>{

}

export const AccountReducer = (state = initialState, action) => {

    switch(action.type){
        case 'getData':
            return  action.data
        default:
            return {initialState}
    }
}
