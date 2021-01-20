import { Meteor } from 'meteor/meteor';

import '/imports/api/players/index';
import '/imports/api/players/methods';
import '/imports/api/players/publications';

import '/imports/api/bank/index';
import '/imports/api/bank/methods';

import '/imports/api/actionsHistory/index';
import '/imports/api/actionsHistory/methods';
import '/imports/api/actionsHistory/publications';

import '/imports/api/database/index';
import '/imports/api/database/methods';
import '/imports/api/database/publications';

const boxes = [
  {
      id: 1,
      type: 'corner',
      name: 'Départ',
      pseudo: 'depart',
      color: null,
      owned: null,
      mortgaged: null,
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

const chanceCards = [
  {
      message: 'Reculez de 3 cases.',
      cast: function(player) {
          move(player, -3);
      },
  },
  {
      message: 'Rendez-vous à la Rue de la Paix.',
      cast: function(player) {
          move(player, 39, true);
      },
  },
  {
      message: 'Payez pour frais de scolarité<br>150€.',
      cast: function(player) {
          loseMoney(player, 150);
      },
  },
  {
      message: 'Vous gagnez le prix des mots croisés.<br>Recevez 100€',
      cast: function(player) {
          winMoney(player, 100);
      },
  },
  {
      message: 'Vous êtes imposé pour les réparations de voirie à raison de :<br>40€ par appartement et<br>115€ par hôtel.',
      cast: function(player) {
          // results = getNumberOfApartmentAndHotel(player);
          // price = (results[0] * 40) + (results[1] * 115);
          // loseMoney(player, results);
      },
  },
  {
      message: 'Faites des réparations dans toutes vos maisons.<br>Versez pour chaque maison 25€.<br>Versez pour chaque hôtel 10€.',
      cast: function(player) {
          // results = getNumberOfApartmentAndHotel(player);
          // price = (results[0] * 25) + (results[1] * 100);
          // loseMoney(player, results);
      }
  },
  {
      message: 'Amende pour excès de vitesse.<br>15€.',
      cast: function(player) {
          loseMoney(player, 15);
      },
  },
  {
      message: 'Avancez au Boulevard de la Villette.<br>Si vous passez par la case "Départ"<br>recevez 200€.',
      cast: function(player) {
          position = '';
          if (position > 12) {
              winMoney(player, 200);
          }
          move(player, 12, true);
      },
  },
  {
      message: 'Allez en prison.<br>Rendez vous directement à la prison.<br>Ne franchissez pas la case "Départ".<br>Ne touchez pas 200€.',
      cast: function(player) {
          move(player, 11, true);
      },
  },
  {
      message: 'Amende pour ivresse:<br>20€.',
      cast: function(player) {
          loseMoney(player, 20);
      },
  },
  {
      message: 'Vous êtes libéré de prison.<br>Cette carte peut être conservée jusqu\'à ce qu\'elle soit utilisée ou vendue.',
      cast: function(player) {
          // Some codes here
      },
  },
  {
      message: 'La Banque vous verse un dividende de 50€.',
      cast: function(player) {
          winMoney(player, 50);
      },
  },
  {
      message: 'Rendez vous à l\'Avenue Henri-Martin.<br>Si vous passez par la case "Départ"<br>recevez 200€.',
      cast: function(player) {
          position = '';
          if (position > 25) {
              winMoney(player, 200);
          }
          move(player, 25, true);
      },
  },
  {
      message: 'Allez à la gare de Lyon.<br>Si vous passez par la case "Départ"<br>recevez 200€.',
      cast: function(player) {
          position = '';
          if (position > 16) {
              winMoney(player, 200);
          }
          move(player, 16, true);
      },
  },
  {
      message: 'Avancez jusqu\'à la case "Départ".',
      cast: function(player) {
          move(player, 1, true);
      },
  },
  {
      message: 'Votre immeuble et votre prêt vous rapportent.<br>Vous devez touchez<br>150€.',
      cast: function(player) {
          winMoney(player, 150);
      },
  }
];

const communityChestCards = [
  {
      message: 'La vente de votre stock vous rapporte<br>50€.',
      cast: function(player) {
          winMoney(player, 50);
      },
  },
  {
      message: 'Recevez votre revenu annuel<br>100€.',
      cast: function(player) {
          winMoney(player, 100);
      },
  },
  {
      message: 'Payez la note du Medecin<br>50€.',
      cast: function(player) {
          loseMoney(player, 50);
      },
  },
  {
      message: 'Vous avez gagné<br> le deuxième Prix de Beauté.<br>Recevez 100€.',
      cast: function(player) {
          winMoney(player, 100);
      },
  },
  {
      message: 'Retournez à Belleville.',
      cast: function(player) {
          move(player, 2, true);
      },
  },
  {
      message: 'Vous êtes libéré de prison.<br>Cette carte peut être conservée jusqu\'à ce qu\'elle soit utilisée ou vendue.',
      cast: function(player) {
          // Some codes here
      },
  },
  {
      message: 'Placez vous sur le case "Départ".',
      cast: function(player) {
          move(player, 1, true);
      },
  },
  {
      message: 'Vous héritez 100€.',
      cast: function(player) {
          winMoney(player, 100);
      },
  },
  {
      message: 'Payer une amende de 10€ ou bien tirez une carte "CHANCE"',
      cast: function(player) {
          // some codes here;
      },
  },
  {
      message: 'Recevez votre intérêt sur l\'emprunt à 7%.<br>25€.',
      cast: function(player) {
          winMoney(player, 25);
      },
  },
  {
      message: 'C\'est votre anniversaire:<br>chaque joureur doit vous donner<br>10€.',
      cast: function(player) {
          winMoney(player, 40);
      }
  },
  {
      message: 'Payer à l\'Hôpital 100€.',
      cast: function(player) {
          loseMoney(player, 100);
      },
  },
  {
      message: 'Payer votre Police d\'Assurance<br>s\'élevant à 50€.',
      cast: function(player) {
          loseMoney(player, 50);
      },
  },
  {
      message: 'Erreur de la Banque en votre faveur.<br>Recevez 200€.',
      cast: function(player) {
          winMoney(player, 200);
      },
  },
  {
      message: 'Les Contributions vous remboursent<br>la somme de 20€.',
      cast: function(player) {
          winMoney(player, 20);
      },
  },
  {
      message: 'Allez en prison.<br>Rendez vous directement à la prison.<br>Ne franchissez pas la case "Départ".<br>Ne touchez pas 200€.',
      cast: function(player) {
          move(player, 11, true);
      },
  }
];

Meteor.startup(() => {
  
  if (Players.find().count() === 0) {
    [
      {
        name : 'Dorian',
        color: 'red'
      },{
        name : 'Manon',
        color: 'blue'
      },{
        name : 'Sandie',
        color: 'green'
      },{
        name : 'Alain',
        color: 'yellow'
      }
    ].map((player, i) => Players.insert({
      id: i,
      ...player,
      money: 1500,
      own: [],
      cardGetOutJail: false,
      inJail: false,
      bankruptcy: false,
      location: 1,
    }));

    Bank.insert({
      houses: 32,
      hotels: 12,
    });

    chanceCards.sort(() => Math.random() - 0.5 );
    communityChestCards.sort(() => Math.random() - 0.5 );

    Database.insert({
      boxes,
      chanceCards,
      communityChestCards
    })
  }
});
