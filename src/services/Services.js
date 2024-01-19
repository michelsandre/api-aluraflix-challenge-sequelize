const dataSource = require("../database/models");

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegistersService() {
    return dataSource[this.model].findAll();
  }

  async getRegisterByIdService(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createRegisterService(data) {
    return dataSource[this.model].create(data);
  }

  async updateRegisterService(data, id) {
    return dataSource[this.model].update(data, {
      where: {
        id: id,
      },
    });
  }

  async deleteRegisterService(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
