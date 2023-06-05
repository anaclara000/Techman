const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const create = async (req, res) => {
    let automoveis = await prisma.automoveis.create({
        data: req.body
    });

    res.status(200).json(automoveis).end();
}
const read = async (req, res) => {
    let automoveis = await prisma.automoveis.findMany();

    res.status(200).json(automoveis).end();
}


module.exports = {
    read,
    create

}