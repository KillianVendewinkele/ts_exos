Exercice 7 : Gestion d'une
file d'attente générique
Objectif : Créez une classe TypeScript générique pour gérer une file d'attente avec des opérations
d'ajout et de suppression d'éléments.
Instructions :
1. Créez une classe générique Queue<T> avec une propriété privée elements de type T[]
pour stocker les éléments de la file d'attente.
2. Ajoutez une méthode enqueue(element: T) pour ajouter un élément à la fin de la file
d'attente.
3. Ajoutez une méthode dequeue(): T | null pour retirer et renvoyer le premier élément de la
file d'attente, ou null si la file d'attente est vide.
4. Ajoutez une méthode isEmpty(): boolean pour vérifier si la file d'attente est vide.
5. Ajoutez une méthode size(): number pour obtenir la taille de la file d'attente.
6. Testez la classe Queue avec différents types d'éléments et vérifiez que les opérations de
file d'attente fonctionnent correctement.