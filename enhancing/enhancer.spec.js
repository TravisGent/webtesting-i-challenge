const { success, fail, repair, get } = require('./enhancer.js');
// test away!

it('should increase durability by 1, unless it is at 20, then it will return as just 20', () => {
    const coolWeapon = {
        name: "The Cool Weapon",
        durability: 100,
        enhancement: 4
    };
    
    const coolWeaponResult = {
        name: "The Cool Weapon",
        durability: 100,
        enhancement: 5
    };

    const coolWeaponOne = {
        name: "The Cool Weapon",
        durability: 100,
        enhancement: 20
    };

    const coolWeaponTwo = {
        name: "The Cool Weapon",
        durability: 100,
        enhancement: 20
    };
  expect(success(coolWeapon)).toMatchObject(coolWeaponResult);
  expect(success(coolWeaponOne)).toMatchObject(coolWeaponTwo);
});

it('should repair the weapon', () => {
  const coolWeapon = {
    name: "The Cool Weapon",
    durability: 80,
    enhancement: 1
  };
  const coolWeaponResult = {
    name: "The Cool Weapon",
    durability: 100,
    enhancement: 1
  };

  expect(repair(coolWeapon)).toMatchObject(coolWeaponResult);
});

it('should decrease the enhancement', () => {
  const coolWeapon = {
    name: "The Cool Weapon",
    durability: 100,
    enhancement: 10
  };

  const coolWeaponResult = {
    name: "The Cool Weapon",
    durability: 100,
    enhancement: 5
  };
  
  expect(fail(coolWeapon)).toMatchObject(coolWeaponResult);
});