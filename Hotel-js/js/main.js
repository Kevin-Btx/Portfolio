const prix_chambre = {
    "1personne": 65,
    "2personne": 89,
    "4personne": 139,
    "loft": 189
};

const prix_breakfast = 7;
const majoration = 10;



let clients = JSON.parse(localStorage.getItem("clients")) || [
{
    id: 1,
    nom: "Garcia",
    prenom: "José",
    chambre: "1personne",
    HeureArrivee: 16,
    nuits: 4,
    breakfast: false,
    HeureDepart: 11,
    present: true
},
{
    id: 2,
    nom: "De Caunes",
    prenom: "Antoine",
    chambre: "2personne",
    HeureArrivee: 18,
    nuits: 2,
    breakfast: true,
    HeureDepart: 12,
    present: true
}
];

for (let client of clients) {

    if (client.HeureArrivee < 15) {
        client.present = false;
        continue;
    }

    const prix = prix_chambre[client.chambre];

    let total = client.nuits * prix;

    if (client.breakfast) {
        total += client.nuits * prix_breakfast;
    }

    if (client.HeureDepart > 11) {
        total += majoration;
    }

    client.total = total;
}

localStorage.setItem("clients",JSON.stringify(clients));

console.log(clients);

