// requireds
const fs = require('fs');

let createFile = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`)
            return;
        }
        let data = "";
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }
        let fileName = `Table-del-${base}-al-${limite}.txt`;
        fs.writeFile(`files/${fileName}`, data, (error) => {
            if (error) {
                reject(error);
                return;
            } else
                resolve(fileName);
        })
    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`)
            return;
        }
        let data = "";
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }
        resolve(data);
    })
}

module.exports = {
    createFile,
    listarTabla
}