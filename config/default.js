module.exports = {
    port: 3000,
    session:{
        secret:'myblog',
        key:'mblog',
        maxAge:259200000
    },
    mongodb:'mongodb://172.16.1.52:27020/wu_test'
};