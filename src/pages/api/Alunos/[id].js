export default function handler(req,res) {
    const id = +req.query.id
    res.status(200).json({
        id,
        nome: `Guizão do Zap ${id}`,
        email: `guizaodozapzap${id}@gmail.com` 
    })
}