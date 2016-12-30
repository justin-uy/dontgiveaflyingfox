const React = require('react');

module.exports = (props) => {
  let images = [];

  for (var i = 0; i < props.count; i++) {
    images.push(
      <div key={'gallery-item-' + i} className="image-container">
        <div className="image" />
        <span>image {i}</span>
      </div>
    );
  }

  return (
    <div className="image-gallery">
      {images}
    </div>
  );
};

