let sequenceNumber = [];
const seqNum = (num) => {
    if (num === 1) sequenceNumber.push(0)
    else if (num === 2) sequenceNumber.push(0, 1)
    else if (num > 2) sequenceNumber.push(0, 1)

    var len = sequenceNumber.length;

    while (len < num) {
        sequenceNumber.push(sequenceNumber[len-1] + sequenceNumber[len - 2]);
        len++;
    }

    console.log(sequenceNumber);
}

seqNum(10)