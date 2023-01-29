import * as mc from "@minecraft/server";

class bax {
  static getScore(self, scoreboard) {
    try {
      return mc.world.scoreboard.getObjective(scoreboard).getScore(
          typeof self === "string"
            ? oB.getParticipants().find((s) => s.displayName == self)
            : self.scoreboard
        );
    } catch {
      return null;
    }
  }
  static log(self,text) {
    return self.runCommandAsync(`say ${text}`);
  }
}

function loopcheck(self) {
  bax.log(self,self.velocity.x);
}

mc.world.events.tick.subscribe(() => {
  let gametime = mc.world.getTime();
  //让每位玩家遍历执行
  let players = mc.world.getPlayers();
  //Array.from(Players,player => {})
  for (let player of players) {
    //检测玩家各种元素
    //loopcheck(player)
  }
});
