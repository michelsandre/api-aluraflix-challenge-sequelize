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
}

module.exports = Services;
