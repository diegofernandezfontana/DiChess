import React, { Component } from 'react';

import BoardContainer from '../containers/Board/BoardContainer'

class Main extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                    <BoardContainer/>
            </div>
        );
    }
}

export default Main;