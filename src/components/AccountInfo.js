import React ,{useEffect ,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import  {useDispatch , useSelector}  from 'react-redux';
import  {AccountData}  from '../redux/actions/index'
import { blue } from '@material-ui/core/colors';
import TablePagination from '@material-ui/core/TablePagination';

 
const useStyles = makeStyles({

    table: {
      
      minWidth: 80,
      marginRight: 40,
    },
    tableCell:{
        fontSize: 15,
        border: 0,
    },
    tableTop: {
        marginTop: 50,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 25
    } ,
    rowStatus:{

        // backgroundColor: 'whitesmoke',
        borderRadius: 0.5,
    }
  });





export default function AccountInfo() {

             const classes = useStyles();
              const dispatch = useDispatch();
             useEffect( ()=>{
                axios.get(`http://localhost:5000/AccountDetails`)
                     .then(res => {
                    //    console.log('ax',rows)
                    //    setRows(res.data)
                         dispatch(AccountData(res.data))
                      })
            
            
            } , [])
            
            // const [rows ,setRows] = useState([])

             const   rows = useSelector(state => state)
             const [page, setPage] = React.useState(2);
             const [rowsPerPage, setRowsPerPage] = React.useState(10);
           
             const handleChangePage = (event, newPage) => {
               setPage(newPage);
             };
           
             const handleChangeRowsPerPage = (event) => {
               setRowsPerPage(parseInt(event.target.value, 10));
               setPage(0);
             };
                 
             console.log('store', rows);
                return (
                   
                    <div className={classes.tableTop}>
                    {/* // <Container fixed> */}

                        {/* // <TableContainer className={classes.extra} component={Paper}> */}
                            <Table  style={{width: '80%'}}className={classes.table} aria-label="simple table">
                            <TableHead >
                                <TableRow >
                                <TableCell style={{color: 'blue',paddingRight: '30px',borderBottom: '3px solid whitesmoke'}}className={classes.tableCell} align="center">Account Name</TableCell>
                                <TableCell style={{color: 'blue',borderBottom: '3px solid whitesmoke'}}  className={classes.tableCell}  align="center" >Account Holding</TableCell>
                                <TableCell style={{color: 'blue',borderBottom: '3px solid whitesmoke'}} className={classes.tableCell}  align="center">Type</TableCell>
                                <TableCell style={{color: 'blue',borderBottom: '3px solid whitesmoke'}} className={classes.tableCell}  align="center" >Classification</TableCell>
                                <TableCell style={{color: 'blue',borderBottom: '3px solid whitesmoke'}} className={classes.tableCell}  align="center" >Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.length > 0 && (rows.map((row) => (
                                <TableRow  className={classes.tableRow} key={row.id}>
                                    <TableCell  className={classes.tableCell} align="center" >
                                    {row.AccountName}
                                    <br/>
                                    {row.AccountNature}
                                    <br/>
                                    {row.Advisory}
                                  
                                    </TableCell>
                                    <TableCell className={classes.tableCell}  align="center">{row.AccountHolding}</TableCell>
                                    <TableCell className={classes.tableCell}align="center" >{row.Type}</TableCell>
                                    <TableCell className={classes.tableCell} align="center" >{row.Classification}</TableCell>
                                    <TableCell className={classes.tableCell}   align="center">{row.status}</TableCell>
                                </TableRow>
                                )))}
                             
                                {/* {rows.length} */}
                            </TableBody>
                            </Table>
                        {/* // </TableContainer>
                    // </Container> */}

                 </div>
                );
}
