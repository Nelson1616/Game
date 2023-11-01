const models = require('../models/index');

class AreaController {
    static async index(req, res) {
        const areas = await models.Area.findAll();
        areas.map(area => area.toJSON())
        res.render('area', {
            areas: areas
        });
        // res.send(areas);
    }
}

module.exports = AreaController;