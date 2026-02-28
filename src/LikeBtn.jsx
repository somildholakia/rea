import { useState } from "react";

export default function Like(){

    let [isLiked,setIsLiked] = useState(false)

    let ChangeLike = () => {
        setIsLiked(!isLiked);

    }


    return (
        <div>
            <p onClick={ChangeLike}>
                {
                    isLiked ? <i className="fa-solid fa-heart" style={{color: "rgb(244, 81, 238)",fontSize:60}}></i> : <i className="fa-regular fa-heart" style={{color: "rgb(252, 149, 89)",fontSize:60}}></i>
                }
            </p>
        </div>
    );
}