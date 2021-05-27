import {FETCH_ALL} from '../constants/actionTypes'
import {fetchdata} from '../Api/index'

export const  getData =() => async (dispatch) => {
   try{  
    const {data} =  await fetchdata()
     console.log('data in action', data)
    dispatch({ payload: data, type: FETCH_ALL})
   }
    catch(error){
        console.log(error.log)
    }
}