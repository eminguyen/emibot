/* Module: pubg.js
 * Author: Emily Nguyen
 * Description: Returns PUBG player statistics
 */

module.exports = {

  /* A list of the available commands in this module*/
  commands: [
  ],

  /* WORK IN PROGRESS */
  /* Command: PUBG
   * Returns a player's PUBG Statistics
   */
  "pubg": {
    usage: "pubg <player name>",
    description: "Returns PUBG statitics for a player",
    method: (client, message, argument) => {
      try {
        let config = require("../config.json");

        let request = require('request');

        let options = {
          method: "GET",
          url: `https://api.playbattlegrounds.com/shards/pc-na/players/${argument}`,
          headers: {
            Authorization: `Bearer ${config.pubg}`,
            Accept: 'application/json'
          }
        }

        request(options, (error, response, body) => {
        if (!error) {
          let stats = JSON.parse(body);
          console.log(stats);
          let statsText =
          {embed: {
              color: 3447003,
              title: `Stats for ${stats}`,
            fields: [
              {
                name: ':trophy: Chicken Dinners',
                value: `test`
              },
              {
                name: ':chart_with_upwards_trend: Win Rate',
                value: `test%`
              },
              {
                name: ':gun: Kills',
                value: `test}`
              },
              {
                name: ':skull: Suicides',
                value: `test`
              },
              {
                name: ':black_heart: K/D',
                value: `test`
              },
            ],
              timestamp: new Date(),
              footer: {
                text: "Player Unknown's BattleGrounds"
              }
            }
          };
          message.channel.send(statsText);
        }
        else {console.log(response)};
      });
      }
      catch (error) {
        console.log(error);
        message.reply("I am unable to retrieve PUBG statistics");
      }
    },
  }
}
