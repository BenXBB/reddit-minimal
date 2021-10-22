import React from "react";
import "./Card.css";
import Vote from "../Vote/Vote";
import Comments from "../Comments/Comments";

function Card() {

    // function for toggling comments to show or hide
    function toggleComments() {
        var commentSelect = document.getElementById("comments");
        if (commentSelect.style.display === "none" && commentSelect.style.visibility === "hidden") {
            commentSelect.style.display = "block";
            commentSelect.style.visibility = "visible";
        } else {
            commentSelect.style.display = "none";
            commentSelect.style.visibility = "hidden";
        }
    }

    return (
        <div className="card">
            <div className="cardContent">
                <Vote 
                id="vote"
                />
                <div className="cardHeader">
                    <h1 onClick={toggleComments}>Any idea what this dark colored panel is in the left side of the living room</h1>
                    <img alt="example" src="https://i.redd.it/htoh279wubu71.jpg" className="exampleImage" />
                </div>
                <br />
            </div>
            <hr />
            <div className="cardFooter">
                <ul>
                    <li id="originalPoster"><img alt="author" src="https://cdn-icons-png.flaticon.com/512/1375/1375845.png" />BenXP</li>
                    <li id="postAge">5 days ago</li>
                    <li onClick={toggleComments} id="postComments"><img alt="comment" src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" />13</li>
                </ul>
            <div id="comments">
                <Comments />
            </div>
            </div>
        </div>
    )
}

export default Card;