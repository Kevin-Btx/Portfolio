const formReservation = document.querySelector("#réservation form");

formReservation.addEventListener("submit", function(e) {

    e.preventDefault();

    const prenom = formReservation.children[0].children[0].children[1].value;
    const nom = formReservation.children[0].children[1].children[1].value;
    const nuits = parseInt(formReservation.children[0].children[2].children[1].value);
    const chambre = document.getElementById("InputPerson").value;

    const breakfast =
        document.getElementById("radioYes").checked;

    const heure = new Date().getHours();

    if (heure < 15) {
        alert("Arrivée trop tôt !");
        return;
    }

    const nouveauClient = {
        id: Date.now(),
        prenom,
        nom,
        nuits,
        chambre,
        breakfast,
        HeureArrivee: heure,
        HeureDepart: null,
        present: true
    };

    clients.push(nouveauClient);

    localStorage.setItem("clients", JSON.stringify(clients));

    alert("Client enregistré avec succès");

    formReservation.reset();
});