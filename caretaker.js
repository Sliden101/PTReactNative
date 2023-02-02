import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {

    // Initially, Welcome page is displayed
    state = {
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedbackPageDisplay: 'none',
    }

    // When Welcome Page button is pressed, hide Info page and show Welcome page
    handleWelcomePagePress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedbackPageDisplay: 'none',
    }));
    
    // When Info Page button is pressed, hide Welcome page and show Info page
    handleInfoPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'block',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedbackPageDisplay: 'none',
    }));
    handleLoginPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'block',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedbackPageDisplay: 'none',
    }));
    handleSignupPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'block',
        successPageDisplay: 'none',
        feedbackPageDisplay: 'none',
    }));
    loginProtocol = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'block',
        feedbackPageDisplay: 'none',
    }));
    signupProtocol = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'block',
        feedbackPageDisplay: 'none',
    }));
    handleFeedbackPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedbackPageDisplay: 'block',
    }));

    
    render() {
        return (
            <View style={styles.container}>
                
                {/*Welcome page screen layout here*/}
                <View style={{ display: this.state.welcomePageDisplay }}>
                    <View style={styles.contentContainer}>
                    <Image source={{ uri: 'https://i.fbcd.co/products/original/2d64c3de3252fd63040e1d958c110a6a9789460114e64784534c975cdf94d65e.jpg' }}style={{ height: 140, width: 200 }}/>
                        <Text style={styles.caption}>
                            Care Taker
                        </Text>
                    </View>
                </View>
                {/*Login page screen layout here*/}
                <View style={{ display: this.state.loginPageDisplay }}>
                    <View style={styles.contentContainer}>
                    <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="alphabet"
                            />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            keyboardType="alphabet"
                            />
                    <TouchableHighlight style={styles.navButton}onPress={this.loginProtocol}>
                        <Text style={styles.navButtonText}>Login</Text>
                    </TouchableHighlight>
                        <Text style={styles.caption}>
                            Login Here!
                        </Text>
                    </View>
                </View>

                {/*Info page screen layout here*/}
                <View style={{ display: this.state.infoPageDisplay }}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.paragraph}>
                            This page should contain medical treatment information.
                        </Text>
                    </View>
                </View>
                
                {/*Success page screen layout here*/}
                <View style={{ display: this.state.successPageDisplay }}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.paragraph}>
                            Success!
                        </Text>
                    </View>
                </View>

                {/*Feedback page screen layout here*/}
                <View style={{ display: this.state.feedbackPageDisplay }}>
                    <View style={styles.contentContainer}>
                            <TextInput
                            style={styles.feedback}
                            placeholder="Your feedback here"
                            keyboardType="alphabet"
                            />
                    <TouchableHighlight style={styles.navButton}onPress={this.loginProtocol}>
                        <Text style={styles.navButtonText}>Submit</Text>
                    </TouchableHighlight>
                        <Text style={styles.paragraph}>
                            Enter your feedback here!
                        </Text>
                    </View>
                </View>


                {/*Signup page screen layout here*/}
                <View style={{ display: this.state.signupPageDisplay }}>
                <View style={styles.contentContainer}>
                    <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="alphabet"
                            />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            keyboardType="alphabet"
                            />
                    <TouchableHighlight style={styles.navButton}onPress={this.signupProtocol}>
                        <Text style={styles.navButtonText}>Signup</Text>
                    </TouchableHighlight>
                        <Text style={styles.caption}>
                            Signup Here!
                        </Text>
                    </View>
                </View>

                
                {/*Bottom nav bar shows on each screen*/}
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}onPress={this.handleLoginPagePress}>
                        <Text style={styles.navButtonText}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}onPress={this.handleSignupPagePress}>
                        <Text style={styles.navButtonText}>Signup</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}onPress={this.handleInfoPagePress}>
                        <Text style={styles.navButtonText}>Info</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}onPress={this.handleFeedbackPagePress}>
                        <Text style={styles.navButtonText}>Feed</Text>
                    </TouchableHighlight>
                </View>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: deviceHeight/10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'darkblue',
    },
    feedback: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    caption: {
        fontSize: deviceHeight/20,
        textAlign: 'center',
        color: 'darkred',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paragraph: {
        fontSize: deviceHeight/20,
        textAlign: 'center',
        color: 'black',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'darkred',
        flexDirection: '',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderColor: 'white',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/6.75,
        backgroundColor: 'white',
        borderColor: 'lightred',
        fontSize: deviceHeight/40,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'darkred',
    },

});
