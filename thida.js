
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, TouchableHighlight, Dimensions, StyleSheet, Linking } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
const leUrl = "https://www.international.gc.ca/world-monde/funding-financement/advancing_gender-batir_sexes.aspx?lang=eng";

export default class App extends Component {

    // Initially, Welcome page is displayed
    state = {
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedPageDisplay: 'none',
        postPageDisplay: 'none',

    }

    // When Welcome Page button is pressed, hide Info page and show Welcome page
    handleWelcomePagePress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedPageDisplay: 'none',
        postPageDisplay: 'none',

    }));
    
    // When Info Page button is pressed, hide Welcome page and show Info page
    handleInfoPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'block',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedPageDisplay: 'none',
        postPageDisplay: 'none',

    }));
    handleLoginPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'block',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedPageDisplay: 'none',
        postPageDisplay: 'none',

    }));
    handleSignupPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'block',
        successPageDisplay: 'none',
        feedPageDisplay: 'none',
        postPageDisplay: 'none',

    }));
    loginProtocol = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'block',
        feedPageDisplay: 'none',
        postPageDisplay: 'none',

    }));
    signupProtocol = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'block',
        feedPageDisplay: 'none',
        postPageDisplay: 'none',

    }));

    handleFeedPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedPageDisplay: 'block',
        postPageDisplay: 'none',
    }));
    handlePostPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
        feedPageDisplay: 'none',
        postPageDisplay: 'block',
    }));


    render() {
        return (
            <View style={styles.container}>
                
                {/*Welcome page screen layout here*/}
                <View style={{ display: this.state.welcomePageDisplay }}>
                    <View style={styles.contentContainer}>
                    <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/581/766/original/gender-symbol-logo-of-sex-and-equality-of-males-and-females-illustration-free-vector.jpg' }}style={{ height: 140, width: 200 }}/>
                        <Text style={styles.caption}>
                            EqualizeNow
                        </Text>
                        <TouchableHighlight style={styles.navButton}onPress={this.handleLoginPagePress}>
                        <Text style={styles.navButtonText}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}onPress={this.handleSignupPagePress}>
                        <Text style={styles.navButtonText}>Signup</Text>
                    </TouchableHighlight>
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
                        This app is designed to promote gender equality and empower women and girls to reach their full potential. It offers a comprehensive set of resources and tools to support women and girls in overcoming the challenges they face in areas such as education, employment, and leadership.

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

                <View style={{ display: this.state.feedPageDisplay }}>
                    <View style={styles.contentContainer}>
                    <TouchableHighlight style={styles.navButton}onPress={() => { 
                        alert('https://www.international.gc.ca/world-monde/funding-financement/advancing_gender-batir_sexes.aspx?lang=eng') 
                    }}>
                        <Text style={styles.navButtonText}>Resource</Text>
                    </TouchableHighlight>
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

                {/*Post page screen layout here*/}
                <View style={{ display: this.state.postPageDisplay }}>
                    <View style={styles.contentContainer}>
                    <TouchableHighlight style={styles.navButton}onPress={() => { 
                        alert('https://www.unesco.org/en/gender-equality/tools') 
                    }}>
                        <Text style={styles.navButtonText}>Tools</Text>
                    </TouchableHighlight>
                    </View>
                </View>


                {/*Bottom nav bar shows on each screen*/}
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}onPress={this.handleInfoPagePress}>
                        <Text style={styles.navButtonText}>Info</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}onPress={this.handlePostPagePress}>
                        <Text style={styles.navButtonText}>Tools</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}onPress={this.handleFeedPagePress}>
                        <Text style={styles.navButtonText}>Resource</Text>
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
        color: 'black',
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
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderColor: 'white',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: 'white',
        borderColor: 'lightblue',
        fontSize: deviceHeight/40,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'black',
    },

});



