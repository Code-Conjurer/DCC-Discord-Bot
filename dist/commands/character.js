"use strict";
const characterCmd = require("./characterCmd");
module.exports = {
    name: 'character',
    aliases: ['c'],
    description: 'Information about the arguments provided.',
    execute(message, args) {
        characterCmd.characterCommand(message, args);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29tbWFuZHMvY2hhcmFjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUUvQyxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2hCLElBQUksRUFBRSxXQUFXO0lBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ2pCLFdBQVcsRUFBRSwyQ0FBMkM7SUFNeEQsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJO1FBQ2QsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0QsQ0FBQyJ9