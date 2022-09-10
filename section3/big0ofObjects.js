let instructor = {
    firstName: "Omenesa",
    lastName: "Muhammed",
    isInstructor: true,
    favouriteNumbers: [1, 2, 3, 4]
};

let keys = Object.keys(instructor);
console.log(keys);

if(!instructor.hasOwnProperty("firstName")){
    console.log("Wa.....")
}