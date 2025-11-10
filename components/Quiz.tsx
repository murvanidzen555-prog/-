
import React, { useState } from 'react';
import InfoSection from './InfoSection';
import { quizQuestions } from '../constants';
import { QuestionMarkCircleIcon } from './Icons';

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
    const [showResults, setShowResults] = useState<boolean>(false);

    const handleAnswerSelect = (optionIndex: number) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers(Array(quizQuestions.length).fill(null));
        setShowResults(false);
    };

    const score = selectedAnswers.reduce((total, answer, index) => {
        return answer === quizQuestions[index].correctAnswer ? total + 1 : total;
    }, 0);
    
    const getResultFeedback = () => {
        const percentage = (score / quizQuestions.length) * 100;
        if (percentage === 100) return { message: "შესანიშნავია!", color: "green", description: "თქვენ D ვიტამინის ექსპერტი ხართ!" };
        if (percentage >= 75) return { message: "ძალიან კარგია!", color: "teal", description: "კარგი ცოდნა გაქვთ, მაგრამ ყოველთვის არის რაღაც ახალი სასწავლი." };
        if (percentage >= 50) return { message: "არ არის ცუდი!", color: "orange", description: "თქვენ სწორ გზაზე ხართ. განაგრძეთ ჩვენი გზამკვლევის შესწავლა." };
        return { message: "გაუმჯობესების დროა!", color: "red", description: "არ ინერვიულოთ! ეს აპლიკაცია დაგეხმარებათ მეტი გაიგოთ." };
    };

    const feedbackColors: { [key: string]: string } = {
        green: 'bg-green-100 border-green-500 text-green-800',
        teal: 'bg-teal-100 border-teal-500 text-teal-800',
        orange: 'bg-orange-100 border-orange-500 text-orange-800',
        red: 'bg-red-100 border-red-500 text-red-800',
    };

    return (
        <InfoSection title="შეამოწმე შენი ცოდნა">
            {!showResults ? (
                <div>
                    <div className="flex items-start mb-4">
                        <QuestionMarkCircleIcon className="w-8 h-8 text-orange-500 mr-3 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">{quizQuestions[currentQuestionIndex].question}</h3>
                            <p className="text-sm text-gray-500">კითხვა {currentQuestionIndex + 1} / {quizQuestions.length}</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {quizQuestions[currentQuestionIndex].options.map((option, index) => {
                            const isSelected = selectedAnswers[currentQuestionIndex] === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerSelect(index)}
                                    className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                                        isSelected 
                                        ? 'bg-orange-500 border-orange-600 text-white font-semibold shadow-md' 
                                        : 'bg-white border-gray-200 hover:bg-orange-50 hover:border-orange-300'
                                    }`}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={selectedAnswers[currentQuestionIndex] === null}
                        className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                        {currentQuestionIndex < quizQuestions.length - 1 ? 'შემდეგი' : 'შედეგების ჩვენება'}
                    </button>
                </div>
            ) : (
                <div>
                     <div className={`p-4 border-l-4 rounded-r-lg ${feedbackColors[getResultFeedback().color]} mb-6`}>
                        <p className="font-bold text-xl">{getResultFeedback().message} ({score}/{quizQuestions.length})</p>
                        <p className="text-sm">{getResultFeedback().description}</p>
                    </div>

                    <div className="space-y-4">
                        {quizQuestions.map((q, index) => {
                            const userAnswer = selectedAnswers[index];
                            const isCorrect = userAnswer === q.correctAnswer;
                            return (
                                <div key={index} className={`p-3 rounded-lg border-l-4 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                                    <p className="font-semibold">{q.question}</p>
                                    <p className={`text-sm ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                        თქვენი პასუხი: <span className="font-medium">{userAnswer !== null ? q.options[userAnswer] : 'არ არის პასუხი'}</span>
                                        {!isCorrect && <span className="block">სწორი პასუხი: <span className="font-medium">{q.options[q.correctAnswer]}</span></span>}
                                    </p>
                                     <p className="text-xs text-gray-600 mt-2 pt-2 border-t border-gray-300/50">{q.explanation}</p>
                                </div>
                            );
                        })}
                    </div>
                    <button
                        onClick={handleRestart}
                        className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                    >
                        თავიდან დაწყება
                    </button>
                </div>
            )}
        </InfoSection>
    );
};

export default Quiz;
