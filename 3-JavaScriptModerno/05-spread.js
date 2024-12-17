const user = {
    firtName: "Mateus",
    lastName: "Silva",
    age: 23,
    instagram: "@imateus.silva",
    skills: ["Back-end", "Front-end", "Mobile", "UI/UX"],
    active: false,
};

// Spread (espalhar) operator
const updatedUser = {
    ...user,
    skills: [...user.skills, "Marketing"],
    active: true
};
console.log({ user });
console.log({ updatedUser });