const Command = require("./command");
const Rover = require("./rover");

class Message {
   // Write code here!
   constructor(name, commands) {
      this.name = name;
      if (!name) {
        throw Error("Message Name is required.");
      }
      this.commands = commands;
    }
}



module.exports = Message;