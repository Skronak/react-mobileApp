import React from 'react';

function BoardInspector(props) {
    const {data, nbPlayers} = props;

    return (
        <div>
            <div className={"case-context"}>{data.label}</div>
            <div>Suspects</div>
            <ul className="list-group suspects-scroll">
                {[...Array(+nbPlayers)].map((k, i) => (
                    <div className={"bloc"}>
                        <li key={i} className="list-group-item item">
                            <div>{data.suspects[i].role}</div>
                            <div>{data.suspects[i].context}</div>
                        </li>
                    </div>
                ))}
            </ul>

        </div>

    )

}

export default BoardInspector;
