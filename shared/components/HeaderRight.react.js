const React = require('react');

module.exports = (props) => {
  return (
    <ul class="header-right">
      {props.links.map((v, i) => <li key={'item-' + i}><a href={v.href}>v.label</a></li>)}
    </ul>
  );
};

