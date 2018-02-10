const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame("Being better than all you losers");
    client.channels.array()[0].send("Hi guys! I'm so excited to be here with you all! :)");
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
    var message = msg.content.toLowerCase();
    if (message === "recurse") {
      msg.channel.send("recurse");
    }
    if(message.includes("69")) {
        msg.channel.send("nice");
    }
    if(message.includes("420")) {
        msg.reply("blaze it");
    }
    if(message.includes("sex")) {
        msg.reply("👉👌");
    }
    if(message.includes("tian li")) {
        msg.reply("TL is a sloth racist and no one loves him. He will die alone and unloved and the world will be better for it");
    }
    if(message.includes("sean")) {
        msg.reply("I fukin love that guy. He's my dad <3");
    }
    if(message.includes("emili")) {
        msg.reply("Omolo? What a weeb");
    }
    if(message.includes("dias")) {
        msg.reply("Ayy lmao");
    }
    if(message.includes("bruce")) {
        msg.reply("Broco? He is my black friend, so I can't be racist");
    }
    if(message.includes("gab")) {
        msg.reply("bag of d");
    }
    if(message.includes("mehdi")) {
        msg.reply("What message do I put for mohdo?");
    }
    if(message === "spell-bot, i fucking hate your guts")
    {
        setTimeout(function () {
            msg.reply("Guess I'll die");
            setTimeout(function () {
                throw 'Goodbye cruel world';
            }, 1000);
        }, 1000);
    }
    reactToLetter(msg, 0);

});

function reactToLetter(msg, letterIndex) {
  var message = msg.content.toLowerCase();
  switch(message.charAt(letterIndex))
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
        if(letterIndex < (message.length - 1) && isEmoji(message.charAt(letterIndex) + message.charAt(letterIndex+1) + ""))
        {
            reactWithEmoji(msg, message.charAt(letterIndex) + message.charAt(letterIndex+1));
            letterIndex++;
        }
        else
        {
            //reactWithEmoji(msg, "🍆");
        }
  }
  setTimeout(function () {
        letterIndex++;
        if(letterIndex < msg.content.length)
            reactToLetter(msg, letterIndex);
    }, 1000);
}

function isEmoji(str) {
    var ranges = [
        '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
        '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
        '\ud83d[\ude80-\udeff]' // U+1F680 to U+1F6FF
    ];
    if (str.match(ranges.join('|'))) {
        return true;
    } else {
        return false;
    }
}

async function reactWithEmoji(message, emoji)
{
    await message.react(emoji);
}

client.login('');