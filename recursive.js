function getAllValuesIterative(obj, keyToFind = "value") {
    let values = [];
    let stack = [obj];

    while (stack.length > 0) {
      const current = stack.pop();

      if (Array.isArray(current)) {
        stack.push(...current);
      } else if (typeof current === 'object' && current !== null) {
        for (const key in current) {
          if (key === keyToFind) {
            values.push(current[key]);
          }
          stack.push(current[key]);
        }
      }
    }

    return values;
  }

  // Пример использования
  console.log(getAllValuesIterative(data)); // [1, 2, 3, 4, 5]
