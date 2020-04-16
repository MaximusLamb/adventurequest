export default function createUser(formData) {

    const name = formData.get('name');
    const userClass = formData.get('class');

    const newUser = {

        name: name,
        class: userClass,
        completed: {},
        HP: 50,
        gold: 0,
    };

    return newUser;
}
















const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userForm);

   const user = makeUser(formData);

   const stringyUser = JSON.stringify(user);
   localStorage.setItem('USER', stringyUser);

});

