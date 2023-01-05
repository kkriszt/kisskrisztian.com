const textField = document.getElementById('typewriter');

const typewriter = new Typewriter(textField, {
    loop: true,
    delay: 200,
});

typewriter
    .typeString(`<span>products.</span>`)
    .pauseFor(1500)
    .deleteChars(9)
    .pauseFor(500)
    .typeString('<span>experiences.</span>')
    .pauseFor(1500)
    .deleteChars(12)
    .pauseFor(500)
    .typeString('<span>interfaces.</span>')
    .pauseFor(1500)
    .deleteChars(11)
    .pauseFor(500)
    .start()
    

