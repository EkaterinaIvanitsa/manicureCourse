import light from "../assets/courseImages/light.jpeg";
import standard from "../assets/courseImages/standard.jpg";
import premium from "../assets/courseImages/premium.jpg";
import studentWork1 from "../assets/studentsWorks/work1.jpg";
import studentWork2 from "../assets/studentsWorks/work2.jpg";
import studentWork3 from "../assets/studentsWorks/work3.jpg";
import studentWork4 from "../assets/studentsWorks/work4.jpg";
import studentWork5 from "../assets/studentsWorks/work5.jpg";
import studentWork6 from "../assets/studentsWorks/work6.jpg";
import studentWork7 from "../assets/studentsWorks/work7.jpg";
import studentWork8 from "../assets/studentsWorks/work8.jpg";
import studentWork9 from "../assets/studentsWorks/work9.jpg";
import studentWork10 from "../assets/studentsWorks/work10.jpg";
import studentWork11 from "../assets/studentsWorks/work11.jpg";
import studentWork12 from "../assets/studentsWorks/work12.jpg";

export interface Steps {
  id: number;
  title: string;
  iconBg: string;
  date: string;
  points: Array<string>;
  benefits: Array<string>;
}

interface CourseProgram {
  id: number;
  imgUrl: string;
  title: string;
  programs: Array<string>;
  feedback: number;
  price: number;
  discount?: number;
}

export const steps: Array<Steps> = [
  {
    id: 1,
    title: "Подготовка рабочего места",
    iconBg: "#accbe1",
    date: "Шаг 1",
    points: ["Организация рабочего месте", "Внешний вид мастера"],
    benefits: ["Четкий план расстановки материалов"],
  },
  {
    id: 2,
    title: "Обработка инструментов",
    iconBg: "#fbc3bc",
    date: "Шаг 2",
    points: ["Дезинфекция", "Предстерилизационная очистка", "Стерилизация"],
    benefits: ["Правила обработки инструментов, согласно требованиям СанПина"],
  },
  {
    id: 3,
    title: "Строение ногтевого аппарата",
    iconBg: "#b7e4c7",
    date: "Шаг 3",
    points: ["Строение кожи", "Строение ногтевого аппарата"],
    benefits: ["Из чего состоит ногтевой аппарат"],
  },
  {
    id: 4,
    title: "Необходимые материалы",
    iconBg: "#a2d2ff",
    date: "Шаг 4",
    points: [
      "Пилочки",
      "Инструменты",
      "Жидкости",
      "Базы",
      "Гели",
      "Полигели",
      "Топы",
    ],
    benefits: [
      "Весь список необходимых материалов для работы, какие лучше выбрать, а также где купить",
    ],
  },
  {
    id: 5,
    title: "Снятие материала",
    iconBg: "#accbe1",
    date: "Шаг 5",
    points: ["Быстрое и безопасное снятие фрезой"],
    benefits: ["Правила быстрого снятия без пропилов"],
  },
  {
    id: 6,
    title: "Опил форм",
    iconBg: "#fbc3bc",
    date: "Шаг 6",
    points: ["Виды форм", "Ошибки в опиле"],
    benefits: ["Правила опила любых форм"],
  },
  {
    id: 7,
    title: "Чистый маникюр",
    iconBg: "#b7e4c7",
    date: "Шаг 7",
    points: ["Поднятие кутикулы", "Фрезы, кусачки или ножницы"],
    benefits: ["Безопасный маникюр, блестящие валики"],
  },
  {
    id: 8,
    title: "Подготовка ногтей",
    iconBg: "#a2d2ff",
    date: "Шаг 8",
    points: [
      "Обезжиривание",
      "Определять, кому нужен дегидратор",
      "Праймер/Ультрабонд",
    ],
    benefits: ["Подготавливать ногтевую пластину"],
  },
  {
    id: 9,
    title: "База",
    iconBg: "#accbe1",
    date: "Шаг 9",
    points: ["Подбор баз под ногтевую пластину"],
    benefits: ["Правила подбора базы, а также какие они бывают"],
  },
  {
    id: 10,
    title: "Гель",
    iconBg: "#fbc3bc",
    date: "Шаг 10",
    points: ["Виды геля", "Укрепление ногтей без опила"],
    benefits: ["Укрепление без опила независимо от длины"],
  },
  {
    id: 11,
    title: "Ремонт",
    iconBg: "#b7e4c7",
    date: "Шаг 11",
    points: [
      "Трещины на ногтевой пластине",
      "Скрученные углы",
      "Донаращивание",
    ],
    benefits: ["Работать с полигелем, донаращивание без форм"],
  },
  {
    id: 12,
    title: "Покрытие",
    iconBg: "#a2d2ff",
    date: "Шаг 12",
    points: ["Покрытие под кутикулу", "Покрытие топом"],
    benefits: ["Покрывать без затеков"],
  },
  {
    id: 13,
    title: "Экспресс дизайны",
    iconBg: "#b7e4c7",
    date: "Шаг 13",
    points: [
      "Слайдеры",
      "Стемпинг",
      "Фольга",
      "Паутинка",
      "Камни",
      "Идеальный френч",
    ],
    benefits: ["Быстро делать экспресс дизайны"],
  },
];

export const courseProgram: Array<CourseProgram> = [
  {
    id: 101,
    imgUrl: light,
    title: "Light",
    programs: [
      "Техники работы: от снятия до покрытия",
      "Техника укрепления ногтей и ремонта",
      "Тренировочные упражнения",
      "Методическое пособие",
    ],
    feedback: 1,
    price: 250,
    discount: 50,
  },
  {
    id: 102,
    imgUrl: standard,
    title: "Standard",
    programs: [
      "Техники работы: от снятия до покрытия",
      "Техника укрепления ногтей и ремонта",
      "Тренировочные упражнения",
      "Методическое пособие",
      "Современные дизайны: стемпинг, фольга, слайды, френч",
    ],
    feedback: 2,
    price: 300,
    discount: 50,
  },
  {
    id: 103,
    imgUrl: premium,
    title: "Premium",
    programs: [
      "Техники работы: от снятия до покрытия",
      "Техника укрепления ногтей и ремонта",
      "Тренировочные упражнения",
      "Методическое пособие",
      "Современные дизайны: стемпинг, фольга, слайды, френч",
      "2 дня стажировки в студии(материал и оборудование предоставляется)",
    ],
    feedback: 6,
    price: 350,
    discount: 50,
  },
];
export const imagesStudentsWorks = [
  studentWork1,
  studentWork2,
  studentWork3,
  studentWork4,
  studentWork5,
  studentWork6,
  studentWork7,
  studentWork8,
  studentWork9,
  studentWork10,
  studentWork11,
  studentWork12,
];
