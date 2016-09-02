import NativeModel from '../NativeModel';
import _ from 'underscore';

// 获取参数
export let GetKey = NativeModel.extend({
    functionName: 'getKey',
    debug: function(params) {
        // now you can test bridge logic without building App
        if(JSON.parse(JSON.stringify(params)).key == 'key'){
            setTimeout(()=>{
                this.callback({
                    value:'value'
                });
            },100)
        }
    }
});

// 打开页面
export let ShowPage = NativeModel.extend({
    functionName: 'showPage',
    // if the params is in select
    mode:['innerLink', 'innerBrowser', 'outerBrowser', 'outerApp'],
    parse: function(options = {}) {
        let defaultData = {
            mode: this.mode[0]
        }
        return _.extend(defaultData, options.data)
    },
    debug:function(){
        this.callback({
            code: '200'
        });
    }
});
