function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'pegawai' && password === 'surat123') {
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('login-error').textContent = 'Username atau password salah!';
  }
}

function logout() {
  window.location.href = 'index.html';
}