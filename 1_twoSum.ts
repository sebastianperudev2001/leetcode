/*
 * Solución 1: Fuerza Bruta
 * 
 * Complejidad temporal: O(n²)
 * Complejidad espacial: O(1)
 * 
 * Esta solución usa dos loops anidados para probar todas las combinaciones posibles.
 * El primer loop selecciona un número, y el segundo loop busca si existe otro número
 * que sumado al primero dé el target. Es simple pero ineficiente para arrays grandes.
 */
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let num2 = nums[j];
      if (num1 + num2 == target) {
        return [i, j];
      }
    }
  }
  return [];
}

/*
 * Solución 2: HashMap (Optimizada)
 * 
 * Complejidad temporal: O(n)
 * Complejidad espacial: O(n)
 * 
 * Esta solución usa un Map para almacenar los números que ya hemos visto junto con sus índices.
 * En cada iteración, calculamos la diferencia (target - número actual) y verificamos si esa
 * diferencia ya existe en el Map. Si existe, significa que encontramos los dos números que suman
 * el target. Si no existe, guardamos el número actual en el Map y continuamos.
 * 
 * Esta solución sacrifica espacio por velocidad, reduciendo la complejidad de O(n²) a O(n).
 */
function twoSumOptimized(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let difference = target - num1;
    if (map.has(difference)){
        let index = map.get(difference)!
        return [i, index];
    }
    map.set(num1, i);
  }
  return [];
}
