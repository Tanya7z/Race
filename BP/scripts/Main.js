//=====Front=====//
import * as server from '@minecraft/server';
import * as ui from "@minecraft/server-ui";

//=====函数区=====//
function form(player) {
    var fm = new ui.ActionFormData();
    fm = a.title("大标题")
        .body("小标题")
        .button("按钮1")
        .button("按钮2")
        .button("按钮3");
    fm.show(player).then((i) => {
        switch (i.selection) {
            case 0:
                server.player.runCommandAsync('say 点击了第一个按钮');
                break;
            case 1:
                server.player.runCommandAsync('say 点击按钮(2)');
                break;
            case 2:
                server.player.runCommandAsync('say 点击按钮(3)');
                break;
        }
    })
};

//=====监听区=====//
server.world.events.beforeItemUse.subscribe((a) => {
    if (a.item.typeId == 'stick') form(a.source);
});