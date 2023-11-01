const models = require('../models/index');

class AreaController {
    static async index(req, res) {
        const areas = await models.Area.findAll();
        res.render('area', {
            areas: areas.map(area => area.toJSON())
        });
        // res.send(areas);
    }
}

module.exports = AreaController;