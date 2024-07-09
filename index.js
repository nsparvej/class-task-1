const body = document.querySelector('body');

body.style.height = '100vh';
body.style.width = '100%';
body.style.backgroundColor = 'aqua';


const myDiv = document.createElement('div');
body.appendChild(myDiv);

const img = document.createElement('img');

img.src = 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630';

myDiv.appendChild(img);




img.style.height = '600px'
img.style.width = '600px'
img.style.margin = '0px 550px'
img.style.border = '4px solid'
img.style.boxShadow='5px 5px'



const nextButton = document.createElement('button');
nextButton.innerText = 'Next';
nextButton.addEventListener('click', function () {
    img = img.src = 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630';
})

myDiv.appendChild(nextButton);

const previusButton = document.createElement('button');
myDiv.appendChild(previusButton);
previusButton.innerText = 'pre';
previusButton.addEventListener('click', function () {

    img = img.src = 'https://i0.wp.com/picjumbo.com/wp-content/uploads/breathtaking-bali-nature-free-photo.jpg?w=600&quality=80';

})

nextButton.style.height = '30px'
nextButton.style.width = '60px'
nextButton.style.fontSize = '20px'
nextButton.style.backgroundColor = 'red'
nextButton.style.margin = '0px 400px'


previusButton.style.height = '30px'
previusButton.style.width = '60px'
previusButton.style.fontSize = '20px'
previusButton.style.backgroundColor = 'red'
previusButton.style.margin = '0px 380px'
