let user = new User("владимир");
user.sayHi();
function User(name, password){
     
    this.name = vladimir;
    this.password = htg12334;
    this.displayInfo = function(){
         
        console.log(`Имя: ${this.name}  Пароль: ${this.password}`);
    }
}
User.prototype.sayHi = function() {
    console.log(`логин${this.name}`);
    console.log('Пароль:${this.password}')
};
 

