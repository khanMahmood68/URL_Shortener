export default class UserModel{
    constructor(name, email, password, id){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id
    }

    static getAll(){
        return users;
    }

    static signup(name, email, password){
        const id = users.length+1;
        const user = new UserModel(name, email, password,id);
        users.push(user);
        return user;
    }

    static signin(email, password){
        const user = users.find(u=>u.email==email && u.password==password);
        return user;

    }

}

let users = [
    {
      name: "Seller User",
      email: "seller@ecom.com",
      password: "password1",
      id: "1",
    },
    {
      name: "Customer User",
      email: "customer@ecom.com",
      password: "password1",
      id: "2",
    },
  ];