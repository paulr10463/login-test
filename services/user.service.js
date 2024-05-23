import users from '../data/users.data.js';
import User from '../model/user.js';
export default function getUsers(){
    const usersList = [];
    users.forEach(user => {
        const userParsed = new User(user.id, user.name, user.username, user.email, user.password, user.login_attempts)
        usersList.push(userParsed);
    });
    return usersList;
}