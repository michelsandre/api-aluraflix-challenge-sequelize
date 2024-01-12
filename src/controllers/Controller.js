class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAllRegisters(req, res) {
    try {
      const itemsList = await this.entidadeService.getAllRegistersService();
      return res.status(200).send(itemsList);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async getRegisterById(req, res) {
    const id = req.params.id;
    try {
      const item = await this.entidadeService.getRegisterByIdService(id);
      return res.status(200).send(item);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async createRegister(req, res) {
    const data = req.body;
    try {
      const newData = await this.entidadeService.createRegisterService(data);
      return res.status(200).send(newData);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = Controller;
