const formLeave = document.querySelector("#leaveCustomer form");

formLeave.addEventListener("submit", function(e){

    e.preventDefault();

    const prenom = formLeave.children[0].children[0].children[1].value;
    const nom = formLeave.children[0].children[1].children[1].value;

    const client = clients.find(c =>
        c.prenom.toLowerCase() === prenom.toLowerCase() &&
        c.nom.toLowerCase() === nom.toLowerCase() &&
        c.present === true
    );

    if(!client){
        alert("Client introuvable");
        return;
    }

    const heureDepart = new Date().getHours();
    client.HeureDepart = heureDepart;

    const prix = prix_chambre[client.chambre];

    let total = client.nuits * prix;

    if(client.breakfast){
        total += client.nuits * prix_breakfast;
    }

    if(heureDepart > 11){
        total += majoration;
    }

    client.present = false;
    client.total = total;

    localStorage.setItem("clients", JSON.stringify(clients));

    alert(`
 FACTURE

Client : ${client.prenom} ${client.nom}
Chambre : ${client.chambre}
Nuits : ${client.nuits}
Petit déjeuner : ${client.breakfast ? "Oui" : "Non"}

TOTAL : ${total}€
`);

    formLeave.reset();
});