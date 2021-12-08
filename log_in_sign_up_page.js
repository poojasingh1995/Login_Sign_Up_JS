fs=require("fs")
let input=require("readline-sync")

function storng_password(password){
    if (password.length>6 && password.length<16){
        special_char=/[!@#$%^&*()_+<>?/]/,numbers=/[0-9]/,upper_case=/[A-Z]/,lower_case=/[a-z]/
            // if("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"){
            if(special_char.test(password)&&upper_case.test(password)&&lower_case.test(password)){
                return true
            } 
            else{
                return false
            }
    }else{
        console.log("you should take 6-16 length")
    }
}
function checkpassword(password1,password2){
    if (password1==password2){
        console.log("password created.")
    }
    else{
        console.log("Both password are not same")
    var password2=input.questionInt("enter your password : ")
    checkpassword(password1,password2)
    }
}
// ****code start from here******

console.log("Welcome to login and sign up page")
var login_signup=input.question("what you choose login or signup : ")

var file=fs.existsSync("pooja.json")

if (file===false){
    if (login_signup=="signup"){
        var user_name=input.question("enter the user name : ")
        var password1=input.question("enter your  password : ")
        storng_password(password1)
        var password2=input.question("conferm your password : ")
        checkpassword(password1,password2)
        console.log("congrats",user_name,"you are Signed  up Successfully.")
    }else{   
        var description=input.question("Information about you :")
        var date_of_birth=input.question("enter your date of birth : ")
        var hobbies=input.question("enter your hobies : ")
        var gender=input.question("enter your gender (male or female) :")
        console.log("congrats",user_name,"you are Signed  up Successfully.")
    }    
        var myarray=[]
        var user={}
        var list1=["username","password","description","dob","hobbies","gender"]
        var list2=[user_name,password1,description,date_of_birth,hobbies,gender]
        for (i in list1){
            user[list1[i]]=list2[i]
        }
        myarray.push(user)
        fs.writeFileSync("pooja.json",JSON.stringify(myarray,null,4))
    
}
else if (file===true){

    if (login_signup=="signup"){
        var user_name=input.question("enter your user name : ")
        var password1=input.question("enter your 1st password : ")
        storng_password(password1)
        var password2=input.question("enter your password : ")
        checkpassword(password1,password2)

        // fs.open("pooja.json","r",function(err,fd){
        //     console.log(fd)
        //     if(err){
        //         return console.error(err)
        //     }
        //     console.log("file open successfully")
        // })

        // usname=fs.read()
        // buf=fs.readFileSync("pooja.json")
        // data=JSON.parse(buf)
        // if (password1===password2){
            // console.log("This account is already exists")
        // }
        console.log("congrats",user_name,"you are Signed  up Successfully.")
        var description=input.question("Information about you : ")
        var date_of_birth=input.question("enter your date of birth : ")
        var hobbies=input.question("enter your hobies : ")
        var gender=input.question("enter your gender (male or female) :")
        // }
            
        var user={}
        list1=["username","password","description","dob","hobbies","gender"]
        list2=[user_name,password1,description,date_of_birth,hobbies,gender]
        for (i in list1){
            user[list1[i]]=list2[i]     
        // console.log(user)      
        }
        buf=fs.readFileSync("pooja.json")
        data=JSON.parse(buf)
        console.log(data)
        data.push(user)

    fs.writeFileSync("pooja.json",JSON.stringify(data,null,4))
    }

    else if (login_signup=="login"){
        var login_name=input.question("enter the name : ")
        var login_password=input.question("enter the password : ")
        const buf_data=fs.readFileSync("pooja.json")
        const data=JSON.parse(buf_data)

        for (i of data){
            if (i["username"]==login_name){
                if (i["password"]==login_password){
                    console.log("login successfully")
                    console.log()
                    console.log("Information")
                    console.log("user",i)
                }
                else{
                    console.log("password is incorrect")
                    break
                }
            }
        }
    } 
    else{
        console.log("invalid account")
    }
}