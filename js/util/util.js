function log(obj) {
    if (openLog)
        console.log(obj);
}

function echo(s) {
    document.writeln(s + "<br/>");
}

function fail(title) {
    echo("<div style='clear: both;height: 30px;padding: 0 0px;border-radius: 4px;background: url(http://static.blog.csdn.net/skin/default/images/tit_bg.gif) repeat-x top;color: #333;font: bold 12px/30px Arial;text-indent:5px;display:block;list-style-type: disc;-webkit-margin-before: 1em;-webkit-margin-after: 1em;-webkit-margin-start: 0px;-webkit-margin-end: 0px;-webkit-padding-start: 40px;'>"
        + title + "</div>")
}
// #e3e3e3

function baseMsgBlock(msg, color) {
    echo("<div style='border: solid 1px #ddd;border-radius: 5px;-webkit-border-radius: 5px;clear:both;padding: 0 0px;background-color:" + color + ";color: #333;font: bold 12px/30px Arial;text-indent:5px;display:block;list-style-type: disc;-webkit-margin-before: 1em;-webkit-margin-after: 1em;-webkit-margin-start: 0px;-webkit-margin-end: 0px;-webkit-padding-start: 40px;'>"
        + msg + "</div>")
}

function msgBlock(msg) {
    baseMsgBlock(msg, "#A6D4F2")
}

function ok(s) {
    document.writeln("<span style='color:#008000;font: bold 12px/30px Arial;'>" + s + "</span><br/>")
}

function info(s) {
    echo("<span style='color:#00CACA;font: bold 12px/30px Arial;'>" + s + "</span>");
}


function getValueById(id) {
    var re = $("#" + id).val()
    return re;
}
var $$ = getValueById;

function doLog(name, action) {
    action();
}

function isEmptyOrUndefined() {
    for (var i in arguments.length) {
        if (undefined != arguments[i] && "" != arguments[i] && arguments[i] != "{}") {
            return false;
        }
    }
    return true;
}

function toJson(str) {
    if (str.length < 2)
        return str;
    return eval("(" + str + ")")
}
function snsType(otherId) {
    return otherId.split(":")[0]
}

// 逗号
function strToArr(str) {
    var arr = (str + "").split(',');
    return arr;
}

function strToPathArr(str) {
    if (str == "{}") {
        return str;
    }
    var arr = str.split("[");
    arr[1] = (arr[1].substring(0, arr[1].length - 1)).split(",")
    if (arr[0].length > 0) {
        var re = ((arr[0].slice(0, arr[0].length - 1)).split(","));
        re.push(arr[1])
        return re;
    } else {
        return [arr[1]];
    }
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
Date.prototype.format = function (fmt) {// author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * set each data
 */
function eachData(elem, data) {
    for (i in data) {
        $(elem).data(i, data[i])
    }
}
