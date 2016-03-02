import React, {Component} from 'react';
import s from './App.scss';
import Gallery from '../Gallery/Gallery';

class App extends Component {

    render() {
        return <Gallery items={this.props.galleryItems}></Gallery>
    }

}

export default App;
