const skills = {
    html: { id: "1", name: "HTML", color: "progress-bar-striped bg-success" },
    css: { id: "2", name: "CSS", color: "progress-bar-striped bg-warning" },
    react: { id: "3", name: "React", color: "progress-bar-striped bg-info" }
};

const users = [
    {
        id: 1,
        name: "Валерия",
        age: "число",
        description: "lorem1",
        skills: [
            { ...skills.html, value: 50 },
            { ...skills.css, value: 70 },
            { ...skills.react, value: 70 }
        ],
        favorite: false,
        teamLeader: false
    },

    {
        id: 2,
        name: "Даниил",
        age: "число",
        description: "lorem2",
        skills: [
            { ...skills.html, value: 50 },
            { ...skills.css, value: 40 },
            { ...skills.react, value: 80 }
        ],
        favorite: false,
        teamLeader: false
    },
    {
        id: 3,
        name: "Виктор",
        age: "число",
        description: "lorem3",
        skills: [
            { ...skills.html, value: 40 },
            { ...skills.css, value: 30 },
            { ...skills.react, value: 40 }
        ],
        favorite: false,
        teamLeader: true
    }
];

export default users;
