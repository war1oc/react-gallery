import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
// import s from './Gallery.scss';

class Gallery extends Component {

    constructor(props) {
        super(props);
        // Manually bind this method to the component instance...
        this.renderItems = this.renderItems.bind(this);
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }

    renderItems() {
        return this.props.items.map(function(item) {
            return <GalleryItem key={item.id} {...item}/>;
        });
    }

};

export default Gallery;
