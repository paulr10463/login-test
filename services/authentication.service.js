import getData from './user.service.js';

export default function authenticate(username, password) {
    const users = getData();
    console.log(users);
    const user = users.find(user => user.username === username)
    if (!user) {
        return {
            id: 0,
            name: "Generic User",
            username: username,
            email: "usuario_generico@example.com",
            password: password,
            login_attempts: 0
        };
    }

    if (user) {
        if (user.password !== password) {
            user.login_attempts += 1;
            return null
        }

        if (user.password === password){
            if (user.login_attempts >= 3){
                return null;
            }
            user.login_attempts = 0;
            return user;
        }
    }
    return user;
}