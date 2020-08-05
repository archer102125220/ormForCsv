const fs = require('fs');
const iconv = require('iconv-lite');

module.exports = function fileCreat(name) {
        let csv = fs.readFileSync(name + '.csv', { encoding: 'binary' }), ORMArry = [];
        const buf = new Buffer(csv, 'binary');
        let str = iconv.decode(buf, 'big5');
        str = str.substring(str.search('\r\n'), str.length).replace('\r\n', '');
        let title = str.substring(0, str.search('\r\n')), titleArr = title.split(',');
        str = str.substring(str.search('\r\n'), str.length).replace('\r\n', '');
        str = str.replace(/e04/g, 'NULL');
        str = str.replace(/\,\,/g, ',NULL,');
        let strArr = str.split('\r\n');
        strArr.forEach(element => {
            if (element.length > 0) {
                let values = element.split(','), ORM = {};
                //console.log(titleArr, values.length);
                values.forEach((element, key) => {
                    ORM[titleArr[key]] = element;
                });
                ORMArry = [...ORMArry, ORM];
            }
        });

        return ORMArry;
    };