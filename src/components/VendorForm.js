import React from 'react';
import PropTypes from 'prop-types';

const VendorForm = props => (
  <form>
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Name
        </span>
      </div>
      <input
        type='text'
        className='form-control'
        name='name'
        value={props.name}
        onChange={props.handleChangeText}
      ></input>
    </div>
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Contact
        </span>
      </div>
      <input
        type='text'
        className='form-control'
        name='contact'
        value={props.contact}
        onChange={props.handleChangeText}
      ></input>
    </div>
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Address
        </span>
      </div>
      <input
        type='text'
        className='form-control'
        name='address'
        value={props.address}
        onChange={props.handleChangeText}
      ></input>
    </div>
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Inventory Purchased
        </span>
      </div>
      <input
        type='text'
        className='form-control'
        name='inventoryPurchased'
        value={props.inventoryPurchased}
        onChange={props.handleChangeText}
      ></input>
    </div>
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Contract End
        </span>
      </div>
      <input
        type='text'
        className='form-control'
        name='contractEnd'
        value={props.contractEnd}
        onChange={props.handleChangeText}
      ></input>
    </div>

    <button type='submit' className='btn btn-primary'>
      Add
    </button>
  </form>
);

VendorForm.propTypes = {
    handleChangeText: PropTypes.func.isRequired
};

VendorForm.defaultProps = {
    name: '',
    contact: '',
    address: '',
    inventoryPurchased: '',
    contactEnd: ''
}

export default VendorForm;