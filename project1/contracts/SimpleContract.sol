pragma solidity >= 0.4.22 < 0.9.0;

contract SimpleContract {
  function sayHello() public pure returns (string memory) {
    return "hello world";
  }
}