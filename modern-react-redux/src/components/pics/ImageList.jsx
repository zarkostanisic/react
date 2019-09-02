import React from 'react';

class ImageList extends React.Component{
  render(){
    const images = this.props.images.map(({description, id, urls}) => {
      return <img alt={description} key={id} src={urls.small}/>
    });

    return <div>
      {images}
    </div>
  }
}

export default ImageList;
