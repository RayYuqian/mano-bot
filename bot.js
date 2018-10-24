//const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
//const prefix = botSettings.prefix

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log(`Bot is ready! ${bot.user.username}`);

});

bot.on("guildMemberAdd", function(member) {
	let memberRole = member.guild.roles.find(x => x.name === "pingable");
	member.addRole(memberRole);
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	args = messageArray.slice(1);

	if(!command.startsWith(prefix)) return;

	/*if(command === `${prefix}userinfo`) {
		let embed = new Discord.RichEmbed()
			.setAuthor(message.author.username)
			.setDescription("This is the user's info!")
			.setColor("#fdbede")
			.addField("Username", message.author.username)
			.addField("ID", message.author.id)
			.addField("Created At", message.author.createdAt);

		message.channel.sendEmbed(embed);

		return;
	}*/

});

bot.on('message', function(message){

	if((message.content).toLowerCase() == '+ pingable') 
	{
		message.channel.send("You have joined the pingable role!");
		let memberRole = message.member.guild.roles.find(x => x.name === "pingable");
		message.member.addRole(memberRole);
	}

	if((message.content).toLowerCase() == '- pingable') 
	{
		message.channel.send("You have left the pingable role!");
		let memberRole = message.member.guild.roles.find(x => x.name === "pingable");
		message.member.removeRole(memberRole);
	}

	if((message.content).toLowerCase() == 'region na') 
	{
		message.channel.send("You are assigned to the region NA!");
		let memberRole = message.member.guild.roles.find(x => x.name === "NA");
		message.member.addRole(memberRole);
	}

	if((message.content).toLowerCase() == 'region eu') 
	{
		message.channel.send("You are assigned to the region EU!");
		let memberRole = message.member.guild.roles.find(x => x.name === "EU");
		message.member.addRole(memberRole);
	}

	if((message.content).toLowerCase() == 'region asia') 
	{
		message.channel.send("You are assigned to the region ASIA!");
		let memberRole = message.member.guild.roles.find(x => x.name === "ASIA");
		message.member.addRole(memberRole);
	}
});

bot.login(process.env.BOT_TOKEN);
