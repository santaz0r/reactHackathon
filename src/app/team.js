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
        about: "lorem1",
        photo: "https://avatars.githubusercontent.com/u/57302398?v=4",
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
        photo: "https://avatars.githubusercontent.com/u/20718976?v=4",
        about: "lorem2",
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
        age: "26",
        about: "lorem3",
        photo: "https://inlnk.ru/medJY3",
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
