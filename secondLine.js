export function secondLine(temperature) {
    const quips = {
        cold: "Cold but I'm sure there's still nitwits wearing shorts.",
        veryCold: "That's pretty cold. Wear a sweater.",
        fuckingCold: "It's colder than a witch's tit.",
        wtfCold: "Colder than my father's dead shriveled black heart."
    };

    if (temperature >= -5 && temperature < 0) {
        return quips.cold;
    } else if (temperature >= -10 && temperature < -5) {
        return quips.veryCold;
    } else if (temperature >= -15 && temperature < -10) {
        return quips.fuckingCold;
    } else if (temperature >= -20 && temperature < -15) {
        return quips.wtfCold;
    } else {
        return "Looks like something went wrong. I blame Vinny."
    }
}
