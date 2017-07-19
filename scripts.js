function submitContactForm() {
    var x = document.forms["ContactForm"]["Email"].value;
    if (x == "") {
        alert("Email must be completed!");
        return false;
    } else { 
        alert('Thank you your message has been submitted I will be getting back to you shortly!');
    }
}
var projects = [
    {
        "name": "claim academy"
        'link': "http://claimacademystl.com/"
    }, {
        "name":"DexSphere"
    }
];

$(document).ready(function() {

$.each(projects, function(index, project){
    console.log(project);
    $('#projects').append('<a href"#">' +project.name + '</a>');
});


