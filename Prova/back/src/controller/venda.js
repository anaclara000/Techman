const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const create = async (req, res) => {
    let Venda = await prisma.Venda.create({
        data: req.body
    });

    res.status(200).json(Venda).end();
}
const read = async (req, res) => {
    let Venda = await prisma.Venda.findMany();

    res.status(200).json(Venda).end();
}


module.exports = {
    read,
    create

}