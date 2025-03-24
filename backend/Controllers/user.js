const { AD_INFO } = require("../MongoDB/Additional_info")

async function getAllUsers(req , res) {
    const result = await AD_INFO.find()
    if( !result ) return res.send("Err")
    return res.json(result)
}

module.exports = {
    getAllUsers
}
