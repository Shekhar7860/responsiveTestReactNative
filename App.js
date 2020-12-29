/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const App: () => React$Node = () => {
  const login = () => {
    alert('i m login')
  }
  return (
    <KeyboardAwareScrollView style={{flex : 1}}>
     <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Image style={styles.imageStyle} source={require('./HelpStep3.png')}/>
          <TextInput style={styles.myText} placeholder={'Email'}/>
          <TextInput style={styles.myText} placeholder={'Password'}/>
          <TouchableHighlight style={styles.buttonContainer}>
            <Text style={styles.text} onPress={login}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  containerStyle : {
  marginTop : hp('2%')
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  buttonContainer : {
    width : wp('55%'),
    height : hp('5%'),
    backgroundColor : 'red',
    justifyContent : 'center',
    marginTop : hp('2%')
  },
  text : {
    textAlign : 'center',
    color : 'white',
    fontSize: hp('3%')
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: { flex: 1 },
  textWrapper: {
    marginTop : hp('3%'),
    width: wp('100%'),
    justifyContent : 'center',
    alignItems : 'center'  // 80% of width device screen
  },
  myText: {
    fontSize: hp('3%'),
    borderWidth : 1,
    width: wp('55%'),
    marginTop : hp('2%')
  },
  imageStyle : {
    width: wp('55%'),
    height: hp('55%')
  }
});

export default App;
