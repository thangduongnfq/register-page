export default {
  register(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ username: data.username, password: data.password });
      }, 5000);
    });
  },
  login(data) {
    let users = {};
    if (users.indexOf(data)) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ status: "200", username: "thang" });
        }, 3000);
      });
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ status: "400", username: "thang" });
        });
      });
    }
  },
};
