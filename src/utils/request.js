//封装请求方法
let request = function(url,method = 'get',data={},header={}){
    return new Promise((resolve,reject) => {
        //添加加载动画
        wx.showLoading({
            title:'加载中...',
        });
        wx.request({
            url:url,
            method:method,
            data:data,
            header:header,
            success:function (res) {
                wx.hideLoading();
                resolve(res);
            },
            fail:function(res){
                wx.hideLoading();
                reject(res);
            }
        })
    });
}
//进一步封装get 方法
request.get = function(url,data){
    return request(url,'get',data,{});
}
//暴露方法
export default request;