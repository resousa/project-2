import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Shoes.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(sku, style, name, inventory, inventorySold, retailPrice, cost) {
  return { sku, style, name, inventory, inventorySold, retailPrice, cost };
}

// placeholder Shoes data
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

export default function Shoes() {
  const classes = useStyles();

  return (
    <div className='Shoes'>
      <div className='container'>
        <div className='row py-3'>
          <h1 className='display-4 font-weight-bold'>Shoes</h1>
        </div>
        <div className='row'>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell className='font-weight-bold'>SKU</TableCell>
                  <TableCell className='font-weight-bold' align='right'>
                    Style
                  </TableCell>
                  <TableCell className='font-weight-bold' align='right'>
                    Name
                  </TableCell>
                  <TableCell className='font-weight-bold' align='right'>
                    Inventory
                  </TableCell>
                  <TableCell className='font-weight-bold' align='right'>
                    Inventory Sold
                  </TableCell>
                  <TableCell className='font-weight-bold' align='right'>
                    Retail Price
                  </TableCell>
                  <TableCell className='font-weight-bold' align='right'>
                    Cost
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right'>{row.contact}</TableCell>
                    <TableCell align='right'>{row.address}</TableCell>
                    <TableCell align='right'>
                      {row.inventoryPurchased}
                    </TableCell>
                    <TableCell align='right'>{row.contractEnd}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className='row py-3'>
          <div className='col-md-6'>
            <div class='card'>
              <div class='card-header font-weight-bold'>Search</div>
              <div class='card-body'>
                <form class='form-inline pb-3'>
                  <input
                    class='form-control mr-sm-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  ></input>
                </form>

                <a href='#' class='btn btn-primary'>
                  Search
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div class='card'>
              <div class='card-header font-weight-bold'>Add Vendor</div>
              <div class='card-body'>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <span
                      class='input-group-text'
                      id='inputGroup-sizing-default'
                    >
                      Name
                    </span>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                  ></input>
                </div>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <span
                      class='input-group-text'
                      id='inputGroup-sizing-default'
                    >
                      Contact
                    </span>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                  ></input>
                </div>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <span
                      class='input-group-text'
                      id='inputGroup-sizing-default'
                    >
                      Address
                    </span>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                  ></input>
                </div>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <span
                      class='input-group-text'
                      id='inputGroup-sizing-default'
                    >
                      Inventory Purchased
                    </span>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                  ></input>
                </div>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <span
                      class='input-group-text'
                      id='inputGroup-sizing-default'
                    >
                      Contract End
                    </span>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                  ></input>
                </div>

                <a href='#' class='btn btn-primary'>
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
