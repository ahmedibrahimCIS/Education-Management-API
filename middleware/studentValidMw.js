import validator from '../Util/studentValidator'

export default (req,res,nxt)=>{
    let valid = validator(req.body);
    if (valid) {
        nxt()
    }else{
        res.status(403).send('Forbidden');
    }
}