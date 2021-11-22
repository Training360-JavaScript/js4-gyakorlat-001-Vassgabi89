import converterPromise from '../solutions/app1';

describe( '1. feladat', () => {
    test( 'Át kellene konvertálni a tömb elemeit nagybetűssé.', async () => {
        const rightArray = ['hello', 'kitti', 'bob', 'JACK'];
        const rightResult = await converterPromise(rightArray);
        
        expect(rightResult).toEqual(['HELLO', 'KITTI', 'BOB', 'JACK']);
    });
    
    test( 'Hibaüzenetet kellene kapni a nem megfelelő tömb miatt.', async () => {
        const badArray = ['hello', 'kitti', 'bob', 'JACK', 1];
        try {
            const badResult = await converterPromise(badArray);
        } catch(e) {
            return expect(e).toEqual(`Error: Not all elements are string type!`);
        }
        
        expect(true).toEqual(false);
    });
});
