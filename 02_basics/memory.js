//stack (primitive ), heap (non Primitive )

let myName = " nitin Pandey" // stack memory

let anothername = myName // copy value from myName to anothername
anothername = " nitin kumar pandey" // change value of anothername

console.log (anothername)
console.log (myName)

let userone = {
    email : "ram@googlee.com",
    upi_Id : "ram@okaxis"
}

let usertwo = userone // copy reference from userone to usertwo

usertwo.email= "hitesh@google.com"

console.log(userone.email);
console.log(usertwo.email);