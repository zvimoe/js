function person(firstname,lastName, age){
    this.firstName=firstname;
    this.lastName=lastName;
    this.age=age;
}
function student(firstname,lastName,age){
    person.call(this,firstname,lastName,age)
    this.course='fullstack'
}


const p1=new person("zvi","sondhelm",56);
const p2=new person("dovid","sondhelm",45);
const s1=new student("dan","lifshitz",39,"fullstack")

function createForm(obj,form){
   const myarray = Object.keys(obj);
    for(let i=0;i<myarray.length;i++){
        $input = document.createElement('input')
        $input.id = $input.name = $input.placeholder = myarray[i]
        form.appendChild($input)
        $input.value =obj[myarray[i]] 

    }

};
person.prototype.validate=function(){
    var val=Object.values(this);
    for(let i=0;i<val.length;i++){
       if (val[i]=='zvi'){
           throw "error dont use my name"
       }
    }
}
const $form1 = document.getElementById('form1')
const $form2 = document.getElementById('form2')
const $form3 = document.getElementById('form3')
createForm(p1,$form1);
createForm(p2,$form2);
createForm(s1,$form3);
try{
    p1.validate();
}
catch(ex){
    alert(ex)
}

