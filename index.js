const express = require('express')
const app = express()
const prompt = require('prompt')

var postions = ['1','2','3','4','5','6','7','8','9']

var a = "1";
var b = "2";
var c = "3";
var d = "4";
var e = "5";
var f = "6";
var g = "7";
var h = "8";
var i = "9";

var board = "=======" + "\n" + a + "|" + b + "|" + c +"\n" +
    d + "|" + e + "|" + f + "\n" +
    g + "|" +  h + "|" + i + "\n" + "=======";

console.log("Tic Tac Toeeeeeee!!!!!!!!" + '\n' + "----------")
console.log("Enter your name: ")
prompt.get(['name'],function(err,result){
  
})

app.listen(3000)