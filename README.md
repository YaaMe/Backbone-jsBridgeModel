# Backbone-jsBridgeModel
It's jsbridge(backbone model) for hybrid app.

## demo usage
import { GetKey } from '../demo.js';
let getKey = new GetKey();
someThing.listenTo(getKey, 'sync', function(user){
    // to do anything
    console.log(`nickName:${user.nickName}`)
});
// send request to native
getKey.fetch({
    data: {
        key: 'user'
    }
})

## 作者的话
这是学习过程中一段很小的模块的整理与总结，这一段代码出自backbone体系的jsbridge。

个人认为，h5部分与服务器的通讯和与原生APP的通讯理解上应该是等价的，所以决定用model封装h5与原生之间的通讯请求。

此项目更多地作为一种思路。

----------------------------------
目前已知的问题是：

    从bridge实际使用的代码段来看，可读性不高。如果要满足易读的要求，可能需要往上将函数名封装入bridge中
    
