import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#000',
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

const formLogin = props => (
  <View style={styles.form}>
    <View style={styles.title}>
      <Text style={{ fontSize: 26 }}>ReactZap</Text>
    </View>
    <View style={{ flex: 2, alignItems: 'center' }}>
      <TextInput value={props.email} style={styles.input} placeholder="Email" />
      <TextInput value={props.senha} style={styles.input} placeholder="Senha" />
      <TouchableHighlight underlayColor="transparent" onPress={() => Actions.formCadastro()}>
        <Text style={{ fontSize: 13, marginTop: 25, color: '#d3d3d3' }}>Ainda não tem cadastro? Cadastre-se!</Text>
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
);

formLogin.propTypes = {
  email: PropTypes.string.isRequired,
  senha: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
  }
);

export default connect(mapStateToProps, null)(formLogin);
