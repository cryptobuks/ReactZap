import React from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoActions';

const styles = StyleSheet.create({
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

const formCadastro = props => (
  <Image style={{ flex: 1, width: null }} source={bg}>
    <View style={{ flex: 1, padding: 10, backgroundColor: 'transparent' }}>
      <View style={{ flex: 4, justifyContent: 'center' }}>
        <TextInput value={props.nome} placeholder="Nome" style={styles.input} onChangeText={texto => props.modificaNome(texto)} />
        <TextInput value={props.email} placeholder="Email" style={styles.input} onChangeText={texto => props.modificaEmail(texto)} />
        <TextInput secureTextEntry value={props.senha} placeholder="Senha" style={styles.input} onChangeText={texto => props.modificaSenha(texto)} />
      </View>
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => false}
          title="Cadastrar"
          color="#115E54"
        />
      </View>
    </View>
  </Image>
);

formCadastro.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  senha: PropTypes.string.isRequired,
  modificaNome: PropTypes.func.isRequired,
  modificaEmail: PropTypes.func.isRequired,
  modificaSenha: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
  }
);

export default connect(mapStateToProps, {
  modificaEmail,
  modificaSenha,
  modificaNome,
})(formCadastro);
