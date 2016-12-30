const React = require('react');

module.exports = class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  _getOnImageClickCallback(i) {
    return () => {
      if (this.state.selected !== i) {
        this.setState({
          selected: i
        });
      } else {
        this.setState({
          selected: null
        });
      }
    };
  }

  render() {
    let images = [];
    const {selected} = this.state;

    for (var i = 0; i < this.props.count; i++) {
      images.push(
        <div
          key={'gallery-item-' + i}
          className="image-container"
          onClick={this._getOnImageClickCallback(i)}>
          <div className="image" />
          <span>image {i}</span>
        </div>
      );
    }

    return (
      <div>
        {
          selected !== null &&
          <div className="selected-gallery-item">
            {"Image " + selected + " is selected"}
          </div>
        }
        <div className="image-gallery">
          {images}
        </div>
      </div>
    );
  }
};

