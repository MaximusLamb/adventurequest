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
