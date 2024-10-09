const questions = [
    {
        question: "1.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video1.mp4"
    },
    {
        question: "2.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video2.mp4"
    },
    {
        question: "3.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video3.mp4"
    },
    {
        question: "4.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video4.mp4"
    },
    {
        question: "5.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video5.mp4"
    },
    {
        question: "6.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video6.mp4"
    },
    {
        question: "7.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video7.mp4"
    },
    {
        question: "8.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video8.mp4"
    },
    {
        question: "9.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video9.mp4"
    },
    {
        question: "10.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video10.mp4"
    },
    {
        question: "11.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video11.mp4"
    },
    {
        question: "12.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video12.mp4"
    },
    {
        question: "13.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video13.mp4"
    },
    {
        question: "14.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video14.mp4"
    },
    {
        question: "15.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video15.mp4"
    },
    {
        question: "16.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video16.mp4"
    },
    {
        question: "17.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video17.mp4"
    },
    {
        question: "18.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video18.mp4"
    },
    {
        question: "19.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video19.mp4"
    },
    {
        question: "20.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video20.mp4"
    },
    {
        question: "21.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video21.mp4"
    },
    {
        question: "22.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video22.mp4"
    }
];

const demo = [
    {
        question: "0.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video0.mp4"
    },
];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Update question numbering after shuffle
    array.forEach((item, index) => {
        item.question = `${index + 1}.如果您想左轉，並且看到顯示的交通號誌，您會...`;
    });
}

let currentQuestionIndex = 0;
let answers = [];
let startTime;
let videoEndTime;
let apiEndpoint;
let userInfo = {}; // 保存用户基本資料

document.addEventListener("DOMContentLoaded", () => {
    const basicInfoForm = document.getElementById("basic-info-form");
    const mainMenu = document.getElementById("main-menu");
    const quizContainer = document.getElementById("quiz-container");
    const demoContainer = document.getElementById("demo-container");
    const submitInfoButton = document.getElementById("submit-info-button");
    const startButton = document.getElementById("start-button");
    const demoNextButton = document.getElementById("demo-next-button");
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const videoElement = document.getElementById("video");
    const agreeButton = document.getElementById("agree-button");
    const surveyIntro = document.getElementById("survey-intro");
    const demoVideoElement = document.getElementById("demo-video");
    const demoOptionsContainer = document.getElementById("demo-options-container");
    const demoFeedback = document.getElementById("demo-feedback");
    
    // 當按下同意按鈕後，隱藏問卷說明並顯示基本資料表單
    agreeButton.addEventListener("click", () => {
        surveyIntro.classList.add("hidden");
        basicInfoForm.classList.remove("hidden");
    });

    submitInfoButton.onclick = () => {
        const email = document.getElementById("email").value;
        const gender = document.getElementById("gender").value;
        const age = document.getElementById("age").value;
        const frequency = document.getElementById("frequency").value;
        const experience = document.getElementById("experience").value;
        const commute = document.getElementById("commute").value;

        if (email && gender && age && frequency && experience && commute) {
            userInfo.email = email;
            userInfo.gender = gender;
            userInfo.age = age;
            userInfo.frequency = frequency;
            userInfo.experience = experience;
            userInfo.commute = commute;

            apiEndpoint = "https://formspree.io/f/mblrbdal";

            const form = document.getElementById("basic-info-form");
            form.action = apiEndpoint;

            basicInfoForm.classList.add("hidden");
            mainMenu.classList.remove("hidden");
        } else {
            alert("請填寫所有資料！");
        }
    };

    startButton.addEventListener("click", () => {
        mainMenu.classList.add("hidden");
        demoContainer.classList.remove("hidden");
    });
    


    function loadDemoQuestion() {
        const currentQuestion = demo[0];
        let firstplay = false;

        demoOptionsContainer.innerHTML = "";
        demoOptionsContainer.classList.add("hidden");
        demoFeedback.classList.add("hidden");

        demoVideoElement.src = currentQuestion.video;
        // 移除播放控制
        demoVideoElement.removeAttribute("controls"); // 確保沒有顯示控制列
        // 自動播放影片並禁止手動控制
        demoVideoElement.setAttribute("autoplay", "true");
        demoVideoElement.setAttribute("muted", "true");
        demoVideoElement.setAttribute("playsinline", "true");
        demoVideoElement.setAttribute("webkit-playsinline", "true");
        demoVideoElement.controls = false; // 確保播放控制被禁用

        // 禁止用戶使用鍵盤控制影片
        demoVideoElement.addEventListener("keydown", (event) => {
            event.preventDefault();
        });

        demoVideoElement.onplaying = () => {
            if (!firstplay) {
                startTime = new Date();
                firstplay = true;

                const intervalId = setInterval(() => {
                    if (demoVideoElement.currentTime >= 3) {
                        clearInterval(intervalId);
                        displayDemoOptions(currentQuestion);
                    }
                }, 100);
            }
        };

        demoVideoElement.play().catch((error) => {
            console.error("影片無法自動播放: ", error);
        });
    }

    function displayDemoOptions(currentQuestion) {
        currentQuestion.options.forEach((option, i) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => selectDemoOption(i);
            demoOptionsContainer.appendChild(button);
        });
        demoOptionsContainer.classList.remove("hidden");
    }

    function selectDemoOption(selectedIndex) {
        const endTime = new Date();
        const timeTaken = ((endTime - startTime) / 1000 - 3.0).toFixed(2);

        const correct = selectedIndex === demo[0].answer;
        if (correct) {
            demoFeedback.textContent = `正確答案！您回答正確！反應時間：${timeTaken} 秒`;
        } else {
            demoFeedback.textContent = `錯誤答案，請再檢視示範影片。反應時間：${timeTaken} 秒`;
        }
        demoFeedback.classList.remove("hidden");
        demoOptionsContainer.classList.add("hidden");
    }


    demoNextButton.onclick = () => {
        localStorage.removeItem("quizResults");
        answers = [];
        currentQuestionIndex = 0;
        shuffle(questions); // 打亂問題順序並更新題號
        demoContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion(currentQuestionIndex);
    };
    
    function loadQuestion(index) {
        const currentQuestion = questions[index];
        let hasOptionsShown = false;
        let firstplay = false;

        questionElement.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";
        optionsContainer.classList.add("hidden");

        videoElement.src = currentQuestion.video;
        // 移除播放控制
        videoElement.removeAttribute("controls"); // 確保沒有顯示控制列
        // 自動播放影片並禁止手動控制
        videoElement.setAttribute("autoplay", "true");
        videoElement.setAttribute("muted", "true");
        videoElement.setAttribute("playsinline", "true");
        videoElement.setAttribute("webkit-playsinline", "true");
        videoElement.controls = false; // 確保播放控制被禁用

        // 禁止用戶使用鍵盤控制影片
        videoElement.addEventListener("keydown", (event) => {
            event.preventDefault();
        });

        videoElement.onplaying = () => {
            if (!firstplay) {
                startTime = new Date();
                firstplay = true;

                const intervalId = setInterval(() => {
                    if (videoElement.currentTime >= 3) {
                        clearInterval(intervalId);
                        if (!hasOptionsShown) {
                            displayOptions(currentQuestion);
                            hasOptionsShown = true;
                        }
                    }
                }, 100);
            }
        };

        videoElement.onended = () => {
            videoEndTime = new Date();

            if (!hasOptionsShown) {
                displayOptions(currentQuestion);
                hasOptionsShown = true;
            }
        };

        videoElement.play().catch((error) => {
            console.error("影片無法自動播放: ", error);
        });
    }

    function displayOptions(currentQuestion) {
        currentQuestion.options.forEach((option, i) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => selectOption(i);
            optionsContainer.appendChild(button);
        });
        optionsContainer.classList.remove("hidden");
    }

    function selectOption(selectedIndex) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000 - 3.0;

        const correct = selectedIndex === questions[currentQuestionIndex].answer;
        answers.push({
            question: questions[currentQuestionIndex].video,
            selectedOption: questions[currentQuestionIndex].options[selectedIndex],
            correct: correct,
            timeTaken: timeTaken.toFixed(2)
        });

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showOpenEndedQuestions();
        }
    }

    function showOpenEndedQuestions() {
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("open-ended-questions").classList.remove("hidden");

        const openEndedQuestions = document.querySelectorAll('.question-block');

        openEndedQuestions.forEach((block, index) => {
            const radioButtons = block.querySelectorAll('input[type="radio"]');
            const textarea = block.querySelector('textarea');

            radioButtons.forEach((button) => {
                button.onclick = () => {
                    if (button.value === 'other') {
                        textarea.classList.remove('hidden');
                    } else {
                        textarea.classList.add('hidden');
                    }
                };
            });
        });

        const submitOpenEndedButton = document.getElementById("submit-open-ended-button");
        submitOpenEndedButton.onclick = () => {
            let allAnswered = true;
            let openEndedAnswers = {};

            openEndedQuestions.forEach((block, index) => {
                const radioButtons = block.querySelectorAll('input[type="radio"]');
                const textarea = block.querySelector('textarea');
                let selectedValue;

                radioButtons.forEach((button) => {
                    if (button.checked) {
                        selectedValue = button.value;
                    }
                });

                if (!selectedValue) {
                    allAnswered = false;
                } else {
                    if (selectedValue === 'other') {
                        openEndedAnswers[`u${index + 1}`] = textarea.value;
                    } else {
                        openEndedAnswers[`u${index + 1}`] = selectedValue;
                    }
                }
            });

            if (allAnswered) {
                userInfo.openEndedAnswers = openEndedAnswers;
                document.getElementById("open-ended-questions").classList.add("hidden");
                showResults();
            } else {
                alert("請完成所有問題的回答！");
            }
        };
    }

    function showResults() {
        questionElement.textContent = "測驗結束！";
        optionsContainer.innerHTML = "";
        videoElement.classList.add("hidden");
        document.getElementById("result-container").classList.remove("hidden");

        const resultTableBody = document.querySelector("#result-table tbody");
        resultTableBody.innerHTML = "";

        let correctCount = 0;

        answers.forEach((answer, index) => {
            const row = document.createElement("tr");

            const questionNumberCell = document.createElement("td");
            questionNumberCell.textContent = `第 ${index + 1} 題`;
            row.appendChild(questionNumberCell);

            const selectedOptionCell = document.createElement("td");
            selectedOptionCell.textContent = answer.selectedOption;
            row.appendChild(selectedOptionCell);

            const correctOptionCell = document.createElement("td");
            correctOptionCell.textContent = questions[index].options[questions[index].answer];
            row.appendChild(correctOptionCell);

            const timeTakenCell = document.createElement("td");
            timeTakenCell.textContent = answer.timeTaken + " 秒";
            row.appendChild(timeTakenCell);

            resultTableBody.appendChild(row);

            if (answer.correct) {
                correctCount++;
            }
        });

        const correctCountText = `你答對了 ${correctCount} 題`;
        const score = (correctCount / questions.length) * 100;
        const scoreText = `答對率為: ${score.toFixed(2)}%`;

        document.getElementById("summary").innerHTML = `
            <p>${correctCountText}</p>
            <p>${scoreText}</p>
        `;

        saveResultsToFormspree();
    }

    function saveResultsToFormspree() {
        let allResults = {
            date: new Date().toLocaleString(),
            userInfo: userInfo,
            answers: answers,
            openEndedAnswers: userInfo.openEndedAnswers
        };

        fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(allResults)
        })
        .then(response => {
            if (response.ok) {
                alert("結果已成功提交！");
            } else {
                alert("提交失敗，請重試。");
            }
        })
        .catch(error => {
            alert("發生錯誤：" + error.message);
        });
    }
});
