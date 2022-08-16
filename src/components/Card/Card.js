import React from "react";
import "./Card.css";
import Vote from "../Vote/Vote";
import Comments from "../Comments/Comments";

function Card(props) {
    
    // vars for the creation date of the post
    var hours = Math.floor(props.article.created % 86400 / 3600);
    var minutes = Math.floor(props.article.created % 3600 / 60);

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
    // var for link to post when user clicks heading
    var linkToRedditURL = "https://www.reddit.com/" + props.article.permalink;

    // Shortened string title
    var shortenedTitle = props.article.title.substring(0, 120);


    return (
        <div className="card">          
            <div className="cardContent">
                <Vote 
                id="vote"
                votes={props.article.ups}
                />  
                <div className="cardHeader">
                    <div className="cardSubreddit">r/{props.article.subreddit}</div>
                    <a href={linkToRedditURL} rel="noreferrer" target="_blank"><h1>{shortenedTitle}</h1><span>...more</span></a>
                    <p id="articleSelfText">{props.article.selftext}</p>
                    {((props.article.thumbnail === "self") ? // ternary operator that detects if thumbnail is included
                    ""
                    : 
                    <img 
                    alt={"..."} 
                    src={props.article.thumbnail} 
                    className="exampleImage" 
                    />)}
                </div>
            </div>
            <hr />
            <div className="cardFooter">
                <ul>
                    <li id="originalPoster"><img alt="author" src="https://cdn-icons-png.flaticon.com/512/1375/1375845.png" />{props.article.author}</li>
                    
                    <li id="postAge">
                        {((hours === 0) ? minutes + " minutes ago" : hours + " hours ago")} 
                    </li>

                    <li onClick={toggleComments} id="postComments"><img alt="comment" src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" />{props.article.num_comments}</li>
                </ul>
            <div id="comments">
                <Comments />
            </div>
            </div>
        </div>
    )
}

export default Card;