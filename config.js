

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["557401286472105986"], 
  mongodbUri : "mongodb+srv://GenDex:nKsxuHlieeUmZouo@discordbot.hwkt4pz.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "9b7aa9c200f74cd38977379d6f14ee92",
  spotifyClientSecret : "5c1347ece43d4215bb3f418bd20abffc",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "To Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GenDex",
      password: "gendex0145",
      host: "78.46.65.243",
      port:  3435,
      secure: false
    }
  ],
  lavalink: {
      name: "GenDex",
      password: "gendex0145",
      host: "78.46.65.243",
      port:  3435,
      secure: false
    }
};
