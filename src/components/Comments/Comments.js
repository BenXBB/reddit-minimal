import React from "react";
import "./Comments.css";

function Comments(props) {

    return (
        <div className="comments">
            <ul>
                <li className="commentPoster"><h3>Noobkiller3000</h3></li>
                <li className="commentPostDate"><h4>3 days ago</h4></li>
            </ul>
            <p>It’s iron. I assume you have a well? Have your water tested 
                to see how high the levels are to see what types of treatment you need. 
                With that type of staining, I honestly doubt anything will remove it. 
                Pretty harmless at this point though
            </p>
        </div>
    )
}

export default Comments;