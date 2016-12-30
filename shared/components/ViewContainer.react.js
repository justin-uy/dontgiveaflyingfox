const React = require('react');

module.exports = class ViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this._incrementCount = this._incrementCount.bind(this);
  }

  _incrementCount() {
    this.setState({
      count: this.state.count++
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
