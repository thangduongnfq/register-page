export default {
  register(data) {
    console.log(data)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ username: data.username, password: data.password });
      }, 5000);
    });
  },
};
