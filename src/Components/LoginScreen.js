import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useContext, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Colors,
  deviceWidth,
  emailRegex,
  password_regex,
} from '../Common/Helper';
import {AuthContext} from './AuthContext';
import CommonMessage from '../Common/CommonMessage';

const LoginScreen = () => {
  const {signIn} = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    emailerror: true,
    passworderror: true,
  });
  const {email = '', password = '', passworderror, emailerror} = formData;
  const handleChange = (name, value) => {
    let data = {...formData, [name]: value};
    if (name == 'email' && value == '') {
      data = {...data, emailerror: true};
    } else if (name == 'email' && value != '' && !emailRegex.test(value)) {
      data = {...data, emailerror: true};
    } else if (name == 'password' && value == '') {
      data = {...data, passworderror: true};
    } else if (
      name == 'password' &&
      value != '' &&
      !password_regex.test(value)
    ) {
      data = {...data, passworderror: true};
    } else {
      data = {...data, passworderror: false, emailerror: false};
    }

    setFormData(data);
  };
  const handleLogin = () => {
    const passwordValidate = !password_regex.test(password);
    const emailValidate = !emailRegex.test(email);
    if (passwordValidate == false && emailValidate == false) {
      signIn({userName: 'testUser'}, '123456');
    } else {
      CommonMessage('Please enter valid inputs');
    }
    let data={...formData}
    if (emailValidate == true) {
      data={...data, emailerror: true}
    }
    if (passwordValidate == true) {
      data={...data,passworderror: true}
    }
    setFormData(data);
  };
  console.log(formData, 'info data---');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#13303c"
        style={styles.statusbarstyle}
      />
      <Text style={styles.fontStyle}>Welcome To Store</Text>
      <KeyboardAvoidingView style={styles.bodystyle} behavior={'height'}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor={'#fff'}
          keyboardType="email-address"
          onChangeText={text => handleChange('email', text)}
          value={email}
        />
        {emailerror && (
          <Text style={{color: Colors.red, marginBottom: 5}}>
            {' '}
            {'Please Enter Valid Email Id'}{' '}
          </Text>
        )}

        <View style={styles.passwordSection}>
          <TextInput
            style={{width: deviceWidth * 0.65, color: Colors.white}}
            secureTextEntry={passwordVisible}
            placeholder="Password"
            placeholderTextColor={'#fff'}
            onChangeText={text => handleChange('password', text)}
            value={password}
            error={passworderror}
          />
          <FontAwesome
            size={20}
            color={'#fff'}
            name={passwordVisible ? 'eye' : 'eye-slash'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        </View>
        {passworderror && (
          <Text style={{color: Colors.red, marginBottom: 5}}>
            {' '}
            {'Please Enter Valid Password'}{' '}
          </Text>
        )}
        <TouchableOpacity style={styles.btnStyle} onPress={handleLogin}>
          <Text style={styles.btnTextStyle}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodystyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusbarstyle: {
    backgroundColor: Colors.primary,
  },
  input: {
    height: 40,
    width: deviceWidth * 0.8,
    margin: 10,
    borderRadius: 16,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    borderColor: '#fff',
  },
  btnStyle: {
    width: deviceWidth * 0.8,
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    margin: 10,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
  },
  btnTextStyle: {
    color: '#fff',
  },
  passwordSection: {
    // flex: 1,
    flexDirection: 'row',
    width: deviceWidth * 0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    // borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 16,
    height: 40,
    paddingVertical: 0,
    borderColor: '#fff',
  },
  fontStyle: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 30,
    color: '#fff',
  },
});
