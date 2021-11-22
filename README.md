# Feladatok

## NAGYON FONTOS!!!
- A könnyebb tesztelhetőség érdekében az elkészített függvényeket és változókat 
exportálni kell!
- Függvények esetén egy példa:
```javascript
export default objectsMerge;
```
- Változók esetén egy példa:
```javascript
export {
  firstName,
  lastName,
  job,
};
```

## 1. feladat
- Fájl: `solutions/app1.js`
- Függvény neve: `converterPromise`
- Export: a converterPromise függvény legyen a default export!
- Írj egy olyan függvényt, amely paraméterként kap egy tömböt. A függvény visszatérési értéke egy Promise.  
- A Promise resolved lesz, amennyiben a tömb minden eleme string, és azok sikeresen nagybetűssé alakíthatók: tehát a Promise visszaad 
egy új tömböt, amely az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.
- Ellenkező esetben a Promise rejected lesz, a visszatérési érték pontosan: 
`Error: Not all elements are string type!`

## 2. feladat
- Fájl: `solutions/app2.js`
- Függvény neve: `sorterPromise`
- Export: a sorterPromise függvény legyen a default export!
- Írj egy függvényt, amely paraméterként szintén egy tömböt kap. A függvény visszatérési értéke egy Promise.
- A Promise resolved lesz, amennyiben a tömb minden eleme string, és visszatér 
ezek abc-rend szerint rendezett tömbjével.  
- Ha nem minden elem string, akkor a Promise rejected lesz, visszatérési értéke:
`Error: Not all elements are string type!`
