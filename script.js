//length of the string
var str="Skill Safari"
console.log("length of Skill Safari is " + str.length)

//uppercase of string
console.log(str.toUpperCase())

//Index position
let index=str.indexOf("a")
console.log("Index position of \"a\" is " + index)

//
console.log("Iron man: well I shouldn't the guy let off a little steam. \nCaptain America: You damn well why back off.\nIron man: I'm starting to want you to make me. \nCaptain America: big man in a suit of armor take that off ,what are you?\nIron man: genius billionaire playboy philanthropist.\nCaptain America: I know guys with none of that worth 10 you,I've seen the footage the only thing you really fight for is yourself" )

//body mass index
function BMI()
{
var h=Number(document.getElementById("height").value);
var w=Number(document.getElementById("weight").value);

const bmi= (w/((h*h)/10000)).toFixed(2);
if (bmi < 18.6) {result.innerHTML =`Under Weight :${bmi}`;}

else if (bmi >= 18.6 && bmi < 24.9)
{ 
result.innerHTML =   `Normal : ${bmi}`;
}
else 
{result.innerHTML =`Over Weight : ${bmi}`;
}

}