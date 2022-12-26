import React from 'react';

function BoardInspector(props) {
    const {data, nbPlayers} = props;

    return (
        <div>
            <div className={"case-context"}>{data.label}</div>
            <div className={'case-role'}>{nbPlayers} Suspects</div>
            <ul className="suspects-scroll">
                {[...Array(+nbPlayers)].map((k, i) => (
                    <div className={"suspects-bloc"}>
                        <li key={i} className="list-group-item item">
                            <div className={'suspects-role'}>{data.suspects[i].role}</div>
                            <div>{data.suspects[i].context}</div>
                        </li>
                    </div>
                ))}
            </ul>

        </div>

    )

}

export default BoardInspector;
