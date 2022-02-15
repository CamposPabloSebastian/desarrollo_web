var pool = require('./db');

async function getProductos(){
    try{
        var query = 'select * from productos';
        var rows = await pool.query(query);
        console.log(rows)
        return rows;
    }catch (error){
        console.log(error);
    }
}

async function insertarProducto(obj){
    try {
        var query = 'insert into productos set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {getProductos, insertarProducto};