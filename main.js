// function print(){
//     var myname="ermais";
//     for(var i=0;i<5;i++){
  
//       console.log(myname);
//     }
//   }
  
//   print();
  
//   function printWith(myname)
//   {
//       for(var i=0;i<5;i++){
  
//           console.log(myname);
//       }
//   }
  
//   printWith("ermias");
  
//   function sum(){
//       var num=5;
//       var numTwo=6
//       console.log(num+numTwo);
//   }
//   sum();
  
//   function sumWith(num,numTwo){
//       console.log(numTwo+num);
//   }
//   sumWith(5,8 )
//   var num=[7,5,67,56,45,34]
//   num .splice(0,1)
//   console.log(num);

//   function minimum(numOne,numTwo){
//       if(numOne<numTwo){
//           return numOne;
//       }else if(numOne>numTwo){
//           return numTwo;
//       }else{
//           return"even";
//       }
//   }

//  console.log(minimum(5,10))

//   function sum(num){
//  
//       var add=0;
//       while(num>0){
//          var mod= num%10
//          add+=mod
//          num=(num/10)-(mod/10)
//       }
//       
//      return add
//   }
//   console.log(sum(211));

var numbers=[100,1,5,43]
function sum(num){
    var add=0;
for(var i=0;i<num.length;i++){
    add=add+numbers[i];
}
return add
}
console.log(sum(numbers));

function multi(num){
    var add=1;
for(var i=0;i<num.length;i++){
    add=add*numbers[i];
}
return add
}
console.log(multi(numbers));

function minimum(num){
    var min=num[0];
    for(var i=0;i<num.length;i++){
        if(num[i]<=min){
            min=num[i]
        }
    }
    return min
}
console.log(minimum(numbers));

function maximum(num){
    var max=num[0];
    for(var i=0;i<num.length;i++){
        if(num[i]>=max){
            max=num[i]
        }
    }
    return max
}
console.log(maximum(numbers));

function cut(num){
num.splice(num.length-2,2)
return num
}
console.log(cut(numbers));

function count(text){
   var length= text.length;
   return length;

}
console.log(count("jjjjj"));

var stuff=["kim","koi","pit"]
var things=prompt("thing")
function cheak(array,input){ 
    var status;
    for(var i=0;i<array.length;i++){
    if(input == array[i]){
      array.splice(i,1);
     return i;
    
    }
}
return "no"

}
console.log(cheak(stuff,things));

// var nums=[5,6,7,7]
// function triple(array){
//     var tri=0;
//     var numArray =[];
//     for(var i=0;i<array.length;i++){
//         tri=array[i]*3;
// numArray.push(tri)
//     }
// return numArray
// }
// console.log(triple(nums));




// var numRepat=[5,6,7,7,8,9,9,3,5]
// function scan(array){
//     for(var i=0;i<array.length;i++){
//         for(var j=i+1;j<array.length;j++){
//             if(array[i] == array[j]){
//                 array.splice(i,1)
//             }
//         }
//     }
//     return array
// }
// console.log(scan(numRepat));