export function changeText(text) {
    switch (text) {
        case "member":
            return "Участник";
        case "favorites":
            return "Избранное";
        default:
            return "Главная";
    }
}
