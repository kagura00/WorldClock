function WorldClock(){
    setInterval("TimeGet()",1000);
}

function TimeGet(){
    let JapanTime = (new Date()).getTime();
    let GmtTimeNum = JapanTime + (new Date()).getTimezoneOffset()*60*1000;
    console.log(new Date(GmtTimeNum));
    let city = {
        gmt : 0,
        japan : 9,
        USA : -5,
        johan : 2,
        beijing : 8,
        sydney : 10,
        rio : -3
    };
    document.getElementById("gmt").innerHTML = TimeCal(city["gmt"],GmtTimeNum);
    document.getElementById("japan").innerHTML = TimeCal(city["japan"],GmtTimeNum);
    document.getElementById("USA").innerHTML = TimeCal(city["USA"],GmtTimeNum);
    document.getElementById("johan").innerHTML = TimeCal(city["johan"],GmtTimeNum);
    document.getElementById("beijing").innerHTML = TimeCal(city["beijing"],GmtTimeNum);
    document.getElementById("sydney").innerHTML = TimeCal(city["sydney"],GmtTimeNum);
    document.getElementById("rio").innerHTML = TimeCal(city["rio"],GmtTimeNum);
}

function TimeCal(TimeDif,GmtTimeNum){
    let TimeNum = GmtTimeNum + TimeDif * 60 * 60 *1000;
    let Time = new Date(TimeNum);
    console.log(Time);
    let year = Time.getFullYear();
    let month = Time.getMonth()+1;
    let day = Time.getDate();
    let hour = Time.getHours();
    let minute = Time.getMinutes();
    let second = Time.getSeconds();

    if(hour < 10)
        hour = "0" + hour;
    if(minute < 10)
        minute = "0" + minute;
    if(second < 10)
        second = "0" + second;
    
    let ADate = year + "年" + month + "月" + day + "日";
    let Clock = hour + ":" + minute + ":" + second;
    
    return (ADate + " " + Clock);
}