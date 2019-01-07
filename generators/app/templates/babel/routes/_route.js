import * as express from 'express';
import { ctrls as <%= serviceName %>Ctrls } from '../app/controllers/<%= serviceName %>';

const { all } = <%= serviceName %>Ctrls;


const router = express.Router();




router.get('/all', all);


export default router;