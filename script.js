// Additionnez tous les nombres positifs d'un tableau et retourner le résultat
// Exemple : [1, -2, 4] = 5
// Attention s'il n'y a que des nombres négatifs, retournez 0

// Déclaration de la fonction addOnlyPositiveNumbers ayant comme paramètre un tableau de valeurs numériques et de retouner le total
const addOnlyPositiveNumbers = (arr) => {
  // Création de la variable total qui est réglée initialement à 0
  let total = 0;

  // Boucle for qui va parcourir le tableau de valeurs numériques
  for (let i = 0; i < arr.length; i++) {
    // Si le nombre est supérieur à 0
    if (arr[i] > 0) {
      // on l'ajoute au total
      total += arr[i];
    }
  }
  // et on retourne le total
  return total;
};

console.log(addOnlyPositiveNumbers([1, 2, 3, 4, 5])); // 15
console.log(addOnlyPositiveNumbers([-2, -5])); // 0
console.log(addOnlyPositiveNumbers([-6, 5, 5, -2])); //10
console.log(addOnlyPositiveNumbers([0])); // 0
console.log(addOnlyPositiveNumbers([])); //0

// Autre méthode

/*const addOnlyPositiveNumbers = (arr) => {
    return arr.reduce((acc,current) => current > 0 ? acc + current : acc, 0);
}*/
