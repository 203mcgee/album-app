const router = require('express').Router()

const {labelDao:dao} = require('../../daos/dao')

// http://localhost:3000/api/label
router.get('/',(req,res)=>{
    dao.findAll(req,res,dao.table)
})
router.get('/get_albums/:id',(req,res)=> {
    dao.findAlbumsByArtist(res,dao.table,req.params.id)
})
// http://localhost:3000
router.get('/sort/:sorter',(req,res)=>{
    dao.sort(res,dao.table,req.params.sorter)
})

router.get('/:id',(req,res)=>{
    dao.findById(res,dao.table,req.params.id)
})

module.exports = router