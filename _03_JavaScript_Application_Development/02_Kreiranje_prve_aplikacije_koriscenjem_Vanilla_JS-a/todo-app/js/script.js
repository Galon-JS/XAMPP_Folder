window.addEventListener( "load",function() {
       
    var contentInput = document.getElementById( "content" );
    var addButton = document.getElementById( "add-btn" );


    var allItemsContainer = document.getElementById( "all-items-container" );
    var activeItemsContainer = document.getElementById( "active-items-container" );
    var completedItemsContainer = document.getElementById( "completed-items-container" );

    var toDoApp = new ToDo( allItemsContainer,activeItemsContainer,completedItemsContainer );

    addButton.onclick = function() {
        if( contentInput.value !== '' ) {
            toDoApp.add( contentInput.value );
            contentInput.value = '';
        }
    };
} );