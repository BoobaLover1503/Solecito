require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

// Configuración del bot
const TOKEN = process.env.TOKEN;
const WELCOME_CHANNEL_ID = process.env.WELCOME_CHANNEL_ID;

// Crear una instancia del bot con los permisos necesarios
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

// Evento cuando el bot está listo
client.once("ready", () => {
    console.log(`✅ El bot ${client.user.tag} está en línea!`);
});

// Evento cuando un nuevo miembro entra al servidor
client.on("guildMemberAdd", async (member) => {
    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
    if (!channel) return;

    // Crear mensaje de bienvenida con imagen
    const embed = new EmbedBuilder()
        .setTitle("👋 ¡Bienvenido!")
        .setDescription(
            `Hola ${member}, bienvenido a **${member.guild.name}** 🎉!\n\nEsperamos que tengas un gran día soleado.`,
        )
        .setColor("Blue")
        .setImage("https://i.imgur.com/dL75uh2.jpeg") // Cambia esta URL por una imagen de bienvenida
        .setTimestamp();

    await channel.send({ embeds: [embed] });
});

// Iniciar el bot
client.login(TOKEN);
