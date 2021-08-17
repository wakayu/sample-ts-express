"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// CORSの許可
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// body-parserに基づいた着信リクエストの解析
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// GetとPostのルーティング
var router = express_1.default.Router();
router.get('/api/getTest', function (req, res) {
    res.send(req.query);
});
router.post('/api/postTest', function (req, res) {
    res.send(req.body);
});
app.use(router);
// 3000番ポートでAPIサーバ起動
app.listen(3000, function () { console.log('Example app listening on port 3000!'); });
