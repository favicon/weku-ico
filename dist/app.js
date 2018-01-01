'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _steem = require('steem');

var _steem2 = _interopRequireDefault(_steem);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var returnJson = null;

_steem2.default.config.set('address_prefix', 'TST');
_steem2.default.api.setOptions({ url: 'ws://demo.weku.io:9876' });

app.use((0, _cors2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, '/public')));

app.get('/', function (req, res) {
    return res.sendFile(_path2.default.join(__dirname + '/index.html'));
});

app.get('/t', function (req, res) {
    return res.sendFile(_path2.default.join(__dirname + '/index1.html'));
});


app.get('/chinese', function (req, res) {
    return res.sendFile(_path2.default.join(__dirname + '/index_cn.html'));
});

app.get('/getCurrentBlock', function (req, res) {
    res.setHeader('Cache-Control', 'no-cache');res.send(getCurrentBlock());
});


app.get('/chat', function (req, res) {
    res.redirect('http://demo.weku.io:8080');
});

//app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/demo', function (req, res) {
    res.redirect('http://demo.weku.io');
});


app.get('/cn', function (req, res) {
    res.redirect('http://demo.weku.io:9090');
});


app.get('/connect', function (req, res) {
    res.redirect('http://demo.weku.io:3000/dashboard');

});


_http2.default.createServer(app).listen(80, function () {
    return console.log('weku listening on port 80!');
});

_https2.default.createServer({
    key: _fs2.default.readFileSync('./certs/weku_io.key'),
    cert: _fs2.default.readFileSync('./certs/weku_io.crt')
}, app).listen(443, function () {
    return console.log('weku listening on port 443!');
});

function getCurrentBlock() {
    _steem2.default.api.getState('trending2', function (err, response) {
        _steem2.default.api.getBlock(response.props.head_block_number, function (err, result) {
            var currentBlockNumber = 'The current block number:' + response.props.head_block_number;
            var blockContent = JSON.stringify(result, null, 4).replace("initminer", "wekuminer").replace('"transaction_merkle_root": "0000000000000000000000000000000000000000",', '');
            returnJson = { 'currentBlockNumber': currentBlockNumber, 'blockContent': blockContent };
            return false;
        });
    });
    return returnJson;
}
