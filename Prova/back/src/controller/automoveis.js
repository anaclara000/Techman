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

const readOne = async (req, res) => {
    let automoveis = await prisma.automoveis.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            modelo: true,
            preco: true
        }
    });

    //SELECT * FROM automoveis INNER JOIN publicacao ON automoveis.id = publicacao.automoveis_id WHERE ....

    res.status(200).json(automoveis).end();
}


module.exports = {
    read,
    create,
    readOne

}