$(document).ready(function() {
    var search ="";
    var resultLength = 0;
    var resultTitle = "";
    var resultSnippet = "";
    var resultPageID = 0;

    $(document).on('change', "#search-value", function() {
        $(".result-area").html('');
        search = $("#search-value").val();
        console.log(search);
        $.ajax( {
            url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch='+ search,
            dataType: 'jsonp',
            type: 'GET',
            success: function(data) {
                console.log(data);
                resultLength = data.query.search.length;
                
                console.log("result lenght:" + resultLength);
                console.log("result title:" + resultTitle);
                for (var i=0; i<resultLength; i++) {
                    resultTitle = data.query.search[i].title;
                    resultSnippet = data.query.search[i].snippet;
                    resultPageID = data.query.search[i].pageid;
                    console.log("result title:" + resultTitle);
                    console.log("result pageid:" + resultPageID);
                    $(".result-area").append('<a target="_blank" style="text-decoration:none" href="https://en.wikipedia.org/?curid=' + resultPageID + '"><div class="result-box"><div class="result-title">' + resultTitle + '</div><div class="result-snippet">' + resultSnippet + '</div></div></a>');
                }
               
            }
        });
    });
    
});