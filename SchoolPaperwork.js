function paperwork (n, m) {
    {if (n < 0 || m< 0 )
        return 0;}
    return m * n;
}
console.log(paperwork(5,10));
console.log(paperwork(1,20));