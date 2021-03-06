// Header file output
var header = require("../kozma-header")
console.log(header.display("Keith" , "Kozma", "Assignment 6.4") + '\n');

/*
============================================
; Title: Nested Object Literals
; Author: Keith Kozma
; Date: 19 July 2019
; Description: This is a program utilizes both get/set methods as well as nested objects to create a trouble ticket which outputs multiple elements.
============================================
*/

// start program

var ticket = {
   // ticket properties
  id: 101,
  name: 'Help Desk Support',
  dateCreated: new Date(),
  priority: '5',
  personId: 101010,

   person: {
       // person properties
       id: 135,
       firstName: 'John',
       lastName: 'Doe',
       jobTitle: 'Human Resource Assistant'
   },
   get troubleTicket(){
    return "Ticket " + ticket.id + " was created on " + ticket.dateCreated.toLocaleDateString('en-US') + ' and assigned to employee ' + ticket.person.firstName + ' ' + ticket.person.lastName + ' ' + '(' + ticket.person.jobTitle + ')' + '.';
   },
   set troubleTicket(val){
     this.ticket = val;
   }
};
console.log(ticket.troubleTicket);
// end program
