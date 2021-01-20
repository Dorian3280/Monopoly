export function generateChanceCards() {
    chanceCards = [
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
    
    chanceCards.sort(() => Math.random() - 0.5 );
    return chanceCards;
}
