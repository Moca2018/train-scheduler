window.onload=(function(){


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8xSdb3zMYwWE7vzmC0_cQSvdbG703cGk",
    authDomain: "nelsonquinones-7cb78.firebaseapp.com",
    databaseURL: "https://nelsonquinones-7cb78.firebaseio.com",
    projectId: "nelsonquinones-7cb78",
    storageBucket: "nelsonquinones-7cb78.appspot.com",
    messagingSenderId: "771349429061"
  };
  firebase.initializeApp(config);

  //train data taking a variable and storing the firebase database (use this method)..make it easier to reference it.
  //on click - add something to the database
  //moment.js because we are using time
  //trim takes spaces
  //val takes whatever is in the input box
var trainData = firebase.database() 
$("#addTrain").on("click",function(){
    console.log("click")
    var trainName= $("#trainName").val().trim()
    console.log (trainName)
})
var newTrain = {
    name: trainName
  };
  console.log (newTrain)

  database.ref().push(trainName);
  console.log(trainName)

  alert ("Your new train has been added");

  //clear the text box
  $("#trainName").val("");

// prepare the info. and send it to firebase
// make a new object with the variables that i create
//create a new var. that will be a variable
// this is the object that we will send to firebase.
//var newTrain = {
//   name: trainName,
//    destination: destination,
//    firstTrain: firstTrainUnix,
//   frequency: frequency
//  };
//  trainData.ref().push(newTrain);
/// ask sarah and then cental suppor (if additional support)


})

