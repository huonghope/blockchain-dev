const Crud = artifacts.require("Crud");

contract("Crud", () => {
  let crud = 0;
  before(async () => {
    crud = await Crud.deployed();
  })
  it('Shoud be create a player', async () => { 
    await crud.create("Huong Smartcontract");
    const player = await crud.read(1);
    assert(player[0].toNumber() === 1);
    assert(player[1] == "Huong Smartcontract");
  });
  it('Shoud be upload player', async () => { 
    await crud.upload(1, "Huong Update");
    const player = await crud.read(1);
    assert(player[0].toNumber() === 1);
    assert(player[1] == "Huong Update");
  });
  it('Shoud be return revert is play don"t exist', async () => { 
    try {
      await crud.upload(1, "Huong Update");
    } catch (e) {
      // return true when e message includes this message
      assert(e.message.includes("Player does not exist"));
      return;
    }
    assert([])
  });
  // happy test
  it('Shoud be destroy a player', async () => { 
    await crud.destroy(1);
    try {
      await crud.read(1);
    } catch (e) {
      // return true when e message includes this message
      assert(e.message.includes("Player does not exist"));
      return;
    }
    assert([])
  }); 
  //up happy test
  it('Shoud be destroy a player', async () => { 
    try {
      await crud.destroy(10);
    } catch (e) {
      // return true when e message includes this message
      assert(e.message.includes("Player does not exist"));
      return;
    }
    assert([])
  });
})
