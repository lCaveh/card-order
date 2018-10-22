$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var str = $("#sentence").val ();
    var words = str.split (' ');
    var sortedWords = words.sort();
    var uniques = []
    var counter;
    sortedWords.forEach(function(word,index){
      if (word != sortedWords[index+1]) {
        uniques.push(word);
      };
    });
    uniques.forEach(function(word1){
      counter=0;
      words.forEach(function(word2){
        if (word1===word2) {
          counter++
        };
      });
      $("#story").append("<p>"+word1+" : "+count+"</p")
    });
    $("#story").show();
  });
});
