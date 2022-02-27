//const chai = require("chai");
//const spies = require("chai-spies");
//chai.use(spies);

function receivesAFunction(spy) {
    return spy();
}

function returnsANamedFunction() {
    const namedFn = () => console.log("this is a named function")
    return namedFn
}

function returnsAnAnonymousFunction(){
    return function(){
    }
  }