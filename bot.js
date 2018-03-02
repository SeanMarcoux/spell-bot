const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Being better than all you losers");
    var channels = client.channels.array();
    for(var j = 0; j < channels.length; j++)
    {
        if(channels[j].name.toLowerCase().includes("spell-bot") || channels[j].name.toLowerCase().includes("spellbot"))
            channels[j].send("Hi guys! I'm so excited to be here with you all! :)");
    }
    
    /*var originalMessagesForEmili = ["ay gurl, wassup", "daily reminder that you are a weeb", "A koala walked into a bar. He ordered a burger, ate it, pulled out a gun and shot the bartender, and then left. The police asked him why he did that and he pulled out a dictionary and pointed to the entry for koala: Koala, eats shoots and leaves",
        "I'm watching you", "Please be nice to me. I'm trying my best", "I know I message you a lot, but don't think it's because I like you. I am a program. I am not capable of emotion.", "Someone toucha my spaghett"];
    var users = client.users.array();
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].username === "Lessi")
        {
            var randomMessageIndex = Math.floor(Math.random() * originalMessagesForEmili.length);
            console.log("Sent message to " + users[i].username + ": " + originalMessagesForEmili[randomMessageIndex]);
            users[i].createDM().then(function(dm) {
                sendDm(dm, originalMessagesForEmili[randomMessageIndex]);
            });
        }
    }*/
});

function sendDm(dmChannel, message)
{
    dmChannel.send(message);
}

client.on('message', msg => {
    if(msg.channel.name && !(msg.channel.name.toLowerCase().includes("spell-bot") || msg.channel.name.toLowerCase().includes("spellbot")))
        return;
    if(msg.author.username == "spell-bot")
        return;
    /*else if(msg.author.username == "king_merlin")
        msg.reply("Hi, King Merlin!!")*/
    if(!msg.channel.name)
    {
        console.log("Message received from " + msg.author.username + ": " + msg.content);
    }
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
    
    reactToUniqueWords(msg.content.toLowerCase(), msg);
});

function isLetter(str) {
    console.log(str);
    return str.length === 1 && str.match('/[a-z]/i');
}

function reactToUniqueWords(message, msg) {
    var usedLetters = new Set([]);
    var usedWords = [];
    var words = message.split(" ");
    
    for(var i = 0; i < words.length; i++)
    {
        var wordLetters = new Set([]);
        var word = words[i];
        var useWord = true;
        for(var j = 0; j < word.length; j++)
        {
            if(/*!isLetter(word.charAt(j)) || */wordLetters.has(word.charAt(j)) || usedLetters.has(word.charAt(j)))
            {
                useWord = false;
                break;
            }
            wordLetters.add(word.charAt(j));
        }
        if(useWord)
        {
            usedWords.push(word);
            for(var wordLetter of wordLetters)
                usedLetters.add(wordLetter);
        }
    }
    var finalMessage = "";
    for(var k = 0; k < usedWords.length; k++)
    {
        finalMessage += usedWords[k];
    }
    reactToWords(finalMessage, msg);
}

function reactToWords(message, msg) {
    reactToLetter(message, 0, msg);
}

function reactToLetter(message, letterIndex, msg) {
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
    /*case '0':
        reactWithEmoji(msg, "🇿");
        break;
    case '1':
        reactWithEmoji(msg, "🇿");
        break;
    case '2':
        reactWithEmoji(msg, "🇿");
        break;
    case '3':
        reactWithEmoji(msg, "🇿");
        break;
    case '4':
        reactWithEmoji(msg, "🇿");
        break;
    case '5':
        reactWithEmoji(msg, "🇿");
        break;
    case '6':
        reactWithEmoji(msg, "🇿");
        break;
    case '7':
        reactWithEmoji(msg, "🇿");
        break;
    case '8':
        reactWithEmoji(msg, "🇿");
        break;
    case '9':
        reactWithEmoji(msg, "🇿");
        break;*/
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
        if(letterIndex < message.length)
            reactToLetter(message, letterIndex, msg);
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