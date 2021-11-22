/*- Írj egy függvényt, amely paraméterként szintén egy tömböt kap. A függvény visszatérési értéke egy Promise.
- A Promise resolved lesz, amennyiben a tömb minden eleme string, és visszatér 
ezek abc-rend szerint rendezett tömbjével.  
- Ha nem minden elem string, akkor a Promise rejected lesz, visszatérési értéke:
`Error: Not all elements are string type!`*/

const sorterPromise = (array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let onlyStringInArray = true
            array.forEach(item => {
                if (!(typeof(item) === 'string')) {onlyStringInArray = false}
            })
            if (onlyStringInArray) {
                array.sort()
                resolve(array)}
            else {reject('Error: Not all elements are string type!')}
        }, 0)
    })
}

export default sorterPromise;
