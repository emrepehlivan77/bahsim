/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function bronze() {
  return (
    <>
      <ImageBackground
        source={require('../bahsim/images/bronzeField.png')}
        style={{
          width: '100%',
          height: 500,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <View>
          <View style={styles.matchBlock}>
            <Text style={{color: '#000'}}>M.United 0 - 0 Chelsea</Text>
          </View>
          <View style={styles.matchBlock} />
          <View style={styles.matchBlock} />
        </View>
      </ImageBackground>
    </>
  );
}

function silver() {
  return (
    <>
      <ImageBackground
        source={require('../bahsim/images/silverField.png')}
        style={{
          flex: 1,
          height: 500,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <View>
          <View style={styles.matchBlock} />
          <View style={styles.matchBlock} />
          <View style={styles.matchBlock} />
        </View>
      </ImageBackground>
    </>
  );
}

function gold() {
  return (
    <>
      <ImageBackground
        source={require('../bahsim/images/goldField.png')}
        style={{
          flex: 1,
          height: 500,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <View style={styles.matchBlock} />
        <View style={styles.matchBlock} />
        <View style={styles.matchBlock} />
      </ImageBackground>
    </>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: '#000000'}}>
      <ScrollView>
        {bronze()}
        {silver()}
        {gold()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  matchBlock: {
    width: 250,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
