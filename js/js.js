$(function () {

    var timer=null;
    var num=0;
    $('.page').eq(0).removeClass('active');
    $(window).mousewheel(function (event) {
        // console.log(1);
        clearInterval(timer);
        /*加个定时器 时间设置为300ms 防抖技术 也叫截流*/
        timer=setTimeout(function () {

            //判断方向 向上就是1 向下是-1
            if (event.deltaY<-1){
                event.deltaY=-1
            } else if (event.deltaY>1){
                event.deltaY=1
            }
            num=num-event.deltaY;
            /*限制num*/
            if (num>$('.page').length-1){
                num=0
            }
            if (num<0){
                num=$('.page').length-1
            }
            go()

        },300);

    });
    /*函数封装*/
    function go() {
        /*判断第一屏的小logo就隐藏 其他显示*/
          if (num==0){
              $('header').css({visibility:'hidden'})
          }else {
              $('header').css({visibility:'visible'})
          }
        $('.page').eq(num).show().siblings('.page').hide();
        $('.nav span' ).eq(num).addClass('active').siblings().removeClass('active');

        setTimeout(function () {
            $('.page').eq(num).removeClass('active').siblings('.page').addClass('active')
        },1)
    }
    /*点击小圆点切换*/
    $('.nav span').click(function () {
        num=$(this).index();
        go();
    })



});