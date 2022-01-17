document.onreadystatechange = function(){
    console.log(document.readyState);
    function timeOut() {
        $(".loading").fadeOut();
        console.log("test");
    }
    let loadFun = function() {
        if(document.readyState == "complete"){
            $(".loading").fadeOut();
        } else {
            setTimeout(timeOut,3000);
        }
    }
    setTimeout(loadFun,1000);
}      