import React,{useState} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { blue } from '@material-ui/core/colors';
import  useStyles from './style'
import Pagination from './Pagination'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
export default function TableData({data}) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    };
    return (
        <>
            <div className={classes.PaginationStyle}>{data.length > 0  ? <Pagination  page={page} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} rowsPerPage={rowsPerPage} count={data.length}/> : ''}</div>
            <Table  className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow >
                    <TableCell className={classes.tableCellHead} align="center">Account Name</TableCell>
                    <TableCell className={classes.tableCellHead}  align="center" >Account Holding</TableCell>
                    <TableCell className={classes.tableCellHead}  align="center">Type</TableCell>
                    <TableCell className={classes.tableCellHead}  align="center" >Classification</TableCell>
                    <TableCell className={classes.tableCellHead}  align="center" >Status</TableCell>
                    <TableCell className={classes.tableCellHead}  align="center" ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {   
                        data.length > 0 && data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow  className={classes.tableRow} key={row.id}>
                                    <TableCell  className={classes.tableCell} align="center" >{row.AccountName} <br/>{row.AccountNature}<br/>{row.Advisory}</TableCell>
                                    <TableCell className={classes.tableCell}  align="center">{row.AccountHolding}</TableCell>
                                    <TableCell className={classes.tableCell}align="center" >{row.Type}</TableCell>
                                    <TableCell className={classes.tableCell} align="center" >{row.Classification}</TableCell>
                                    <TableCell className={classes.tableCell}   align="center">{row.status}</TableCell>
                                    <TableCell className={classes.tableCell}   align="center"><ArrowDropDownCircleIcon/></TableCell>
                                </TableRow>
                             ))
                    }
                </TableBody>
            </Table>
        </>    
    )
}
