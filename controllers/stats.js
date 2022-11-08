const Stats = require('../models/Stats')


module.exports = {
    getStats: async (req,res)=>{
        console.log(req.user)
        try{
            const statsItems = (await Stats.find()).map(item => [item._id, item.userId, item.name, item.teamAverage, item.position, item.PPG, item.RPG, item.APG, item.blocks, item.steals, item.FG, item.threePt, item.FT, item.assitTo])
            const find = await Stats.find({userId:req.user.id})
            
            res.render('stats.ejs',  {stats: statsItems ,  userId: find , user: req.user})
           console.log(userId)
        }catch(err){
            console.log(err)
        }
        
    },
    getStatsSheet: async (req,res)=>{
        console.log(req.user)
        try{
            const statsItems = (await Stats.find()).map(item => [item._id, item.userId, item.name, item.teamAverage, item.position, item.PPG, item.RPG, item.APG, item.blocks, item.steals, item.FG, item.threePt, item.FT, item.assitTo])
            const findId = await Stats.find({userId:req.user.id})
            console.log(findId)
            // const itemsLeft = await Position.countDocuments({userId:req.user.id,completed: false})
            res.render('statsSheet.ejs', {stats: statsItems ,  userId: findId, user: req.user})
        }catch(err){
            console.log(err)
        }
    },

    createStats: async (req, res)=>{
       
        try{
            
            // const result = await cloudinary.uploader.upload(req.file.path);

            await Stats.create({
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
            res.redirect('/stats')
        }catch(err){
            console.log(err)
        }
    },  updateStats: async(req,res)=> {
        //update stats from user input using the id
        try{ 
            const statsItems = (await Stats.find()).map(item => [item._id, item.userId, item.name,item.teamAverage, item.position, item.PPG, item.RPG, item.APG, item.blocks, item.steals, item.FG, item.threePt, item.FT, item.assitTo , item.teamO,item.teamD, item.mvp,item.mip,item.dpoy,item.roy,item.foy,item.coy])

            await Stats.findOneAndUpdate(
                {_id : req.params.id,
                },
                {   
                    name: req.body.nameItem  == '' ? statsItems[0][2] : req.body.nameItem,
                    position: req.body.positionItem == '' ? statsItems[0][4] : req.body.positionItem,
                    teamAverage: req.body.teamAverageItem  == '' ? statsItems[0][3] : req.body.teamAverageItem,
                    PPG:req.body.PPGItem  == '' ? statsItems[0][5] : req.body.PPGItem,
                    RPG:req.body.RPGItem  == '' ? statsItems[0][6] : req.body.RPGItem,
                    APG:req.body.APGItem  == '' ? statsItems[0][7] : req.body.APGItem,
                    blocks:req.body.blockItem  == '' ? statsItems[0][8] : req.body.blockItem,
                    steals:req.body.stealItem  == '' ? statsItems[0][9] : req.body.stealItem,
                    FG:req.body.FGItem  == '' ? statsItems[0][10] : req.body.FGItem,
                    threePt:req.body.threePtItem  == '' ? statsItems[0][11] : req.body.threePtItem,
                    FT:req.body.FtItem  == '' ? statsItems[0][12] : req.body.FtItem,
                    assitTo:req.body.assitToItem  == '' ? statsItems[0][13] : req.body.assitToItem,
                }
            );
            console.log('first update')
            res.redirect('/stats')
        }catch (err){
            console.log(err);
        }
    },
    deleteStats: async (req, res)=>{
        // console.log(req.body.todoIdFromJSFile)
        try{
            await Stats.findOneAndDelete({_id: req.params.id})
            console.log('Deleted Stats')
            res.redirect('/stats')
        }catch(err){
            console.log(err)
        }
    }
}    