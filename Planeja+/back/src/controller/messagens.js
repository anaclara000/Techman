const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const read = async (req, res) => {
    let mensagem = await prisma.mensagem.findMany();

    res.status(200).json(mensagem).end();
}

const readOne = async (req, res) => {
    const { destinatarioId } = req.params;

    try {
        const messages = await prisma.mensagem.findMany({
            where: {
                destinatarioId: Number(destinatarioId)
            },
            orderBy: {
                data: 'asc' // Ordenar por data em ordem crescente (do mais antigo para o mais recente)
            },
            select: {
                id_mensagem: true,
                conteudo: true,
                remetente: true,
                destinatario: true,
                remetenteId: true,
                destinatarioId: true,
                conversa: true,
                conversaId: true,
                data: true // Adicionando a propriedade 'data' para ser retornada
            }
        });

        res.status(200).json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar as mensagens.' });
    }
};

module.exports = {
    read,
    readOne
}