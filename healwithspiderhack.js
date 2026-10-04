ModAPI.require("player");
ModAPI.require("displayToChat");

ModAPI.addEventListener("update", spiderListener);
if ModAPI.LocalPlayerData.PlayerHealth < 15 -> {
     ModAPI.LocalPlayerData.setPlayerSPHealth({health: 20}) ;
     ModAPI.displayToChat({msg: "Healing"});
}

function spiderListener() {
    if (PluginAPI.player.isCollidedHorizontally) {
        PluginAPI.player.motionY += 0.2;
        PluginAPI.player.reload();
    }
}

