const _validator = require('../Util/instructorValidator.js')

module.exports =(req,res,nxt)=>{
    
        let valid = _validator(req.body);
        if (valid) { nxt()}
        else{
            res.status(403).send('Forbidden Command');
        }
       
        
        
       

 
}