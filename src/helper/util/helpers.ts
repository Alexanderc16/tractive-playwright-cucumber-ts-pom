
//planned to use for registration automation
export function generateRandomEmail(baseEmail: string): string {
    const randomSymbols = "!@#$%^&*".split("");
    const randomCount = Math.floor(Math.random() * 3) + 1; // Add 1-3 random symbols
    const randomPrefix = Array.from({length: randomCount}, () => {
        const randomIndex = Math.floor(Math.random() * randomSymbols.length);
        return randomSymbols[randomIndex];
    }).join("");
    return `${randomPrefix}${baseEmail}`;
}

export const setCookies = () => {
    return [
        {name: "domain", value: ".tractive.com", path: "/", domain: "my-stage.tractive.com"},
        {name: "interview", value: "7lBPV9iik6r9MNE5dKw9nzF9CstdlEJl", path: "/", domain: "my-stage.tractive.com"}
    ];
}
