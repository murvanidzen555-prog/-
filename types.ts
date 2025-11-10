
export interface DosageRecommendation {
  ageGroup: string;
  official: string;
  expert: string;
}

export interface BloodLevel {
    title: string;
    range: string;
    description: string;
    borderColor: string;
    textColor: string;
}

export interface FoodSource {
    name: string;
    portion: string;
    iu: string | number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
