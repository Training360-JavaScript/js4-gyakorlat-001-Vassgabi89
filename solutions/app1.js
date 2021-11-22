/*Írj egy olyan függvényt, amely paraméterként kap egy tömböt. A függvény visszatérési értéke egy Promise.  
- A Promise resolved lesz, amennyiben a tömb minden eleme string, és azok sikeresen nagybetűssé alakíthatók: tehát a Promise visszaad 
egy új tömböt, amely az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.
- Ellenkező esetben a Promise rejected lesz, a visszatérési érték pontosan: 
`Error: Not all elements are string type!`*/

const converterPromise = (array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let onlyStringInArray = true
            array.forEach(item => {
                if (!(typeof(item) === 'string')) {onlyStringInArray = false}
            })
            if (onlyStringInArray) {
                let arrayUC = array.map(item => item.toUpperCase())
                resolve(arrayUC)}
            else {reject('Error: Not all elements are string type!')}
        }, 0)
    })
}

export default converterPromise;
