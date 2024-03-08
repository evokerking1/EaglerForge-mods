var PluginAPI = ModAPI

ModAPI.require("LocalPlayerData")
PluginAPI.require("player");


ModAPI.addEventListener("sendchatmessage"(message:"/heal"), heal())


ModAPI.addEventListener("key"(key:"35"), heal)


ModAPI.addEventListener("update", spiderListener);

function heal() {
    ModAPI.LocalPlayerData.setPlayerSPHealth({health: 20})
}


function spiderListener() {
    if (PluginAPI.player.isCollidedHorizontally) {
        PluginAPI.player.motionY += 0.2;
        PluginAPI.player.reload();
    }
}

