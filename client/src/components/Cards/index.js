import React from 'react';
import PropTypes from 'prop-types';

import Card from './CardItem';

import './styles.css';

const Cards = ({ data }) => {
  if (data && data.value && data.value.length) {
    return (
      <div className="cards-containter">
        <div style={{ width: 220 * data.value.length }}>
          {data.value.map(item => <Card data={item} key={item.id} />)}
        </div>
      </div>
    );
  }
  return <span className="red-text">Oops, something went wrong... :(</span>;
};

Cards.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Cards;
