const skills = {
    html: { id: "1", name: "HTML", color: "progress-bar-striped bg-success" },
    css: { id: "2", name: "CSS", color: "progress-bar-striped bg-warning" },
    react: { id: "3", name: "React", color: "progress-bar-striped bg-info" }
};

const users = [
    {
        id: 1,
        name: "Шарова Валерия",
        age: "22",
        about: "Работаю преподавателем в колледже по распределению. Увлекаюсь чаем, настольными и компьютерными играми. Люблю читать книги на белорусском и ходить в тренажерный зал.",
        photo: "https://avatars.githubusercontent.com/u/57302398?v=4",
        skills: [
            { ...skills.html, value: 85 },
            { ...skills.css, value: 50 },
            { ...skills.react, value: 75 }
        ],
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
        ],
        qualities: [
            { color: "info", content: "Толерантный" },
            { color: "success", content: "Ответственный" },
            { color: "primary", content: "Оптимистичный" }
        ]
    },

    {
        id: 2,
        name: "Ткачук Даниил",
        age: "36",
        photo: "https://avatars.githubusercontent.com/u/20718976?v=4",
        about: "Кодер-сёрфер. Более 9 лет живу вне России. Жил в Индонезии, на Шри-Ланке, Филиппинах и Мальдивах. Сейчас 4 месяц живу в Турции. Люблю кодить, серфить, мотоциклы и гитары.",
        skills: [
            { ...skills.html, value: 80 },
            { ...skills.css, value: 80 },
            { ...skills.react, value: 40 }
        ],
        socialMedia: {
            github: "https://github.com/tkachukcha",
            telegram: "https://t.me/tkachukcha",
            instagram: "https://instagram.com/tkachukcha"
        },
        whatDoing: [
            'Компонент "Навигационная панель"',
            'Компонент "Бэйдж"',
            'Компонент "Слайдер"',
            "Общий лэйаут"
        ],
        qualities: [
            { color: "warning", content: "Рассудительный" },
            { color: "danger", content: "Ответственный" },
            { color: "success", content: "Независимый" }
        ]
    },
    {
        id: 3,
        name: "Муравьев Виктор",
        age: "26",
        about: "Живу и работаю в Тюмени логистом в ночные смены. Кошатник. Занимаюсь мини-футболом и немного видеомонтажом. Хочу сменить профессию и стать frontend разработчиком.",
        photo: "https://avatars.githubusercontent.com/u/49832619?v=4",
        skills: [
            { ...skills.html, value: 40 },
            { ...skills.css, value: 40 },
            { ...skills.react, value: 45 }
        ],
        socialMedia: {
            facebook: "https://ru-ru.facebook.com/",
            github: "https://github.com/santaz0r/reactHackathon",
            telegram: "https://t.me/VictorMura"
        },
        whatDoing: [
            'Компонент "Breadscrump"',
            'Компонент "Progress Bar"',
            "Психологическое здоровье команды"
        ],
        qualities: [
            { color: "success", content: "Лидер команды" },
            { color: "secondary", content: "Ответственный" },
            { color: "danger", content: "Трудолюбивый" }
        ]
    }
];

export default users;
