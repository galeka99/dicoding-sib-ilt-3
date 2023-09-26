import '../styles/style.scss';
import { renderCard } from './render';
import MainElement from './main-element';
import { fetchUser } from './github';

document.body.appendChild(MainElement);

document.querySelector("button#submit").addEventListener('click', async () => {
  const inputElement = document.querySelector('input#username');
  const username = inputElement.value;

  if (username.length == 0) {
    alert('Username belum diisi');
    return;
  }

  const response = await fetchUser(username);
  const user = await response.json();

  const container = document.querySelector('div#info-container');
  const card = renderCard(user);
  container.innerHTML = card.outerHTML;
});