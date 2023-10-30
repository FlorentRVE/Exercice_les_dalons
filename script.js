let users = []; // Tableau vide pour stocker les utilisateurs

function getUsers() {
    return fetch("https://randomuser.me/api/?results=20") // Récupération des données de l'API
        .then((reponse) => reponse.json()) // Permet de lire les données au format JSON
        .then((data) => data.results); // Permet de sélectionner uniquement les résultats
  }

async function displayUsers() {

    users = await getUsers(); // On remplie le tableau avec les utilisateurs

    users.forEach((element) => {

      // Création de la balise <img>
      let image = document.createElement("img");
      image.src = element.picture.medium;
      image.classList.add(
        "rounded-xl",
        "shadow-lg",
        "w-32",
        "h-32",
        "rounded-full",
        );
        image.style.borderRadius = "50%";

      // Création de la balise <p>
      let name = document.createElement("h3");
      name.innerText = element.name.title + " " + element.name.first + " " + element.name.last;

      // Création de la balise <p>
      let gender = document.createElement("p");
      gender.innerText = element.gender;
      gender.classList.add(
        "font-semibold",
        "text-lg",
        "text-center",
        "bg-blue-200",
        "rounded-full",
        "py-1",
        "px-2",
        );

      // Création de la balise <p>
      let email = document.createElement("p");
      email.innerText = element.email;
      email.classList.add("font-semibold");

      // Création de la div pour chaque  profil
      let profil = document.createElement("div");
      profil.classList.add(
        "bg-gradient-to-tr",
        "from-green-300",
        "to-yellow-300",
        "p-4",
        "rounded-xl",
        "flex",
        "flex-col",
        "gap-2",
        "items-center",
        "justify-center",
        "shadow-xl"
      );

      // Sélection de la <section> ou l'on va afficher
      let contenant = document.getElementById("container");

      // On attache nos balise dans le contenant <article>
      profil.appendChild(image);
      profil.appendChild(name);
      profil.appendChild(gender);
      profil.appendChild(email);

      // Qui lui-même sera rattaché au contenant <a>
      contenant.appendChild(profil);

    });

  }

  getUsers();
  displayUsers();