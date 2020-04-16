// IMPORT MODULES under test here:
// import example from '../src/example.js';
import createUser from '../userPage/createUser.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();

    formData.set('name', 'Max');
    formData.set('class', 'Knight');
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = {
        name: 'Max',
        class: 'Knight',
        completed: {},
        HP: 50,
        gold: 0,
    };

    

    const result = createUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, result);
});
