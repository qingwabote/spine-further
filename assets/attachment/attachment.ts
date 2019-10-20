const { ccclass, property } = cc._decorator;

const slot2attach = [
    {
        // 手
        'hz/gong': ['hz/wuqi_kongbai', 'hz/feibiao', 'hz/gong', 'hz/jian'] // 飞镖， 弓箭， 剑
    },
    {
        // 帽子
        'hz/maozi_zb': ['hz/maozi_kongbai', 'hz/maozi_zb', 'hz/yashemao'], // 空  大  呀傻冒
        'hz/maozi_zb2': [
            // 左
            'hz/maozi_zb2_kongbai', //空
            'hz/maozi_zb2', //大的左边耳把
            'hz/maozi_zb2_kongbai' // 空
        ],
        'hz/maozi_zb1': [
            // 右
            'hz/maozi_zb1_kongbai', //空
            'hz/maozi_zb1', // //大的右边耳把
            'hz/maozi_zb1_kongbai' // 空
        ]
    },
    {
        // 脚
        'hz/xiezi_z': ['hz/zuojiao_kongbai', 'hz/huang_zj', 'hz/xiezi_z'], // 左脚 空 黄 白
        'hz/xiezi_y': ['hz/youjiao_kongbai', 'hz/huang_yj', 'hz/xiezi_y'] // 右脚 空 黄 白
    },
    {
        // 身体
        'hz/yifu_zb': ['hz/yifu_kongbai', 'hz/yifu_zb_b', 'hz/yifu_zb'] // 空，白， 蓝
    }
];

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    skeleton: sp.Skeleton = null;

    _attachment: any;

    _slot: any;

    onLoad() {
        this._attachment = this.skeleton.getAttachment('hz/maozi_zb', 'hz/yashemao');
        this._slot = this.skeleton.findSlot('hz/maozi_zb');
    }

    onClick() {
        console.log('this._attachment.name', this._attachment.name)
        this._slot.setAttachment(this._attachment);
        setTimeout(() => {
            this._slot.setToSetupPose();
        }, 3000)
    }

    onRemove() {
        this.skeleton.node.removeFromParent();
        this.skeleton = null;
    }

    onGC() {
        cc.sys.garbageCollect();
    }
}
