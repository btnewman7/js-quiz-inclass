// Create a 2-dimensional array with 5 questions and 5 answers
var questionArrays = [
  ["What did Thanos do wrong?", "Nothing"],
  ["What should Thor have gone for?", "The head"],
  ["Who did Peter Parker have to beat with a stick?", "An old lady"],
  ["Who is the best Spiderman?", "Toby Maguire"],
  ["Who is inevitable?", "Thanos"]
]
  // This code snippet creates a print function which will allow you to call it later when you want to dispay something to the page
  function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
  }
  
  // This code snippet builds out the HTML list. 
  function buildList(arr) {
    var listHTML = "<ol>";
      for(var i=0;i<arr.length;i++) {
        listHTML += "<li>" + arr[i] + "</li>";
      }
    listHTML += "</ol>";
    return listHTML;
  }
  
  // Create a FOR loop that loops through your 2-dimantional array. Create variables for quesions, answers and reponses respectively. Make sure the
  // questions show up in a prompt box. Next, within your FOR loop, add a conditional statement that adds keeps track of how many answers have
  // correct and how many answers you have wrong. 
  //
  // EXTRA CREDIT: Make it so that if the user types in a correct reponse, they can do so without making it case-sensitive to your answer. Knowing how
  // to accomplish this is very beneficial. Do your best!
  var correctQuestions = []
  var incorrectQuestions = []

  for(var i = 0; i < questionArrays.length; i++) {
    var answer = window.prompt(questionArrays[i][0])
    if (answer.toLowerCase() == questionArrays[i][1].toLowerCase()){
      correctQuestions.push(questionArrays[i][0])
    } else {
      incorrectQuestions.push(questionArrays[i][0])
    }
   }
  
  // For the last part, you need to write your code so that it prints out your code exactly as it appears on the screenshot.png file inside the project folder.
  numCorrect = "<p>You got " + correctQuestions.length + " question(s) right.</p>";
  titleCorrect = "<h2>You answered these questions correct: </h2>";
  correctList = buildList(correctQuestions);
  titleIncorrect = "<h2>You answered these questions incorrectly: </h2>";
  incorrectList = buildList(incorrectQuestions);
  
  print(numCorrect + titleCorrect + correctList + titleIncorrect + incorrectList)