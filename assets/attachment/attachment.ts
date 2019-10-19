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

    onClick() {
        this.skeleton.setAttachment('hz/maozi_zb', 'hz/yashemao');
        // let attach = this.skeleton.getAttachment('hz/maozi_zb', 'hz/yashemao');
        let slot = this.skeleton.findSlot('hz/maozi_zb');
        // slot.setAttachment(attach);
        setTimeout(() => {
            slot.setToSetupPose();
        }, 3000)
    }
}
