var React = require('react-native');
var Main = require('./App/Components/Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

class githubNotetaker extends React.Component{
  render() {
    return (
      <NavigatorIOS
          initialRoute={{
            title: 'Github Notetaker',
            component: Main
          }}
          style={styles.container}
      />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
