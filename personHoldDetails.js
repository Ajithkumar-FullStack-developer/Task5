class Person {
    constructor(name, age, gender, place, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.place = place;
        this.email = email;
    }

    //get the person name menthod
    getName() {
        return this.name;
    }

    //set a new name menthod
    setName(name) {
        this.name = name;
    }

    //get the holder age menthod
    getAge() {
        return this.age;
    }

    //set a new age
    setAge(age) {
        this.age = age;
    }

    //get the person's gender
    getGender() {
        return this.gender;
    }

    //set new gender
    setGender(gender) {
        this.gender = gender;
    }

    //get the person's place
    getPlace() {
        return this.place;
    }

    //set new place
    setPlace(place) {
        this.place = place;
    }

    //get the person's email
    getEmail() {
        return this.email;
    }

    // Method to set a new email
    setEmail(email) {
        this.email = email;
    }

    // Method to return a string representation of the persons details
    toString() {
        return `Person[Name=${this.name}, Age=${this.age}, Gender=${this.gender}, Place=${this.place}, Email=${this.email}]`;
    }
}

// Create an instance of the Person class with my details
let ajithkumar = new Person("Ajithkumar", 28, "Male", "Pondy", "ajithjana1996@gmail.com");

// Example usage
console.log(ajithkumar.toString()); 
// Output: Person[Name=Ajithkumar, Age=28, Gender=Male, Place=Pondy, Email=ajithjana1996@gmail.com]
