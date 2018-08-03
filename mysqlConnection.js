var mysql = require('mysql');

var dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'bulletin_board'
};

var connection = mysql.createConnection(dbConfig);

// これで外部からrequireすることによって、connectionを使えるようになった
module.exports = connection;
