
import { DosageRecommendation, BloodLevel, FoodSource, QuizQuestion } from './types';

export const dosageRecommendations: DosageRecommendation[] = [
  { ageGroup: '0-12 თვე', official: '400 IU (10 მკგ)', expert: '400-600 IU' },
  { ageGroup: '1-70 წელი', official: '600 IU (15 მკგ)', expert: '2000-4000 IU' },
  { ageGroup: '70+ წელი', official: '800 IU (20 მკგ)', expert: '2000-4000 IU' },
  { ageGroup: 'ორსულობა', official: '600 IU', expert: '2500 IU' },
  { ageGroup: 'ძუძუთი კვება', official: '600 IU', expert: '2500 IU' },
];

export const bloodLevels: BloodLevel[] = [
    { 
        title: 'დეფიციტი', 
        range: '<12 ng/mL (<30 nmol/L)', 
        description: 'ძვლების დაავადებებისა და იმუნური დისფუნქციის მნიშვნელოვანი რისკი.',
        borderColor: 'border-red-400',
        textColor: 'text-red-700'
    },
    { 
        title: 'არასაკმარისი', 
        range: '12-20 ng/mL (30-50 nmol/L)', 
        description: 'ქრონიკული დაავადებების გაზრდილი რისკი.',
        borderColor: 'border-yellow-400',
        textColor: 'text-yellow-700'
    },
    { 
        title: 'ნორმა', 
        range: '20-50 ng/mL (50-125 nmol/L)', 
        description: 'საერთაშორისო სტანდარტი ჯანმრთელი მოზრდილებისთვის.',
        borderColor: 'border-green-400',
        textColor: 'text-green-700'
    },
    { 
        title: 'პოტენციურად მაღალი', 
        range: '>50 ng/mL (>125 nmol/L)', 
        description: 'იშვიათი, მაგრამ შეიძლება გამოიწვიოს ჰიპერკალციემია.',
        borderColor: 'border-purple-400',
        textColor: 'text-purple-700'
    },
];

export const foodSources: FoodSource[] = [
  { name: 'თევზის ღვიძლის ზეთი', portion: '1 სუფრის კოვზი', iu: 1360 },
  { name: 'ორაგული', portion: '3 უნცია (85 გ)', iu: 570 },
  { name: 'სოკო (UV-დამუშავებული)', portion: '1 ჭიქა (150 გ)', iu: 450 },
  { name: 'სკუმბრია', portion: '3 უნცია (85 გ)', iu: 400 },
  { name: 'სარდინი', portion: '3 უნცია (85 გ)', iu: 270 },
  { name: 'ტუნა', portion: '3 უნცია (85 გ)', iu: 150 },
  { name: 'გამაგრებული რძე/იოგურტი', portion: '1 ჭიქა (240 მლ)', iu: '80-200' },
  { name: 'კვერცხის გული', portion: '1 დიდი კვერცხი', iu: 40 },
];


export const quizQuestions: QuizQuestion[] = [
  {
    question: "D ვიტამინის მთავარი ფუნქციაა:",
    options: [
      "კალციუმის შეწოვის რეგულაცია",
      "სისხლის შედედების ხელშეწყობა",
      "ენერგიის წარმოება",
      "მხედველობის გაუმჯობესება"
    ],
    correctAnswer: 0,
    explanation: "D ვიტამინი კრიტიკულად მნიშვნელოვანია კალციუმის ათვისებისთვის, რაც პირდაპირ გავლენას ახდენს ძვლების ჯანმრთელობაზე."
  },
  {
    question: "რომელია D ვიტამინის დეფიციტის გავრცელებული სიმპტომი?",
    options: [
      "მშრალი კანი",
      "ხშირი ინფექციები და დაღლილობა",
      "მადის მომატება",
      "უძილობა"
    ],
    correctAnswer: 1,
    explanation: "D ვიტამინის დეფიციტი ასუსტებს იმუნურ სისტემას, რის გამოც ორგანიზმი უფრო მოწყვლადი ხდება ინფექციების მიმართ. ქრონიკული დაღლილობა ასევე ერთ-ერთი მთავარი ნიშანია."
  },
  {
    question: "რომელი საკვებია D ვიტამინის საუკეთესო ბუნებრივი წყარო?",
    options: [
      "ბროკოლი",
      "ვაშლი",
      "ცხიმიანი თევზი (ორაგული, სკუმბრია)",
      "ქათმის მკერდი"
    ],
    correctAnswer: 2,
    explanation: "ცხიმიანი თევზი, როგორიცაა ორაგული და სკუმბრია, D ვიტამინის ერთ-ერთი ყველაზე მდიდარი ბუნებრივი საკვები წყაროა."
  },
  {
    question: "რა ითვლება D ვიტამინის ოპტიმალურ დონედ სისხლში ჯანმრთელობის საუკეთესო შედეგებისთვის?",
    options: [
      "10-20 ng/mL",
      "20-30 ng/mL",
      "30-40 ng/mL",
      "50 ng/mL-ზე მეტი"
    ],
    correctAnswer: 2,
    explanation: "კვლევების მიხედვით, 30-40 ng/mL დონე ასოცირდება იმუნური სისტემის უკეთეს ფუნქციონირებასთან და ქრონიკული დაავადებების დაბალ რისკთან."
  }
];
