function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(x=> typeof x !== 'string' && x>0)
  }


console.log(filter_list([1, 'a', 'b', 0,-1,  ,-215, 25]))
/* 
  const valoresFiltrados =  filter_list([1,2,'aasf','1','123',123]);

  const newFilter = valoresFiltrados.filter(l=>l>0)
console.log(newFilter) */

