import React from 'react';

function BoardSuspect(props) {
    const {data, idPlayer, isGuilty} = props;
    const role = +idPlayer > (data.suspects.length) ? `${data.suspects[data.suspects.length - 1]} - ${+idPlayer + 1 - +data.suspects.length}` : data.suspects[+idPlayer - 1];
    const words = isGuilty ? data.wordsG : data.wordsI;

    return (
        <div>
            <div className="Date">{data.date}</div>
            <div>{data.label}</div>

            {isGuilty && (
                <div>Shhht, vous etes le coupable !</div>
            )}
            <div className="role">Role {role.role}</div>
            <ul className="list-group">
                <li className="list-group-item active">Premier Interrogatoire</li>
                {[0, 1, 2].map(word => (
                    <li key={word} className="list-group-item">{words[word]}</li>
                ))}
            </ul>
            <ul className="list-group">
                <li className="list-group-item active">Second Interrogatoire</li>
                {[3, 4, 5].map(word => (
                    <li key={word} className="list-group-item">{words[word]}</li>
                ))}
            </ul>
            <div className="board-words-2"/>
        </div>
    );
}

export default BoardSuspect;
