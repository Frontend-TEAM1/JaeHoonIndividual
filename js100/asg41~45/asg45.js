const currentTime=new Date().getTime();

const currentYear=Math.floor(currentTime / (1000 * 60 * 60 * 24 * 365)) + 1970;

/* 
1초(1000ms) * 60=1m

1m*60=1h

1h * 24 = 1d

1d* 365= 1y

*/

console.log(currentYear);
