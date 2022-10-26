import express from 'express'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb:localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//nodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
//express library
routes(app);

//Public Floderに入ってる写真のPassを設定serving static file(display picture file)images, movie はFileに入れてOK!
//localhost:4000/tree.jpgでbrowserで写真を表示できる
app.use(express.static('public'));


//最初に繋げるページを指定
app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${PORT}`)
)

app.listen(PORT, () => 
console.log(`Your server is running on port ${PORT}`)
)