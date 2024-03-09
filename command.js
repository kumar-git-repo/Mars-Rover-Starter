const Message = require("./message");
const Rover = require("./rover");


class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }

}

module.exports = Command;