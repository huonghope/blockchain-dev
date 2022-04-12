const SimpleContract = artifacts.require("SimpleContract");

contract("SimpleContract", () => {
  it("should be deployed", async () => {
    const simpleContract = await SimpleContract.deployed();
    assert(simpleContract.address !== "");
  })
})

contract("SimpleContract", () => {
  it("should be return string hello world", async () => {
    const simpleContract = await SimpleContract.deployed();
    const result = await simpleContract.sayHello();
    assert(result === "hello world");
  })
})