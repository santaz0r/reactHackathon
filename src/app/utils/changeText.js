export function changeText(text) {
    switch (text) {
        case "reactHackathonmember":
            return "Участник";
        case "reactHackathonfavorites":
            return "Избранное";
        default:
            return "Главная";
    }
}
