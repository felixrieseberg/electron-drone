let chai = require("chai");

chai.should();

global.chai = chai;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

global.loadSettings = { testMode: true };