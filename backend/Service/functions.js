const { USER_D } = require("../MongoDB/user_info");

async function CheckForAnotherUser(username) {
    const allUsers = await USER_D.find()
    const result = allUsers.filter( (v) => v.username === username )
    console.log(result)
    return ( result.length == 0 ) ? false : true
}

module.exports = {
    CheckForAnotherUser
}
