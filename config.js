

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["557401286472105986","700144576882671696"], 
  mongodbUri : "mongodb+srv://GenDex:nKsxuHlieeUmZouo@discordbot.hwkt4pz.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "9b7aa9c200f74cd38977379d6f14ee92",
  spotifyClientSecret : "5c1347ece43d4215bb3f418bd20abffc",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GenDex",
      password: "gendex0145",
      host: "5.39.63.207",
      port:  8183,
      secure: false
    }
  ],
  lavalink: {
      name: "GenDex",
      password: "gendex0145",
      host: "5.39.63.207",
      port:  8183,
      secure: false
    }
};
