const { v4 } = require("uuid");

let contacts = [
    {
        id: v4(),
        name: 'Mateus',
        email: 'mateus@mail.com',
        phone: '123123123',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Jose',
        email: 'jose@mail.com',
        phone: '321321321',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Maria',
        email: 'maria@mail.com',
        phone: '000000000',
        category_id: v4(),
    }
];

class ContactsRepository {
    findAll() {
        return new Promise((resolve) => {
            resolve(contacts)
        });
    }

    findById(id) {
        return new Promise((resolve) => resolve (
            contacts.find((contact) => contact.id === id)
        ));
    }
    
    findByEmail(email) {
        return new Promise((resolve) => resolve (
            contacts.find((contact) => contact.email === email)
        ));
    }

    createNewUser({ name, email, phone }) {
        return new Promise((resolve) => {
            const newContact = {
                id: v4(),
                name,
                email,
                phone,
                category_id: v4(),
            }
            contacts.push(newContact);
            resolve(newContact);
        });
    }

    updateUser(id, {
        name, email, phone
    }) {
        return new Promise((resolve) => {
            const updatedContact = {
                name, 
                email,
                phone,
                category_id: v4(),
            };

            contacts = contacts.map((contact) => (
                contact.id === id ? updatedContact : contact
            ))

            resolve(updatedContact)
        });
    }

    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id !== id);
            resolve();
        });
    }

}

module.exports = new ContactsRepository();