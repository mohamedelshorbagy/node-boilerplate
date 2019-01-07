const { all } = require('../services/<%= serviceName %>');

const ctrls = {};
ctrls.all = (req, res, next) => {
    return all().then((result) => {
        return res.status(200).json({
            success: true,
            data: result
        });
    });
}


module.exports = ctrls;