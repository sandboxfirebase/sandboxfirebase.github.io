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
            var rid = $(this).parent().parent().attr("id");
            db.child("Users").child("user_003").set(null);
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

});

function run () {
    // firebaseDatabaseRef = firebase.database().ref();
    // firebaseDatabaseRef.child("Text").set("Some value");
    var db = firebase.database().ref();
    db.child("Users").child("user_003").set();
}
