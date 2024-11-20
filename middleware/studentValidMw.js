const validator =require('../Util/studentValidator')

module.exports = (req,res,nxt)=>{
    let valid = validator(req.body);
    if(valid){ nxt()}
    else {
        res.status(403).send('Forbidden Command');

    }

}