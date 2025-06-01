document.getElementById("summary").addEventListener("keypress", function(evt){
    var words = this.value.split(/\s+/);
    var numWords = words.length;
    var maxWords = 500;

    if(numWords > maxWords){
        evt.preventDefault();
    }
});
//Ghost text for form
var realMailTxt = document.getElementById("mail");
var ghostMailTxt = "eg: name@example.com";
realMailTxt.value = ghostMailTxt;
realMailTxt.style.color = "#CCC";
realMailTxt.onfocus = function(){
    if(this.value == ghostMailTxt){
        this.value = "";
        this.style.color = "#000";
    }
}
realMailTxt.onblur = function(){
    if(this.value == ""){
        this.value = ghostMailTxt;
        this.style.color = "#CCC";
    }
}

var realTxt = document.getElementById("telnumber");
var ghostTxt = "+44 7890 123456";
realTxt.value = ghostTxt;
realTxt.style.color = "#CCC";
realTxt.onfocus = function(){
    if(this.value == ghostTxt){
        this.value = "";
        this.style.color = "#000";
    }
}
realTxt.onblur = function(){
    if(this.value == ""){
        this.value = ghostTxt;
        this.style.color = "#CCC";
    }
}

var emptyFile = document.getElementById("files");
var empty = "";
if(emptyFile == empty){
    
}