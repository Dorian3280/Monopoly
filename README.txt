## Project Name

Monopoly Online using Meteor with React

## TODO List

- Get the first commit and keep going with the code to make the board responsive and resizable (basically good css code)
OR
- Use Canvas

- For myself =>


// Command Line
To RESET :
db.database.updateMany({"boxes.idproperty": {$exists: true}}, {$set: {"boxes.$[].owned": -1}});db.players.updateMany({}, {$set: {own: []}});db.players.updateMany({}, {$set: {money: 1500}});db.players.updateMany({}, {$set: {location: 1}})



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

@ All Right Reserved 2020 Verdon Dorian
