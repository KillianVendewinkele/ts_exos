Exercice 6: Implémentation
d'une interface

Objectif : Créez des classes TypeScript pour différents types d'animaux de compagnie qui
implémentent une interface définie.
Instructions :
1. Créez une interface Pet avec les propriétés et méthodes suivantes :
name: string : nom de l'animal de compagnie
age: number : âge de l'animal de compagnie
speak(): string : méthode pour obtenir le son produit par l'animal de compagnie
2. Créez une classe Dog qui implémente l'interface Pet .
Ajoutez un constructeur à la classe Dog pour initialiser les propriétés name et age .
Implémentez la méthode speak() pour renvoyer la chaîne de caractères "Woof!".
3. Créez une classe Cat qui implémente l'interface Pet .
Ajoutez un constructeur à la classe Cat pour initialiser les propriétés name et age .
Implémentez la méthode speak() pour renvoyer la chaîne de caractères "Meow!".
4. Créez une classe Parrot qui implémente l'interface Pet .
Ajoutez un constructeur à la classe Parrot pour initialiser les propriétés name , age
et une propriété supplémentaire words de type string[] pour stocker les mots que le
perroquet peut prononcer.
Implémentez la méthode speak() pour renvoyer une chaîne de caractères contenant
tous les mots que le perroquet peut prononcer, séparés par des virgules.
5. Créez des instances des classes Dog , Cat et Parrot et testez la méthode speak() pour
vérifier que les sons produits sont corrects.