import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';

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

class formCadastro extends Component {
  cadastraUsuario() {
    const { nome, email, senha } = this.props;

    this.props.cadastraUsuario({ nome, email, senha });
  }
  render() {
    return (
      <Image style={{ flex: 1, width: null }} source={bg}>
        <View style={{ flex: 1, padding: 10, backgroundColor: 'transparent' }}>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput
              value={this.props.nome}
              placeholder="Nome"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={texto => this.props.modificaNome(texto)}
            />
            <TextInput
              value={this.props.email}
              placeholder="Email"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              secureTextEntry
              value={this.props.senha}
              placeholder="Senha"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={texto => this.props.modificaSenha(texto)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              onPress={() => this.cadastraUsuario()}
              title="Cadastrar"
              color="#115E54"
            />
          </View>
        </View>
      </Image>
    );
  }
}

formCadastro.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  senha: PropTypes.string.isRequired,
  modificaNome: PropTypes.func.isRequired,
  modificaEmail: PropTypes.func.isRequired,
  modificaSenha: PropTypes.func.isRequired,
  cadastraUsuario: PropTypes.func.isRequired,
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
  cadastraUsuario,
})(formCadastro);
