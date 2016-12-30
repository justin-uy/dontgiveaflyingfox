const React = require('react');

module.exports = (props) => {
  return (
    <div class="header-left">
      <h1>{props.heading}</h1>
      <h3>{props.subheading}</h3>
    </div>
  );
};
