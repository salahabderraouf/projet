//inscription.
(function(){
const nom=document.getElementById("nom");
const mail=document.getElementById("mail");
const mdp=document.getElementById("mdp");
const btn=document.getElementById("btn");
// connexion.
const mailc=document.getElementById("mailc");
const mdpc=document.getElementById("mdpc");
const btn1=document.getElementById("btn1");
const database=firebase.database();
// déconnexion
const btnd=document.getElementById("btnd");

btn1.addEventListener('click',(e)=>{
    const email=mailc.value;
    const pass=mdpc.value;
    const auth=firebase.auth();
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert(errorMessage);
  }); 
});

btn.addEventListener('click',e=>{
    const email=mail.value;
    const pass=mdp.value;
    const auth=firebase.auth();
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert(errorMessage);
    });
})
}());
