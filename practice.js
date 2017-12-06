function person(firstname,lastName, age){
    this.firstName=firstname;
    this.lastName=lastName;
    this.age=age;

}
const p1=new person("zvi","sondhelm",56);
const p2=new person("dovid","sondhelm",45);

function createForm(obj){
   const myarray = Object.keys(obj)
  const $form1 = document.getElementById('form')
    for(let i=0;i<myarray.length;i++){
        $input = document.createElement('input')
        $input.id = $input.name = $input.placeholder = myarray[i]
        $form1.appendChild($input)
        $input.value =obj[myarray[i]] 

    }

}
createForm(p1)
craeteForm(p2)