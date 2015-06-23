var React = require('react');

var TodoApp = require('TodoApp.jsx');

var baseCss = require('todomvc-common/base.css');
var indexCss = require('todomvc-app-css/index.css');

var element = document.getElementById('todoapp');
React.render(<TodoApp />, element);
