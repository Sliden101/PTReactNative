import React, { Component } from 'react';
import { CheckBox, AppRegistry, Text, TextInput, View, Image, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {

    // Initially, Welcome page is displayed
    state = {
        welcomePageDisplay: 'block',
        attendancePageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
    }

    // When Welcome Page button is pressed, hide Info page and show Welcome page
    handleWelcomePagePress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        attendancePageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
    }));
    
    // When Info Page button is pressed, hide Welcome page and show Info page
    handleInfoPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        attendancePageDisplay: 'block',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
    }));
    handleLoginPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        attendancePageDisplay: 'none',
        loginPageDisplay: 'block',
        signupPageDisplay: 'none',
        successPageDisplay: 'none',
    }));
    handleSignupPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        attendancePageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'block',
        successPageDisplay: 'none',
    }));
    loginProtocol = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        attendancePageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'block',
    }));
    signupProtocol = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        attendancePageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay: 'none',
        successPageDisplay: 'block',
    }));



    
    render() {
        return (
            <View style={styles.container}>
                
                {/*Welcome page screen layout here*/}
                <View style={{ display: this.state.welcomePageDisplay }}>
                    <View style={styles.contentContainer}>
                    <Image source={{ uri: 'https://media.istockphoto.com/id/1283411815/vector/fire-hydrant-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=tJFDHfhmoWdQzqmzghrMD4sKCeTQxhBUx_joD4sdedc=' }}style={{ height: 140, width: 200 }}/>
                        <Text style={styles.caption}>
                            Fire Drill
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

                {/*Attendance page screen layout here*/}
                <View style={{ display: this.state.attendancePageDisplay }}>
                    <View style={styles.contentContainer}>
                    <CheckBox
                        value={false}
                        style={styles.checkbox}
                    />        <Text style={styles.label}>Student A</Text>
                        <CheckBox
                        value={false}
                        style={styles.checkbox}
                    />        <Text style={styles.label}>Student B</Text>
    
    <CheckBox
                        value={false}
                        style={styles.checkbox}
                    />        <Text style={styles.label}>Student C</Text>
    
    <CheckBox
                        value={false}
                        style={styles.checkbox}
                    />        <Text style={styles.label}>Student D</Text>
    
    <CheckBox
                        value={false}
                        style={styles.checkbox}
                    />        <Text style={styles.label}>Student E</Text>
    
    <CheckBox
                        value={false}
                        style={styles.checkbox}
                    />        <Text style={styles.label}>Student F</Text>
    
    <CheckBox
                        value={false}
                        style={styles.checkbox}
                    />        <Text style={styles.label}>Student G</Text>
    

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
                    <TouchableHighlight style={styles.navButton}onPress={this.handleInfoPagePress}>
                        <Text style={styles.navButtonText}>List</Text>
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
        color: 'darkblue',
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
