//=====Front=====//
import { world, Player } from '@minecraft/server';
import {
    ActionFormData,
    ActionFormResponse,
    ModalFormData,
    ModalFormResponse
} from "@minecraft/server-ui";

//=====函数区=====//
const log = (msg) => {
    Commands.run("say" + msg, World.getDimension("overworld"));
};

const onTick = function() {
    log('Hello World');
};

function ActionFormDataui(player) {
    var fm = new ActionFormData();
    fm = a.title("大标题")
        .body("小标题")
        .button("按钮1")
        .button("按钮2")
        .button("按钮3");
    fm.show(player).then((i) => {
        switch (i.selection) {
            case 0:
                player.runCommandAsync('say 点击了第一个按钮');
                break;
            case 1:
                player.runCommandAsync('say 点击按钮(2)');
                break;
            case 2:
                player.runCommandAsync('say 点击按钮(3)');
                break;
        }
    })
};

//=====监听区=====//
world.events.tick.subscribe(onTick);

world.events.beforeItemUse.subscribe((a) => {
    if (a.item.typeId == 'stick') ActionFormDataui(a.source)
});