const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const read = async (req, res) => {
    let Message = await prisma.Message.findMany();

    res.status(200).json(Message).end();
}

module.exports = {
    read
}