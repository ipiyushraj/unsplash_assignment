import React, { useState } from 'react';

function Like(props) {
    const [liked, setLiked] = useState(0)

    const incrementMe = () => {
        setLiked(!liked)
    }

    return (
        <div className="likeButton">
            <button id={props.itemId} onClick={() => incrementMe()}> Like: {props.item.likes + liked} </button>
        </div>
    )
}

export default Like;