document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);
 
// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
  e.preventDefault();
 
  // Leer las variables
 
  const origen = document.getElementById('origen');
  const origenSeleccionado = origen.options[origen.selectedIndex].value;
 
  const genero = document.getElementById('genero');
  const generoSeleccionado = genero.options[genero.selectedIndex].value;
 
  const cantidad = document.getElementById('numero').value;
 
 
 
  let url = '';
  url += 'https://randomuser.me/api/?';
  // Si hay origen agregarlo a la URL
  if (origenSeleccionado !== '') {
    url += `nat=${origenSeleccionado}&`;
  }
  // Si hay un genero agregarlo a la URL
  if (generoSeleccionado !== '') {
    url += `gender=${generoSeleccionado}&`;
  }
  // Si hay una cantidad agregarlo a la URL
  if (cantidad !== '') {
    url += `results=${cantidad}&`;
  }
 
  // Código de FETCH API AQUI
  //crear fetch
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data)=>{
 
      let html = '<h2>Nombres Generados</h2>';
      html += `<ul class="lista"`;
 
      const info = data.results;
 
      info.forEach(data => {
        html+=`<li>${data.name.first}</li>`
      });
     
      html+=`</ul>`;
 
      document.querySelector('#resultado').innerHTML = html;
 
    })
    .catch((error) =>{
      console.log(error);
    })
}