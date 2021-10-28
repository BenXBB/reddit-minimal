import "./App.css"
import Content from "./components/Content/Content";
import { useState, useEffect } from "react";


function App() {

  const [homePosts, setHomePosts] = useState([]);
  const [subreddit, setSubreddit] = useState("popular");

  useEffect(() => {
      fetch("https://www.reddit.com/r/" + subreddit + ".json").then(res => {
          res.json().then(data => {
              setHomePosts(data.data.children);
              // console.log(homePosts) Used to map the API to components
          });
      }) 
  }, [subreddit]) // Dependency array

  function getUserSearchQuery() {
    setSubreddit(document.getElementById("searchField").value);
  }

  function keyDownSearchQuery(event) {
    if (event.key === "Enter") {
      return setSubreddit(document.getElementById("searchField").value);
    }
  }

  return (
    <div className="App">

      
      <div className="header">
            <img alt="reddit icon" src="https://cdn-icons-png.flaticon.com/512/52/52053.png" />
            REDDIT<span>Minimal</span>
            <form>
                <input id="searchField" type="text" placeholder="Search Reddit" onKeyDown={keyDownSearchQuery} />
                <button type="button" onClick={getUserSearchQuery}>
                    <img id="searchButton" alt="search button" src="https://cdn-icons-png.flaticon.com/512/622/622669.png" />
                </button>
            </form>
      </div>
      <span id="breadcrumbs">r/{subreddit}</span>

      <Content homePosts={homePosts} />
    </div>
  );
}

export default App;
