module.exports.profile=function(req, res){
    return res.render('profile', {
        title:"Profile"
    })
    //res.end('<h1>Loaded controller number 2</h1>');
}