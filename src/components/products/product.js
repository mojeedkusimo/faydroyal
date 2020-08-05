import React from 'react';
import axios from 'axios';

class Products extends React.Component {
    state = {
        photos:[]
    }

    componentDidMount(){
        axios.get('https://quiet-earth-55477.herokuapp.com/api/products').then((res) => {
            console.log(res);
            this.setState({
                photos: res.data
            })
        })
    }

    render () {
        const { photos } = this.state;
        const photoList = photos.length ? (
            photos.map(photos => {
                return (

                    <div className='col-md-3 col-6' key={photos._id}>
                        <img src={photos.url} className='img-responsive w-100' />
                        <p>{photos.title}</p>
                        <p>{photos.price}</p>
                    </div>
                
                )
            })
        ) : (
            <div className='row'>
                <div className='col'>
                <div className='text-center px-3'>No photos yet</div>
                </div>
            </div>
        );

      return (
        <div className='row px-3' >
            {photoList}
        </div>
      )
    }
  }
  
  export default Products;