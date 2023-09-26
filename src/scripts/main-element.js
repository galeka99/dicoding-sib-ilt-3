const mainElement = document.createElement("main");

mainElement.innerHTML = `
<div class="container">
  <span class="text-sm mb-2">Username GitHub :</span>
  <input type="text" id="username" class="form-input mb-2" />
  <button id="submit">Kirim</button>
  <hr style="margin: 15px 0;">
  <div id="info-container"></div>
</div>
`;

export default mainElement;