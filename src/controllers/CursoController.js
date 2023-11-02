const models = require('../models/index');

class CursoController {
    static async index(req, res) {
        const cursos = await models.Curso.findAll()
        res.render('curso/index', {
            cursos: cursos.map(curso => curso.toJSON())
        });
        // res.send(cursos);
    }

    static async create(req, res) {
        const areas = await models.Area.findAll();

        res.render('curso/create', {
            areas: areas.map(area => area.toJSON())
        });
    }

    static async store(req, res) {
        await models.Curso.create({
            sigla: req.body.sigla,
            nome: req.body.nome,
            descricao: req.body.descricao,
            areaId: req.body.areaId,
        })

        res.redirect('/curso')
    }
}

module.exports = CursoController;