import React from 'react';

function BoardSuspect(props) {
    const {data, idPlayer, isGuilty} = props;
    const role = data.suspects[+idPlayer - 1].role;
    const words = isGuilty ? data.wordsG : data.wordsI;

    return (
        <div>
            <div className={"case-context"}>{data.label}</div>
            <div className="case-role">Role {role}</div>
            <div className={"bloc"}>
                <ul className="list-group">
                    <li className="list-group-item active">Premier Interrogatoire</li>
                    {[0, 1, 2].map(word => (
                        <li key={word} className="list-group-item">{words[word]}</li>
                    ))}
                </ul>
            </div>
            <div className={"bloc"}>
                <ul className="list-group">
                    <li className="list-group-item active">Second Interrogatoire</li>
                    {[3, 4, 5].map(word => (
                        <li key={word} className="list-group-item">{words[word]}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BoardSuspect;
