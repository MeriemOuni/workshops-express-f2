let day = new Date().getDate(); // return the day
let hour = new Date().getHours(); // retrun the hour

function byDate (req, res, next) {
    if (hour > 8 && hour < 17 && day > 0 && day < 6 ){
        next()
    } else {
        res.send(`<h1> Sorry we are closed </h1>`)
    }
}

module.exports = byDate