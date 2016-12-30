const React = require('react');

module.exports = (props) => {
  return (
    <div className="dark-container">
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};
