function chkPrime(n)
{
    if(n == 1 || n == 0) 
    return false;
    // Run a loop from 2 to n-1
    for(var i = 2; i < n; i++)
    {
    //checking for number of divisor
    if(n % i == 0) return false;
    }
    // otherwise, n is prime number.
    return true;
}
var num = [50];
// check for every number from 1 to num
for(var i = 1; i <= num; i++)
{
   // check if current number is prime
   if(chkPrime(i)) {
    console.log( [i] );
   }
}
