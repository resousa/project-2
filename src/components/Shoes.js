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
  createData("BB0001", "basketball", "dunk force", 1263, 1454, 129.99, 47.67),
  createData("BB0002", "basketball", "hyper air", 263, 4552, 169.99, 77.46),
  createData("BB0003", "basketball", "ultra max hi", 11233, 22312, 159.99, 64.68),
  createData("BB0004", "basketball", "ultra max lo", 15246, 21231, 109.99, 42.41),
  createData("BB0005", "basketball", "dunk force 2", 1263, 3212, 129.99, 47.67),
  createData("BB0006", "basketball", "maxx force", 1263, 1123, 129.99, 47.67),
  createData("RU0004", "running shoe", "trex", 2234, 2110, 209.99, 97.99),
  createData("RU0001", "running shoe", "classic", 14263, 42346, 119.99, 42.93),
  createData("RU0008", "running shoe", "SXX 450", 23450, 34286, 129.99, 47.89),
  createData("BO0011", "boot", "steel toe", 763, 1234, 229.99, 97.99),
  createData("BO0006", "boot", "cowboy", 263, 543, 189.99, 99.67),
  createData("SL0004", "slipper", "slip on", 1263, 3452, 49.99, 19.27),
  createData("SL0001", "slipper", "sheepskin", 1263, 2765, 49.99, 19.27),
  createData("DR0004", "dress shoe", "oxford", 723, 826, 169.99, 87.60),
  createData("DR0008", "dress shoe", "derby", 846, 967, 189.99, 102.65)
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
                  <TableCell className='font-weight-bold'>sku</TableCell>
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
                {rows.map(row =>
                  <TableRow key={row.name}>
                    <TableCell component='th' scope='row'>
                      {row.sku}
                    </TableCell>
                    <TableCell align='right'>{row.style}</TableCell>
                    <TableCell align='right'>{row.name}</TableCell>
                    <TableCell align='right'>
                      {row.inventory}
                    </TableCell>
                    <TableCell align='right'>{row.inventorySold}</TableCell>
                    <TableCell align='right'>{row.retailPrice}</TableCell>
                    <TableCell align='right'>{row.cost}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className='row py-3'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header font-weight-bold'>Search</div>
              <div className='card-body'>
                <form className='form-inline pb-3'>
                  <input
                    className='form-control mr-sm-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  ></input>
                </form>

                <a href='#' className='btn btn-primary'>
                  Search
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header font-weight-bold'>Add Vendor</div>
              <div className='card-body'>
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <span
                      className='input-group-text'
                      id='inputGroup-sizing-default'
                    >
                      Name
                    </span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                  ></input>
                </div>
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <span
                      className='input-group-text'
                      id='inputGroup-sizing-default'
                    >
                      Contact
                    </span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                  ></input>
                </div>
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <span
                      className='input-group-text'
                      id='inputGroup-sizing-default'
                    >
                      Address
                    </span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                  ></input>
                </div>
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <span
                      className='input-group-text'
                      id='inputGroup-sizing-default'
                    >
                      Inventory Purchased
                    </span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                  ></input>
                </div>
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <span
                      className='input-group-text'
                      id='inputGroup-sizing-default'
                    >
                      Contract End
                    </span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                  ></input>
                </div>

                <a href='#' className='btn btn-primary'>
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
