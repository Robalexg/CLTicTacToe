const express = require('express')
const app = express()
const prompt = require('prompt')

var postions = [1,2,3,4,5,6,7,8,9]

var a = "1";
var b = "2";
var c = "3";
var d = "4";
var e = "5";
var f = "6";
var g = "7";
var h = "8";
var i = "9";



function getBoard(){
  var board = "=======" + "\n" + a + "|" + b + "|" + c +"\n" +
    d + "|" + e + "|" + f + "\n" +
    g + "|" +  h + "|" + i + "\n" + "=======";
  return board
}


prompt.start()

console.log("Tic Tac Toeeeeeee!!!!!!!!" + '\n' + "----------")
console.log("Enter the players Names: ")
prompt.get(['Player_1'],function(err,player1){
    prompt.get(['Player_2'],function (err,player2) {
      var p1 = player1.Player_1
      var p2 = player2.Player_2
      console.log("Welcome, " + p1 + " and " + p2)
      console.log(getBoard())
      console.log(p1+ " is X." + '\n' + p2+ ' is O')
      console.log(p1 + ', Please enter a number' )
      prompt.get(['num'],function(err, num){
        if(postions.indexOf(num.num)){
          a = 'chyea'
          console.log(getBoard())
        }
      })
    })
})

app.listen(3000)