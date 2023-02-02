import React, { Component } from 'react';
import { CheckBox ,AppRegistry, Text, TextInput, View, Image, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default class App extends Component {
    
    // Initially, Welcome page is displayed
    state = {
        startPageDisplay: 'block',
        welcomePageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay : 'none',
        attendancePageDisplay: 'none',
    }

    // When Welcome Page button is pressed, hide Info page and show Welcome page
    handleBackPagePress = () => this.setState(state => ({
        startPageDisplay: 'none',
        welcomePageDisplay: 'block',
        loginPageDisplay: 'none',
        signupPageDisplay : 'none',
        attendancePageDisplay: 'none',
    }));
    handleFutherBackPagePress = () => this.setState(state => ({
        startPageDisplay: 'block',
        welcomePageDisplay: 'none',
        loginPageDisplay: 'none',
        signupPageDisplay : 'none',
        attendancePageDisplay: 'none',
    }));
    handleLoginPagePress = () => this.setState(state => ({
        startPageDisplay: 'none',
        welcomePageDisplay: 'none',
        loginPageDisplay : 'block',
        signupPageDisplay : 'none',
        attendancePageDisplay: 'none',

    }));
    handleSignupPagePress = () => this.setState(state => ({
        startPageDisplay: 'none',
        welcomePageDisplay: 'none',
        loginPageDisplay : 'none',
        signupPageDisplay : 'block',
        attendancePageDisplay: 'none',
    }));
    handleAttendancePagePress = () => this.setState(state => ({
        startPageDisplay: 'none',
        welcomePageDisplay: 'none',
        loginPageDisplay : 'none',
        signupPageDisplay : 'none',
        attendancePageDisplay: 'block',
    }));
    



    render() {
        return (
            <View style={styles.container}>
                {/*Welcome page screen layout here*/}
                <View style={{ display: this.state.startPageDisplay }}>
                    <View style={styles.contentContainer}>
                    <TouchableHighlight onPress={this.handleBackPagePress}>
                    <Image source={{ uri: 'https://media.istockphoto.com/id/1283411815/vector/fire-hydrant-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=tJFDHfhmoWdQzqmzghrMD4sKCeTQxhBUx_joD4sdedc=' }}style={{ height: 200, width: 300 }}/>
                    </TouchableHighlight>

                    </View>
                </View>

                <View style={{ display: this.state.welcomePageDisplay }}>
                    <View style={styles.contentContainer}>
                                        <TouchableHighlight style={styles.back}onPress={this.handleFutherBackPagePress}>
                        <Text style={styles.navButtonText}>back</Text>
                    </TouchableHighlight>
                    <Text style={styles.caption}>
                            Fire Drill
                        </Text>
                    <Image source={{ uri: 'https://media.istockphoto.com/id/1283411815/vector/fire-hydrant-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=tJFDHfhmoWdQzqmzghrMD4sKCeTQxhBUx_joD4sdedc=' }}style={{ height: 200, width: 300 }}/>
                    <TouchableHighlight style={styles.navButton}onPress={this.handleLoginPagePress}>
                        <Text style={styles.navButtonText}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}onPress={this.handleSignupPagePress}>
                        <Text style={styles.navButtonText}>Signup</Text>
                    </TouchableHighlight>
                    <Text style={styles.small}>
                            @CIA First International School
                        </Text>

                    </View>
                </View>

                <View style={{ display: this.state.loginPageDisplay }}>
                <TouchableHighlight style={styles.back}onPress={this.handleBackPagePress}>
                        <Text style={styles.navButtonText}>back</Text>
                    </TouchableHighlight>
                    <View style={styles.contentContainer}>
                    <Image source={{ uri: 'https://media.istockphoto.com/id/1283411815/vector/fire-hydrant-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=tJFDHfhmoWdQzqmzghrMD4sKCeTQxhBUx_joD4sdedc=' }}style={{ height: 200, width: 300 }}/>
                    <Text style={styles.caption}>
                            LOGIN
                        </Text>

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
                    </View>
                    <TouchableHighlight style={styles.loginButton}onPress={this.handleAttendancePagePress}>
                        <Text style={styles.navButtonText}>Log In</Text>
                    </TouchableHighlight>

                </View>


                <View style={{ display: this.state.signupPageDisplay }}>
                <TouchableHighlight style={styles.back}onPress={this.handleBackPagePress}>
                        <Text style={styles.navButtonText}>back</Text>
                    </TouchableHighlight>
                    <View style={styles.contentContainer}>
                    <Image source={{ uri: 'https://media.istockphoto.com/id/1283411815/vector/fire-hydrant-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=tJFDHfhmoWdQzqmzghrMD4sKCeTQxhBUx_joD4sdedc=' }}style={{ height: 200, width: 300 }}/>
                    <Text style={styles.caption}>
                            SIGNUP
                        </Text>
                    <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            keyboardType="alphabet"
                            />

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
                    </View>
                    <TouchableHighlight style={styles.loginButton}onPress={this.handleAttendancePagePress}>
                        <Text style={styles.navButtonText}>Signup</Text>
                    </TouchableHighlight>
                </View>

                <View style={{ display: this.state.attendancePageDisplay }}>
                <TouchableHighlight style={styles.back}onPress={this.handleBackPagePress}>
                        <Text style={styles.navButtonText}>back</Text>
                    </TouchableHighlight>

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
    label: {
        margin: 8,
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
    checkbox: {
        alignSelf: 'center',
      },
    back: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'darkblue',
        alignItems: 'left',
        justifyContent: 'left',
        margin: 10,
    },
    loginButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: 'white',
        borderColor: 'lightblue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    caption: {
        fontSize: deviceHeight/20,
        textAlign: 'center',
        color: 'darkblue',
        alignItems: 'center',
        justifyContent: 'center',

    },
    small: {
        fontSize: deviceHeight/40,
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
        backgroundColor: 'darkblue',
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
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        color: 'darkblue',
    },

});
