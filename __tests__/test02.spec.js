import sorterPromise from '../solutions/app2';

describe( '2. feladat', () => {
    test( 'Rendezni kellene a kapott string-tömböt.', async () => {
        const rightArray = ['hello', 'kitti', 'bob', 'joe'];
        const rightResult = await sorterPromise(rightArray);
        
        expect(rightResult).toEqual(['bob', 'hello', 'joe', 'kitti']);
    });
    
    test( 'Hibaüzenetet kellene kapni a nem megfelelő tömb miatt.', async () => {
        const badArray = [42, 'hello', 'kitti', 'bob', 'joe'];

        try {
            const badResult = await sorterPromise(badArray);
        } catch(e) {
            return expect(e).toEqual(`Error: Not all elements are string type!`);
        }
        
        expect(true).toEqual(false);
    });
});
