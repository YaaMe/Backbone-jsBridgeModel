### **Get key**

**To get params from native**
#### Function:
**define**
```
- functionName: 'getKey'
- params: {
    key: 'string'
}
- callback: {
    value:  'value'
}
```
**Coffeescript:**

```coffeescript
nativeApp.send 'getKey', JSON.stringify
    key: <key>
,(res) ->
    alert res
```

#### Parameters:
- key: 需要获取的键值名
#### Usage:
when you want to get value

```coffeescript
nativeApp.send 'getKey',JSON.stringify
    key: 'user'    
,(res)->
    alert res
```
#### Results:
```coffeescript
{
    value: 'value'
}
```


### **Show Page**

**展示Page, (innerBrowser|outerBrowser|innerLink|outerApp)**
#### Function:
**define**
```
- functionName: 'showPage'
- params: {
    mode   : '(innerBrowser|outerBrowser|innerLink|outerApp)'
    url    : '<URL>'
}
- callback: useless(now)
```
**Coffeescript:**

```coffeescript
nativeApp.send 'showPage', JSON.stringify
    mode   : '(innerBrowser|outerBrowser|innerLink|outerApp)'
    url    : '<URL>'
,
    (res)->
        return <this is the callback function>
```

#### Parameters:
- mode   : 
    innerBrowser:内部浏览器
    outerBrowser:外部浏览器
    innerLink:内部链接
    outerApp:外部app
- url : 地址

#### Usage:
If you want show outer Page

```coffeescript
nativeApp.send 'showPage',JSON.stringify
    mode   : 'outerBrowser'
    url    : 'http://baidu.com'
,
    (res)->
        alert res
```
#### Results:
```coffeescript
{
    code: '200'
}
```
