require.config({
  paths: {
    "react": "bower_components/react/react-with-addons",
    "JSXTransformer": "bower_components/react/JSXTransformer",
    "text": "bower_components/requirejs-text/text",
    "jsx": "bower_components/requirejs-react-jsx/jsx"
  },

  shim : {
    "react": {
      "exports": "React"
    },
    "JSXTransformer": "JSXTransformer"
  },

  jsx: {
    fileExtension: ".jsx"
  }
});

require(['jsx!app'], function(App){

  var app = new App();
  app.init();

});
