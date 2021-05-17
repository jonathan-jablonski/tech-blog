const postId = document.querySelector('input[name="post-id"]').value;

const editPostHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/blog');
};

const deleteEventHandler = async function () {
  await fetch(`/api/post/${post_id}`, {
    method: 'DELETE',
  });

  document.location.replace('/blog');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editPostHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteEventHandler);
