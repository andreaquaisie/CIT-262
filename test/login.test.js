import assert from 'assert';
import login from '../utils/login.mjs';

it("Login API should have a valid login token",async ()=>{
    const loginToken= await login({userName: "espi@gmail.com", password: "P@ssw0rd"})
    assert.equal(loginToken.length,36);
})