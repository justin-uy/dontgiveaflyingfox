const React = require('react');

module.exports = (props) => {
  return (
    <div className="image-gallery">
      {[].fill(null, 0, props.count).map((_v, i) =>
        <div key={'gallery-item-' + i} className="image-container">
          <div className="image" />
          <span>image {i}</span>
        </div>
      )}
    </div>
  );
};

