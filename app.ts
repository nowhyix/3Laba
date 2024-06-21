interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
  }
  
  const users: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com", avatar: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695986041_gas-kvas-com-p-kartinki-kisa-29.jpg" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "https://amiel.club/uploads/posts/2022-03/1647665828_3-amiel-club-p-malenkie-kotyata-kartinki-3.jpg" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", avatar: "https://koshka.top/uploads/posts/2021-11/1638230797_1-koshka-top-p-rizhenkii-kotenok-1.jpg" },
  ];
  
  const userList = document.getElementById('user-list');
  if (userList) {
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
  
      const avatarImg = document.createElement('img');
      avatarImg.src = user.avatar || 'default-avatar.png'; 
  
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.value = user.name;
      nameInput.onchange = (e) => {
        const target = e.target as HTMLInputElement; 
        user.name = target.value;
      };
  
      const emailInput = document.createElement('input');
      emailInput.type = 'text';
      emailInput.value = user.email;
      emailInput.onchange = (e) => {
        const target = e.target as HTMLInputElement; 
        user.email = target.value;
      };
  
      const avatarInput = document.createElement('input');
      avatarInput.type = 'file';
      avatarInput.accept = 'image/*';
      avatarInput.onchange = (e) => {
        const target = e.target as HTMLInputElement; 
        const file = target.files![0]; 
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            user.avatar = e.target!.result as string; 
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
  