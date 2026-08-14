export default function GospelOfJohnQuiz() {
  const questions = [
    {
      question: "What title did John the Baptist use when he first saw Jesus coming toward him?",
      options: [
        "Son of David",
        "The Lamb of God",
        "King of Israel",
        "Rabbi"
      ],
      answer: "The Lamb of God"
    },
    {
      question: "At the wedding in Cana, what did Jesus turn into wine?",
      options: ["Milk", "Oil", "Water", "Juice"],
      answer: "Water"
    },
    {
      question: "According to Jesus, what must happen for a person to see the kingdom of God?",
      options: [
        "Be baptized",
        "Be born again",
        "Keep the Law",
        "Fast regularly"
      ],
      answer: "Be born again"
    },
    {
      question: "What did Jesus offer the Samaritan woman?",
      options: ["Living water", "Bread of life", "Healing", "Gold"],
      answer: "Living water"
    },
    {
      question: "How long had the man at Bethesda been infirm?",
      options: ["12 years", "18 years", "38 years", "40 years"],
      answer: "38 years"
    },
    {
      question: "How many baskets were collected after feeding the five thousand?",
      options: ["7", "10", "12", "14"],
      answer: "12"
    },
    {
      question: "What invitation did Jesus give on the last day of the feast?",
      options: [
        "Follow Me",
        "Come and see",
        "Come to Me and drink",
        "Take up your cross"
      ],
      answer: "Come to Me and drink"
    },
    {
      question: "What did Jesus say before declaring, 'Before Abraham was, I AM'?",
      options: [
        "He who believes has eternal life",
        "Most assuredly, I say to you",
        "I am the bread of life",
        "I and My Father are one"
      ],
      answer: "Most assuredly, I say to you"
    },
    {
      question: "What did Jesus use to anoint the blind man’s eyes?",
      options: ["Oil", "Water", "Clay made with saliva", "Dust only"],
      answer: "Clay made with saliva"
    },
    {
      question: "What does the good shepherd do for the sheep?",
      options: [
        "Leads them to riches",
        "Gives His life for them",
        "Builds them a house",
        "Makes them rulers"
      ],
      answer: "Gives His life for them"
    },
    {
      question: "What is the shortest verse in the English Bible?",
      options: ["God is love", "Jesus wept", "Pray always", "Fear not"],
      answer: "Jesus wept"
    },
    {
      question: "Who objected to Mary anointing Jesus’ feet?",
      options: ["Peter", "Thomas", "Judas Iscariot", "Philip"],
      answer: "Judas Iscariot"
    },
    {
      question: "What act of service did Jesus perform during the Last Supper?",
      options: [
        "Fed the crowd",
        "Healed the sick",
        "Washed the disciples’ feet",
        "Read the Law"
      ],
      answer: "Washed the disciples’ feet"
    },
    {
      question: "Who is the way, the truth, and the life?",
      options: ["Moses", "Peter", "Jesus", "John"],
      answer: "Jesus"
    },
    {
      question: "What must believers do to bear much fruit?",
      options: ["Pray loudly", "Abide in Jesus", "Fast daily", "Travel widely"],
      answer: "Abide in Jesus"
    },
    {
      question: "What name did Jesus give to the Helper?",
      options: ["Comforter", "Spirit of Truth", "Holy Spirit", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "According to Jesus, what is eternal life?",
      options: [
        "Living forever on earth",
        "Knowing the true God and Jesus Christ",
        "Keeping traditions",
        "Doing good works"
      ],
      answer: "Knowing the true God and Jesus Christ"
    },
    {
      question: "What happened to Malchus during Jesus’ arrest?",
      options: [
        "He fainted",
        "He was healed of blindness",
        "His right ear was cut off",
        "He denied Jesus"
      ],
      answer: "His right ear was cut off"
    },
    {
      question: "What inscription did Pilate place above Jesus on the cross?",
      options: [
        "King of Glory",
        "Jesus of Nazareth, King of the Jews",
        "The Son of God",
        "The Holy One"
      ],
      answer: "Jesus of Nazareth, King of the Jews"
    },
    {
      question: "Which disciple entered the empty tomb first?",
      options: ["John", "Peter", "Thomas", "Andrew"],
      answer: "Peter"
    },
    {
      question: "What question did Jesus ask Peter three times?",
      options: [
        "Will you follow Me?",
        "Do you believe Me?",
        "Do you love Me?",
        "Will you preach My gospel?"
      ],
      answer: "Do you love Me?"
    },
    {
      question: "Which of these is NOT one of the 'I AM' statements in John?",
      options: [
        "I am the Bread of Life",
        "I am the True Vine",
        "I am the Chief Cornerstone",
        "I am the Light of the World"
      ],
      answer: "I am the Chief Cornerstone"
    },
    {
      question: "Which miracle was the final sign before Jesus’ crucifixion?",
      options: [
        "Walking on water",
        "Healing the blind man",
        "Raising Lazarus",
        "Turning water into wine"
      ],
      answer: "Raising Lazarus"
    },
    {
      question: "According to John 20:31, why was the Gospel written?",
      options: [
        "To record history",
        "To preserve Jewish customs",
        "That people may believe Jesus is the Christ",
        "To teach Roman believers"
      ],
      answer: "That people may believe Jesus is the Christ"
    },
    {
      question: "According to John 1, who is the Word?",
      options: ["Moses", "John the Baptist", "Jesus", "An angel"],
      answer: "Jesus"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);
  const [quizFinished, setQuizFinished] = React.useState(false);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setShowResult(true);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer("");
    setShowResult(false);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-xl w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
          <p className="text-xl mb-6">
            Your Score: {score} / {questions.length}
          </p>

          <div className="text-lg mb-8">
            {score >= 22
              ? "Excellent knowledge of the Gospel of John!"
              : score >= 16
              ? "Great job!"
              : score >= 10
              ? "Good effort — keep studying!"
              : "Time to revisit the Gospel of John!"}
          </div>

          <button
            onClick={restartQuiz}
            className="bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90 transition"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Gospel of John Quiz</h1>
          <span className="text-lg font-medium">
            Question {currentQuestion + 1} / {questions.length}
          </span>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold leading-relaxed">
            {questions[currentQuestion].question}
          </h2>
        </div>

        <div className="grid gap-4">
          {questions[currentQuestion].options.map((option, index) => {
            const isCorrect = option === questions[currentQuestion].answer;
            const isSelected = option === selectedAnswer;

            return (
              <button
                key={index}
                disabled={showResult}
                onClick={() => handleAnswer(option)}
                className={`p-4 rounded-2xl border text-left transition text-lg
                  ${showResult && isCorrect ? "bg-green-100 border-green-500" : ""}
                  ${showResult && isSelected && !isCorrect ? "bg-red-100 border-red-500" : ""}
                  ${!showResult ? "hover:bg-slate-50" : ""}
                `}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-8 flex justify-between items-center">
            <div className="text-lg font-medium">
              Correct Answer: {questions[currentQuestion].answer}
            </div>

            <button
              onClick={nextQuestion}
              className="bg-black text-white px-5 py-3 rounded-2xl hover:opacity-90 transition"
            >
              {currentQuestion + 1 === questions.length
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
