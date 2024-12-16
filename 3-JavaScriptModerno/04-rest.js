const user = {
    firtName: "Mateus",
    lastName: "Silva",
    full_name: "Nome Completo",
    age: 23,
    instagram: "@imateus.silva",
    skills: ["Back-end", "Front-end", "Mobile", "UI/UX"],
}

// Rest (resto) operator
const { firtName, skills, ...resto } = user;
const [primaryOfArray, secondaryOfArray, ...restoOfArray] = skills;

console.log({ firtName, resto });

console.log('=============RestoArray=============');
console.log({ primaryOfArray, secondaryOfArray, restoOfArray });
console.log('====================================');
