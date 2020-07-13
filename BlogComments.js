function RecupValues(slet) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(slet).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

$.get("http://localhost:4000/comments", function (comments) {

    let ul = $('ul');
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].postId == RecupValues('postId')) {
            let div = $('<div/>');
            div.attr('class', 'col-lg-6');

            let li = $('<li/>');
            li.append('Commentaire N° ' + comments[i].id + '<br> Email : ' + comments[i].email);
            li.attr('class', "list-group-item list-group-item-dark");

            let p = $('<p>');//Création des p pour plus d'infos sur le user.
            p.append(comments[i].body);
            p.attr('class', "list-group-item");
            li.append(p);
            div.append(li);
            ul.append(div);
        }
    }
});