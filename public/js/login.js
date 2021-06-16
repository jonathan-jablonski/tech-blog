const loginHandler = async function (event) {
  event.preventDefault();

  const userEl = document.querySelector('#username-input-login');
  const passEl = document.querySelector('#password-input-login');

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username: userEl.value,
      password: passEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/blog');
  } else {
    alert('Failed to login');
  }
};

document.querySelector('#login-form').addEventListener('submit', loginHandler);
