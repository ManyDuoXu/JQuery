/**
 * Created by xuduo on 2017/5/8.
 */
$(function () {
    // $('.show').click(function () {
    //     $('#box').show(1000);
    // });
    // $('.hide').click(function () {
    //    $('#box').hide(1000);
    // });


    $('.show').click(function () {
       $('.query').first().show('fast',function shows() {
           $(this).next().show("fast",shows);
       })
    })
    $('.hide').click(function () {
        $('.query').last().hide('fast',function shows() {
            $(this).prev().hide("fast",shows);
        })
    })

    //获取html内容
    alert($('#getHtml').html());

    //获取text内容,  自动清理html标签， 只获得文本
    alert($('#getText').text());

    $('#setHtml').html('<em>替换后</em>');

    //对表单进行操作
    $('#val').val("替换表单");

    //属性设置, 不建议用attr设置class
    $('#setAttr').attr({
        title:'123',
        color:'red'
    });

    //addclass和removeclass
    $('#addClass').click(function(){
        $(this).toggleClass(function(){
            if($(this).hasClass('red')){
                $(this).removeClass('red');
                return 'green';
            }else {
                    $(this).removeClass('green');
                    return 'red';
            }

        });

    });

    //子选择器
    $('#divClick>p').css('color','green');

    //事件
    $('#addAction').mouseover(function(){
       $(this).css('background','coral')
    }).mouseout(function(){
        $(this).css('background','lightblue')
    })

    $('#addAction').mouseover(function(){
        $('#addAction>p').html(function(index,value){
            return value +'1';
        });
    })

    //事件
    $('#addAction2').mouseover(function(){
        $(this).css('background','coral')
    }).mouseout(function(){
        $(this).css('background','lightblue')
    })

    $('#addAction2').mouseenter(function(){
        $('#addAction2>p').html(function(index,value){
            return value +'1';
        });
    })
    
    
    
    //工具函数
    var st = document.getElementById("strong");
    alert(st.innerHTML);
    var stt = $.trim(st.innerHTML);
    alert(stt);
    $('#ip').html(stt);

});