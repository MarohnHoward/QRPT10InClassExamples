function movieDiscountCalc(senior: boolean, vetsOrRes: boolean, movieMems: boolean) {
    if (senior && vetsOrRes && movieMems) return 0.35;
    if ((senior && movieMems) || (vetsOrRes && movieMems)) return 0.25;
    if (senior || vetsOrRes) return 0.10;
    if (movieMems) return 0.15;
    return 0
}

console.log("all three discounts work", movieDiscountCalc(true, true, true));
console.log("senior & movieMem", movieDiscountCalc(true, false, true));
console.log("Vets and Resp works", movieDiscountCalc(false, true, false));
console.log("MovieMems works", movieDiscountCalc(false, false,true));
console.log("No discount for you", movieDiscountCalc(false, false, false))
// console.log is for printing out info in your terminal 