const makeChange = (c) => {
  let quarters = Math.floor(c / 25);
    let remaining = c % 25;
    
    let dimes = Math.floor(remaining / 10);
    remaining = remaining % 10;
    
    let nickels = Math.floor(remaining / 5);
    remaining = remaining % 5;
    
    let pennies = remaining;  
    
    return {
        q: quarters,
        d: dimes,
        n: nickels,
        p: pennies
    };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
