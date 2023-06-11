// 封装了一个动画js文件
function animation(obj,target,fn1){
    // console.log(fn1);
    // fn是一个回调函数，在定时器结束的时候添加
    // 每次开定时器之前先清除掉定时器
    clearInterval( obj.timer);
    obj.timer = setInterval(function(){
        // 步长计算公式 越来越小
        // 步长取整
        var step = (target - obj.offsetLeft) /10;
        step = step > 0 ? Math.ceil(step) :Math.floor(step);

        if(obj.offsetLeft == target){
            clearInterval( obj.timer);
            // 如果fn1存在，调用fn
            if(fn1){
                fn1();
            }
        }else{
            // 每50毫秒就将新的值给obj.left
            obj.style.left = obj.offsetLeft +step +'px';
        }
    },30)
}