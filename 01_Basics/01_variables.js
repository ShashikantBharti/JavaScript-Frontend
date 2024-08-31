const accountId = 144553;
let accountEmail = 'demo@example.com';
var accountPass = 'ThisIsPassword'; // We don't use var due to global scope it does not follow the scope
accountCity = 'Lucknow';
let accountState;

// accountId = 123; // Not Allowed

accountEmail = 'example@example.com';
accountPass = 'NewPass';
accountCity = 'Kanpur';

console.log(accountId);
console.table([
  [accountId, accountEmail, accountPass, accountCity, accountState],
]);

let accountUser = 'Shashikant';

{
  let accountAdmin = 'admin'; // Only in this scope
  var accountBranch = 'Lucknow'; // We can access it outside this scope.
  console.log(accountUser);
}

// console.log(accountAdmin); // Not accessible
console.log(accountBranch);
