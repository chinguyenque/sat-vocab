// ===== DATA =====
const DATA = {
  test1: [
    { word: "speculate", en: "form an idea without evidence", vi: "suy đoán", ex: "Scientists speculate about life on Mars." },
    { word: "repudiate", en: "refuse or reject", vi: "từ chối", ex: "He repudiated the accusation." },
    { word: "perceptive", en: "having sensitive insight", vi: "nhạy bén", ex: "She is very perceptive." },
    { word: "intersect", en: "cross or connect", vi: "giao nhau", ex: "The roads intersect here." },
    { word: "prevail", en: "be widespread or dominant", vi: "phổ biến", ex: "Justice will prevail." },
    { word: "succumb", en: "surrender or give in", vi: "khuất phục", ex: "He succumbed to pressure." },
    { word: "diverge", en: "move apart; disagree", vi: "khác biệt", ex: "Their opinions diverge." },
    { word: "peripheral", en: "toward the outer edge", vi: "ngoại vi", ex: "This issue is peripheral." },
    { word: "unobstructive", en: "not noticeable", vi: "không gây cản trở", ex: "The design is unobstructive." },
    { word: "unanimity", en: "total agreement", vi: "sự nhất trí", ex: "The vote was unanimous." },
    { word: "loath", en: "reluctant or hateful", vi: "ghét", ex: "He was loath to agree." }
  ],

  test2: [
    { word: "delegate", en: "entrust to someone else", vi: "ủy quyền", ex: "She delegated the task." },
    { word: "renounce", en: "refuse or give up", vi: "từ bỏ", ex: "He renounced his claim." },
    { word: "catastrophic", en: "disastrous", vi: "thảm khốc", ex: "The flood was catastrophic." },
    { word: "elusive", en: "hard to locate", vi: "khó nắm bắt", ex: "The answer is elusive." },
    { word: "abrupt", en: "sudden", vi: "đột ngột", ex: "The change was abrupt." },
    { word: "imminent", en: "about to occur", vi: "sắp xảy ra", ex: "A storm is imminent." },
    { word: "concede", en: "admit something is true", vi: "thừa nhận", ex: "She conceded defeat." },
    { word: "latent", en: "hidden or inactive", vi: "tiềm ẩn", ex: "He has latent talent." },
    { word: "replicable", en: "able to be reproduced", vi: "có thể tái tạo", ex: "The experiment is replicable." },
    { word: "tenuous", en: "weak or uncertain", vi: "mong manh", ex: "Their link is tenuous." },
    { word: "mystifying", en: "hard to understand", vi: "khó hiểu", ex: "The result is mystifying." }
  ],

  test3: [
    { word: "intricate", en: "complicated", vi: "phức tạp", ex: "The design is intricate." },
    { word: "indecipherable", en: "impossible to understand", vi: "không thể hiểu", ex: "The code is indecipherable." },
    { word: "ornamental", en: "decorative", vi: "trang trí", ex: "The detail is ornamental." },
    { word: "obscure", en: "unknown", vi: "mờ nhạt", ex: "He is an obscure writer." },
    { word: "disparate", en: "dissimilar", vi: "khác biệt", ex: "Disparate ideas." },
    { word: "complementary", en: "supporting each other", vi: "bổ trợ", ex: "Their skills are complementary." },
    { word: "interchangeable", en: "able to be exchanged", vi: "có thể thay thế", ex: "The parts are interchangeable." },
    { word: "barring", en: "except for", vi: "trừ khi", ex: "Barring accidents, we will win." },
    { word: "conform to", en: "obey a rule or law", vi: "tuân theo", ex: "You must conform to rules." },
    { word: "perceive", en: "understand", vi: "nhận thức", ex: "She perceived the danger." },
    { word: "ambivalence", en: "mixed feelings", vi: "mâu thuẫn cảm xúc", ex: "He felt ambivalence." },
    { word: "confidential", en: "secret or private", vi: "bí mật", ex: "This is confidential." }
  ],

  test4: [
    { word: "atypical", en: "not common", vi: "không điển hình", ex: "His behavior was atypical." },
    { word: "infallible", en: "always correct", vi: "không sai", ex: "No system is infallible." },
    { word: "lucrative", en: "profitable", vi: "sinh lợi", ex: "A lucrative deal." },
    { word: "tedious", en: "boring", vi: "nhàm chán", ex: "The work is tedious." },
    { word: "proponent of", en: "supporter of", vi: "người ủng hộ", ex: "A proponent of reform." },
    { word: "buttress", en: "strengthen", vi: "củng cố", ex: "Facts buttress the claim." },
    { word: "reciprocate", en: "respond in kind", vi: "đáp lại", ex: "She reciprocated kindness." },
    { word: "annotate", en: "add notes", vi: "chú thích", ex: "Annotate the text." },
    { word: "disengage", en: "withdraw or detach", vi: "tách ra", ex: "The system disengaged." },
    { word: "loath", en: "reluctant or hateful", vi: "ghét", ex: "He was loath to help." }
  ],

  test5: [
    { word: "trace", en: "evidence or sign", vi: "dấu vết", ex: "No trace was found." },
    { word: "antecedent", en: "previous reference", vi: "từ được thay thế", ex: "Identify the antecedent." },
    { word: "impending", en: "approaching", vi: "sắp xảy ra", ex: "An impending crisis." },
    { word: "innocuous", en: "harmless", vi: "vô hại", ex: "An innocuous remark." },
    { word: "perpetual", en: "never-ending", vi: "vĩnh viễn", ex: "Perpetual motion." },
    { word: "ameliorate", en: "improve", vi: "cải thiện", ex: "Policies ameliorate lives." },
    { word: "sanction", en: "approve or penalize", vi: "phê chuẩn / trừng phạt", ex: "The law was sanctioned." },
    { word: "rationalize", en: "justify logically", vi: "hợp lý hóa", ex: "He rationalized his choice." },
    { word: "postulate", en: "suggest a theory", vi: "đặt giả thuyết", ex: "They postulated a cause." },
    { word: "tenuous", en: "uncertain", vi: "mong manh", ex: "A tenuous link." },
    { word: "contentious", en: "controversial", vi: "gây tranh cãi", ex: "A contentious issue." },
    { word: "conspicuous", en: "obvious", vi: "dễ thấy", ex: "His absence was conspicuous." },
    { word: "defend", en: "support", vi: "bảo vệ", ex: "She defended her view." },
    { word: "constitution", en: "law system / health", vi: "hiến pháp / thể trạng", ex: "The constitution was revised." },
    { word: "contempt", en: "disrespect", vi: "khinh thường", ex: "He spoke with contempt." }
  ]
};

// ===== STATE =====
let currentSet = DATA.test1;
let index = 0;

// ===== ELEMENTS =====
const wordEl = document.getElementById("f-word");
const posEl = document.getElementById("f-pos");
const enEl = document.getElementById("b-en");
const viEl = document.getElementById("b-vi");
const exEl = document.getElementById("b-ex");
const card = document.getElementById("card");

// ===== FUNCTIONS =====
function updateCard() {
  const w = currentSet[index];
  wordEl.textContent = w.word;
  posEl.textContent = "vocab";
  enEl.textContent = w.en;
  viEl.textContent = w.vi;
  exEl.textContent = w.ex;
}

function switchMode(mode) {
  currentSet = DATA[mode];
  index = 0;
  card.classList.remove("is-flipped");
  updateCard();
}

function flipCard() {
  card.classList.toggle("is-flipped");
}

function nextCard() {
  index = (index + 1) % currentSet.length;
  card.classList.remove("is-flipped");
  updateCard();
}

function prevCard() {
  index = (index - 1 + currentSet.length) % currentSet.length;
  card.classList.remove("is-flipped");
  updateCard();
}

// ===== SPEAK =====
function speakWord(e) {
  e.stopPropagation();
  speechSynthesis.speak(new SpeechSynthesisUtterance(wordEl.textContent));
}

function speakExample(e) {
  e.stopPropagation();
  speechSynthesis.speak(new SpeechSynthesisUtterance(exEl.textContent));
}

updateCard();
