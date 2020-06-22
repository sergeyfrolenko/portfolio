const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.get('/:dir/:id', function(req, res){
   res.send('folder '+req.params.dir+', page '+req.params.id);
});

module.exports = router;
