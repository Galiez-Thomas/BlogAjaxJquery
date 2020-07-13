function RecupValues(slet) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(slet).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

$.get("http://localhost:4000/posts", function (posts) {

    let ul = $('ul');
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].userId == RecupValues('userId')) {
            let div = $('<div/>');
            div.attr('class', 'col-md-6');

            let a = $('<a/>');
            a.append('Message N° ' + posts[i].id);
            a.attr('href', 'BlogComments.html?postId=' + posts[i].id);
            a.attr('class', "list-group-item list-group-item-action list-group-item-dark");

            let p = $('<p>');//Création des p pour plus d'infos sur le user.
            p.append(posts[i].body);
            p.attr('class', "list-group-item");
            a.append(p);
            div.append(a);
            ul.append(div);

            div.append(a);
            ul.append(div);
        }
    }
});