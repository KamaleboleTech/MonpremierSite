
//on va reperer où placer les données et créer un template
let courTemplate = `
    <div class="infoCour">
        <img src="/images/adminsys.PNG" alt="">
        <h2>Windows Server 2020</h2>
        <p>Administrer vos Serveurs Windows</p>
        <p>30 Heures</p>
    </div>
`
let CoursListView = document.querySelector (".Listcours");

if (CoursListView){
  fetch("js/cours.json")
  //le reponse reçue on la convertie en json
  .then((reponse) => reponse.json())
  
  //les données converties en json sont traitées ici
  .then((data) => {
      console.log(data)
  //on va utiliser ce data pour afficher le cours dans la page HTML
      let courses = data;
  // on va créer le contenu HTML pour le bloc courslistview
      for (const cours of courses) {
        CoursListView.innerHTML += 

  // maintenant le cours temp doit donner acces à modifier son contenu
                  `
                  <div class="infoCour">
                      <a href=""><img src="${cours.image}" alt=""></a>
                      <a href=""><h2>${cours.name}</h2></a>
                      <a href=""><p>${cours.Description}</p></a>
                      <a href=""><p>${cours.time} heures</p></a>
                  </div>
                `
      }
  });    
}

let membreTemplate =`
    <div class="infomembre">
    <img src="/images/LeTech.JPG" alt="">
    <h5>Elie KAMALEBO</h5>
    </div>
`
let MembresListView = document.querySelector (".Listmembres")

if (MembresListView){
  fetch("js/membres.json")
  .then((reponse) => reponse.json())
  .then((data) => {
      console.log(data)
      let members = data;
      for (const membre of members) {
        MembresListView.innerHTML += `
        <div class="infomembre">
        <img src="${(membre.image)}" alt="">
        <h5>${(membre.name)}</h5>
        </div>
    `
      }
  });    
}

