let express = require('express');
let app = express();
app.set('view engine', 'ejs');



app.get('/ejs', (req, res) => {
    let post = {
        title: 'EJS for teamplate engilne',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facere quas debitis optio vel voluptatem ipsa enim eveniet officia odio!',
        published: false,
        err_massage: 'Post not found'
    }
    let student = [
        {name: 'jamX', role: 'captian'},
        {name: 'kamX', role: 'std'},
        {name: 'spark', role: 'std'},
        {name: 'Babole', role: 'std'}
    ]
    res.render('pages/index', {title: 'Hello EJS', post, student})
})
app.get('/help', (req, res) => {
    let pages = {title:'help page'}
    res.render('pages/help', {pages})
})
app.get('/about', (req, res) => {
    let pages = {title:'about page'}
    res.render('pages/about', {pages})
})
app.get('/contact', (req, res) => {
    let pages = {title:'contact page'}
    res.render('pages/contact', {pages})
})
app.get('/', (req, res)=> {
    res.send('<h1>Wellcome Node js module</h1>')
})
app.get('*', (req, res) => {
    res.send('404 3rr0r')
})

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Your server is ready!!Your ${PORT} running now`);
})