const Todo = require("../models/Todo");

// define Route Handler
exports.getTodo = async(req,res)=>{
    try{
      //  fetch all the todos where (Todo is model name)
      const todos = await Todo.find({});
      //   response
      res.status(200).json({
        success:true,
        data:todos,
        message:"Received the data",
      });
    }
    catch(err){
       console.error(err);
       console.log(err);
       res.status(500).json({
           success:false,
           message:"Internal Server error",
           error:err.message,
         }
       ) 
    }
};

exports.getTodoById = async (req,res)=>{
    try{
        const id = req.params.id;

        //  only fetch thode ID
        const todo = await Todo.findById({_id: id});
        
        // Response 
        if(!todo){ 
         return res.status(404).json({
             success:false,
             message:"No Data found by Given ID",
          })
        }

        // data for given Id Found
        res.status(200).json({
            success:true,
            data:todo,
            message:'Todo ${id} Successfully fetch the Data',
         });
    }
    catch(err){
       console.log(err);
       console.error(err);
       res.status(500).json({
           success:false,
           message:"No data Present",
           error:err.message,
       })
    }
};