var name = "";
// Number, String, Boolean(true, false)

function switchScreen() {
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "block";

}
function showFeedbackForm() {
    document.getElementById("FeedbackForm").style.display = "block";
    document.getElementById("fillFdbckBtn").style.display = "none";
}

function closeFeedback() {
    document.getElementById("FeedbackForm").style.display = "none";
    document.getElementById("fillFdbckBtn").style.display = "inherit";
    
}


document.addEventListener("keypress",(e)=>{
    console.log(e.key, e.code);
    
    if(e.key=="enter"){
        var response = prompt("How are you feeling today?");
    }
    else{
        alert("Press Enter to update your status..");
    }
})

for(var i<=5; i++){
    console.log(i);
}
