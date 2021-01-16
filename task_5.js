const lockPattern = path => {
    if(path.length<=7 && path.length >=5) {
        for (let index = 1; index < path.length; index++) {
            if(path[index-1] === path[index]) return 'TIDAK'
            else if(path[index-1] === 9 && !(path[index] === 8 || path[index] === 5 || path[index] === 6 )) return 'TIDAK'
            else if(path[index-1] === 8 && (path[index] === 3 || path[index] === 2 || path[index] === 1 )) return 'TIDAK'
            else if(path[index-1] === 7 && !(path[index] === 4 || path[index] === 5 || path[index] === 8 )) return 'TIDAK'
            else if(path[index-1] === 6 && (path[index] === 7 || path[index] === 4 || path[index] === 1 )) return 'TIDAK'
            else if(path[index-1] === 5 && (path[index] === 5)) return 'TIDAK'
            else if(path[index-1] === 4 && (path[index] === 9 || path[index] === 6 || path[index] === 3 )) return 'TIDAK'
            else if(path[index-1] === 3 && !(path[index] === 2 || path[index] === 5 || path[index] === 6 )) return 'TIDAK'
            else if(path[index-1] === 2 && (path[index] === 9 || path[index] === 8 || path[index] === 7 )) return 'TIDAK'
            else if(path[index-1] === 1 && !(path[index] === 2 || path[index] === 5 || path[index] === 4 )) return 'TIDAK'
            else if(path[index-1] < 1 || path[index-1] > 9 || path[index] < 1 || path[index] > 9) return 'TIDAK'
        }
        return 'YA'
    } else {
        return 'TIDAK'
    }
}

console.log(lockPattern([1,2,3,2,1,2,3])) //YA
console.log(lockPattern([2,3,6,5,4,7,8,9])) //TIDAK
console.log(lockPattern([5,1,2,3,6,9])) //YA
console.log(lockPattern([9,6,8,5,7,4])) //YA
console.log(lockPattern([3,6,9,8,1])) //TIDAK
console.log(lockPattern([7,5,9,8,7])) //YA