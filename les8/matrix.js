export let matrix = [
	["a", 2 , 3],
	["b", 5 , 6],
	["a", 8 , 9],
];




export function printMatrix(data) {
	for (let row of data) {
		console.log(row);
		}
	}




export function printItemOfMatrix(data) {
	for (let row of data) {
		for (let item of row) {
			console.log(item);
		}
	}
}




// kan ik ergens zeggen dat console.Log eigenlijk console.Log is ???