import sayHello from '../utils/helloworld.js';
import assert from 'assert';

it("Tests Hello World",()=>{
    const hello = sayHello();

    assert.equal(hello,"hello");
});
