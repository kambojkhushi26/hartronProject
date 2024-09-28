const userModel = require('../models/userModel')
module.exports.CreateUser = async (req, res) => {

        try {
                const data = req.body
                const UserDB = await userModel.create(req.body)
                console.log(UserDB);
                return res.send({ satus: true, msg: 'Khushi', data: req.body })
        }

        catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}  