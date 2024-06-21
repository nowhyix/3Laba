var users = [
    { id: 1, name: "John Doe", email: "john@example.com", avatar: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695986041_gas-kvas-com-p-kartinki-kisa-29.jpg" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "https://amiel.club/uploads/posts/2022-03/1647665828_3-amiel-club-p-malenkie-kotyata-kartinki-3.jpg" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", avatar: "https://koshka.top/uploads/posts/2021-11/1638230797_1-koshka-top-p-rizhenkii-kotenok-1.jpg" },
];
var userList = document.getElementById('user-list');
if (userList) {
    users.forEach(function (user) {
        var userDiv = document.createElement('div');
        userDiv.classList.add('user');
        var avatarImg = document.createElement('img');
        avatarImg.src = user.avatar || 'default-avatar.png';
        var nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = user.name;
        nameInput.onchange = function (e) {
            var target = e.target;
            user.name = target.value;
        };
        var emailInput = document.createElement('input');
        emailInput.type = 'text';
        emailInput.value = user.email;
        emailInput.onchange = function (e) {
            var target = e.target;
            user.email = target.value;
        };
        var avatarInput = document.createElement('input');
        avatarInput.type = 'file';
        avatarInput.accept = 'image/*';
        avatarInput.onchange = function (e) {
            var target = e.target;
            var file = target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    user.avatar = e.target.result;
                    avatarImg.src = user.avatar;
                };
                reader.readAsDataURL(file);
            }
        };
        userDiv.appendChild(avatarImg);
        userDiv.appendChild(nameInput);
        userDiv.appendChild(emailInput);
        userDiv.appendChild(avatarInput);
        userList.appendChild(userDiv);
    });
}
