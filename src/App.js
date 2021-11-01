import "./App.css";
import Content from "./components/Content/Content";
import { useState, useEffect } from "react";

function App() {

  const [homePosts, setHomePosts] = useState([]);
  const [subreddit, setSubreddit] = useState("popular");

  useEffect(() => {
      fetch("https://www.reddit.com/r/" + subreddit + ".json").then(res => {
          res.json().then(data => {
              setHomePosts(data.data.children);
              console.log(homePosts) // Used to map the API to components
          });
      }) // eslint-disable-next-line
  }, [subreddit]) // Dependency array

  function getUserSearchQuery() {
    setSubreddit(document.getElementById("searchField").value);
  }

  function keyDownSearchQuery(event) {
    if (event.key === "Enter") {
      return setSubreddit(document.getElementById("searchField").value);
    } 
  }

  function getAskReddit() {
    return setSubreddit("AskReddit");
  }
  function getMovies() {
    return setSubreddit("Movies");
  }
  function getGaming() {
    return setSubreddit("Gaming");
  }
  function getShowerThoughts() {
    return setSubreddit("ShowerThoughts");
  }
  function getGothStyle() {
    return setSubreddit("GothStyle");
  }
  function getCreepyPasta() {
    return setSubreddit("CreepyPasta");
  }
  function get100YearsAgo() {
    return setSubreddit("100YearsAgo");
  }
  function getNature() {
    return setSubreddit("Nature");
  }
  function getTodayILearned() {
    return setSubreddit("TodayILearned");
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

      <Content 
      homePosts={homePosts} 
      getAskReddit={getAskReddit}
      getMovies={getMovies}
      getGaming={getGaming}
      getShowerThoughts={getShowerThoughts}
      getGothStyle={getGothStyle}
      getCreepyPasta={getCreepyPasta}
      get100YearsAgo={get100YearsAgo}
      getNature={getNature}
      getTodayILearned={getTodayILearned}
      />
    </div>
  );
}

export default App;

