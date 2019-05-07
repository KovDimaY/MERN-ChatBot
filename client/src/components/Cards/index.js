import React from 'react';
import PropTypes from 'prop-types';

import CardItem from './CardItem';

import './styles.css';

/**
 * General component description in JSDoc format. Markdown is **supported**.
 */
const Cards = ({ data }) => {
  if (data && data.value && data.value.length) {
    return (
      <div className="cards-containter">
        <div style={{ width: 220 * data.value.length }}>
          {
            data.value.map(item => (
              <CardItem
                title={item.title}
                image={item.image}
                description={item.description}
                link={item.link}
                key={item.id}
              />
            ))
          }
        </div>
      </div>
    );
  }
  return <span className="red-text">Oops, something went wrong... :(</span>;
};

Cards.propTypes = {
  /** Description of prop "data". */
  data: PropTypes.object.isRequired,
};

export default Cards;
