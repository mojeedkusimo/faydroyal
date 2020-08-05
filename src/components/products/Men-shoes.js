import React from 'react';
import Products from './product'
class MenShoes extends React.Component {
    render () {
      return (
        <div className='container-fluid px-5 bg-danger'>
          <h1 className='text-center p-3'>E-commerce app</h1>
          <div className='row px-5'>
            <div className='col-12  text-danger bg-white shadow'>
                <p className='pt-3 text-left h4 px-3'>Men Shoes</p>
                <div className='dropdown-divider'></div>
                <div className='text-danger  text-left p-3'>9 products found</div>
                <Products/>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default MenShoes;