/* =========================================================
   LAH, MOGOK!
========================================================= */


/* =========================================================
   DATA KERUSAKAN
========================================================= */

const problems = {

    aki: {
        name: "Aki",
        icon: "🔋",

        symptoms: [
            "Saat tombol starter ditekan, motor tidak mau menyala dan panel terasa lemah.",
            "Starter elektrik tidak bekerja dengan normal dan lampu indikator terlihat redup.",
            "Motor tiba-tiba sulit distarter meskipun bahan bakar masih tersedia."
        ],

        cause:
            "Aki memiliki tegangan yang terlalu rendah atau daya aki sudah melemah sehingga tidak mampu menyuplai listrik dengan baik.",

        repair:
            "Periksa tegangan aki, bersihkan terminal jika kotor, lalu lakukan pengisian ulang atau ganti aki jika kondisinya sudah tidak layak.",

        risk:
            "Jika dibiarkan, motor dapat semakin sulit dinyalakan dan sistem kelistrikan dapat terganggu.",

        impact:
            "Starter elektrik menjadi lemah atau tidak berfungsi dan beberapa komponen kelistrikan dapat bekerja tidak normal.",

        prevention:
            "Periksa kondisi aki secara berkala, jaga terminal tetap bersih, dan gunakan aki sesuai spesifikasi motor.",

        repairs: [
            {
                text: "Isi ulang atau ganti aki jika sudah rusak",
                correct: true
            },
            {
                text: "Ganti oli mesin",
                correct: false
            },
            {
                text: "Mengurangi tekanan ban",
                correct: false
            },
            {
                text: "Mengganti lampu sein",
                correct: false
            }
        ]
    },


    busi: {
        name: "Busi",
        icon: "⚡",

        symptoms: [
            "Motor terasa brebet dan sulit dinyalakan.",
            "Mesin seperti kehilangan tenaga dan suara mesin tidak stabil.",
            "Motor tiba-tiba mati dan sulit hidup kembali."
        ],

        cause:
            "Busi kotor, aus, atau celah elektroda tidak sesuai sehingga percikan api untuk pembakaran menjadi tidak optimal.",

        repair:
            "Periksa kondisi busi, bersihkan jika masih layak digunakan, atur celah sesuai spesifikasi, atau ganti busi jika sudah aus.",

        risk:
            "Pembakaran yang tidak sempurna dapat membuat mesin brebet dan performa motor menurun.",

        impact:
            "Tenaga mesin berkurang, konsumsi bahan bakar dapat meningkat, dan motor dapat sulit dihidupkan.",

        prevention:
            "Periksa dan ganti busi sesuai interval perawatan serta gunakan busi yang sesuai dengan spesifikasi motor.",

        repairs: [
            {
                text: "Periksa dan ganti busi jika sudah aus",
                correct: true
            },
            {
                text: "Mengganti ban belakang",
                correct: false
            },
            {
                text: "Mengisi minyak rem",
                correct: false
            },
            {
                text: "Mengganti filter udara tanpa memeriksa busi",
                correct: false
            }
        ]
    },


    cvt: {
        name: "CVT",
        icon: "⚙️",

        symptoms: [
            "Motor terasa bergetar dan akselerasi tidak normal.",
            "Saat mulai berjalan, motor terasa bergetar atau tenaga terasa tersendat.",
            "Akselerasi motor terasa berat meskipun mesin masih menyala."
        ],

        cause:
            "Komponen CVT seperti roller, V-belt, pulley, atau kampas kopling dapat mengalami keausan atau kotor.",

        repair:
            "Periksa CVT, bersihkan rumah CVT, periksa roller dan V-belt, kemudian ganti komponen yang sudah aus.",

        risk:
            "CVT yang bermasalah dapat menyebabkan performa turun dan kerusakan komponen menjadi lebih parah.",

        impact:
            "Akselerasi menjadi tidak optimal, muncul getaran, dan tenaga motor terasa tidak tersalurkan dengan baik.",

        prevention:
            "Lakukan servis CVT secara berkala dan periksa kondisi roller, V-belt, pulley, serta kampas kopling.",

        repairs: [
            {
                text: "Periksa dan servis komponen CVT",
                correct: true
            },
            {
                text: "Mengganti aki",
                correct: false
            },
            {
                text: "Mengisi bahan bakar sampai penuh",
                correct: false
            },
            {
                text: "Mengganti lampu depan",
                correct: false
            }
        ]
    },


    bahanBakar: {
        name: "Bahan Bakar",
        icon: "⛽",

        symptoms: [
            "Motor tiba-tiba kehilangan tenaga kemudian mesin mati.",
            "Mesin mati setelah motor digunakan cukup lama dan indikator bahan bakar menunjukkan kondisi rendah.",
            "Motor tidak dapat menyala meskipun sistem kelistrikan masih bekerja."
        ],

        cause:
            "Bahan bakar habis atau suplai bahan bakar ke mesin mengalami masalah.",

        repair:
            "Periksa jumlah bahan bakar dan sistem penyalurannya. Isi bahan bakar jika memang habis dan periksa saluran jika suplai terganggu.",

        risk:
            "Motor dapat berhenti di tengah perjalanan dan jika masalah suplai dibiarkan dapat mengganggu sistem bahan bakar.",

        impact:
            "Mesin kehilangan tenaga, kemudian mati dan tidak dapat digunakan sampai suplai bahan bakar kembali normal.",

        prevention:
            "Biasakan memeriksa indikator bahan bakar sebelum berkendara dan lakukan pemeriksaan sistem bahan bakar secara berkala.",

        repairs: [
            {
                text: "Isi bahan bakar dan periksa sistem penyalurannya",
                correct: true
            },
            {
                text: "Mengganti busi tanpa memeriksa bahan bakar",
                correct: false
            },
            {
                text: "Mengurangi tekanan ban",
                correct: false
            },
            {
                text: "Mengganti kampas rem",
                correct: false
            }
        ]
    }

};


/* =========================================================
   STATE
========================================================= */

let selectedMotor = "Motor1.png";
let selectedWorkshopMotor = "Motor1_Bengkel.png";

let currentRound = 1;
const totalRounds = 3;

let totalScore = 0;
let roundScore = 0;

let currentProblem = "";
let currentSymptom = "";

let mistakes = 0;

let motorPosition = 0;
let currentSpeed = 60;

let failureTimer = null;
let warningTimer = null;
let slowdownTimer = null;
let eventMessageTimer = null;

let roadAnimationFrame = null;
let mobileControlFrame = null;

let roundStartTime = 0;

let motorIsBroken = false;
let motorIsWarning = false;
let motorIsSlowing = false;


/* =========================================================
   MOBILE STATE
========================================================= */

let mobileLeftPressed = false;
let mobileRightPressed = false;
let mobileAcceleratePressed = false;
let mobileBrakePressed = false;


/* =========================================================
   DOM
========================================================= */

const menuScreen =
    document.getElementById("menuScreen");

const gameScreen =
    document.getElementById("gameScreen");

const workshopScreen =
    document.getElementById("workshopScreen");

const inspectionScreen =
    document.getElementById("inspectionScreen");

const repairScreen =
    document.getElementById("repairScreen");

const successScreen =
    document.getElementById("successScreen");

const finishScreen =
    document.getElementById("finishScreen");


const motorCards =
    document.querySelectorAll(".motorCard");

const startButton =
    document.getElementById("startButton");

const roundValue =
    document.getElementById("roundValue");

const scoreValue =
    document.getElementById("scoreValue");

const speedValue =
    document.getElementById("speedValue");

const eventMessage =
    document.getElementById("eventMessage");

const roadLines =
    document.querySelectorAll(".roadLine");

const gameMotor =
    document.getElementById("gameMotor");

const stallOverlay =
    document.getElementById("stallOverlay");

const stallDescription =
    document.getElementById("stallDescription");

const countdownValue =
    document.getElementById("countdownValue");

const bringToWorkshopButton =
    document.getElementById("bringToWorkshopButton");

const workshopMotor =
    document.getElementById("workshopMotor");

const inspectButton =
    document.getElementById("inspectButton");

const inspectionMotor =
    document.getElementById("inspectionMotor");

const symptomText =
    document.getElementById("symptomText");

const componentButtons =
    document.querySelectorAll(".componentButton");

const inspectionResult =
    document.getElementById("inspectionResult");

const inspectionRetryButton =
    document.getElementById("inspectionRetryButton");

const educationModal =
    document.getElementById("educationModal");

const educationIcon =
    document.getElementById("educationIcon");

const educationTitle =
    document.getElementById("educationTitle");

const educationCause =
    document.getElementById("educationCause");

const educationRepair =
    document.getElementById("educationRepair");

const educationRisk =
    document.getElementById("educationRisk");

const educationImpact =
    document.getElementById("educationImpact");

const educationPrevention =
    document.getElementById("educationPrevention");

const closeEducationButton =
    document.getElementById("closeEducationButton");

const continueRepairButton =
    document.getElementById("continueRepairButton");

const repairMotor =
    document.getElementById("repairMotor");

const repairOptions =
    document.getElementById("repairOptions");

const repairResult =
    document.getElementById("repairResult");

const repairRetryButton =
    document.getElementById("repairRetryButton");

const roundScoreElement =
    document.getElementById("roundScore");

const successTotalScore =
    document.getElementById("successTotalScore");

const nextRoundButton =
    document.getElementById("nextRoundButton");

const finalScore =
    document.getElementById("finalScore");

const finalRating =
    document.getElementById("finalRating");

const restartButton =
    document.getElementById("restartButton");


/* =========================================================
   MOBILE BUTTONS
========================================================= */

const mobileControls =
    document.getElementById("mobileControls");

const leftControl =
    document.getElementById("leftControl");

const rightControl =
    document.getElementById("rightControl");

const accelerateControl =
    document.getElementById("accelerateControl");

const brakeControl =
    document.getElementById("brakeControl");


/* =========================================================
   SCREEN
========================================================= */

function showScreen(screen) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function(currentScreen) {

        currentScreen.classList.remove("active");

    });

    screen.classList.add("active");
}


/* =========================================================
   MOTOR SELECTION
========================================================= */

motorCards.forEach(function(card) {

    card.addEventListener("click", function() {

        motorCards.forEach(function(otherCard) {

            otherCard.classList.remove("selected");

        });

        card.classList.add("selected");

        selectedMotor =
            card.getAttribute("data-motor");

        selectedWorkshopMotor =
            card.getAttribute("data-workshop");

        gameMotor.src =
            selectedMotor;

        workshopMotor.src =
            selectedWorkshopMotor;

        inspectionMotor.src =
            selectedWorkshopMotor;

        repairMotor.src =
            selectedWorkshopMotor;

    });

});


/* =========================================================
   START
========================================================= */

startButton.addEventListener("click", function() {

    currentRound = 1;

    totalScore = 0;

    startRound();

});


/* =========================================================
   START ROUND
========================================================= */

function startRound() {

    clearAllTimers();

    hideEducation();

    roundScore = 0;

    mistakes = 0;

    motorIsBroken = false;

    motorIsWarning = false;

    motorIsSlowing = false;

    motorPosition = 0;

    currentSpeed = 60;

    resetMobileControls();

    enableMobileControls();

    applyMotorPosition();

    updateSpeed();

    updateScore();

    updateRound();

    gameMotor.src =
        selectedMotor;

    workshopMotor.src =
        selectedWorkshopMotor;

    inspectionMotor.src =
        selectedWorkshopMotor;

    repairMotor.src =
        selectedWorkshopMotor;

    stallOverlay.classList.remove("show");

    showScreen(gameScreen);

    generateProblem();

    roundStartTime =
        Date.now();

    startRoadAnimation();

    /*
        10 detik sebelum warning.
    */

    failureTimer =
        setTimeout(function() {

            startMotorWarning();

        }, 10000);

}


/* =========================================================
   RANDOM PROBLEM
========================================================= */

function generateProblem() {

    const problemKeys =
        Object.keys(problems);

    const randomIndex =
        Math.floor(
            Math.random() *
            problemKeys.length
        );

    currentProblem =
        problemKeys[randomIndex];

    const problem =
        problems[currentProblem];

    const symptomIndex =
        Math.floor(
            Math.random() *
            problem.symptoms.length
        );

    currentSymptom =
        problem.symptoms[symptomIndex];

    showEventMessage(
        "⚠️ Gejala: " +
        currentSymptom
    );

}


/* =========================================================
   EVENT MESSAGE
========================================================= */

function showEventMessage(message) {

    if (eventMessageTimer !== null) {

        clearTimeout(
            eventMessageTimer
        );

    }

    eventMessage.textContent =
        message;

    eventMessage.style.display =
        "block";

    eventMessage.style.opacity =
        "1";

}


/* =========================================================
   WARNING
========================================================= */

function startMotorWarning() {

    if (motorIsBroken) {
        return;
    }

    if (motorIsWarning) {
        return;
    }

    motorIsWarning = true;

    /*
        GAS LANGSUNG DIKUNCI
    */

    mobileAcceleratePressed = false;

    showEventMessage(
        "⚠️ PERINGATAN! " +
        currentSymptom
    );

    /*
        Warning berlangsung 3 detik.
    */

    warningTimer =
        setTimeout(function() {

            startMotorSlowdown();

        }, 3000);

}


/* =========================================================
   SLOWDOWN
========================================================= */

function startMotorSlowdown() {

    if (motorIsBroken) {
        return;
    }

    motorIsSlowing = true;

    /*
        GAS TIDAK BOLEH LAGI DIGUNAKAN.
    */

    mobileAcceleratePressed = false;

    showEventMessage(
        "🚨 MOTOR KEHILANGAN TENAGA! " +
        "Segera menepi."
    );

    slowdownTimer =
        setInterval(function() {

            /*
                Paksa gas tetap mati.
            */

            mobileAcceleratePressed = false;

            if (currentSpeed > 0) {

                currentSpeed -= 10;

                if (currentSpeed < 0) {
                    currentSpeed = 0;
                }

                updateSpeed();

            }

            if (currentSpeed <= 0) {

                clearInterval(
                    slowdownTimer
                );

                slowdownTimer = null;

                motorBreakdown();

            }

        }, 800);

}


/* =========================================================
   BREAKDOWN
========================================================= */

function motorBreakdown() {

    if (motorIsBroken) {
        return;
    }

    motorIsBroken = true;

    motorIsWarning = false;

    motorIsSlowing = false;

    clearTimeout(
        failureTimer
    );

    clearTimeout(
        warningTimer
    );

    if (slowdownTimer !== null) {

        clearInterval(
            slowdownTimer
        );

        slowdownTimer = null;

    }

    currentSpeed = 0;

    updateSpeed();

    resetMobileControls();

    disableMobileControls();

    stopRoadAnimation();

    const problem =
        problems[currentProblem];

    stallDescription.textContent =
        "Motor mengalami masalah pada bagian " +
        problem.name +
        ". Periksa motor di bengkel untuk mengetahui penyebabnya.";

    countdownValue.textContent =
        "Motor berhenti";

    eventMessage.style.display =
        "none";

    stallOverlay.classList.add(
        "show"
    );

}


/* =========================================================
   WORKSHOP
========================================================= */

bringToWorkshopButton.addEventListener(
    "click",
    function() {

        if (!motorIsBroken) {
            return;
        }

        stallOverlay.classList.remove(
            "show"
        );

        showScreen(
            workshopScreen
        );

    }
);


/* =========================================================
   INSPECTION
========================================================= */

inspectButton.addEventListener(
    "click",
    function() {

        inspectionResult.textContent =
            "";

        inspectionRetryButton.style.display =
            "none";

        componentButtons.forEach(
            function(button) {

                button.classList.remove(
                    "correct"
                );

                button.classList.remove(
                    "wrong"
                );

            }
        );

        symptomText.textContent =
            "Gejala yang terjadi: " +
            currentSymptom;

        showScreen(
            inspectionScreen
        );

    }
);


/* =========================================================
   DIAGNOSIS
========================================================= */

componentButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const selectedComponent =
                button.getAttribute(
                    "data-component"
                );

            if (
                selectedComponent ===
                currentProblem
            ) {

                button.classList.add(
                    "correct"
                );

                roundScore += 50;

                updateScore();

                inspectionResult.textContent =
                    "✅ BENAR! Kamu berhasil menemukan komponen yang bermasalah.";

                inspectionResult.style.color =
                    "#27e66f";

                inspectionRetryButton.style.display =
                    "none";

                showEducation();

            } else {

                button.classList.add(
                    "wrong"
                );

                roundScore -= 10;

                mistakes += 1;

                updateScore();

                inspectionResult.textContent =
                    "❌ SALAH! Komponen tersebut bukan penyebab utama kerusakan.";

                inspectionResult.style.color =
                    "#ff4d4d";

                inspectionRetryButton.style.display =
                    "inline-block";

            }

        }
    );

});


/* =========================================================
   RETRY DIAGNOSIS
========================================================= */

inspectionRetryButton.addEventListener(
    "click",
    function() {

        inspectionResult.textContent =
            "";

        inspectionRetryButton.style.display =
            "none";

        componentButtons.forEach(
            function(button) {

                button.classList.remove(
                    "wrong"
                );

                button.classList.remove(
                    "correct"
                );

            }
        );

    }
);


/* =========================================================
   EDUCATION
========================================================= */

function showEducation() {

    const problem =
        problems[currentProblem];

    educationIcon.textContent =
        problem.icon;

    educationTitle.textContent =
        "Masalah: " +
        problem.name;

    educationCause.textContent =
        problem.cause;

    educationRepair.textContent =
        problem.repair;

    educationRisk.textContent =
        problem.risk;

    educationImpact.textContent =
        problem.impact;

    educationPrevention.textContent =
        problem.prevention;

    educationModal.classList.add(
        "show"
    );

}


function hideEducation() {

    educationModal.classList.remove(
        "show"
    );

}


closeEducationButton.addEventListener(
    "click",
    function() {

        hideEducation();

    }
);


/* =========================================================
   REPAIR
========================================================= */

continueRepairButton.addEventListener(
    "click",
    function() {

        hideEducation();

        openRepairScreen();

    }
);


function openRepairScreen() {

    repairOptions.innerHTML =
        "";

    repairResult.textContent =
        "";

    repairRetryButton.style.display =
        "none";

    const problem =
        problems[currentProblem];

    const shuffledRepairs =
        shuffleArray(
            problem.repairs.slice()
        );

    shuffledRepairs.forEach(
        function(repair) {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "repairButton";

            button.textContent =
                repair.text;

            repairOptions.appendChild(
                button
            );

            button.addEventListener(
                "click",
                function() {

                    handleRepairAnswer(
                        button,
                        repair.correct
                    );

                }
            );

        }
    );

    showScreen(
        repairScreen
    );

}


/* =========================================================
   REPAIR ANSWER
========================================================= */

function handleRepairAnswer(
    button,
    isCorrect
) {

    const allRepairButtons =
        document.querySelectorAll(
            ".repairButton"
        );

    if (isCorrect) {

        button.classList.add(
            "correct"
        );

        roundScore += 100;

        const elapsedTime =
            (Date.now() -
                roundStartTime) /
            1000;

        if (mistakes === 0) {
            roundScore += 50;
        }

        if (elapsedTime <= 35) {
            roundScore += 25;
        }

        updateScore();

        repairResult.textContent =
            "✅ PERBAIKAN BERHASIL! Motor kembali menyala.";

        repairResult.style.color =
            "#27e66f";

        allRepairButtons.forEach(
            function(repairButton) {

                repairButton.disabled =
                    true;

            }
        );

        repairRetryButton.style.display =
            "none";

        setTimeout(
            function() {

                showSuccessScreen();

            },
            1000
        );

    } else {

        button.classList.add(
            "wrong"
        );

        roundScore -= 15;

        mistakes += 1;

        updateScore();

        repairResult.textContent =
            "❌ Tindakan tersebut kurang tepat. Coba pilih tindakan lain.";

        repairResult.style.color =
            "#ff4d4d";

        repairRetryButton.style.display =
            "inline-block";

    }

}


/* =========================================================
   RETRY REPAIR
========================================================= */

repairRetryButton.addEventListener(
    "click",
    function() {

        repairResult.textContent =
            "";

        repairRetryButton.style.display =
            "none";

        const repairButtons =
            document.querySelectorAll(
                ".repairButton"
            );

        repairButtons.forEach(
            function(button) {

                button.classList.remove(
                    "wrong"
                );

            }
        );

    }
);


/* =========================================================
   SUCCESS
========================================================= */

function showSuccessScreen() {

    roundScore =
        Math.max(
            0,
            roundScore
        );

    totalScore +=
        roundScore;

    roundScoreElement.textContent =
        "Skor ronde: " +
        roundScore;

    successTotalScore.textContent =
        "Total skor: " +
        totalScore;

    showScreen(
        successScreen
    );

}


/* =========================================================
   NEXT ROUND
========================================================= */

nextRoundButton.addEventListener(
    "click",
    function() {

        if (
            currentRound <
            totalRounds
        ) {

            currentRound += 1;

            startRound();

        } else {

            finishGame();

        }

    }
);


/* =========================================================
   FINISH
========================================================= */

function finishGame() {

    clearAllTimers();

    finalScore.textContent =
        "Skor Akhir: " +
        totalScore;

    let rating = "";

    if (totalScore >= 600) {

        rating =
            "🏆 SANGAT BAIK! Mekanik profesional!";

    } else if (totalScore >= 400) {

        rating =
            "🥇 BAIK! Pemahaman troubleshooting kamu bagus.";

    } else if (totalScore >= 200) {

        rating =
            "🥈 CUKUP! Masih perlu latihan.";

    } else {

        rating =
            "🔧 PERLU BELAJAR LAGI! Jangan menyerah.";

    }

    finalRating.textContent =
        "Rating: " +
        rating;

    showScreen(
        finishScreen
    );

}


/* =========================================================
   RESTART
========================================================= */

restartButton.addEventListener(
    "click",
    function() {

        clearAllTimers();

        currentRound = 1;

        totalScore = 0;

        roundScore = 0;

        mistakes = 0;

        motorPosition = 0;

        currentSpeed = 60;

        motorIsBroken = false;

        motorIsWarning = false;

        motorIsSlowing = false;

        resetMobileControls();

        enableMobileControls();

        updateScore();

        updateRound();

        updateSpeed();

        applyMotorPosition();

        showScreen(
            menuScreen
        );

    }
);


/* =========================================================
   SCORE
========================================================= */

function updateScore() {

    scoreValue.textContent =
        totalScore +
        roundScore;

}


/* =========================================================
   ROUND
========================================================= */

function updateRound() {

    roundValue.textContent =
        currentRound +
        " / " +
        totalRounds;

}


/* =========================================================
   SPEED
========================================================= */

function updateSpeed() {

    speedValue.textContent =
        currentSpeed +
        " km/h";

}


/* =========================================================
   MOTOR POSITION
========================================================= */

function applyMotorPosition() {

    gameMotor.style.transform =
        "translateX(calc(-50% + " +
        motorPosition +
        "px))";

}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            !gameScreen.classList.contains(
                "active"
            )
        ) {
            return;
        }

        if (motorIsBroken) {
            return;
        }


        /*
            GAS
            TIDAK BOLEH SAAT WARNING
            ATAU SLOWDOWN.
        */

        if (
            event.key === "ArrowUp" ||
            event.key.toLowerCase() === "w"
        ) {

            event.preventDefault();

            if (
                motorIsWarning ||
                motorIsSlowing
            ) {

                return;

            }

            currentSpeed += 5;

            if (currentSpeed > 120) {
                currentSpeed = 120;
            }

            updateSpeed();

        }


        /*
            REM
        */

        if (
            event.key === "ArrowDown" ||
            event.key.toLowerCase() === "s"
        ) {

            event.preventDefault();

            if (motorIsSlowing) {
                return;
            }

            currentSpeed -= 5;

            if (currentSpeed < 0) {
                currentSpeed = 0;
            }

            updateSpeed();

        }


        /*
            KIRI
        */

        if (
            event.key === "ArrowLeft" ||
            event.key.toLowerCase() === "a"
        ) {

            event.preventDefault();

            motorPosition -= 30;

            if (motorPosition < -180) {
                motorPosition = -180;
            }

            applyMotorPosition();

        }


        /*
            KANAN
        */

        if (
            event.key === "ArrowRight" ||
            event.key.toLowerCase() === "d"
        ) {

            event.preventDefault();

            motorPosition += 30;

            if (motorPosition > 180) {
                motorPosition = 180;
            }

            applyMotorPosition();

        }

    }
);


/* =========================================================
   MOBILE CONTROL
========================================================= */

function setMobileControl(
    controlName,
    value
) {

    if (controlName === "left") {
        mobileLeftPressed = value;
    }

    if (controlName === "right") {
        mobileRightPressed = value;
    }

    if (controlName === "accelerate") {

        /*
            SAAT WARNING / SLOWDOWN,
            GAS TIDAK BOLEH AKTIF.
        */

        if (
            motorIsWarning ||
            motorIsSlowing ||
            motorIsBroken
        ) {

            mobileAcceleratePressed =
                false;

            return;

        }

        mobileAcceleratePressed =
            value;
    }

    if (controlName === "brake") {

        if (motorIsSlowing) {

            mobileBrakePressed =
                false;

            return;

        }

        mobileBrakePressed =
            value;
    }
}


/* =========================================================
   TOUCH BUTTON
========================================================= */

function setupMobileControl(
    button,
    controlName
) {

    if (!button) {
        return;
    }


    /*
        POINTER
    */

    button.addEventListener(
        "pointerdown",
        function(event) {

            event.preventDefault();

            setMobileControl(
                controlName,
                true
            );

        },
        {
            passive: false
        }
    );


    button.addEventListener(
        "pointerup",
        function(event) {

            event.preventDefault();

            setMobileControl(
                controlName,
                false
            );

        },
        {
            passive: false
        }
    );


    button.addEventListener(
        "pointercancel",
        function(event) {

            event.preventDefault();

            setMobileControl(
                controlName,
                false
            );

        },
        {
            passive: false
        }
    );


    /*
        TOUCH
        KHUSUS SAFARI / iPHONE
    */

    button.addEventListener(
        "touchstart",
        function(event) {

            event.preventDefault();

            setMobileControl(
                controlName,
                true
            );

        },
        {
            passive: false
        }
    );


    button.addEventListener(
        "touchend",
        function(event) {

            event.preventDefault();

            setMobileControl(
                controlName,
                false
            );

        },
        {
            passive: false
        }
    );


    button.addEventListener(
        "touchcancel",
        function(event) {

            event.preventDefault();

            setMobileControl(
                controlName,
                false
            );

        },
        {
            passive: false
        }
    );

}


/* =========================================================
   MOBILE CONTROL LOOP
========================================================= */

function startMobileControlLoop() {

    function processMobileControls() {

        if (
            gameScreen.classList.contains(
                "active"
            ) &&
            !motorIsBroken
        ) {


            /*
                GAS
            */

            if (
                mobileAcceleratePressed &&
                !motorIsWarning &&
                !motorIsSlowing
            ) {

                currentSpeed += 1.5;

                if (currentSpeed > 120) {
                    currentSpeed = 120;
                }

                updateSpeed();

            }


            /*
                REM
            */

            if (
                mobileBrakePressed &&
                !motorIsSlowing
            ) {

                currentSpeed -= 2;

                if (currentSpeed < 0) {
                    currentSpeed = 0;
                }

                updateSpeed();

            }


            /*
                KIRI
            */

            if (mobileLeftPressed) {

                motorPosition -= 4;

                if (motorPosition < -180) {
                    motorPosition = -180;
                }

                applyMotorPosition();

            }


            /*
                KANAN
            */

            if (mobileRightPressed) {

                motorPosition += 4;

                if (motorPosition > 180) {
                    motorPosition = 180;
                }

                applyMotorPosition();

            }

        }

        mobileControlFrame =
            requestAnimationFrame(
                processMobileControls
            );

    }

    mobileControlFrame =
        requestAnimationFrame(
            processMobileControls
        );
}


/* =========================================================
   ENABLE / DISABLE MOBILE
========================================================= */

function disableMobileControls() {

    if (!mobileControls) {
        return;
    }

    mobileControls.classList.add(
        "controlsDisabled"
    );

}


function enableMobileControls() {

    if (!mobileControls) {
        return;
    }

    mobileControls.classList.remove(
        "controlsDisabled"
    );

}


/* =========================================================
   RESET MOBILE
========================================================= */

function resetMobileControls() {

    mobileLeftPressed = false;

    mobileRightPressed = false;

    mobileAcceleratePressed = false;

    mobileBrakePressed = false;

}


/* =========================================================
   ROAD ANIMATION
========================================================= */

function startRoadAnimation() {

    stopRoadAnimation();

    let roadOffset = 0;

    function animateRoad() {

        if (
            currentSpeed > 0 &&
            !motorIsBroken
        ) {

            const movement =
                currentSpeed * 0.08;

            roadOffset +=
                movement;

            if (
                roadOffset >= 100
            ) {

                roadOffset -= 100;

            }

            updateRoadLines(
                roadOffset
            );

        }

        roadAnimationFrame =
            requestAnimationFrame(
                animateRoad
            );

    }

    roadAnimationFrame =
        requestAnimationFrame(
            animateRoad
        );
}


/* =========================================================
   ROAD LINES
========================================================= */

function updateRoadLines(
    offset
) {

    roadLines.forEach(
        function(line, index) {

            let position =
                (index * 25) +
                offset;

            if (
                position >= 100
            ) {

                position -= 100;

            }

            line.style.top =
                position +
                "%";

        }
    );
}


/* =========================================================
   STOP ROAD
========================================================= */

function stopRoadAnimation() {

    if (
        roadAnimationFrame !==
        null
    ) {

        cancelAnimationFrame(
            roadAnimationFrame
        );

        roadAnimationFrame =
            null;

    }
}


/* =========================================================
   CLEAR TIMERS
========================================================= */

function clearAllTimers() {

    if (
        failureTimer !==
        null
    ) {

        clearTimeout(
            failureTimer
        );

        failureTimer =
            null;
    }


    if (
        warningTimer !==
        null
    ) {

        clearTimeout(
            warningTimer
        );

        warningTimer =
            null;
    }


    if (
        slowdownTimer !==
        null
    ) {

        clearInterval(
            slowdownTimer
        );

        slowdownTimer =
            null;
    }


    if (
        eventMessageTimer !==
        null
    ) {

        clearTimeout(
            eventMessageTimer
        );

        eventMessageTimer =
            null;
    }


    stopRoadAnimation();

}


/* =========================================================
   SHUFFLE
========================================================= */

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        const temporary =
            array[i];

        array[i] =
            array[j];

        array[j] =
            temporary;

    }

    return array;
}


/* =========================================================
   INITIALIZE
========================================================= */

showScreen(
    menuScreen
);

updateScore();

updateRound();

updateSpeed();

applyMotorPosition();

hideEducation();

resetMobileControls();

enableMobileControls();

setupMobileControl(
    leftControl,
    "left"
);

setupMobileControl(
    rightControl,
    "right"
);

setupMobileControl(
    accelerateControl,
    "accelerate"
);

setupMobileControl(
    brakeControl,
    "brake"
);

startMobileControlLoop();