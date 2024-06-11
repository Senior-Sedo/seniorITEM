const seniorITEM = <T extends any[] | readonly any[]>(array: T): T => array[Math.floor(Math.random() * (array.length - 1 + 1))];
export default seniorITEM;