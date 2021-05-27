import React ,{useEffect ,useState} from 'react'
import axios from 'axios';
import  {useDispatch , useSelector}  from 'react-redux';
import  {getData}  from '../redux/actions/AccountAction';
import  TableData from './TableData';
import  useStyles from './style'


export default function AccountInfo() {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect( ()=>{
         dispatch(getData())
        } , [])
    
    const   data = useSelector(state => state.Accountdata)
    // console.log('selector',data)
    return (
        <div >
            <TableData data={data}/>
        </div>
    );
}
