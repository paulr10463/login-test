export default class User{
    constructor(id, name, username, email, password, login_attempts){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.login_attempts = login_attempts;
    }
}
