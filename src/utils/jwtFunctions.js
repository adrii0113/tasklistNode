
const jwt = require('jsonwebtoken');


const verifyToken = (req,res  ) => {
    console.log('')
    const authorization = req.get('authorization');
    let token = '';
    if(authorization && authorization.toLocaleLowerCase().startsWith('bearer')){
        token = authorization.substring(7);
    }
    let decodedToken ={}
    try {
        decodedToken = jwt.verify(token, process.env.SECRET) 
    } catch (e) {res.status(401).json({error: 'Invalid token or missing authorization'});}

    if(!token || !decodedToken.id){
        return res.status(401).json({error: 'Invalid token or missing authorization'});
    }
}




module.exports = verifyToken;