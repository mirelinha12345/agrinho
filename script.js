const quizData = [

    {
  
      question: "Onde é mais comum encontrar plantações e criações de animais?",
  
      options: ["Na cidade", "No campo"],
  
      answer: "No campo"
  
    },
  
    {
  
      question: "Onde estão os shoppings e centros comerciais?",
  
      options: ["Na cidade", "No campo"],
  
      answer: "Na cidade"
  
    },
  
    {
  
      question: "Onde é mais comum usar tratores e colheitadeiras?",
  
      options: ["Na cidade", "No campo"],
  
      answer: "No campo"
  
    }
  
  ];
  
  
  
  let currentQuestion = 0;
  
  
  
  function loadQuestion() {
  
    const q = quizData[currentQuestion];
  
    document.getElementById("question").textContent = q.question;
  
    const optionsDiv = document.getElementById("options");
  
    optionsDiv.innerHTML = "";
  
  
  
    q.options.forEach(option => {
  
      const btn = document.createElement("button");
  
      btn.textContent = option;
  
      btn.onclick = () => checkAnswer(option);
  
      optionsDiv.appendChild(btn);
  
    });
  
  }
  
  
  
  function checkAnswer(selected) {
  
    const correct = quizData[currentQuestion].answer;
  
    const feedback = document.getElementById("feedback");
  
  
  
    if (selected === correct) {
  
      feedback.textContent = "Correto!";
  
      feedback.style.color = "green";
  
    } else {
  
      feedback.textContent = "Ops, resposta errada.";
  
      feedback.style.color = "red";
  
    }
  
  
  
    setTimeout(() => {
  
      currentQuestion++;
  
      if (currentQuestion < quizData.length) {
  
        feedback.textContent = "";
  
        loadQuestion();
  
      } else {
  
        document.getElementById("question").textContent = "Fim do quiz!";
  
        document.getElementById("options").innerHTML = "";
  
      }
  
    }, 1000);
  
  }
  
  
  
  loadQuestion();
  
  