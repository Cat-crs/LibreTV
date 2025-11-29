const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    jinying: {
        api: 'https://jyzyapi.com/provide/vod/from/jinyingyun/at/json',
        name: '金鹰资源',
    },
    senlin: {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: '森林资源',
        adult: true,
    },
    yutu: {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: '玉兔资源',
        adult: true,
    },
    dadi: {
        api: 'https://dadiapi.com/feifei',
        name: '大地资源',
        adult: true,
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源',
    },
    aosika: {
        api: 'https://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源',
        adult: true,
    },
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod/at/josn',
        name: '茅台资源',
    },
    haohuayun: {
        api: 'https://hhzyapi.com/api.php/provide/vod/from/hhyun/at/json',
        name: '豪华云资源',
    },
    haohua: {
        api: 'https://hhzyapi.com/api.php/provide/vod/at/json',
        name: '豪华资源',
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/josn',
        name: '新浪资源',
    },
    maoyan: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod/at/json',
        name: '猫眼资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod/at/json',
        name: '极速资源',
    },
    youzhi: {
        api: 'https://api.yzzy-api.com/inc/apijson.php',
        name: '优质资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
