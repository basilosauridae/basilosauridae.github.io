interface User {
  name: string;
  id: number;
}
// ---分割线---
const user2 = { name: 'A', id: 1, age: 18 };
function getAdminUser(): User {
  return user2; // ✅ 通过！鸭式类型判定有效
}
getAdminUser({name: 'A', id: 1, age: 18});//报错
 
function deleteUser(user: User) {
  // ...
}
const extraUser = { name: 'A', id: 1, age: 18 };
deleteUser(extraUser); //✅ 通过
deleteUser({ name: 'A', id: 1, age: 18 }); //报错

