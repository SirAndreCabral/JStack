const CategoryRepository = require("./CategoriesRepository");

class CategoryController {
  async indexListAll(request, response) {
    const { orderBy } = request.query;

    const listCategories = await CategoryRepository.findAll(orderBy);

    response.json(listCategories);
  }

  async showListOne(request, response) {
    const { id } = request.params;

    const contactById = await CategoryRepository.findById(id);

    response.json(contactById);
  }

  async storeCreate(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({error: "Name is required"});
    }

    const category = await CategoryRepository.create({ name });
    
    response.json(category);
  }
}

module.exports = new CategoryController();