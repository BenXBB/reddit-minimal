import "./Content.css";
import Card from "../Card/Card";
import CommunityCard from "../CommunityCard/CommunityCard";

function Content(props) {

// Toggle for burger menu
  function toggleTopCommunities() {
    var topCommunities = document.getElementById("topCommunities");
    if (topCommunities.style.display === "flex" && topCommunities.style.visibility === "visible") {
        topCommunities.style.display = "none";
        topCommunities.style.visibility = "hidden";
    } else {
        topCommunities.style.display = "flex";
        topCommunities.style.visibility = "visible";
    }
  }

// Vars for storing the hot, popular and trending icons
  var hotIcon = "https://cdn-icons.flaticon.com/png/512/2319/premium/2319286.png?token=exp=1635969908~hmac=72f5228b0ea4f29aa00a796c7695bb76";
  var activeHot = hotIcon;
  var trendingIcon = "https://cdn-icons.flaticon.com/png/512/1350/premium/1350367.png?token=exp=1635970594~hmac=ccc5df86ef26393139986d53b8f54cbd";
  var activeTrending = trendingIcon;
  var popularIcon = "https://cdn-icons-png.flaticon.com/512/1879/1879440.png";
  var activePopular = popularIcon;


    return (
        <div className="menu-card-content-container">    
            <div id="burgericon">
            <ul className="hot-trending-popular">
            <li className="communityList" onClick={props.getHot}><CommunityCard topic="Hot" icon={activeHot} /></li>
            <li className="communityList" onClick={props.getTrending}><CommunityCard topic="Trending" icon={activeTrending} /></li>
            <li className="communityList" onClick={props.getPopular}><CommunityCard topic="Popular" icon={activePopular} /></li>
            </ul> 
            <br />
                <img onClick={toggleTopCommunities} alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE4LjgzMzMzLDQ3LjA4MzMzdjE4LjgzMzMzaDE4OC4zMzMzM3YtMTguODMzMzN6TTE4LjgzMzMzLDEwMy41ODMzM3YxOC44MzMzM2gxODguMzMzMzN2LTE4LjgzMzMzek0xOC44MzMzMywxNjAuMDgzMzN2MTguODMzMzNoMTg4LjMzMzMzdi0xOC44MzMzM3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>
                <ul id="topCommunities">
                    <li className="communityList" onClick={props.getAskReddit}><CommunityCard topic="r/AskReddit" icon="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png?width=256&s=4e76eadc662b8155a93d4d7487a6d3acb35f4334" /></li>
                    <li className="communityList" onClick={props.getMovies}><CommunityCard topic="r/Movies" icon="https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_oy4mm1w4ron61.jpg?width=256&s=e18c0d65c6b9159c5c34de859861d4a0cb99804d" /></li>
                    <li className="communityList" onClick={props.getGaming}><CommunityCard topic="r/Gaming" icon="https://styles.redditmedia.com/t5_2qh03/styles/communityIcon_1isvxgkk7hw51.png?width=256&s=b2c4017083ea0176a3dd4837f6e009bbc8384f15" /></li>
                    <li className="communityList" onClick={props.getShowerThoughts}><CommunityCard topic="r/ShowerThoughts" icon="https://styles.redditmedia.com/t5_2szyo/styles/communityIcon_o033kp1bgrj71.png?width=256&s=d9cf508e8d75afe155697e25ebfd71d297185367" /></li>
                    <li className="communityList" onClick={props.getGothStyle}><CommunityCard topic="r/GothStyle" icon="https://styles.redditmedia.com/t5_2z786/styles/communityIcon_s8b9dhn4uju41.png?width=256&s=414029aadf786842fd4a5d7e9e72f0af2cab99b1" /></li>
                    <li className="communityList" onClick={props.getCreepyPasta}><CommunityCard topic="r/CreepyPasta" icon="https://styles.redditmedia.com/t5_2rkx4/styles/communityIcon_cmkrbqssv5q51.png?width=256&s=be879f3ec587c9fab8b860511b073e501c97c1fb" /></li>
                    <li className="communityList" onClick={props.get100YearsAgo}><CommunityCard topic="r/100YearsAgo" icon="https://styles.redditmedia.com/t5_2y3jq/styles/communityIcon_nxwcq99r8sg01.png?width=256&s=111c4c6a26cf1e51ab5f6638fb3afec96fa16305" /></li>
                    <li className="communityList" onClick={props.getNature}><CommunityCard topic="r/Nature" icon="https://styles.redditmedia.com/t5_2qh1n/styles/communityIcon_rgndvxpzctv21.png?width=256&s=98855de6c6aef70d80848ac171abaf9f1ddf590f" /></li>
                    <li className="communityList" onClick={props.getTodayILearned}><CommunityCard topic="r/TodayILearned" icon="https://b.thumbs.redditmedia.com/B7IpR8P1mEsQIjdizK5x79s5aGfJUtKk3u2ksGZ9n2Q.png" /></li>
                </ul>
            </div> 
            
                
            <div className="content-container">
                {
                    props.homePosts.map((article, index) => 
                    <Card key={index} article={article.data} />) // mapping posts to individual cards
                }
            </div>
        </div>
    )
}

export default Content;