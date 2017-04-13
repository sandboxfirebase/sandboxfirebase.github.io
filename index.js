$( document ).ready(function() {

    // txt = $("#input-text");
    // btn = $("#input-btn");
    //
    // var db = firebase.database().ref().child("Heading");
    //
    // db.on("value", function( dbSnapshot ){
    //     $("#heading").text( dbSnapshot.val() );
    // } );

    var db = firebase.database().ref();

    var dbUsers = db.child("Users");

    dbUsers.on( "child_added", snap => {
        var uid = snap.key;
        var email = snap.child("Email").val();
        var name = snap.child("Name").val();
        var surname = snap.child("Surname").val();
        $btn = $("<button>").text("Remove").on("click" , function(){
            db.child("Users").child( $(this).parents("tr").attr("id") ).set(null);
        } );
        $("#content-table > tbody")
            .append(
                $("<tr>").attr("id",uid).append(
                    $("<td>").text(email),
                    $("<td>").text(name),
                    $("<td>").text(surname),
                    $("<td>").append($btn)
            ) );
    } );

    dbUsers.on( "child_removed", snap => {
        var uid = snap.key;
        $("#content-table > tbody > tr#" + uid).remove();
    } );

    dbUsers.on( "child_changed", snap => {
        var uid = snap.key;
        var email = snap.child("Email").val();
        var name = snap.child("Name").val();
        var surname = snap.child("Surname").val();
        $btn = $("<button>").text("Remove").on("click" , function(){
            var rid = $(this).parent().parent().attr("id");
            db.child("Users").child("user_003").set(null);
        } );
        $("#content-table > tbody > tr#" + uid)
            .replaceWith(
                $("<tr>").attr("id",uid).append(
                    $("<td>").text(email),
                    $("<td>").text(name),
                    $("<td>").text(surname),
                    $("<td>").append($btn)
            ) );
    } );

    $("#add-btn").click( function(){
        $(".add-form").show();
    } );

    $("#add-btn-submit").click( function(e) { e.preventDefault();
        var maxid, uid = [], input = $("#add-btn-inputfield").val();
        dbUsers.on( "child_added" , snap => uid.push( snap.key.split("_")[1] ) );
        id = 1 + Math.max.apply( Math, uid );
        id = "user_" + ("00" + id).substr(-3);
        dbUsers.child(id).set(
            {
                Email: input.split(",")[0],
                Name: input.split(",")[1],
                Surname: input.split(",")[2]
            }
        );
    } );

});

function run () {
    // firebaseDatabaseRef = firebase.database().ref();
    // firebaseDatabaseRef.child("Text").set("Some value");
    // var db = firebase.database().ref();
    // db.child("Users").child("user_003").set();
}
