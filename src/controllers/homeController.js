const pool = require("../config/database");


const getHomepage = (req, res) => {
    //simple query
    
    return res.render('home.ejs')
}

const getHoiDanIt = (req, res) => {
    res.render('sample.ejs')
}

const getForm = (req, res) =>{
    pool.query(
        'SELECT * FROM Users;',
        function (err, results, fields){
            console.log(">> results =\n", results);
            res.send(JSON.stringify(results));
        }
    );
}
module.exports = {
    getHomepage, getHoiDanIt, getForm
}