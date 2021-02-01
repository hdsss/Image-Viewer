import React, {Component} from 'react';
import Header from '../../common/header/Header';

class Home extends Component {
    render(){
        return(<div>
            <Header showSearch="true"/>
            This is Home Page
        </div>)
    }
}
export default Home;