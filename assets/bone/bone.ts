const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    skeleton: sp.Skeleton = null;

    onLoad() {
        let bone = this.skeleton.findBone('xian1');

        this.node.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => {
            let local = this.skeleton.node.convertToNodeSpaceAR(
                e.getLocation()
            );

            let boneWorld = cc.v2(local.x + bone.worldX, local.y + bone.worldY);
            let boneLocal = bone.worldToLocal(boneWorld);
            bone.x = boneLocal.x
            bone.y = boneLocal.y;
        });
    }
}
