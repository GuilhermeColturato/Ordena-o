function sortFunction(num, ero){
	return (num - ero);
}

valores = [43, 16, 33, 64, 49, 82, 9, 38, 56, 93, 28];

console.log (valores.sort(sortFunction));