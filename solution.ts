const formatValue = (value: string | number | boolean) => {
    if (typeof value === "string") {
        return value.toUpperCase() ;
    } else if (typeof value === "number") {
        return value * 10 ;
    }
}

console.log(formatValue(2))