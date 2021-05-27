import { makeStyles } from '@material-ui/core/styles';
import Pagination from './Pagination';

export default  makeStyles({

    table: {
       minWidth: 80,
      marginRight: 40,
      backgroundColor: 'white',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    tableCellHead:{
        fontSize: 15,
        border: 0,
        color: 'blue',
        borderBottom: '3px solid whitesmoke',
        paddingRight: '30px',

    },
    tableCell:{
        fontSize: 15,
        border: 0,
    },
  
    PaginationStyle: {
        marginTop: 10,

    }
  });

