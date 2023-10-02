interface Contact{
    id: string,
    name: string,
    email: string,
    phone?: string
}

class AddressBook {
    constructor(public contacts: Contact[]) {
        
    }

    searchContactByName(name: string){
        let contactList : Contact[] = [];
        this.contacts.forEach(element => {
            if(element.name === name){
                contactList.push(element);
            }
        });
        return contactList;
    }

    searchContactByMail(mail: string){
        let contactList : Contact[] = [];
        this.contacts.forEach(element => {
            if(element.email === mail){
                contactList.push(element);
            }
        });
        return contactList;
    }

    searchContactByPhone(phone: string){
        let contactList : Contact[] = []; 
        this.contacts.forEach(element => {
            if(element.phone === phone){
                contactList.push(element);
            }
        });
        return contactList;
    }

    addContact(contact: Contact){
        this.contacts.forEach(element => {
            if(element.id === contact.id){
                console.log("Utilisateur deja existant")
                return 0;
            }
        });
        this.contacts.push(contact);
        console.log("Contact ajouté");
    }

    changeContact(contact: Contact){
        this.contacts.forEach(element => {
            if(element.id === contact.id){
                element.name = contact.name;
                element.email = contact.email;
                element.phone = contact.phone;
            }
        });
    }

    deleteContact(id : string){
        for (let index = 0; index < this.contacts.length; index++) {
            const element = this.contacts[index];
            if (element.id === id) {
                this.contacts.splice(index, 1);
            }   
        };
        console.log("Contact supprimé");
    }
}

let addressBook = new AddressBook([]);
addressBook.addContact({id : "2", name : "Michl", email : "michl@ere.com", phone : "012255"});
addressBook.addContact({id : "3", name : "Mic", email : "mic@e.com", phone : "01"});
addressBook.changeContact({id : "2", name : "Michl", email : "michl@ere.com", phone : "01"});
console.log(addressBook.searchContactByPhone("01"));
addressBook.deleteContact("2")
console.log(addressBook.searchContactByPhone("01"));

