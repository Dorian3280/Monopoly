export const boxes = [
    {
        id: 1,
        type: 'corner',
        name: 'Départ',
        pseudo: 'depart',
        grid: { position: 'top-left', row: 1, column: 1}
    },
    {
        id: 2,
        idProperty: 1,
        type: 'property',
        name: "Boulevard de Belleville",
        rent: 2,
        house_1: 10,
        house_2: 30,
        house_3: 90,
        house_4: 160,
        hotel: 250,
        propertyCost: 60,
        mortgageCost: 30,
        houseCost: 50,
        membership: [2, 4],
        color: '#8D3461',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'top', row: 1, column: 2}
    },
    {
        id: 3,
        type: 'community',
        name: 'Caisse de communauté',
        grid: { position: 'top', row: 1, column: 3}
    },
    {
        id: 4,
        idProperty: 2,
        type: 'property',
        name: "Rue Lecourbe",
        rent: 4,
        house_1: 20,
        house_2: 60,
        house_3: 180,
        house_4: 320,
        hotel: 450,
        propertyCost: 60,
        mortgageCost: 30,
        houseCost: 50,
        membership: [2, 4],
        color: '#8D3461',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'top', row: 1, column: 4}
    },
    {
        id: 5,
        type: 'tax',
        name: 'Impôt sur le revenu',
        pseudo: 'impot',
        taxCost: 200,
        grid: { position: 'top', row: 1, column: 5}
    },
    {
        id: 6,
        idProperty: 23,
        type: 'station',
        name: "Gare Montparnasse",
        rent: 50,
        propertyCost: 200,
        mortgageCost: 100,
        membership: [6, 16, 26, 36],
        color: '#555358',
        owned: -1,
        mortgaged: false,
        grid: { position: 'top', row: 1, column: 6}
    },
    {
        id: 7,
        idProperty: 3,
        type: 'property',
        name: "Rue Vaugirard",
        rent: 6,
        house_1: 30,
        house_2: 90,
        house_3: 270,
        house_4: 400,
        hotel: 550,
        propertyCost: 100,
        mortgageCost: 50,
        houseCost: 50,
        membership: [7, 9, 10],
        color: '#0FA0F3',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'top', row: 1, column: 7}
    },
    {
        id: 8,
        type: 'chance',
        name: 'Chance',
        grid: { position: 'top', row: 1, column: 8}
    },
    {
        id: 9,
        idProperty: 4,
        type: 'property',
        name: "Rue de Courcelles",
        rent: 6,
        house_1: 30,
        house_2: 90,
        house_3: 270,
        house_4: 400,
        hotel: 550,
        propertyCost: 100,
        mortgageCost: 50,
        houseCost: 50,
        membership: [7, 9, 10],
        color: '#0FA0F3',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'top', row: 1, column: 9}
    },
    {
        id: 10,
        idProperty: 5,
        type: 'property',
        name: "Avenue de la République",
        rent: 8,
        house_1: 40,
        house_2: 100,
        house_3: 300,
        house_4: 450,
        hotel: 600,
        propertyCost: 120,
        mortgageCost: 60,
        houseCost: 50,
        membership: [7, 9, 10],
        color: '#0FA0F3',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'top', row: 1, column: 10}
    },
    {
        id: 11,
        type: 'corner',
        name: 'Simple visite',
        nameBis: 'Prison',
        pseudo: 'prison',
        grid: { position: 'top-right', row: 1, column: 11}
    },
    {
        id: 12,
        idProperty: 6,
        type: 'property',
        name: "Boulevard de la Villette",
        rent: 10,
        house_1: 50,
        house_2: 150,
        house_3: 450,
        house_4: 625,
        hotel: 750,
        propertyCost: 140,
        mortgageCost: 70,
        houseCost: 100,
        membership: [12, 14, 15],
        color: '#5E2258',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'right', row: 2, column: 11}
    },
    {
        id: 13,
        idProperty: 27,
        type: 'company',
        name: "Compagnie de distribution d'electricité",
        namebis: "electricity",
        rent: 4,
        rentIfOwn2: 10,
        propertyCost: 150,
        mortgageCost: 75,
        membership: [13, 29],
        color: '#CDCDCD',
        owned: -1,
        mortgaged: false,
        grid: { position: 'right', row: 3, column: 11}
    },
    {
        id: 14,
        idProperty: 7,
        type: 'property',
        name: "Avenue de Neuilly",
        rent: 10,
        house_1: 50,
        house_2: 150,
        house_3: 450,
        house_4: 625,
        hotel: 750,
        propertyCost: 140,
        mortgageCost: 70,
        houseCost: 100,
        membership: [12, 14, 15],
        color: '#5E2258',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'right', row: 4, column: 11}
    },
    {
        id: 15,
        idProperty: 8,
        type: 'property',
        name: "Rue de Paradis",
        rent: 12,
        house_1: 60,
        house_2: 180,
        house_3: 500,
        house_4: 700,
        hotel: 900,
        propertyCost: 160,
        mortgageCost: 80,
        houseCost: 100,
        membership: [12, 14, 15],
        color: '#5E2258',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'right', row: 5, column: 11}
    },
    {
        id: 16,
        idProperty: 24,
        type: 'station',
        name: "Gare de Lyon",
        rent: 50,
        propertyCost: 200,
        mortgageCost: 100,
        membership: [6, 16, 26, 36],
        color: '#555358',
        owned: -1,
        mortgaged: false,
        grid: { position: 'right', row: 6, column: 11}
    },
    {
        id: 17,
        idProperty: 9,
        type: 'property',
        name: "Avenue Mozart",
        rent: 14,
        house_1: 70,
        house_2: 200,
        house_3: 550,
        house_4: 750,
        hotel: 950,
        propertyCost: 180,
        mortgageCost: 90,
        houseCost: 100,
        membership: [17, 19, 20],
        color: '#CF6A22',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'right', row: 7, column: 11}
    },
    {
        id: 18,
        type: 'community',
        name: 'Caisse de communauté',
        grid: { position: 'right', row: 8, column: 11}
    },
    {
        id: 19,
        idProperty: 10,
        type: 'property',
        name: "Boulevard Saint-Michel",
        rent: 14,
        house_1: 70,
        house_2: 200,
        house_3: 550,
        house_4: 750,
        hotel: 950,
        propertyCost: 180,
        mortgageCost: 90,
        houseCost: 100,
        membership: [17, 19, 20],
        color: '#CF6A22',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'right', row: 9, column: 11}
    },
    {
        id: 20,
        idProperty: 11,
        type: 'property',
        name: "Place Pigalle",
        rent: 16,
        house_1: 80,
        house_2: 220,
        house_3: 600,
        house_4: 800,
        hotel: 1000,
        propertyCost: 200,
        mortgageCost: 100,
        houseCost: 150,
        membership: [17, 19, 20],
        color: '#CF6A22',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'right', row: 10, column: 11}
    },
    {
        id: 21,
        type: 'corner',
        name: 'Parc Gratuit',
        pseudo: 'parc_gratuit',
        grid: { position: 'bottom-right', row: 11, column: 11}
    },
    {
        id: 22,
        idProperty: 12,
        type: 'property',
        name: "Avenue Matignon",
        rent: 18,
        house_1: 90,
        house_2: 250,
        house_3: 700,
        house_4: 875,
        hotel: 1050,
        propertyCost: 220,
        mortgageCost: 110,
        houseCost: 150,
        membership: [22, 24, 25],
        color: '#D42E18',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'bottom', row: 11, column: 10}
    },
    {
        id: 23,
        type: 'chance',
        name: 'Chance',
        grid: { position: 'bottom', row: 11, column: 9}
    },
    {
        id: 24,
        idProperty: 13,
        type: 'property',
        name: "Boulevard Malesherbes",
        rent: 18,
        house_1: 90,
        house_2: 250,
        house_3: 700,
        house_4: 875,
        hotel: 1050,
        propertyCost: 220,
        mortgageCost: 110,
        houseCost: 150,
        membership: [22, 24, 25],
        color: '#D42E18',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'bottom', row: 11, column: 8}
    },
    {
        id: 25,
        idProperty: 14,
        type: 'property',
        name: "Avenue Henri-Martin",
        rent: 20,
        house_1: 100,
        house_2: 300,
        house_3: 750,
        house_4: 925,
        hotel: 1100,
        propertyCost: 240,
        mortgageCost: 120,
        houseCost: 150,
        membership: [22, 24, 25],
        color: '#D42E18',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'bottom', row: 11, column: 7}
    },
    {
        id: 26,
        idProperty: 25,
        type: 'station',
        name: "Gare du Nord",
        rent: 50,
        propertyCost: 200,
        mortgageCost: 100,
        membership: [6, 16, 26, 36],
        color: '#555358',
        owned: -1,
        mortgaged: false,
        grid: { position: 'bottom', row: 11, column: 6}
    },
    {
        id: 27,
        idProperty: 15,
        type: 'property',
        name: "Faubourg Saint-Honoré",
        rent: 22,
        house_1: 110,
        house_2: 330,
        house_3: 800,
        house_4: 975,
        hotel: 1150,
        propertyCost: 260,
        mortgageCost: 130,
        houseCost: 150,
        membership: [27, 28, 30],
        color: '#E6DB13',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'bottom', row: 11, column: 5}
    },
    {
        id: 28,
        idProperty: 16,
        type: 'property',
        name: "Place de la Bourse",
        rent: 22,
        house_1: 110,
        house_2: 330,
        house_3: 800,
        house_4: 975,
        hotel: 1150,
        propertyCost: 260,
        mortgageCost: 130,
        houseCost: 150,
        membership: [27, 28, 30],
        color: '#E6DB13',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'bottom', row: 11, column: 4}
    },
    {
        id: 29,
        idProperty: 28,
        type: 'company',
        name: "Compagnie de distribution des eaux",
        namebis: "water",
        rent: 4,
        rentIfOwn2: 10,
        propertyCost: 150,
        mortgageCost: 75,
        membership: [13, 29],
        color: '#CDCDCD',
        owned: -1,
        mortgaged: false,
        grid: { position: 'bottom', row: 11, column: 3}
    },
    {
        id: 30,
        idProperty: 17,
        type: 'property',
        name: "Rue de la Fayette",
        rent: 24,
        house_1: 120,
        house_2: 360,
        house_3: 850,
        house_4: 1025,
        hotel: 1200,
        propertyCost: 280,
        mortgageCost: 140,
        houseCost: 150,
        membership: [27, 28, 30],
        color: '#E6DB13',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'bottom', row: 11, column: 2}
    },
    {
        id: 31,
        type: 'corner',
        name: 'Allez en Prison',
        pseudo: 'allez_en_prison',
        grid: { position: 'bottom-left', row: 11, column: 1}
    },
    {
        id: 32,
        idProperty: 18,
        type: 'property',
        name: "Avenue Breteil",
        rent: 26,
        house_1: 130,
        house_2: 390,
        house_3: 900,
        house_4: 1100,
        hotel: 1275,
        propertyCost: 300,
        mortgageCost: 150,
        houseCost: 200,
        membership: [32, 33, 35],
        color: '#063E11',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'left', row: 10, column: 1}
    },
    {
        id: 33,
        idProperty: 19,
        type: 'property',
        name: "Avenue Foch",
        rent: 26,
        house_1: 130,
        house_2: 390,
        house_3: 900,
        house_4: 1100,
        hotel: 1275,
        propertyCost: 300,
        mortgageCost: 150,
        houseCost: 200,
        membership: [32, 33, 35],
        color: '#063E11',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'left', row: 9, column: 1}
    },
    {
        id: 34,
        type: 'community',
        name: 'Caisse de communauté',
        grid: { position: 'left', row: 8, column: 1}
    },
    {
        id: 35,
        idProperty: 20,
        type: 'property',
        name: "Boulevard des Capucines",
        rent: 28,
        house_1: 150,
        house_2: 450,
        house_3: 1000,
        house_4: 1200,
        hotel: 1400,
        propertyCost: 320,
        mortgageCost: 160,
        houseCost: 200,
        membership: [32, 33, 35],
        color: '#063E11',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'left', row: 7, column: 1}
    },
    {
        id: 36,
        idProperty: 26,
        type: 'station',
        name: "Gare Saint-Lazare",
        rent: 50,
        propertyCost: 200,
        mortgageCost: 100,
        membership: [6, 16, 26, 36],
        color: '#555358',
        owned: -1,
        mortgaged: false,
        grid: { position: 'left', row: 6, column: 1}
    },
    {
        id: 37,
        type: 'chance',
        name: 'Chance',
        grid: { position: 'left', row: 5, column: 1}
    },
    {
        id: 38,
        type: 'property',
        idProperty: 21,
        name: "Avenue des Champs-Elysées",
        rent: 35,
        house_1: 175,
        house_2: 500,
        house_3: 1100,
        house_4: 1300,
        hotel: 1500,
        propertyCost: 350,
        mortgageCost: 175,
        houseCost: 200,
        membership: [38, 40],
        color: '#1D275C',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'left', row: 4, column: 1}
    },
    {
        id: 39,
        type: 'tax',
        name: 'Taxe de luxe',
        pseudo: 'taxe_de_luxe',
        taxCost: 100,
        grid: { position: 'left', row: 3, column: 1}
    },
    {
        id: 40,
        idProperty: 22,
        type: 'property',
        name: "Rue de la Paix",
        rent: 50,
        house_1: 200,
        house_2: 600,
        house_3: 1400,
        house_4: 1700,
        hotel: 2000,
        propertyCost: 400,
        mortgageCost: 200,
        houseCost: 200,
        membership: [38, 40],
        color: '#1D275C',
        owned: -1,
        mortgaged: false,
        built: 0,
        grid: { position: 'left', row: 2, column: 1}
    },
];
