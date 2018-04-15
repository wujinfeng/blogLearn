module.exports = function (app) {
    app.get('/', (req, res)=> {
        res.redirect('/posts');
    });

    app.use(require('express-formidable')({
    	uploadDir: path.join(__dirname,'public/img'), // 上传文件目录
    	keepExtensions:true //保留后缀
    }));

    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
};