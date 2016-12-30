const React = require('react');

module.exports = class ViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this._incrementCount = this._incrementCount.bind(this);
  }

  _incrementCount(e) {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <form name="test">
        <p>This is from react. The button has been clicked: {this.state.count} times</p>
        <br />
        <button type="submit" onClick={this._incrementCount}>Click Me!</button>
      </form>
    );
  }
};
