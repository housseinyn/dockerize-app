const express = require('express')
const app = express();


// Static Middleware 
//من اجل التعامل هع مسار الملفات 
//وتتضمن ايضا ملفات static
const path = require('path')
app.use(express.static(path.join(__dirname, 'assets', )))

//  templet engin المستخدم
app.set('view engine', 'ejs')
//اين توجد ملفات templet engin
app.set('views', 'views')



// Without middleware

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/shop',(req,res)=> {
    res.render('shop')
})
app.get('/contact',(req,res)=> {
    res.render('contact')})








app.listen(3000, () => console.log('Example app listening on port'))