const signIn = (cb, user) => {
    return new Promise((resolve, reject) => {
      cb({
          username: user.username,
          password: user.password
      })
      .then(() => {
        setTimeout(function(){
          resolve(true);
        }, 1000)})
      .catch((err) => {
        reject();
      })
    })
  }

  export default signIn;