$(document).ready(function () {
    var rootURL ='http://localhost:8091/api';


    $('#btnAddUser').click(function () {
        console.log("klick!");
        addUser();
    });

    function addUser(){
        console.log("in addUser");
        $.ajax({
            type: 'POST',
            contentType:'application/json',
            url: rootURL + '/users',
            data: formToJSON(),
            success: function (data, textStatus, jgXHR) {
                console.log("GREAT SUCCESS!");
                moveMe();
            },
            error: function (jgXHR, textStatus, errorThrown) {
                console.log("send Error " +textStatus + "  " + errorThrown);
            },
            complete: function (jgXHR, textStatus, errorThrown) {
                console.log("GREAT COMPLETE!");
                moveMe();
            }
        })
    }
    function formToJSON() {
        console.log("i form to json");
        var product = JSON.stringify({
            "firstName": $('#tfFirstName').val(),
            "lastName": $('#tfLastName').val(),
            "userName": $('#tfUserName').val(),
            "password": $('#tfPassword').val(),
            "email": $('#tfEmail').val(),
            "mobileNumber": $('#tfMobileNumber').val()
            /*"startDate": startDate*/
        });
        console.log(product);
        return product;
    }

    function moveMe() {
        console.log("i move me");
        location.href = "../webcontent/index.html"

    }
    $('#btnLogIn').click(function () {
        console.log("KLICK LOGIN!");
        userUserName = $('#UserUserName').val();
        userPassword = $('#UserPassword').val();
        console.log(userUserName);
        getUserByUserName();
    });

    function getUserByUserName() {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL + '/username/' + userUserName ,
            success: function (data, textStatus, jgXHR) {
                console.log("i sucess" + data.password);
                logInValidation(data);
            },
            error: function (jgXHR, textStatus, errorThrown) {
            }
        });
    }

    function logInValidation(foundUser) {
        console.log("i validation");
        if(foundUser.password == userPassword){
            console.log("Log in success" + foundUser.firstName);
            sessionStorage.setItem('currentUser', foundUser.id);
            sessionStorage.setItem('currentUserName', foundUser.userName)
            location.reload();
        }else{
            alert("Fel lösenord!");
            //MAKE ALERT FEL PASS
        }
    }

});