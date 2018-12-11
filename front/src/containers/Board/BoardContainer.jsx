import React from 'react'

import Board from '../../components/Board'

class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    createTable = () => {
        let table = [];
        let boardWidth = 8;
        let boardHeight = 8;
         
        for (let i = 0; i < boardWidth; i++) {
            for( let j = 0; j < boardHeight; j++){
                console.log( i, j);
            }
        }
        return table;
    }
    

    render() {
        return (
            <React.Fragment> 
                <h1>Este es el body</h1>
                <Board createTable={this.createTable}/>
            </React.Fragment>
        )
    }
}

export default BoardContainer;