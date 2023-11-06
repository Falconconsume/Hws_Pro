let sum  = function () 
{
    let sum1 = 0;
    return function(s)
    {
        sum1 +=s;
        return sum1;
    }
}();

console.log(sum(13));
console.log(sum(26));
console.log(sum(39));
