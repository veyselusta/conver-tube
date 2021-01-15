const router = require('express').Router()
const ytdl = require('ytdl-core')

router.get('/', (req,res)=>{
  const url = req.query.url
  res.header('Content-Disposition', 'attachment; filename = video.mp4')

  ytdl(url, {
    format : 'mp4'
  }).pipe(res)
})

module.exports = router