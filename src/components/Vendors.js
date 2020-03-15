import React, { Component } from 'react';
import 'whatwg-fetch';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Vendors.css';
import VendorForm from './VendorForm';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, contact, address, inventoryPurchased, contractEnd) {
  return { name, contact, address, inventoryPurchased, contractEnd };
}

const rows = [
  createData(`Frozen yoghurt`, 159, 6.0, 24, 4.0),
  createData(`Ice cream sandwich`, 237, 9.0, 37, 4.3),
  createData(`Eclair`, 262, 16.0, 24, 6.0),
  createData(`Cupcake`, 305, 3.7, 67, 4.3),
  createData(`Gingerbread`, 356, 16.0, 49, 3.9)
];

class Vendors extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
      name: '',
      contact: '',
      address: '',
      inventoryPurchased: '',
      contractEnd: ''
    };
  }

  componentDidMount() {
    this.callApi().then(res => this.setState({ response: res.express })).catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/vendors');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  addVendor = e => {
    e.preventDefault();
    const {
      name,
      contact,
      address,
      inventoryPurchased,
      contractEnd
    } = this.state;
    if (!name || !contact || !address || !inventoryPurchased || !contractEnd)
      return;
    fetch('/api/vendors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        contact,
        address,
        inventoryPurchased,
        contractEnd
      })
    })
      .then(res => res.json())
      .then(res => {
        if (!res.success)
          this.setState({ error: res.error.message || res.error });
        else
          this.setState({
            name: '',
            contact: '',
            address: '',
            inventoryPurchased: '',
            contractEnd: ''
          });
      });
  };

  render() {
    const classes = useStyles();

    return (
      <div className='Vendors'>
        <div className='container'>
          <div className='row py-3'>
            <h1 className='display-4 font-weight-bold'>Vendors</h1>
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
                <VendorForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default new Vendors();
