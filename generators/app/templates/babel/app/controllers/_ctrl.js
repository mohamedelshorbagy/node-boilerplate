import { services as <%= serviceName %>Service } from '../services/<%= serviceName %>';


const { all } = <%= serviceName %>Service;

export const ctrls = {
    all(req, res, next) {
        return all()
            .then(response => {
                return res.status(200).json({
                    success: true,
                    data: response
                })

            })
            .catch(err => {
                return res.status(200).json({
                    success: true,
                    message: 'Something went wrong!'
                })

            })
    }
}



