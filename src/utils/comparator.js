const compareData = (comparator,type) => {
    return (a,b) => {
        if (type === "DESC"){
            return a[comparator] >= b[comparator]
        }
        else{
            return a[comparator] <= b[comparator]
        }
    }
}

module.exports = { compareData };