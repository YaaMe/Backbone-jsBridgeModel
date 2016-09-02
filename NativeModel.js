import Backbone from 'backbone';

// define jsbridge
// @functionName: name of model
// @params: Stringify json
// @callback: native callback, return {code:200} or something else
// @context: self,it's exists for wechat.

// to send a request to native
export let NativeModel = Backbone.Model.extend({
    // return nativeBridge object
    getBridge: function() {
        // asume ios||android||wechat
        return window.iosBridge || window.androidBridge || window.wechatBridge;
    },
    // parse data
    parse: function(options) {
        // asume options.data;
        return options.data
    },
    // do fetch
    fetch: function(options) {
        // It isn't XHR,just to do nothing
        return this.sync(options);
    },
    // send request
    sync: function(options = {}) {
        // get bridge
        let nativeBridge = this.getBridge();
        // get data
        let params = this.parse(options);
        // judge bridge or h5 debugging
        if (nativeBridge) {
            // define js bridge send(functionName, params, callback, context)
            nativeBridge.send(this.functionName, JSON.stringify(params), (res) => {
                this.callback(res);
            }, this);
        } else {
            // no bridge,do h5 debugging
            this.debug(params);
        }
    },
    // get native response
    callback: function(res = {}) {
        // judge callback success or failed
        if (this.isSuccess(res)) {
            // success
            this.trigger('sync', this, res);
        } else {
            // error
            this.trigger('error', this, res);
        }
    },
    // callback judgement
    isSuccess: function(response = {}) {
        return response.code == '200';
    },
    // h5 debug
    debug: function(params) {
        // write your debugging function
        console.log(this.functionName);
        console.log(params);
    }
});
