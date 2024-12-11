const ContactsRepository = require("./ContactsRepository");

class ContactController {
  async indexListAll (request, response) {
    // pegar por parametro da query
    const { orderBy } = request.query;

    // Listar TODOS os registros
    const contacts = await ContactsRepository.findAll(orderBy);

    response.json(contacts);
  }
    
  async showListOne(request, response) {
    // listar UM registro
    const { id } = request.params;
    const contactById = await ContactsRepository.findById(id);

    if(!contactById) {
      return response.status(404).json({ error: "User Not Found" });
    }

    return response.json(contactById);
  }

  async storeCreate(request, response) {
    // Criar um registro
    const { name, email, phone } = request.body;

    if(!name) {
      return response.status(400).json({ error: "Name required" });
    }

    const contactsExists = await ContactsRepository.findByEmail(email);

    if (contactsExists) {
      return response.status(400).json({ erro: "Esse email ja está em uso"});
    }

    const contact = await ContactsRepository.createNewUser({
      name, email, phone,
    });

    return response.json(contact);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactsRepository.findById(id);

    if(!contactExists) {
      return response.status(404).json({ error: "User Not Found" });
    }

    if(!name) {
      return response.status(400).json({ error: "Name required" });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id != id) {
      return response.status(400).json({ erro: "Esse email ja está em uso"});
    }

    const updatedUser = await ContactsRepository.updateUser(id, {
      name, email, phone, category_id,
    });

    return response.json(updatedUser);
  }

  async delete(request, response) {
    // Deleta um registro
    const { id } = request.params;

    await ContactsRepository.delete(id);

    response.sendStatus(204);
  } 
}

//Singleton
module.exports = new ContactController();