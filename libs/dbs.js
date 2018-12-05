module.exports=dbs;


    function dbs(db){
        return function(req,res,next){
            req.db=db;
            next();
        }
    }
