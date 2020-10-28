function Student(name,rollno){
this.name=name;
this.rollno=rollno;
// this.intro=function(){
//     var a=("My name is ",this.name + " and my roll no is",this.rollno)
//  return a;
// }
}
var student1=new Student("Anum",123)
student2=new Student("Fiza",124)
document.getElementById('a').innerHTML=student1
console.log(student1)
console.log(student2)
console.log("........")
Student.prototype.intro=function(){
    var a=("My name is ",this.name + " and my roll no is",this.rollno)
    return a
}
console.log(student2)