import React, { Component } from 'react' ;
import './Netlog.css';
import './Components/Appheader';
import Appheader from './Components/Appheader';

class Netlog extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Appheader />
                <h1>Netlog Application</h1>
                <h3>Created by Borpuay</h3>
                
            </div>
         );
    }
}
 
export default Netlog;