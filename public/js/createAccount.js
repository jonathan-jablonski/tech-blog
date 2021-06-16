const signupHandler = async function (event) {
  event.preventDefault();

  const userEl = document.querySelector('#username-input-signup');
  const passEl = document.querySelector('#password-input-signup');

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username: userEl.value,
      email: userEl.value,
      password: passEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/blog');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupHandler);
