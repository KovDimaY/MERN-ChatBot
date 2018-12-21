import React from 'react';
import PropTypes from 'prop-types';

const EmptyView = ({ section, description }) => {
  if (description) {
    return <div className="empty-view-container">{description}</div>;
  }

  return (
    <div className="empty-view-container">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed sit amet elit ut diam fermentum mollis. In in risus nunc.
      Donec tincidunt vulputate euismod. Ut non eros eros.
      Mauris accumsan ligula a elit pretium, vitae placerat eros vulputate.
      Nulla nulla ipsum, pellentesque ac malesuada sit amet, varius eget nisi.
      Nunc dictum tempor condimentum. Vestibulum consequat porttitor massa sodales varius.
      Donec placerat elementum turpis eget hendrerit. Integer et hendrerit libero,
      in commodo arcu. Duis ac turpis sapien. Nullam blandit eu sapien in pharetra.
      Mauris vestibulum nisl pulvinar eros suscipit ultricies. Curabitur a pretium arcu.
      Nullam sapien magna, consequat sed magna at, gravida pellentesque risus.
      Quisque vestibulum tortor eu risus elementum luctus.
    </div>
  );
};

EmptyView.propTypes = {
  section: PropTypes.string,
  description: PropTypes.string,
};

EmptyView.defaultProps = {
  section: 'this section',
  description: '',
};

export default EmptyView;
