const Todo = require("../models/Todo");

// Logic likhna he put wala
exports.updateTodo = async (req,res) =>{
    try{
        
        // Bhai update krna he to kise update krna he iske liye Id important he na to id se fatch krege then update krege
         const id = req.params.id;
         const{title,description} = req.body;
        // Update the Data
        const todo = await Todo.findById(
           {_id:id},
           {title,description,updatedAt:Date.now()},
        );
        

        res.status(200).json({
            success:true,
            message:`Updated Successfully by this id.. ${id} `,
            data:todo,
        })
    }
    catch(err){
        console.log("Not Update data Error Received");
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Error Received not Update Data",
            error:err.message,
        })
    }
}
