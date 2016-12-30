const React = require('react');

module.exports = (props) => {
  return (
    <div class="dark-container">
      <div class="container">
        {props.children}
      </div>
    </div>
  );
};
