var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

router.get('/:board_id', function(req, res, next){
  var boardId = req.params.board_id;
  var query = 'SELECT * FROM boards where board_id = ' + boardId;
  connection.query(query, function(err, board){
    res.render('board', {
    title: board[0].title,
    board: board[0]
    });
  });
});

router.post('/:board_id', function(req, res, next){
  var message = req.body.message;
  var boardId = req.params.board_id;
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  var query = 'insert into messages (message, board_id, created_at) values("'+ message +'", '+' "'+ boardId +'", '+'"'+ createdAt +'")';
  connection.query(query, function(err, rows){
    res.redirect('/boards/' + boardId);
  });
});

module.exports = router;
