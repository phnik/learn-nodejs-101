const pool = require("../config/database");


const getHomepage = (req, res) => {
    //simple query
    pool.query(
        'SELECT * FROM Users;',
        function (err, results, fields){
            console.log(">> results =\n", results);
            res.send(JSON.stringify(results));
        }
    );
    
}

const getHoiDanIt = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage, getHoiDanIt
}