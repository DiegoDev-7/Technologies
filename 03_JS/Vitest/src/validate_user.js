function validarUsuario(usuario) {
  if (!usuario.email) {
    return false;
  }

  if (!usuario.password) {
    return false;
  }

  return true;
}

module.exports = { validarUsuario };
