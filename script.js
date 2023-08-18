document.addEventListener('DOMContentLoaded', () => {
      const userForm = document.getElementById('userForm');
      const ageInput = document.getElementById('age');
      const nameInput = document.getElementById('name');
      const submitButton = document.getElementById('btn');

      userForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const age = parseInt(ageInput.value);
        const name = nameInput.value;

        if (!age || !name) {
          alert('Please fill in all fields.');
          return;
        }

        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (age >= 18) {
              resolve(`Welcome, ${name}. You can vote.`);
            } else {
              reject(`Oh sorry ${name}. You aren't old enough.`);
            }
          }, 4000);
        });

        promise
          .then((message) => {
            alert(message);
          })
          .catch((error) => {
            alert(error);
          });
      });
    });