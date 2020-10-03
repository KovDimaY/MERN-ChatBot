import React from 'react';
import PropTypes from 'prop-types';

import CardItem from '../Common/CardItem';

import './styles.css';

/**
 * This component is used as one of the types of messages of the Bot.
 * It is a set of multiple CardsItems joined together in one component.
 * Every card has a nice layout with an image, title and description and
 * it can represent a list of some similar items (projects, experiences, etc).
 */
const Cards = ({ data }) => {
  if (data && data.value && data.value.length) {
    return (
      <div className="cards-containter">
        <div
          className="cards-scrollable-wrapper"
          style={{ width: 220 * data.value.length }}
        >
          {data.value.map(item => (
            <CardItem
              title={item.title}
              image={item.image}
              description={item.description}
              link={item.link}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
  return <span className="red-text">Oops, something went wrong... :(</span>;
};

Cards.propTypes = {
  /** This prop contains all the data about the card, including image, title and description. */
  data: PropTypes.object.isRequired,
};

export default Cards;
