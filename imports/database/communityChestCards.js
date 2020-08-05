export function generateCommunityChestCards() {
    communityChestCards = [
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
    
    communityChestCards.sort(() => Math.random() - 0.5 );
    return communityChestCards;
}
