function IndexViewModel() {
    this.file_path = ko.observable("file path");
}

// Activates knockout.js
ko.applyBindings(new IndexViewModel());

function getFiles() {
    $.get( "files", function( result ) { console.log( "result: " + result ) } );
}
