const user = {
    firtName: "Mateus",
    lastName: "Silva",
    full_name: "Nome Completo",
    age: 23,
    instagram: "@imateus.silva",
    skills: ["Back-end", "Front-end", "Mobile", "UI/UX"],
}
//Acessando propriedades de objeto sem desestruturação
const firstName = user.firtName;
const age = user.age;
console.log(firstName, age);

//Acessando propriedades de objeto com desestruturação
const { firtName, instagram, skills, full_name: fullName } = user;
console.log(firstName, fullName, instagram, skills);

//Acesso array com desestruturação
const [skillsBackEnd, skillsFrontEnd, skillsMobile, skillsUiUx, teste] = skills;
console.log(skillsBackEnd, skillsFrontEnd, skillsMobile, skillsUiUx);

