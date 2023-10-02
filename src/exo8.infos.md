Exercice 8 : Gestion d'un
carnet d'adresses

Objectif : Créez une application TypeScript pour gérer un carnet d'adresses avec des opérations de
recherche, d'ajout, de modification et de suppression de contacts.
Instructions :
1. Créez une interface Contact avec les propriétés suivantes :
id: string : identifiant unique du contact
name: string : nom du contact
email: string : adresse e-mail du contact
phone?: string : numéro de téléphone du contact (optionnel)
2. Créez une classe AddressBook avec une propriété privée contacts de type Contact[] pour
stocker les contacts.
3. Ajoutez des méthodes pour effectuer les opérations suivantes :
Rechercher des contacts par nom, e-mail ou numéro de téléphone
Ajouter un nouveau contact
Modifier les informations d'un contact existant
Supprimer un contact en fonction de son identifiant
4. Gérez les erreurs et les cas particuliers, par exemple les contacts en double ou les
contacts inexistants.
5. Testez la classe AddressBook avec différents scénarios d'utilisation pour vérifier que les
opérations de gestion des contacts fonctionnent correctement.