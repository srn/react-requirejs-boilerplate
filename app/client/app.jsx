define(function(require){

  var React = require('react');

  function App() {
    this.AppView = React.createClass({
      render: function () {
        return (
          <div>
            <p>Hello, React!</p>
          </div>
          );
      }
    });
  }

  App.prototype.init = function () {
    React.renderComponent(<this.AppView />, document.body);
  };

  return App;

});
