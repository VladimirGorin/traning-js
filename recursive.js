function getAllValues(obj, keyToFind = "value") {
  let values = [];

  function recursiveSearch(currentObj) {
    // Если это массив, то пройти по каждому элементу
    if (Array.isArray(currentObj)) {
      currentObj.forEach(item => recursiveSearch(item));
    } else if (typeof currentObj === 'object' && currentObj !== null) {
      // Если это объект, то пройти по каждому ключу
      for (const key in currentObj) {
        if (key === keyToFind) {
          values.push(currentObj[key]);
        }
        // Рекурсивный вызов для вложенных объектов
        recursiveSearch(currentObj[key]);
      }
    }
  }

  recursiveSearch(obj);
  return values;
}

// Пример использования
const data = {
  a: {
    value: 1,
    b: {
      value: 2,
      c: [
        { value: 3 },
        { d: { value: 4 } }
      ]
    }
  },
  e: { value: 5 }
};

console.log(getAllValues(data)); // [1, 2, 3, 4, 5]
