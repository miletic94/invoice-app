
let target = 1

function toggler(target, possibleValues) {
    const targetIndex = possibleValues.indexOf(target)
    if(targetIndex < possibleValues.length) {
        return possibleValues[targetIndex + 1]
    } else {
        return possibleValues[0]
    }
}

console.log(toggler(target, [1, 2, 3, 4]))