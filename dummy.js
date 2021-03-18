users = [
  { name: "Raj", age: 10 },
  { name: "Nidhi", age: 24 },
];

const changed = users.map((user) => {
  tempUser = user;
  user.age -= 10;
  return user;
});

console.log(changed);

var x = function () {
  console.log(arguments[0]);
};

var xx = (...nn) => console.log(nn[0]);

x(1231, 2, 3);
xx(12342, 234, 324);
