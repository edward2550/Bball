
const cloudinary = require("../middleware/cloudinary")
const { GridFSBucket } = require('mongodb')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = (await Todo.find()).map(item => [item.name, item.teamAverage, item.position, item.PPG, item.RPG, item.APG, item.blocks, item.steals, item.FG, item.threePt, item.FT, item.assitTo])
            const findId = await Todo.find({userId:req.user.id})
            console.log(todoItems)
            const itemsLeft = await Position.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {todos: todoItems ,  userId: findId, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
       
        try{
            
            // const result = await cloudinary.uploader.upload(req.file.path);

            await Todo.create({
                name: req.body.nameItem,
                position: req.body.positionItem,
                teamAverage: req.body.teamAverageItem,
                PPG:req.body.PPGItem,
                RPG:req.body.RPGItem,
                APG:req.body.APGItem,
                blocks:req.body.blockItem,
                steals:req.body.stealItem,
                FG:req.body.FGItem,
                threePt:req.body.threePtItem,
                FT:req.body.FtItem,
                assitTo:req.body.assitToItem,
                userId: req.user.id,
                teamO: false,
                teamD: false,
            })
           
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    createPosition: async (req, res)=>{
        try{
            await Position.create({
                name: req.body.nameItem,
                position: req.body.positionItem,
                teamAverage: req.body.teamAverageItem,
                PPG:req.body.PPGItem,
                RPG:req.body.RPGItem,
                APG:req.body.APGItem,
                blocks:req.body.blockItem,
                steals:req.body.stealItem,
                FG:req.body.FGItem,
                threePt:req.body.threePtItem,
                FT:req.body.FTItem,
                assitTo:req.body.assitToItem
            })
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                teamO: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markTeamD: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                teamD: true
            })
            console.log('teamD mark')
            res.json('Marked Complete')
            console.log(res.json())
        }catch(err){
            console.log(err)
        }
    },
    markInTeamD: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                teamD: false
            })
            console.log('Marked teamD incomplete')
            res.json('Marked Complete')
            console.log(res.json())
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                teamO: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    markIncompletee: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    