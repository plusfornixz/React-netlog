import React, { Component } from 'react';
import './Appheader.css';

class Appheader extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

                    <nav className="navbar navbar-expand-lg navbar-light bg-pink shadow-lg">
                        <a className="navbar-brand" href="#">
                         <img src="./logo.png"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-ta-rget="#navbarNav" aria-controls="navbarNav"
                             aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarNav">
                           <ul className="navbar-nav">
                             <li className="nav-item active">
                               <a className="nav-link" href="#">Home</a>
                             </li>
                             <li className="nav-item">
                              <a className="nav-link" href="#">About</a>
                             </li>
                             <li className="nav-item">
                              <a className="nav-link" href="#">Help</a>
                            </li>
                         </ul>
                        </div>
                    </nav>
             </div>

            
         );
    }
}
 
export default Appheader;