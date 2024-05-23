# Escuela Politécnica Nacional
## Validación y Veriricación de Software
### Integrantes
- Paúl Román
- Erik Chalacama
- Ariel Suntasig
- Santiago Salazar


## Taller: Falla, defecto y error

El módulo de inicio de sesión que se desarrolle debe introducir a propósito los conceptos de fallo, defecto y error y explicarlos en los comentarios con al menos dos fallos.

### Conteo de intentos de ingreso deficiente
- Error
Al momento de programar se cometió un error en el método authenticate de authentication service:

```js
import getData from './user.service.js';

export default function authenticate(username, password) {
    const users = getData();
    console.log(users);
    const user = users.find(user => user.username === username)
    if (!user){
        return null
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
``` 
en este caso la actualización de los login attempts se realiza en los objetos parseados, mas no en el objeto usersData del cual se recolecta la información a través del método getData().

- Defecto
Debido al error existe un defecto en el software al no actualizar la cantidad de intentos de ingreso al sistema

- Fallo
El usuario es capaz de intentar ingresar tantas veces como desee sin penalización por un exceso de fallos. 

### 

