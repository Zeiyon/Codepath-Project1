

const Card = ({ imageUrl, description, buttonText }) => {
  return (
    <div className="cardy">
      <img src={imageUrl} className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <button className="card-button" >{buttonText}</button>
      </div>
    </div>
  );
};
  
  export default Card;