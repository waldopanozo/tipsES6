/**
 * lets take some example about school
 */

class Person{
    goToSchool = () => console.log("Going to school ASAP ...")
}

class Student extends Person{
    semester=5;
    field="Math";
    code="IAUS7675";
    goToClass = () => console.log("Running to take a class .. ")
}

student1 = new Student()
student1.goToSchool()
student1.goToClass()
