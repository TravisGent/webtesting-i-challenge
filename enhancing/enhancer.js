module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(parseInt(item.enhancement) === parseInt(20)) {
    return { ...item };
  } else {
    return { 
      ...item, 
      enhancement: item.enhancement + 1 
    };
  }
}

function fail(item) {
  if(parseInt(item.enhancement) < parseInt(15)) {
    return { 
      ...item, 
      enhancement: item.enhancement - 5 
    };
  } else if(parseInt(item.enhancement) > parseInt(15)){
    return { 
      ...item, 
      enhancement: item.enhancement - 10 
    };
  } else if(parseInt(item.enhancement) > parseInt(16)) {
    return { 
      ...item, 
      enhancement: item.enhancement - 1 
    };
  }
}

function repair(item) {
  return { ...item, durability: 100  };
}

function get(item) {
  return { ...item };
}
