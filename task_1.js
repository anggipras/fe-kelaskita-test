const changeWord = data => {
    let splitData = data.split(" ")
    let splitResult = []
    splitData.forEach(value => splitResult.push(value.split('').reverse().join('')));
    return splitResult.join(' ')
}

console.log(changeWord('italem irad irigayaj'))
console.log(changeWord('iadab itsap ulalreb'))
console.log(changeWord('nalub kusutret gnalali'))