'use client';
import { useState } from "react";

const questions = [
  {
    question: "東京都の歴史に関する次のＡ～Ｅを年代順に古いものから新しいものへ並べ替えた場合、正しいのはどれか。",
    options: [
      "１．Ｂ－Ａ－Ｃ－Ｅ－Ｄ",
      "２．Ｂ－Ｅ－Ｄ－Ａ－Ｃ",
      "３．Ｃ－Ｂ－Ｅ－Ｄ－Ａ",
      "４．Ｃ－Ｄ－Ｅ－Ａ－Ｂ",
      "５．Ｄ－Ｂ－Ｅ－Ｃ－Ａ"
    ],
    answer: "３．Ｃ－Ｂ－Ｅ－Ｄ－Ａ"
  },
  {
    question: "東京の歴史に関する記述として、妥当なのはどれか。",
    options: [
      "１．１８９３年に、埼玉県から北多摩地域が、神奈川県から南多摩地域が、山梨県から西多摩地域が、それぞれ東京府に編入された。",
      "２．１８９８年１０月に、市制特例が廃止され、東京市も一般市制へと転換したことにちなみ、現在、１０月１日が「都民の日」とされている。",
      "３．１９２５年に、東京府と東京市を一体化した東京都制が施行され、東京府及び東京市の紋章は廃止となり、現在の「東京都紋章」が新たに制定された。",
      "４．１９４７年に、東京市が特別市として東京都から分離され、３５の区は、東京市の財産区として、現在の２３の区に再編された。",
      "５．１９７５年に、特別区の区長公選制が廃止され、区議会が都知事の同意を得て区長を選任することとされたが、１９９５年には、区長公選制が復活した。"
    ],
    answer: "２．１８９８年１０月に、市制特例が廃止され、東京市も一般市制へと転換したことにちなみ、現在、１０月１日が「都民の日」とされている。"
  }
];

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions[current];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold">問題 {current + 1}</h2>
      <p className="my-4">{currentQuestion.question}</p>
      <div className="space-y-2">
        {currentQuestion.options.map((opt, i) => (
          <div key={i}>
            <label>
              <input
                type="radio"
                name="option"
                value={opt}
                checked={selected === opt}
                onChange={() => setSelected(opt)}
                className="mr-2"
              />
              {opt}
            </label>
          </div>
        ))}
      </div>
      {showAnswer && (
        <p className="mt-4 text-green-600 font-semibold">
          正解: {currentQuestion.answer}
        </p>
      )}
      <div className="space-x-2 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setShowAnswer(true)}>答えを見る</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => {
          setSelected("");
          setShowAnswer(false);
          setCurrent((current + 1) % questions.length);
        }}>次の問題</button>
      </div>
    </div>
  );
}
