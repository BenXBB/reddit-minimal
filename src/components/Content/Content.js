import "./Content.css"
import Card from "../Card/Card";
import {useState, useEffect} from "react";

function Content(props) {

    const [homePosts, setHomePosts] = useState([]);
    // const [subreddit, setSubreddit] = useState("popular");

    useEffect(() => {
        fetch("https://www.reddit.com/r/popular.json").then(res => {
            res.json().then(data => {
                setHomePosts(data.data.children);
                console.log(homePosts)
            });
        })
    }, []) // Dependency array to stop the useEffect constantly running


    return (
        <div className="content-container">
            {
                (homePosts != null) ? homePosts.map((article, index) => 
                <Card key={index} article={article.data} />) 
                : 
                "Loading.."
            }
        </div>
    )
}

export default Content;