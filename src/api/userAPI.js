export default {
  register(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ username: data.username, password: data.password });
      }, 5000);
    });
  },
  login(data) {
    let users = { username: "thangduong", password: "thangduongT12@" };
    if (users.username === data.username && users.password === data.password) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: "200",
            username: "thang",
            role: "user",
            Token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRoYW5nIGR1b25nIiwiaWF0IjoxNTE2MjM5MDIyfQ.WB2dscqUQHLo8XZjOKjC8EQJEkDlbEkHdn7maOr1yDI",
          });
        }, 5000);
      });
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ status: "400" });
        }, 3000);
      });
    }
  },
};
