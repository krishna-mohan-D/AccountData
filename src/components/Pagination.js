import React ,{useState} from 'react'
import TablePagination from '@material-ui/core/TablePagination';

export default function Pagination({count,page,rowsPerPage,handleChangePage,handleChangeRowsPerPage}) {
    return (
               <TablePagination
                    rowsPerPageOptions={[1, 2, 5,10]}
                    component="div"
                    count={count}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
    )
}



