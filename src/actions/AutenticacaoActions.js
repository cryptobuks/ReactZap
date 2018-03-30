import firebase from 'firebase';

export const modificaEmail = texto => ({
  type: 'modifica_email',
  payload: texto,
});

export const modificaSenha = texto => ({
  type: 'modifica_senha',
  payload: texto,
});

export const modificaNome = texto => ({
  type: 'modifica_nome',
  payload: texto,
});

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch({ type: 'sucesso' });
};

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
};

export const cadastraUsuario = ({ nome, email, senha }) => (dispatch) => {
  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(user => cadastroUsuarioSucesso(dispatch))
    .catch(erro => cadastroUsuarioErro(erro, dispatch));
};
