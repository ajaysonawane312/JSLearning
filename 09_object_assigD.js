console.log(`Assignment 01--------------------------------------------------- `);
const professor = {
    id: 123456,
    name: "Dr.Mohit Sharma",
    subject: "Catalysis",
    dept: "Catalysis and Inorganic Division",
    address: "Pune",
  degrees: {
      engineering: "CSC",
      PHD: "ADV Computing",
      Mphil: "Computer Science",
  add: function (){
        return this.engineering +' '+ this.PHD +' ' + this.Mphil
    },
},
certificate: ["Hacker Rank Participation","IFE Course","Adv Programming"],
    
};
console.warn(`1.----------------Add Properties of Professor-----------------\n`);
// console.log(Object.keys(professor));
console.log(professor);
console.warn(`2.----------------Add Nested Object as Degrees-------------------`);
console.log(professor.degrees);
console.warn(`3.----------------Add Array in Certificate Properties-------------`);
console.log(professor.certificate);
console.warn(`4.----------------Concat All Degrees and return as String---------`);
const totalDegree = professor.degrees.add();
//   console.log(professor.degrees);
console.log(`--> Total Degrees are : ${totalDegree}`);
console.warn(`5.----------------Add New Properties totalExperience--------------`);
// console.log(professor);
professor.totalExperience = "14 Years"
console.log(`--> totalExperience`, professor.totalExperience);
console.warn(`6.----------------Update Propertie Subject------------------------`);
console.log(professor);
professor.subject = "Chemical Engineering"
console.log(professor);
console.warn(`7.---Add New Certificate "Oracle Certified" in a Last Position----`);
// console.table(professor.certificate);
//   professor.certificate.fourth="Oracle Certified"
const lastElement = professor.certificate.push("Oracle Certified");
console.table(professor.certificate);
console.warn(`8.---------------Last Element of Certificate----------------------`);
let lastPropertie = professor.certificate.splice(-1);
console.log(`--> Last Element of Certificate is:`, lastPropertie);