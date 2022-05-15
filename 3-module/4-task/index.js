function showSalary(users, age) {
  let filterdUsers = users.filter(function (user) {
    return user.age <= age;
  });

  let arrStrUsers = filterdUsers.map(function (user) {
    return user.name + ", " + user.balance;
  });

  return arrStrUsers.join("\n");
}
