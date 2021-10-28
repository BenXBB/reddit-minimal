import "./Content.css"
import Card from "../Card/Card";

function Content(props) {

    return (
        <div className="content-container">
            {
                props.homePosts.map((article, index) => 
                <Card key={index} article={article.data} />) // mapping posts to individual cards
            }
        </div>
    )
}

export default Content;