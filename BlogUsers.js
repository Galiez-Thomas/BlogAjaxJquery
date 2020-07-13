$.get("http://localhost:4000/users", function (users) {

    let ul = $('ul');
    for (let i = 0; i < users.length; i++) {

        let div = $('<div/>');//Création des div pour use BOOTSTRAP
        div.attr('class', 'col-lg-4');

        let a = $("<a/>");//Création des liens pour accéder aux posts
        a.append(users[i].name);
        a.attr('href', 'BlogPosts.html?userId=' + users[i].id)
        a.attr('class', "list-group-item list-group-item-action list-group-item-dark");

        let p = $('<p>');//Création des p pour plus d'infos sur le user.
        p.append('Pseudo : ' + users[i].username + '<br/>' + 'Mail : ' + users[i].email);
        p.attr('class', "list-group-item");

        let img = $('<img src="https://picsum.photos/150?random=' + (i+1) +'">');
        p.append(img);
        a.append(p);
        div.append(a);
        ul.append(div);
    }
});