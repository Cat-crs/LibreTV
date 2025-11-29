const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    zy360: {
        api: 'https://360zyzz.com/api.php/provide/vod',
        name: '360资源',
    },
    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod/at/josn',
        name: '红牛资源',
    },
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/at/json',
        name: '量子资源',
    },
    feifan: {
        api: 'http://api.ffzyapi.com/api.php/provide/vod/at/json',
        name: '非凡资源',
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/?ac=list',
        name: '索尼资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
