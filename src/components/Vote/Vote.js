import React from "react";
import { useState } from "react";
import "./Vote.css";

function Vote(props) {

    const [topVote, setTopVote] = useState({color: "black"}) 
    const [bottomVote, setBottomVote] = useState({color: "black"})
    const [vote, setVote] = useState({color: "black"})

    const [userHasVoted, changeUserHasVoted] = useState(false);

    function upVote() {
        if (userHasVoted === false) {
            setTopVote({color: "green"});
            setVote({color: "green"});
            setBottomVote({color: "black"});
            changeUserHasVoted(true);
        } else if (userHasVoted === true) {
            alert("You have already voted on this post");
        }
    }

    function downVote() {
        if (userHasVoted === false) {
            setTopVote({color: "black"});
            setVote({color: "red"});
            setBottomVote({color: "red"});
            changeUserHasVoted(true);
        } else if (userHasVoted === true) {
            alert("You have already voted on this post")
        }
    }

    return (
        <div className="cardVote">
            <div style={topVote} className="voteArrows" id="voteUp" onClick={upVote}>↑</div>
            <hr />
            <h2 style={vote} id="numberOfVotes">{props.votes}</h2>
            <hr />
            <div style={bottomVote} className="voteArrows" id="voteDown"onClick={downVote}>↓</div> 
        </div>
    )
}

export default Vote;