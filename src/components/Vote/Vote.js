import React from "react";
import { useState } from "react";
import "./Vote.css";

function Vote() {

    const [vote, changeVote] = useState(0);
    const [userHasVoted, changeUserHasVoted] = useState(false);

    function upVote() {
        if (userHasVoted === false) {
            changeVote(vote+1);
            document.getElementById("voteUp").style.color = "green";
            document.getElementById("numberOfVotes").style.color = "green";
            document.getElementById("voteDown").style.color = "black";
            changeUserHasVoted(true);
        } else if (userHasVoted === true) {
            alert("You have already voted on this post");
        }
    }

    function downVote() {
        if (userHasVoted === false) {
            changeVote(vote-1);
            document.getElementById("voteDown").style.color = "red";
            document.getElementById("numberOfVotes").style.color = "red";
            document.getElementById("voteUp").style.color = "black";
            changeUserHasVoted(true);
        } else if (userHasVoted === true) {
            alert("You have already voted on this post")
        }
    }

    return (
        <div className="cardVote">
            <div className="voteArrows" id="voteUp" onClick={upVote}>↑</div>
            <hr />
            <h2 id="numberOfVotes">{vote}</h2>
            <hr />
            <div className="voteArrows" id="voteDown" onClick={downVote}>↓</div> 
        </div>
    )
}

export default Vote;