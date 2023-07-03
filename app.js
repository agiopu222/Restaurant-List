// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
// 載入handlebars
const exphbs = require('express-handlebars')

// 設定樣板引擎
app.engine('hbs', exphbs({ defaultLayout: 'main' , extname: '.hbs' }));
app.set('view engine', 'hbs')

// 設定靜態檔案資料夾位置
app.use(express.static('public'))

// 設定首頁路由
app.get('/', (req, res) => {
    res.render('index')
})

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})