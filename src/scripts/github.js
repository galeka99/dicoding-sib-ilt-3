function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    cache: "force-cache",
  });
}

export { fetchUser }