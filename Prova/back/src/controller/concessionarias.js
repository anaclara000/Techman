const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const create = async (req, res) => {
    let concessionarias = await prisma.concessionarias.create({
        data: req.body
    });

    res.status(200).json(concessionarias).end();
}
const read = async (req, res) => {
    let concessionarias = await prisma.concessionarias.findMany();

    res.status(200).json(concessionarias).end();
}


module.exports = {
    read,
    create

}