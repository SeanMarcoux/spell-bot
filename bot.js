const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
    const ayy = client.emojis.get("305818615712579584");
    const ayy2 = client.emojis.find("name", "ayy");
    if(msg.content.includes("ayy")) {
       const ayy3 = client.emojis.get("305818615712579584");
       msg.reply("🇦🇾🇾 lmao");
    }
    if (msg.content === "recurse") {
      msg.channel.send("recurse");
    }
    if(msg.content.includes("69")) {
        msg.channel.send("nice");
    }
    if(msg.content.includes("420")) {
        msg.reply("blaze it");
    }
    if(msg.content.includes("sex")) {
        msg.reply("👉👌");
    }
    reactToLetter(msg, 0);

});

function reactToLetter(msg, letterIndex) {
  switch(msg.content.charAt(letterIndex))
  {
    //🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿
    case 'a':
        reactWithEmoji(msg, "🇦")
        break;
    case 'b':
        reactWithEmoji(msg, "🇧");
        break;
    case 'c':
        reactWithEmoji(msg, "🇨");
        break;
    case 'd':
        reactWithEmoji(msg, "🇩");
        break;
    case 'e':
        reactWithEmoji(msg, "🇪");
        break;
    case 'f':
        reactWithEmoji(msg, "🇫");
        break;
    case 'g':
        reactWithEmoji(msg, "🇬");
        break;
    case 'h':
        reactWithEmoji(msg, "🇭");
        break;
    case 'i':
        reactWithEmoji(msg, "🇮");
        break;
    case 'j':
        reactWithEmoji(msg, "🇯");
        break;
    case 'k':
        reactWithEmoji(msg, "🇰");
        break;
    case 'l':
        reactWithEmoji(msg, "🇱");
        break;
    case 'm':
        reactWithEmoji(msg, "🇲");
        break;
    case 'n':
        reactWithEmoji(msg, "🇳");
        break;
    case 'o':
        reactWithEmoji(msg, "🇴");
        break;
    case 'p':
        reactWithEmoji(msg, "🇵");
        break;
    case 'q':
        reactWithEmoji(msg, "🇶");
        break;
    case 'r':
        reactWithEmoji(msg, "🇷");
        break;
    case 's':
        reactWithEmoji(msg, "🇸");
        break;
    case 't':
        reactWithEmoji(msg, "🇹");
        break;
    case 'u':
        reactWithEmoji(msg, "🇺");
        break;
    case 'v':
        reactWithEmoji(msg, "🇻");
        break;
    case 'w':
        reactWithEmoji(msg, "🇼");
        break;
    case 'x':
        reactWithEmoji(msg, "🇽");
        break;
    case 'y':
        reactWithEmoji(msg, "🇾");
        break;
    case 'z':
        reactWithEmoji(msg, "🇿");
        break;
    default:
        reactWithEmoji(msg, "🍆");
  }
  setTimeout(function () {
        letterIndex++;
        reactToLetter(msg, letterIndex);
    }, 1000);
}

async function reactWithEmoji(message, emoji)
{
    await message.react(emoji);
}

client.login('NDExMzkwNDk3NDE2OTM3NDc0.DV7A5Q.xHTX82a7k-LpOg9phiWhvwStHSQ');