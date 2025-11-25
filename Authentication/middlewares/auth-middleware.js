const jwt = require('jsonwebtoken');


const authMiddleware = (req , res ,next) =>{
    const header = req.headers['authorization'];


    const token = header && header.split(' ')[1];
     

}
