'use strict';

var React = require('react');
var merge = require('lodash.merge');
var classes = require('classnames');
var StyleMixin = require('../../../lib/StyleMixin');
var css = require('./index.styl');
var DOM = React.DOM;

module.exports = React.createClass({
  displayName: 'TextInput',
  mixins: [StyleMixin],
  css: css,
  normalizeData: function(v) {
    return v;
  },
  render: function() {
    var props = merge({
      className: classes('text-input-component', this.props.className),
      type: 'text'
    }, this.props);
    return DOM.input(props, this.props.children);
  }
});