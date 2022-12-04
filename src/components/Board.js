import React from 'react';

function Board(props) {

    return (
        <div>
            <div className="date">{props.date}</div>
            <div>{props.label}</div>
            {props.children}
        </div>
    );
}

export default Board;
