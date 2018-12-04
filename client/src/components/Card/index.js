import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  console.log("data from card", data);

  return (
    <div className="card-containter">
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="https://www.thehertfordshiregardencentre.com/files/images/news/picture-an-oak-1534331433-1534331463_n.jpg" alt="card-pic" />
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="/">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
