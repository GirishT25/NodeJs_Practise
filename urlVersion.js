
const urlVersion = (version) => (req ,res, next)=>{
    if(req.path.startsWith(`/api/${version}`)){
        next();
    }
    else {
        return res.status(400).json({
            success : false,
            message :  "API version does not Supported"
        })
    }
}

const headerVersion = (version) =>(req ,res ,next) =>{
    if(req.get('Accepted-Version') === version){
        next();
    }
    else{
        return res.status(400).json({
            success : false,
            message :  "API version does not Supported"
        })
        
    }
}

const ContentTypeVerion = (version)=>(req,res,next)=>{
    contentType = req.get('Content-Type');
    if(contentType && contentType.includes(`/api/vnd.api.${version}+json`)){
        next();
    }
    else{
            return res.status(400).json({
            success : false,
            message :  "API version does not Supported"
        })
    }
}


module.exports = {
    urlVersion ,headerVersion , ContentTypeVerion
}