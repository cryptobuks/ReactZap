import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 10,
    backgroundColor: 'transparent',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    fontSize: 17,
    height: 35,
    textAlign: 'center',
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});

const bg = require('../imgs/bg.jpg');

const formLogin = props => (
  <Image style={{ flex: 1, width: null }} source={bg}>
    <View style={styles.form}>
      <View style={styles.title}>
        <Text style={{ fontSize: 26 }}>ReactZap</Text>
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <TextInput value={props.email} style={styles.input} placeholder="Email" placeholderTextColor="gray" onChangeText={texto => props.modificaEmail(texto)} />
        <TextInput secureTextEntry value={props.senha} style={styles.input} placeholder="Senha" placeholderTextColor="gray" onChangeText={texto => props.modificaSenha(texto)} />
        <TouchableHighlight underlayColor="transparent" onPress={() => Actions.formCadastro()}>
          <Text style={{ fontSize: 13, marginTop: 25, color: 'black' }}>Ainda não tem cadastro? Cadastre-se!</Text>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 2 }}>
        <Button
          title="Acessar"
          onPress={() => false}
          color="#115E54"
        />
      </View>
    </View>
  </Image>
);

formLogin.propTypes = {
  email: PropTypes.string.isRequired,
  senha: PropTypes.string.isRequired,
  modificaEmail: PropTypes.func.isRequired,
  modificaSenha: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
  }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
