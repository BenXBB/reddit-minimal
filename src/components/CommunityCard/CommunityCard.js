import "./CommunityCard.css"

function CommunityCard(props) {


  return (
    <div className="CommunityCard">
        <img alt={props.CommunityCard} className="icon" src={props.icon} />
        {props.topic}
    </div>
  );
}

export default CommunityCard;
