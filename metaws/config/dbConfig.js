module.exports = {
        user            : process.env.NODE_ORACLEDB_USER            || "user",
        password        : process.env.NODE_ORACLEDB_PASSWORD        || "password",
        connectString   : process.env.NODE_ORACLEDB_CONNECTSTRING   || "(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = TJBDP01)(PORT = 1521)) (CONNECT_DATA = (SID = ADMPP)))"
};