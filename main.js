import './style.css'
import EpnLogo from '/epn.png'
import authenticate from './services/authentication.service.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https:/epn.edu.ec" target="_blank">
      <img src="${EpnLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Login</h1>
    <div class="card">
      <form id="loginForm">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
`;

// Adding event listener for the form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = authenticate(username, password);

  if(user){
    alert('Login successful, welcome ' + user.name);
  }
  else{
    alert('Login failed, check your credentials');
  }


});
