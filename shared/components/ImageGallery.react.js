const React = require('react');

module.exports = (props) => {
  return (
    <div class="image-gallery">
      {[].fill(null, 0, props.count).map((_v, i) =>
        <div key={'gallery-item-' + i} class="image-container">
          <div class="image" />
          <span>image {i}</span>
        </div>
      )}
    </div>
  );
};

