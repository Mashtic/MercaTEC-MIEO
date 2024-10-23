const sql = require('mssql');

const config = {
    user: 'fab',
    password: '12345',
    server: 'DESKTOP-KE36UO3', // Puede ser una dirección IP o un nombre de servidor DAVID DESKTOP-KE36UO3
    database: 'dbMercaTEC',
    options: {
        encrypt: false, // Si estás usando Azure SQL, de lo contrario puedes desactivarlo
        enableArithAbort: true,
        trustServerCertificate: true
    }
};

async function getConnection() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.error('Error de conexión:', error);
    }
}

module.exports = {
    getConnection,
    sql
};
