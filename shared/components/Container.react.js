const React = require('react');

module.exports = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

