/*
Is this a triangle?
Implement a function that accepts 3 integer values a, b, c.
The function should return true if a triangle can be built with the sides
of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted).*/

function isTriangle(a,b,c) {
    if (a > 0 && b > 0 && c > 0) {
        return a + b > c && c + a > b && b + c > a;
    }else {
        return false
    }
}

function isTriangle(a,b,c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && c + a > b && b + c > a) {
            return true
        } else {
            return false
        }
    }else {
        return false
    }
}