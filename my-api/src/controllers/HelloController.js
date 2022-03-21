exports.HelloGet=(req,res)=>{
    res.status(200).json({status:"Success",data:"Hello Get API"})
}
exports.HelloPost=(req,res)=>{
    res.status(201).json({status:"Success",data:"Hello Post API"})
}