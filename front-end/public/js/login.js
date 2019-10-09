$(function(){
  var $students =$('#students')
var $id=$('#index')
var $pin=$('#pin')
$('#login_button').on('click', function(){
  var student ={
    indexNumber:$id.val(),
    pin:$pin.val()
  }
  $.ajax({
type:'POST',
url:'/students/login',
data:student,
success: function(studentL){
  $students.append(studentL.indexNumber)
}

  })
});

});




































// var login = function(){
// try{
// $.post('http://localhost:3000/students/login',{
//   indexNumber:$('#index').val(),
//   pin:$('#pin').val()
// },(data,status)=>{
//   console.log(data,status);
// if(!data.error){
// localStorage.setItem('front_user',JSON.stringify(data.user))
//   return window.location.href='home.html'
// }
//
//
//
// })
//
// } catch (error) {
// console.log (error)
// }}
//
//
// $('#login_button').click(()=>{
//   login()
// })
