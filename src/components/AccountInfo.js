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
 
const useStyles = makeStyles({

    table: {
      minWidth: 650,
      
    },
    tableCell:{
        fontSize: 20,
    },
    extra: {
        marginTop: 50,
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
                 
             console.log('store', rows);
                return (
                    // <div>
                    <Container fixed>

                        <TableContainer className={classes.extra} component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                            <TableHead >
                                <TableRow >
                                <TableCell style={{color: 'blue'}}className={classes.tableCell}>Account Name</TableCell>
                                <TableCell style={{color: 'blue'}}  className={classes.tableCell} align="right">Account Holding</TableCell>
                                <TableCell style={{color: 'blue'}} className={classes.tableCell} align="right">Type</TableCell>
                                <TableCell style={{color: 'blue'}} className={classes.tableCell} align="right">classification</TableCell>
                                <TableCell style={{color: 'blue'}} className={classes.tableCell} align="right">status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.length > 0 && (rows.map((row) => (
                                <TableRow  className={classes.tableRow} key={row.id}>
                                    <TableCell  className={classes.tableCell} component="th" scope="row">
                                    {row.AccountName}
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="right">{row.AccountHolding}</TableCell>
                                    <TableCell className={classes.tableCell} align="right">{row.Type}</TableCell>
                                    <TableCell className={classes.tableCell} align="right">{row.Classification}</TableCell>
                                    <TableCell className={classes.tableCell}     align="right">{row.status}</TableCell>
                                </TableRow>
                                )))}
                             
                                {/* {rows.length} */}
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>

                // </div>
                );
}
