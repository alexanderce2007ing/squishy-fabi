/* ==========================================
   HORA DE PERÚ 🇵🇪
   
   MODO PRUEBA:
   24/09/2026 - 08:43 AM
========================================== */

function getPeruDate() {

    /*
       Estamos simulando las 08:43 AM
       de Perú para poder probar
       el diseño de la mañana.
    */

    return {

        year: 2026,

        month: 9,

        day: 24,

        hour: 8,

        minute: 43,

        second: 0

    };

}


/* ==========================================
   OBTENER HORA
========================================== */

function getPeruHour() {

    return getPeruDate().hour;

}


/* ==========================================
   SALUDO
========================================== */

function getPeruGreeting() {

    const hour =
        getPeruHour();


    if (
        hour >= 5 &&
        hour < 12
    ) {

        return "Buenos días, Fabi 🌤️";

    }


    if (
        hour >= 12 &&
        hour < 18
    ) {

        return "Buenas tardes, Fabi ☀️";

    }


    if (
        hour >= 18 &&
        hour < 23
    ) {

        return "Buenas noches, Fabi 🌆";

    }


    return "Buenas noches, Fabi 🌙";

}


/* ==========================================
   AMBIENTE
========================================== */

function updatePeruTheme() {

    const hour =
        getPeruHour();


    document.body.classList.remove(
        "morning",
        "afternoon",
        "night"
    );


    if (
        hour >= 5 &&
        hour < 12
    ) {

        document.body.classList.add(
            "morning"
        );

    }

    else if (
        hour >= 12 &&
        hour < 18
    ) {

        document.body.classList.add(
            "afternoon"
        );

    }

    else {

        document.body.classList.add(
            "night"
        );

    }


    if (greetingTitle) {

        greetingTitle.textContent =
            getPeruGreeting();

    }


    if (introDescription) {

        if (
            hour >= 5 &&
            hour < 12
        ) {

            introDescription.innerHTML =
                "Espero que hayas empezado bien el día.<br>" +
                "Hice una pequeña cosa para ti. 👀";

        }

        else if (
            hour >= 12 &&
            hour < 18
        ) {

            introDescription.innerHTML =
                "Hice una pequeña cosa para ti.<br>" +
                "No es nada raro... bueno, quizás un poquito.";

        }

        else {

            introDescription.innerHTML =
                "Antes de dormir...<br>" +
                "hice una pequeña cosa para ti. 🌙";

        }

    }

}


/* ==========================================
   MENSAJES
========================================== */

const messages = [

    getPeruGreeting(),

    "Hice algo para ti...",

    "No te emociones todavía 😭",

    "Bueno... quizás un poquito.",

    "Me gusta hablar contigo.",

    "Me gusta cuando nos vemos.",

    "Y me gusta que tengamos nuestras propias tonterías.",

    "Ya, suficiente sentimentalismo 😭",

    "Eso último era información confidencial.",

    "Solo quería sacarte una sonrisa.",

    "Suerte y ten un buen día 🍀☀️"

];


/* ==========================================
   VARIABLES
========================================== */

let current = 0;

let started = false;


/* ==========================================
   ELEMENTOS
========================================== */

const intro =
    document.getElementById(
        "intro"
    );


const startButton =
    document.getElementById(
        "startButton"
    );


const character =
    document.getElementById(
        "character"
    );


const interaction =
    document.getElementById(
        "interaction"
    );


const sign =
    document.getElementById(
        "sign"
    );


const message =
    document.getElementById(
        "message"
    );


const step =
    document.getElementById(
        "step"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


const mouth =
    document.getElementById(
        "mouth"
    );


const eyeLeft =
    document.getElementById(
        "eyeLeft"
    );


const eyeRight =
    document.getElementById(
        "eyeRight"
    );


const particles =
    document.getElementById(
        "particles"
    );


const greetingTitle =
    document.getElementById(
        "greetingTitle"
    );


const introDescription =
    document.getElementById(
        "introDescription"
    );


/* ==========================================
   GATOS
========================================== */

const catWhite =
    document.getElementById(
        "catWhite"
    );


const catOrange =
    document.getElementById(
        "catOrange"
    );


const catDark =
    document.getElementById(
        "catDark"
    );


/* ==========================================
   ACTIVAR AMBIENTE
========================================== */

updatePeruTheme();


/* ==========================================
   INICIO
========================================== */

startButton.addEventListener(
    "click",
    () => {

        started = true;

        intro.classList.add(
            "hide"
        );


        playSound(
            520,
            0.12
        );


        setTimeout(
            () => {

                updateMessage();

            },
            500
        );

    }
);


/* ==========================================
   INTERACCIÓN
========================================== */

character.addEventListener(
    "click",
    nextMessage
);


interaction.addEventListener(
    "click",
    nextMessage
);


/* ==========================================
   SIGUIENTE MENSAJE
========================================== */

function nextMessage() {

    if (!started) return;


    if (
        current >=
        messages.length - 1
    ) {

        return;

    }


    if (
        navigator.vibrate
    ) {

        navigator.vibrate(30);

    }


    character.classList.remove(
        "pressed"
    );


    void character.offsetWidth;


    character.classList.add(
        "pressed"
    );


    playSound(
        350 +
        current * 30,
        0.08
    );


    createParticles();


    current++;


    updateMessage();


    triggerCats(
        current
    );

}


/* ==========================================
   ACTUALIZAR MENSAJE
========================================== */

function updateMessage() {

    sign.classList.add(
        "change"
    );


    setTimeout(
        () => {

            message.textContent =
                messages[current];


            sign.classList.remove(
                "change"
            );

        },
        250
    );


    step.textContent =
        `${current + 1} / ${messages.length}`;


    const percentage =
        (
            current /
            (
                messages.length - 1
            )
        ) * 100;


    progressBar.style.width =
        `${percentage}%`;


    changeExpression(
        current
    );


    /* ==============================
       BOTÓN
    =============================== */

    if (
        current === 0
    ) {

        interaction.textContent =
            "Tócame 👆";

    }

    else if (
        current === 1
    ) {

        interaction.textContent =
            "A ver... 👀";

    }

    else if (
        current === 2
    ) {

        interaction.textContent =
            "Continúa 😭";

    }

    else if (
        current === 3
    ) {

        interaction.textContent =
            "Bueno pues...";

    }

    else if (
        current === 4
    ) {

        interaction.textContent =
            "Siguiente 👀";

    }

    else if (
        current === 5
    ) {

        interaction.textContent =
            "Sigue";

    }

    else if (
        current === 6
    ) {

        interaction.textContent =
            "JAJA";

    }

    else if (
        current === 7
    ) {

        interaction.textContent =
            "Ya ya 😭";

    }

    else if (
        current === 8
    ) {

        interaction.textContent =
            "🤐";

    }

    else if (
        current === 9
    ) {

        interaction.textContent =
            "Una última...";

    }

    else if (
        current === 10
    ) {

        interaction.textContent =
            "🍀";

        finish();

    }

}


/* ==========================================
   EXPRESIONES
========================================== */

function changeExpression(
    number
) {

    mouth.style.cssText = "";


    if (
        number === 0 ||
        number === 4 ||
        number === 5 ||
        number === 9
    ) {

        mouth.style.width =
            "25px";

        mouth.style.height =
            "15px";

        mouth.style.borderBottom =
            "4px solid #49303b";

        mouth.style.borderRadius =
            "0 0 50% 50%";

    }


    else if (
        number === 1 ||
        number === 2
    ) {

        mouth.style.width =
            "14px";

        mouth.style.height =
            "14px";

        mouth.style.border =
            "3px solid #49303b";

        mouth.style.borderRadius =
            "50%";

    }


    else if (
        number === 3 ||
        number === 6
    ) {

        mouth.style.width =
            "30px";

        mouth.style.height =
            "17px";

        mouth.style.borderBottom =
            "5px solid #49303b";

        mouth.style.borderRadius =
            "0 0 60% 60%";

    }


    else if (
        number === 7 ||
        number === 8
    ) {

        mouth.style.width =
            "18px";

        mouth.style.height =
            "8px";

        mouth.style.borderBottom =
            "3px solid #49303b";

        mouth.style.borderRadius =
            "0 0 50% 50%";

    }


    if (
        number === 10
    ) {

        mouth.style.width =
            "18px";

        mouth.style.height =
            "8px";

        mouth.style.borderBottom =
            "3px solid #49303b";

        mouth.style.borderRadius =
            "50%";

    }

}


/* ==========================================
   GATOS
========================================== */

function triggerCats(
    stepNumber
) {

    /*
       PASO 2
       GATO BLANCO
    */

    if (
        stepNumber === 2
    ) {

        setTimeout(
            () => {

                showCat(
                    catWhite
                );

            },
            500
        );

    }


    /*
       PASO 5
       GATO NARANJA
    */

    if (
        stepNumber === 5
    ) {

        setTimeout(
            () => {

                showCat(
                    catOrange
                );

            },
            500
        );

    }


    /*
       PASO 7
       GATO NEGRO PLOMO
    */

    if (
        stepNumber === 7
    ) {

        setTimeout(
            () => {

                showCat(
                    catDark
                );

            },
            500
        );

    }

}


/* ==========================================
   MOSTRAR GATO
========================================== */

function showCat(
    cat
) {

    if (
        cat.classList.contains(
            "appear"
        )
    ) {

        return;

    }


    cat.classList.add(
        "appear"
    );

}


/* ==========================================
   FINAL
========================================== */

function finish() {

    setTimeout(
        () => {

            document.body.classList.add(
                "final"
            );


            character.classList.add(
                "sleeping"
            );


            /*
               Aseguramos los tres gatos
            */

            showCat(
                catWhite
            );


            setTimeout(
                () => {

                    showCat(
                        catOrange
                    );

                },
                250
            );


            setTimeout(
                () => {

                    showCat(
                        catDark
                    );

                },
                500
            );


            /*
               Sonido final
            */

            setTimeout(
                () => {

                    playSound(
                        260,
                        0.18
                    );

                },
                1000
            );


        },
        700
    );

}


/* ==========================================
   PARTICULAS
========================================== */

function createParticles() {

    const rect =
        character.getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "particle";


        particle.style.left =
            `${centerX}px`;


        particle.style.top =
            `${centerY}px`;


        const x =
            (
                Math.random() -
                0.5
            ) * 220;


        const y =
            (
                Math.random() -
                0.5
            ) * 180;


        particle.style.setProperty(
            "--x",
            `${x}px`
        );


        particle.style.setProperty(
            "--y",
            `${y}px`
        );


        particles.appendChild(
            particle
        );


        setTimeout(
            () => {

                particle.remove();

            },
            900
        );

    }

}


/* ==========================================
   OJOS SIGUEN EL CURSOR
========================================== */

document.addEventListener(
    "mousemove",
    event => {

        if (!started) return;


        moveEyes(
            event.clientX,
            event.clientY
        );

    }
);


function moveEyes(
    mouseX,
    mouseY
) {

    const rect =
        character.getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    const dx =
        mouseX - centerX;


    const dy =
        mouseY - centerY;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    const maxMove = 5;


    const moveX =
        distance === 0
            ? 0
            : (
                dx /
                distance
            ) * maxMove;


    const moveY =
        distance === 0
            ? 0
            : (
                dy /
                distance
            ) * maxMove;


    eyeLeft.style.transform =
        `translate(${moveX}px, ${moveY}px)`;


    eyeRight.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

}


/* ==========================================
   SONIDO
========================================== */

let audioContext = null;


function playSound(
    frequency = 400,
    duration = 0.1
) {

    try {

        if (!audioContext) {

            audioContext =
                new (
                    window.AudioContext ||
                    window.webkitAudioContext
                )();

        }


        if (
            audioContext.state ===
            "suspended"
        ) {

            audioContext.resume();

        }


        const oscillator =
            audioContext.createOscillator();


        const gain =
            audioContext.createGain();


        oscillator.type =
            "sine";


        oscillator.frequency.setValueAtTime(
            frequency,
            audioContext.currentTime
        );


        gain.gain.setValueAtTime(
            0.0001,
            audioContext.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.12,
            audioContext.currentTime +
            0.01
        );


        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioContext.currentTime +
            duration
        );


        oscillator.connect(
            gain
        );


        gain.connect(
            audioContext.destination
        );


        oscillator.start();


        oscillator.stop(
            audioContext.currentTime +
            duration
        );

    }

    catch (error) {

        console.log(
            "Audio no disponible."
        );

    }

}