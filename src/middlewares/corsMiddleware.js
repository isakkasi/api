//Refractured

exports.cors = () => (req, res, next) => {

    //set the ip address of the app
    res.setHeader('Access-Control-Allow-Origin', 'https://qdb.pc-acad.com/');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');

    next();
};