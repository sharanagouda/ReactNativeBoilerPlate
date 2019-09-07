import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => Actions.about()}>
          <View>
            <Text>Navigate to About screen</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
