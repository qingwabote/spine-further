const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    skeleton: sp.Skeleton = null;

    _bone: any;

    onLoad() {
        let bone = this.skeleton.findBone('xian1');

        this.node.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => {
            let local = this.skeleton.node.convertToNodeSpaceAR(
                e.getLocation()
            );

            let boneLocal = bone.parent.worldToLocal(cc.v2(local.x, local.y));
            bone.x = boneLocal.x
            bone.y = boneLocal.y;
        });

        this._bone = bone;
    }

    onSlide(slider) {
        this._bone.rotation = slider.progress * 360;
    }

    onRemove() {
        this.skeleton.node.removeFromParent();
        this.skeleton = null;
    }

    onGC() {
        cc.sys.garbageCollect();
    }
}
