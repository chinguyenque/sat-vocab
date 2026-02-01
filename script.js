const data = {
  test1: [
    { word:"speculate", pos:"verb", en:"form an idea without evidence", vi:"suy đoán", example:"She speculated about the outcome." },
    { word:"repudiate", pos:"verb", en:"refuse", vi:"từ chối", example:"He repudiated the accusation." },
    { word:"perceptive", pos:"adjective", en:"having sensitive insight", vi:"nhạy bén", example:"She is very perceptive." },
    { word:"intersect", pos:"verb", en:"connect", vi:"giao nhau", example:"The two roads intersect." },
    { word:"prevail", pos:"verb", en:"be widespread", vi:"chiếm ưu thế", example:"Justice prevailed." },
    { word:"succumb", pos:"verb", en:"surrender", vi:"đầu hàng", example:"He succumbed to pressure." },
    { word:"diverge", pos:"verb", en:"disagree", vi:"phân kỳ", example:"Their opinions diverged." },
    { word:"peripheral", pos:"adjective", en:"toward the outer bound", vi:"ngoại vi", example:"A peripheral issue." },
    { word:"unobstructive", pos:"adjective", en:"not noticeable", vi:"không gây cản trở", example:"The design is unobstructive." },
    { word:"unanimity", pos:"noun", en:"total agreement", vi:"nhất trí", example:"The vote passed with unanimity." },
    { word:"loath", pos:"adjective", en:"reluctant / disgusted", vi:"căm ghét", example:"He was loath to admit it." }
  ],

  test2: [
    { word:"delegate", pos:"verb", en:"entrust something to someone else", vi:"ủy quyền", example:"She delegated the task." },
    { word:"renounce", pos:"verb", en:"refuse", vi:"từ bỏ", example:"He renounced his claim." },
    { word:"catastrophic", pos:"adjective", en:"disastrous", vi:"thảm khốc", example:"A catastrophic failure." },
    { word:"elusive", pos:"adjective", en:"difficult to locate", vi:"khó nắm bắt", example:"An elusive solution." },
    { word:"abrupt", pos:"adjective", en:"sudden", vi:"đột ngột", example:"An abrupt change." },
    { word:"imminent", pos:"adjective", en:"about to occur", vi:"sắp xảy ra", example:"Danger is imminent." },
    { word:"concede", pos:"verb", en:"admit something is true", vi:"thừa nhận", example:"He conceded defeat." },
    { word:"latent", pos:"adjective", en:"hidden or inactive", vi:"tiềm ẩn", example:"Latent talent." },
    { word:"replicable", pos:"adjective", en:"capable of being reproduced", vi:"có thể tái tạo", example:"Replicable results." },
    { word:"tenuous", pos:"adjective", en:"lacking strength", vi:"mong manh", example:"A tenuous link." },
    { word:"mystifying", pos:"adjective", en:"hard to understand", vi:"khó hiểu", example:"A mystifying rule." }
  ],

  test3: [
    { word:"intricate", pos:"adjective", en:"complicated", vi:"phức tạp", example:"An intricate design." },
    { word:"indecipherable", pos:"adjective", en:"impossible to comprehend", vi:"không thể hiểu", example:"Indecipherable handwriting." },
    { word:"ornamental", pos:"adjective", en:"decorative purpose", vi:"trang trí", example:"Ornamental details." },
    { word:"obscure", pos:"adjective", en:"unknown", vi:"mơ hồ", example:"An obscure reference." },
    { word:"disparate", pos:"adjective", en:"dissimilar", vi:"khác biệt", example:"Disparate opinions." },
    { word:"complementary", pos:"adjective", en:"mutually supportive", vi:"bổ trợ lẫn nhau", example:"Complementary roles." },
    { word:"interchangeable", pos:"adjective", en:"able to be exchanged", vi:"có thể thay thế", example:"Interchangeable parts." },
    { word:"barring", pos:"preposition", en:"except for", vi:"trừ khi", example:"Barring accidents, we will arrive on time." },
    { word:"conform to", pos:"verb", en:"obey a law or rule", vi:"tuân theo", example:"You must conform to regulations." },
    { word:"perceive", pos:"verb", en:"understand", vi:"nhận thức", example:"She perceived the danger." },
    { word:"ambivalence", pos:"noun", en:"mixed feelings", vi:"mâu thuẫn cảm xúc", example:"He felt ambivalence about the decision." },
    { word:"confidential", pos:"adjective", en:"secret or private", vi:"bí mật", example:"Confidential information." }
  ],

  test4: [
    { word:"atypical", pos:"adjective", en:"not usual or common", vi:"không điển hình", example:"His behavior was atypical." },
    { word:"infallible", pos:"adjective", en:"never wrong", vi:"không thể sai", example:"No system is infallible." },
    { word:"lucrative", pos:"adjective", en:"producing profit", vi:"sinh lợi", example:"A lucrative business." },
    { word:"tedious", pos:"adjective", en:"boring or repetitive", vi:"nhàm chán", example:"Tedious work." },
    { word:"proponent of", pos:"noun", en:"supporter of an idea", vi:"người ủng hộ", example:"A proponent of reform." },
    { word:"buttress", pos:"verb", en:"support or strengthen", vi:"củng cố", example:"Evidence buttressed the claim." },
    { word:"reciprocate", pos:"verb", en:"respond in kind", vi:"đáp lại", example:"She reciprocated the favor." },
    { word:"annotate", pos:"verb", en:"add notes", vi:"chú thích", example:"Annotate the passage." },
    { word:"disengage", pos:"verb", en:"detach or withdraw", vi:"tách ra", example:"The gear disengaged." },
    { word:"loath", pos:"adjective", en:"unwilling", vi:"miễn cưỡng", example:"He was loath to leave." }
  ],

  test5: [
    { word:"trace", pos:"noun", en:"sign or evidence", vi:"dấu vết", example:"No trace was found." },
    { word:"antecedent", pos:"noun", en:"something that comes before", vi:"cái đứng trước", example:"The noun is the antecedent." },
    { word:"impending", pos:"adjective", en:"about to happen", vi:"sắp xảy ra", example:"An impending storm." },
    { word:"innocuous", pos:"adjective", en:"harmless", vi:"vô hại", example:"An innocuous comment." },
    { word:"perpetual", pos:"adjective", en:"never-ending", vi:"liên tục", example:"Perpetual motion." },
    { word:"ameliorate", pos:"verb", en:"make better", vi:"cải thiện", example:"Policies ameliorated conditions." },
    { word:"sanction", pos:"verb", en:"approve or penalize", vi:"phê chuẩn / trừng phạt", example:"The rule was sanctioned." },
    { word:"rationalize", pos:"verb", en:"justify logically", vi:"hợp lý hóa", example:"He rationalized the choice." },
    { word:"postulate", pos:"verb", en:"suggest a theory", vi:"đưa ra giả thuyết", example:"Scientists postulated a cause." },
    { word:"tenuous", pos:"adjective", en:"weak", vi:"mong manh", example:"A tenuous connection." },
    { word:"contentious", pos:"adjective", en:"causing disagreement", vi:"gây tranh cãi", example:"A contentious issue." },
    { word:"conspicuous", pos:"adjective", en:"easy to notice", vi:"dễ thấy", example:"His absence was conspicuous." },
    { word:"defend", pos:"verb", en:"protect or support", vi:"bảo vệ", example:"She defended her view." },
    { word:"constitution", pos:"noun", en:"system of laws", vi:"hiến pháp", example:"The constitution was amended." },
    { word:"contempt", pos:"noun", en:"disrespect", vi:"khinh thường", example:"He spoke with contempt." }
  ]
};

let currentSet = data.test1;
let index = 0;

function switchMode(mode) {
  currentSet = data[mode];
  index = 0;
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
  updateCard();
}

function updateCard() {
  const w = currentSet[index];
  document.getElementById("f-word").textContent = w.word;
  document.getElementById("f-pos").textContent = w.pos;
  document.getElementById("b-en").textContent = w.en;
  document.getElementById("b-vi").textContent = w.vi;
  document.getElementById("b-ex").textContent = `"${w.example}"`;

  document.getElementById("progress-text").textContent =
    `Word ${index + 1} of ${currentSet.length}`;

  document.getElementById("progress-fill").style.width =
    `${((index + 1) / currentSet.length) * 100}%`;
}

function flipCard() {
  document.getElementById("card").classList.toggle("is-flipped");
}

function nextCard() {
  if (index < currentSet.length - 1) index++;
  reset();
}

function prevCard() {
  if (index > 0) index--;
  reset();
}

function reset() {
  document.getElementById("card").classList.remove("is-flipped");
  updateCard();
}

function shuffleCurrentSet() {
  currentSet.sort(() => Math.random() - 0.5);
  index = 0;
  reset();
}

function speakWord(e) {
  e.stopPropagation();
  speechSynthesis.speak(new SpeechSynthesisUtterance(currentSet[index].word));
}

function speakExample(e) {
  e.stopPropagation();
  speechSynthesis.speak(new SpeechSynthesisUtterance(currentSet[index].example));
}

updateCard();
