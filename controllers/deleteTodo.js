const Todo = require("../models/Todo");

exports.deleteTodo = async (req,res)=>{
    try{
        
        // id ki help se delete krege deconstruction
        const {id} = req.params;

        //logic fetch the data form module by Todo and with the help of findById
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:`Delete SuccessFully by this id ${id}`,
        });
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            c:false,
            message:"Error Received Not Delete",
            error:err.message,
        })
    }
}