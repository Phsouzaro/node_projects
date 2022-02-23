exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.'
    next();
}
exports.outroMiddleware = (req, res, next) => {
    next();
}
exports.chekCsrfErro = (erro, req, res, next) =>{
    console.log(erro.code)
    if(erro && erro.code === 'EBADCSRFTOKEN' ) {
        return res.render('404')
    }else{
        return console.log(req.csrfToken())
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}