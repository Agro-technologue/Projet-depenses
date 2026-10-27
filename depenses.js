// J06 — Bilan des dépenses
// 1. Tableau initial des depenses : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// 2. Fonction pour calculer le total des depenses
function calculerTotal(depenses) {
  return depenses.reduce((total, montant) => total + montant, 0);
}
// 3. Fonction pour calaculer la moyenne des depenses
function calculerMoyenne(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return calculerTotal(depenses) / depenses.length;
}

// 4. Fonction selectionne les depenses superieures à 2000 FCFA
function filtrerGrossesDepenses(depenses) {
  return depenses.filter(montant => montant > 2000);
}

// 5. Fonction pour rechercher la depense maximale
function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return Math.max(...depenses);
}

// 6. Creer une copie triée par ordre croisant.
const depensesTriees = [...depensesSemaine].sort((a, b) => a - b);

// 7. Calculer les resultats
const total = calculerTotal(depensesSemaine);
const moyenne = calculerMoyenne(depensesSemaine);
const depensesSuperieures = filtrerGrossesDepenses(depensesSemaine);
const maximale = trouverMaximum(depensesSemaine);

// 8. Afficher le rapport
console.log("====RAPPORT DES DEPENSES====");
console.log(`Tableau initial : ${depensesSemaine}`);
console.log(`Total des depenses : ${total} FCFA`);
console.log(`Moyenne par jour : ${moyenne.toFixed(2)} FCFA`);
console.log(
  `Depenses supérieures à 2000 FCFA : ${depensesSuperieures}`
);
console.log(`Depense maximale : ${maximale} FCFA`);
console.log(`Tableau initial avant le tri : ${depensesSemaine}`);
console.log(`Copie triée par ordre croissant : ${depensesTriees}`);

console.log("====FIN DU RAPPORT===");
