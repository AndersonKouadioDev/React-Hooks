import React from "react";
import PropTypes from 'prop-types';

const MovieCard = (props) => {

  const {title,description,posterURL,rate} = props;

  // Styles
  const styleCard = { width: '18rem',position:"relative",display:"inline-block", marginLeft:20};
  const styleTitle = { color:'red', fontWeight:800, fontSize:25};
  const styleUrl = { color:'red'};
  const styleHide={background:'red', color:'white'};
  const styleStar={width:16,display:"inline"};
  const styleRating={position:"absolute",bottom:"20px",right:"10px"};

  // Variables
  let rating = [];
  // add star
  for(let i = 0; i < rate; i++){
    rating .push(<img src="img/element/star.png" className="card-img-top" alt="star" style={styleStar} key={i}/>);
  }
  return (
      <div className="card" style={styleCard}>
          <img src="img/background/netflix.png" className="card-img-top" alt="netflix"/>
          <div className="card-body">
            <h5 className="card-title" style={styleTitle}>
              {title}
              <span className="rating" style={styleRating}>
                {rating}
              </span></h5>
            <p className="card-text">
              {description}
              <div><b>Voir Plus : <a href="#" style={styleUrl}>{posterURL}</a></b></div>
            </p>
            <button type="button" className="btn"  style={styleHide} onClick={(e)=>e.target.parentNode.parentNode.classList.add('d-none')}>Masquer</button>
          </div>
      </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterURL: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
}

export default MovieCard;