const seniorITEM = <T = any>(array: T[] | readonly T[]): T | undefined => array[Math.floor(Math.random() * (array.length - 1 + 1))];
export default seniorITEM;