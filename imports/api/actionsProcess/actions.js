export const actions = {
    roll: {
        inProgress : () => "Lancez les dés",
        result: ({number, isDouble}) => `Votre pion avance de ${number} cases${isDouble ? ` avec un double.` : '.'}`
    },
    reroll: {
        inProgress : () => "Vous avez fait un double, relancez les dés",
        result: ({number, isDouble}) => `Votre pion encore avance de ${number} cases${isDouble ? ` avec un double.` : '.'}`
    },
    buyProperty: {
        inProgress: (name) => `Voulez vous achetez ${name} ?`,
        bought: (name) => `Vous avez achetez ${name} !`, // Ajoutez si il a complété une famille
        notBought: (name) => `Vous n'avez pas acheté ${name}...` // Ajoutez si il a complété une famille
    },
    community: {
        inProgress: () => `Vous êtes tombé sur Caisse de communauté, veuillez confirmer`,
        resume: (text) =>  text,
    },
    chance: {
        inProgress: () => `Vous êtes tombé sur Chance, veuillez confirmer`,
        resume: (text) =>  text,
    },
    bankrupt: {
        inProgress: () => `Vous n'avez plus d'argent, vous devez vendre quelquechose..`,
    }
};
