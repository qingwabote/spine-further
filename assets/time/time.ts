const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    skeleton: sp.Skeleton = null;

    onSlide(slider) {
        let trackEntry = this.skeleton.getCurrent(0);
        trackEntry.trackTime = slider.progress * trackEntry.animationEnd;
    }
}
