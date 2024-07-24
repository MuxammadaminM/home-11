document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.token) {
            alert('Login successful!');
        } else {
            alert('Login failed!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const email = document.getElementById('regEmail').value;

    fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            username: username,
            password: password,
            name: {
                firstname: 'John',
                lastname: 'Doe'
            },
            address: {
                city: 'kilcoole',
                street: '7835 new road',
                number: 3,
                zipcode: '12926-3874',
                geolocation: {
                    lat: '-37.3159',
                    long: '81.1496'
                }
            },
            phone: '1-570-236-7033'
        })
    })
    .then(res => res.json())
    .then(data => {
        alert('Registration successful!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
