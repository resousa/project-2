import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Tables(props) {
  return (
    <div className='Tables'>
      <div className='container'>
        <div className='row py-3'>
          <h1 className='display-4 font-weight-bold'>{props.name}</h1>
        </div>
        <div className='row'>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell className='font-weight-bold'>Name</TableCell>
                  <TableCell className='font-weight-bold' align='right'>
                    Contact
                  </TableCell>
                  <TableCell className='font-weight-bold' align='right'>
                    Address
                  </TableCell>
                  <TableCell className='font-weight-bold' align='right'>
                    Inventory Purchased
                  </TableCell>
                  <TableCell className='font-weight-bold' align='right'>
                    Contract End
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
