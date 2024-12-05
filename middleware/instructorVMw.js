import _validator from '../Util/instructorValidator.js'

export default (req,res,nxt)=>{
    let valid = validator(req.body);
    if (valid) {
        nxt()
    }else{
        res.status(403).send('Forbidden');
    }
}