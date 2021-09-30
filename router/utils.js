const packData = (data, code = 200, message = 'success') => {
    return {
        data,
        code,
        message
    }
}

module.exports = {
    packData
}