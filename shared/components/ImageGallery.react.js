const React = require('react');

module.exports = (props) => {
  return (
    <div className="image-gallery">
      (new Array(props.count)).map((_v, i) =>
        <div key={'gallery-item-' + i} className="image-container">
          <div className="image" />
          <span>image {i}</span>
        </div>
      )}
    </div>
  );
};

