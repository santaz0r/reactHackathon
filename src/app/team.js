const skills = {
    html: { id: "1", name: "HTML", color: "progress-bar-striped bg-success" },
    css: { id: "2", name: "CSS", color: "progress-bar-striped bg-warning" },
    react: { id: "3", name: "React", color: "progress-bar-striped bg-info" }
};

const users = [
    {
        id: 1,
        name: "Валерия",
        age: "22",
        about: "Работаю преподавателем в колледже по распределению. Увлекаюсь чаем, настольными и компьютерными играми. Люблю читать книги на белорусском и ходить в тренажерный зал.",
        photo: "https://avatars.githubusercontent.com/u/57302398?v=4",
        skills: [
            { ...skills.html, value: 85 },
            { ...skills.css, value: 50 },
            { ...skills.react, value: 75 }
        ],
        teamLeader: false,
        socialMedia: {
            instagram: "https://www.instagram.com/aller_v/",
            github: "https://github.com/ValeryiaSharova",
            telegram: "https://t.me/Aller_Fl"
        },
        whatDoing: [
            'Компонент "Карточка"',
            'Компонент "Социальные сети"',
            'Компонент "Кнопка"',
            "Удаление из избранного",
            "Страница участника"
        ]
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
        teamLeader: false,
        socialMedia: {
            twitter: "https://twitter.com/home?lang=ru",
            telegram: "https://web.telegram.org/"
        },
        whatDoing: [
            'Компонент "Карточка"',
            'Компонент "Социальные сети"',
            'Компонент "Кнопка"',
            "Удаление из избранного",
            "Страница участника"
        ]
    },
    {
        id: 3,
        name: "Виктор",
        age: "26",
        about: "lorem3",
        photo: "https://avatars.githubusercontent.com/u/49832619?v=4",
        skills: [
            { ...skills.html, value: 40 },
            { ...skills.css, value: 30 },
            { ...skills.react, value: 40 }
        ],
        teamLeader: true,
        socialMedia: {
            facebook: "https://ru-ru.facebook.com/",
            github: "https://github.com/santaz0r/reactHackathon"
        },
        whatDoing: [
            'Компонент "Карточка"',
            'Компонент "Социальные сети"',
            'Компонент "Кнопка"',
            "Удаление из избранного",
            "Страница участника"
        ]
    }
];

export default users;
