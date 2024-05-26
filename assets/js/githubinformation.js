function    userInformationHTML(user) {
    return`<h2>${username}
    <span class="small-name">
    (@<a href="${user.html_url}" target="_blank">${user.login} </a>
        </span>
        </h2>
        <div class="gh-content"> </div>
        <div class="gh-avatar">
        <a href="${user.html_url} target="_blank">
        <img src="${user.avatar_url}" width=80 height=80 alt="${user.login}" />
        </a>
        </div>
        <p>Followers: ${user.followers} - Following ${users.following} <br> Repos: ${user.public_repos}</p>
        </div>
    )
    `
}






function fetchGitHubInformation (event) {
    var username = $ ("#gh-username").val ();
    if (username) {
        $("#gh-user-data").html('<h2>Please enter a Github username</h2>');
        return;
 }
 
 
 $("#gh-user-data").html(
    `<div id="loader">
        <img src="assets/images/loader.gif" alt="loading..." />
    </div>`);
}
$ .when(
    $.getJSON('http://api.github.com/users/${username}')
).then(
    function(response) {
        var userData =response;
        $("#gh-user-data").html(userInformationHTML(userData));
    } function(errorResponse) {
        if (errorResponse.status== 404) {
            $("#gh-user-data").html(
                <h2>No info found for user ${username}</h2>);
        } else {
            console.log(errorResponse);
            $ ("#gh-user-data").html(
                <h2>Error: ${errorResponse.responseJSON.message}</h2>)       
        }
    });
