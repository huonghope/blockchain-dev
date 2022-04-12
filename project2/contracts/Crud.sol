pragma solidity >= 0.4.22 < 0.9.0;

contract Crud {
  struct Player {
    uint256 id;
    string name;
  }

  Player[] public player;
  uint256 public nextId = 1;

  function create(string memory name) public {
    player.push(Player(nextId, name));
    nextId++;
  }

  function read(uint256 id) public view returns (uint256, string memory) {
    uint256 i = loadId(id);
    return (player[i].id, player[i].name);
  }

  function upload(uint256 id, string memory _name) public {
    uint256 i = loadId(id);
    player[i].name = _name;
  }

  function destroy(uint256 id) public {
    uint256 i = loadId(id);
    delete (player[i]);
  }
  
  function loadId(uint256 id) internal view returns (uint256 _id){
    for( uint256 i = 0; i < player.length; i ++){
      if(player[i].id == id){
        return i;
      }
    }
    revert("Player does not exist");
  }
}