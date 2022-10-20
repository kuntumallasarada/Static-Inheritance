// class Governor{
//     static gName = "Paul";
//     static gAge = 55;
//     static doGreeting(){
//         console.log(`Hello people , I am ${Governor.gName},the Governer.`);
//     }
//     static  veto()
//     {
//         console.log("hey");
//     }
// }
// Governor.doGreeting();// calling static method directly with class and not its instances
// Governor.veto();

class Person{
    constructor(fname,lname,age){
        this.fname =fname;
        this.lname=lname;
        this.age = age;
    } 
        fullName(){
            console.log("Full Name :" +this.fname+" "+this.lname );
        }
        isAdult(){
            if(this.age>=18)
            {
                console.log("You are an adult.")
            }
            else
            console.log("Yet to become an adult.")
        }
        

    
}

class PostalWorker extends Person{
    constructor(fname,lname,age,canDrive){
        super(fname,lname,age);
       
        this.canDrive=canDrive;
    }
    drive(){
        if(this.canDrive==true)
        {
            console.log( " Postalworker"+" "+this.fname+" "+this.lname +" "+"is a delivery person  ");
           
        }
               
}
}

class Chef extends Person{
    constructor(fname,lname,age,exp,cuisine){
        super(fname,lname,age);
        this.exp=exp;
        this.cuisine=cuisine;
    }
      experience(){
        if(this.exp>5)
        console.log(this.fname + " "+ this.lname +","+ "You are an experienced chef ");
        else 
        console.log(this.fname +" "+this.lname+","+"More working years needed to become experienced ");
      }

      typeOfCuisine(){
        console.log(this.lname+"  "+ " is"+" " +this.cuisine+"  "+"chef." );
      }


}

let newPerson = new Person("Sarada","Nookala",44);
//newPerson.fullName();
//newPerson.isAdult();
let pw1 = new PostalWorker("Max","Fury",35,true);
let pw2 = new PostalWorker("Trent","FJohnson",48,false);
console.log(pw1);
console.log(pw2);
pw1.drive();
pw2.drive();

let chef1 = new Chef("Betty","Fang",29,3,"Italian");
let chef2 = new Chef("Rex","Thompson",40,7,"Persian");
console.log(chef1);
console.log(chef2);
chef1.experience();
chef2.experience();
 chef1.typeOfCuisine();
chef2.typeOfCuisine();
