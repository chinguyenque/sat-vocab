alert("JS LOADED");

const data = {
  test1: [
    { w:"speculate", d:"form an idea without evidence", v:"suy đoán", e:"Scientists speculate about life on other planets." },
    { w:"repudiate", d:"refuse to accept", v:"từ chối", e:"He repudiated the accusation." },
    { w:"perceptive", d:"having deep understanding", v:"nhạy bén", e:"She is a perceptive observer." },
    { w:"intersect", d:"cross or connect", v:"giao nhau", e:"The two roads intersect." },
    { w:"prevail", d:"be widespread or dominant", v:"phổ biến", e:"Justice will prevail." },
    { w:"succumb", d:"give in or surrender", v:"đầu hàng", e:"He succumbed to pressure." },
    { w:"diverge", d:"move in different directions", v:"bất đồng", e:"Their opinions diverge." },
    { w:"peripheral", d:"toward the outer edge", v:"ngoại vi", e:"Peripheral issues were ignored." },
    { w:"unobtrusive", d:"not noticeable", v:"không gây chú ý", e:"The design is unobtrusive." },
    { w:"unanimity", d:"complete agreement", v:"nhất trí", e:"The vote passed with unanimity." },
    { w:"loath", d:"feeling strong dislike", v:"căm ghét", e:"She is loath to lie." }
  ],

  test2: [
    { w:"delegate", d:"entrust to someone else", v:"ủy quyền", e:"She delegated tasks to her team." },
    { w:"renounce", d:"give up or refuse", v:"từ bỏ", e:"He renounced his claim." },
    { w:"catastrophic", d:"extremely disastrous", v:"thảm khốc", e:"The failure was catastrophic." },
    { w:"elusive", d:"difficult to find", v:"khó nắm bắt", e:"Success proved elusive." },
    { w:"abrupt", d:"sudden", v:"đột ngột", e:"The change was abrupt." },
    { w:"imminent", d:"about to happen", v:"sắp xảy ra", e:"A storm is imminent." },
    { w:"concede", d:"admit something is true", v:"thừa nhận", e:"He conceded defeat." },
    { w:"latent", d:"hidden or inactive", v:"tiềm ẩn", e:"Latent talent emerged." },
    { w:"replicable", d:"able to be reproduced", v:"có thể tái tạo", e:"The experiment is replicable." },
    { w:"tenuous", d:"weak or fragile", v:"mong manh", e:"The connection is tenuous." },
    { w:"mystifying", d:"hard to understand", v:"khó hiểu", e:"The result was mystifying." }
  ],

  test3: [
    { w:"intricate", d:"very complicated", v:"phức tạp", e:"An intricate design." },
    { w:"indecipherable", d:"impossible to understand", v:"không thể giải mã", e:"His handwriting is indecipherable." },
    { w:"ornamental", d:"decorative", v:"trang trí", e:"Ornamental plants." },
    { w:"obscure", d:"unknown or unclear", v:"mờ nhạt", e:"An obscure reference." },
    { w:"disparate", d:"fundamentally different", v:"khác biệt", e:"Disparate groups." },
    { w:"complementary", d:"enhancing each other", v:"bổ trợ", e:"Complementary skills." },
    { w:"interchangeable", d:"able to be exchanged", v:"có thể thay thế", e:"The parts are interchangeable." },
    { w:"barring", d:"except for", v:"trừ khi", e:"Barring rain, we will go." },
    { w:"conform to", d:"obey rules", v:"tuân theo", e:"Conform to the law." },
    { w:"perceive", d:"understand", v:"nhận thức", e:"She perceives danger." },
    { w:"ambivalence", d:"mixed feelings", v:"lưỡng lự", e:"He felt ambivalence." },
    { w:"confidential", d:"secret", v:"bí mật", e:"Confidential information." }
  ],

  test4: [
    { w:"atypical", d:"not common", v:"không điển hình", e:"An atypical response." },
    { w:"infallible", d:"never wrong", v:"không sai", e:"An infallible method." },
    { w:"lucrative", d:"profitable", v:"sinh lời", e:"A lucrative business." },
    { w:"tedious", d:"boring", v:"tẻ nhạt", e:"A tedious task." },
    { w:"proponent of", d:"supporter of", v:"người ủng hộ", e:"A proponent of change." },
    { w:"buttress", d:"strengthen", v:"củng cố", e:"Facts buttress his claim." },
    { w:"reciprocate", d:"respond in kind", v:"đáp lại", e:"She reciprocated kindness." },
    { w:"annotate", d:"add notes", v:"chú thích", e:"Annotate the text." },
    { w:"disengage", d:"separate or withdraw", v:"tách ra", e:"Disengage from conflict." },
    { w:"loath", d:"unwilling", v:"căm ghét", e:"He is loath to agree." }
  ],

  test5: [
    { w:"trace", d:"evidence or sign", v:"dấu vết", e:"No trace was found." },
    { w:"antecedent", d:"something that came before", v:"tiền đề", e:"A pronoun’s antecedent." },
    { w:"impending", d:"approaching", v:"sắp xảy ra", e:"Impending disaster." },
    { w:"innocuous", d:"harmless", v:"vô hại", e:"An innocuous comment." },
    { w:"perpetual", d:"never-ending", v:"vĩnh viễn", e:"Perpetual motion." },
    { w:"ameliorate", d:"improve", v:"cải thiện", e:"Efforts ameliorated conditions." },
    { w:"sanction", d:"official approval or penalty", v:"chế tài / phê chuẩn", e:"Sanction the policy." },
    { w:"rationalize", d:"justify logically", v:"hợp lý hóa", e:"He rationalized his choice." },
    { w:"postulate", d:"suggest a theory", v:"đề xuất giả thuyết", e:"Scientists postulate ideas." },
    { w:"tenuous", d:"uncertain or weak", v:"mong manh", e:"A tenuous link." },
    { w:"contentious", d:"controversial", v:"gây tranh cãi", e:"A contentious issue." },
    { w:"conspicuous", d:"obvious", v:"dễ thấy", e:"A conspicuous error." },
    { w:"defend", d:"support", v:"bảo vệ", e:"Defend an argument." },
    { w:"constitution", d:"system of laws / health", v:"hiến pháp / thể trạng", e:"A strong constitution." },
    { w:"contempt", d:"deep disrespect", v:"khinh thường", e:"He felt contempt." }
  ]
};

let currentSet = data.test1;
let index = 0;

const wordEl = document.getElementById("word");
const defEl = document.getElementById("definition");
const viEl = document.getElementById("vietnamese");
const exEl = document.getElementById("example");

function updateCard() {
  const item = currentSet[index];
  wordEl.textContent = item.w;
  defEl.textContent = "Definition: " + item.d;
  viEl.textContent = "Vietnamese: " + item.v;
  exEl.textContent = "Example: " + item.e;
}

function nextCard() {
  index = (index + 1) % currentSet.length;
  updateCard();
}

function prevCard() {
  index = (index - 1 + currentSet.length) % currentSet.length;
  updateCard();
}

function switchMode(mode, btn) {
  currentSet = data[mode];
  index = 0;
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  updateCard();
}

function speakWord() {
  const utterance = new SpeechSynthesisUtterance(wordEl.textContent);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

updateCard();
