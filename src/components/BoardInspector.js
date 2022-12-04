import React from 'react';

function BoardInspector(props) {
    const {data, nbPlayers} = props;

    return (
        <div>
            <div className="Date">{data.date}</div>
            <p>Vous etes l'enqueteur</p>
            <div>{data.label}</div>
            <div>Suspects</div>
            <ul className="list-group">
                {/*//attention si ca depasse liste*/}
                {[...Array(+nbPlayers)].map((k, i) => (
                    <li key={i} className="list-group-item item">
                        <div>{data.suspects[i].role}</div>
                        <div>{data.suspects[i].context}</div>
                    </li>
                ))};
            </ul>

        </div>

    )

}

export default BoardInspector;