import moment from 'moment'

function renderCard(data) {
  const element = document.createElement("div");
  element.className = "info";

  element.innerHTML = `
  <img src="${data.avatar_url}" width="80" height="80" style="border-radius: 80px; margin-bottom: 5px" />
  <span style="font-weight: bold">${data.name}</span>
  <span style="font-size: .8rem">${data.company ?? ''}</span>
  <span style="font-size: .8rem">${data.bio ?? ''}</span>
  <table style="font-size: .85rem; width: 100%; margin-top: 20px" border>
    <tr>
      <td style="padding: 5px; width: 40%; text-align: start;">Lokasi</td>
      <td style="padding: 5px; width: 60%; font-weight: bold;">${data.location ?? '-'}</td>
    </tr>
    <tr>
      <td style="padding: 5px; width: 40%; text-align: start;">Alamat Email</td>
      <td style="padding: 5px; width: 60%; font-weight: bold;">${data.email ?? '-'}</td>
    </tr>
    <tr>
      <td style="padding: 5px; width: 40%; text-align: start;">Repository</td>
      <td style="padding: 5px; width: 60%; font-weight: bold;">${data.public_repos}</td>
    </tr>
    <tr>
      <td style="padding: 5px; width: 40%; text-align: start;">Pengikut</td>
      <td style="padding: 5px; width: 60%; font-weight: bold;">${data.followers}</td>
    </tr>
    <tr>
      <td style="padding: 5px; width: 40%; text-align: start;">Mengikuti</td>
      <td style="padding: 5px; width: 60%; font-weight: bold;">${data.following}</td>
    </tr>
    <tr>
      <td style="padding: 5px; width: 40%; text-align: start;">Tipe</td>
      <td style="padding: 5px; width: 60%; font-weight: bold;">${data.type}</td>
    </tr>
    <tr>
      <td style="padding: 5px; width: 40%; text-align: start;">Tgl Dibuat</td>
      <td style="padding: 5px; width: 60%; font-weight: bold;">${moment(data.created_at).locale('id').format('dddd, DD MMMM yyyy HH:mm:ss')}</td>
    </tr>
  </table>
  `;

  return element;
}

export { renderCard }