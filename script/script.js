 const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const signInButton = document.getElementById('button');
        document.getElementById('button').addEventListener('click',function(){
            const username = usernameInput.value;
            const password = passwordInput.value;
            if(username === 'admin' && password === 'admin123'){
                alert('Login successful!');
                window.location.href = 'issues-Tracker.html';
            }else{
                alert('Invalid username or password. Please try again.');
                return;
            }
        })