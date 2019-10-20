const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    skeleton: sp.Skeleton = null;

    _trackEntry: any;

    onLoad() {
        this._trackEntry = this.skeleton.getCurrent(0);
    }

    onSlide(slider) {
        this._trackEntry.trackTime = slider.progress * this._trackEntry.animationEnd;
    }

    onRemove() {
        this.skeleton.node.removeFromParent();
        this.skeleton = null;
    }

    onGC() {
        cc.sys.garbageCollect();
    }
}
