export const chanceCards = [
    {
        type: 'chance',
        name: 'Chance',
        message: 'Reculez de 3 cases.',
        resume: 'Vous vous êtes déplacé de 3 cases en arrière',
        effect: {type: 'move', data: -3},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Rendez-vous à la Rue de la Paix.',
        message: 'Retournez à Belleville.',
        resume: 'Vous vous êtes déplacé jusqu\'à la Rue de la Paix',
        effect: {type: 'teleportation', data: 40},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Payez pour frais de scolarité 150€.',
        resume: 'Vous avez perdu 150€.',
        effect: {type: 'money', data: -150},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Vous gagnez le prix des mots croisés. Recevez 100€',
        resume: 'Vous avez gagné 100€.',
        effect: {type: 'money', data: 100},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Vous êtes imposé pour les réparations de voirie à raison de : 40€ par appartement et 115€ par hôtel.',
        resume: '', // some texts here,
        effect: {}, // some code here,
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Faites des réparations dans toutes vos maisons. Versez pour chaque maison 25€. Versez pour chaque hôtel 10€.',
        resume: '', // some texts here,
        effect: {}, // some code here,
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Amende pour excès de vitesse. 15€.',
        resume: 'Vous avez perdu 15€.',
        effect: {type: 'money', data: -15},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Avancez au Boulevard de la Villette. Si vous passez par la case "Départ" recevez 200€.',
        resume: 'Vous vous êtes déplacé jusqu\'au Boulevard de la Villette',
        effect: {type: 'teleportation', data: 12},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Allez en prison. Rendez vous directement à la prison. Ne franchissez pas la case "Départ". Ne touchez pas 200€.',
        resume: 'Vous vous êtes téléporté jusqu\'à la case Prison',
        effect: {type: 'teleportation', data: 11},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Amende pour ivresse: 20€.',
        resume: 'Vous avez perdu 20€.',
        effect: {type: 'money', data: -20},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Vous êtes libéré de prison. Cette carte peut être conservée jusqu\'à ce qu\'elle soit utilisée ou vendue.',
        resume: 'Vous avez reçu la carte "Libéré de prison".',
        effect: {},
    },
    {
        message: 'La Banque vous verse un dividende de 50€.',
        resume: 'Vous avez gagné 50€.',
        effect: {type: 'money', data: 50},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Rendez vous à l\'Avenue Henri-Martin. Si vous passez par la case "Départ" recevez 200€.',
        resume: 'Vous vous êtes déplacé jusqu\'à l\'Avenue Henri-Martin',
        effect: {type: 'teleportation', data: 25},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Allez à la gare de Lyon. Si vous passez par la case "Départ" recevez 200€.',
        resume: 'Vous vous êtes déplacé jusqu\'à la gare de Lyon',
        effect: {type: 'teleportation', data: 16},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Avancez jusqu\'à la case "Départ".',
        resume: 'Vous vous êtes déplacé jusqu\'à la case "Départ',
        effect: {type: 'teleportation', data: 1},
    },
    {
        type: 'chance',
        name: 'Chance',
        message: 'Votre immeuble et votre prêt vous rapportent. Vous devez touchez 150€.',
        resume: 'Vous avez gagné 150€.',
        effect: {type: 'money', data: 150},
    }
];
