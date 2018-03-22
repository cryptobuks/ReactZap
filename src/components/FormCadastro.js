import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
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

const formCadastro = props => (
  <View style={{ flex: 1, padding: 10 }}>
    <View style={{ flex: 4, justifyContent: 'center' }}>
      <TextInput value={props.nome} placeholder="Nome" style={styles.input} />
      <TextInput value={props.email} placeholder="Email" style={styles.input} />
      <TextInput value={props.senha} placeholder="Senha" style={styles.input} />
    </View>
    <View style={{ flex: 1 }}>
      <Button
        onPress={() => false}
        title="Cadastrar"
        color="#115E54"
      />
    </View>
  </View>
);

formCadastro.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  senha: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
  }
);

export default connect(mapStateToProps, null)(formCadastro);
