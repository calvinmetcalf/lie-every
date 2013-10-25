'use strict';
var every = require('../lib/every');
var resolve = require('lie-resolve');
require("mocha-as-promised")();
var chai = require("chai");
chai.should();
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
describe("every", function() {
  it("should become true", function() {
    return every([1,2,3,4],function(v){return v<5}).should.become(true);
  });
  it("should become false 1", function() {
    return every([1,2,3,4],function(v){return v>1;}).should.become(false);
  });
  it("should become false 3", function() {
    return every([1,2,3,4],function(v){return v<4;}).should.become(false);
  });
  it("should become true", function() {
    return every([resolve(1),resolve(2),3,4],function(v){return v<5}).should.become(true);
  });
  it("should become false 1", function() {
    return every([resolve(1),resolve(2),3,4],function(v){return v>1;}).should.become(false);
  });
  it("should become false 3", function() {
    return every([resolve(1),resolve(2),3,4],function(v){return v<4;}).should.become(false);
  });
});