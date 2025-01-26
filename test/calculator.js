// write one success and one fail test of add, sub, div, mul for app/calculator.js
const add = require("../app/calculator").add;
const sub = require("../app/calculator").sub;
const div = require("../app/calculator").div;
const mul = require("../app/calculator").mul;
const expect = require("chai").expect;

describe("add", function () {
    it("should be able to add two numbers", function () {
        expect(add(5, 5)).to.equal(10);
    });
    it("should be able to add two numbers", function () {
        expect(add(5, 2)).to.equal(3);
    });
});

describe("sub", function () {
    it("should be able to subtract two numbers", function () {
        expect(sub(5, 5)).to.equal(0);
    });
    it("should be able to subtract two numbers", function () {
        expect(sub(5, 2)).to.equal(1);
    });
});

describe("div", function () {
    it("should be able to divide two numbers", function () {
        expect(div(5, 5)).to.equal(1);
    });
    it("should be able to divide two numbers", function () {
        expect(div(5, 2)).to.equal(3);
    });
});

describe("mul", function () {
    it("should be able to multiply two numbers", function () {
        expect(mul(5, 5)).to.equal(25);
    });
    it("should be able to divide two numbers", function () {
        expect(mul(5, 2)).to.equal(8);
    });
});
