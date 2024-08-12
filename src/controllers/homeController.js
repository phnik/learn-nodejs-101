const getHomepage = (req, res) => {
    res.send('Hello World with nodemon!');
}

const getHoiDanIt = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage, getHoiDanIt
}