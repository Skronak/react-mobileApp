import React from 'react';

function Board(props) {

    return (
        <div className={'front'}>
            <div className="date-label">{props.data.date}</div>
            <div>{props.label}</div>
            {props.children}
        </div>
    );
}

export default Board;
