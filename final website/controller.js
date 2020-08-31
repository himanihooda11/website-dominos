window.addEventListener("load", bindEvents);
function bindEvents(){
    document.querySelector('#add').addEventListener('click', addRecord);
}
function addRecord(){
    var item= new Item();
    for(let key in item)
    {
        item[key]=document.querySelector('#'+key).value;
    }
    itemOperation.add(item);
    printRecord(item);
}
function printRecord(item){
    var tbody=document.querySelector('#items');
    var tr=tbody.insertRow();
    var index=0;
    for(let key in item){
        let cell =tr.insertCell(index);
        cell.innerText=item[key];
        index++;
    }

}
function checkCookie(){
    var user=getCookie("Username");
    if(user!=""){
    alert("Welcome Again " + user);
    }
    else{
        user=prompt("Please Enter Your Name: ","");
        if(user!="" && user!=null){
            setCookie("Username", user,30);
        }
    }
}
function setCookie(cname,cvalue,exdays){
    var d=new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires="expires="+d.toUTCString();
    document.cookie=cname+"=" +cvalue+";" +expires+";path/";

}
function getCookie(cname){
    var name=cname + "=";
    var decodedCookies=decodeURIComponent(document.cookie);
    var ca=decodedCookies.split(";");
    for(var i=0;i<ca.length;i++)
    {
        var c=ca[i];
        while(c.charAt(0)==" "){
            c=c.substring(1); 
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}