import { services as <%= serviceName %>Service } from '../services/<%= serviceName %>';
import { Response, Request } from 'express'

const { all } = <%= serviceName %>Service;


export let ctrls = {
    all(req: Request, res: Response) {
        return all()
            .then(response => {
                return res.status(200).json({
                    success: true,
                    data: response,
                })
            })
            .catch(err => {
                return res.status(500).json({
                    success: false,
                    message: 'Something went wrong!'
                })
            })


    }




};




export default ctrls;










