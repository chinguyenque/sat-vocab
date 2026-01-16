const practiceTest4 = [
    { word: "atypical", pos: "adjective", en: "not usual or common", vi: "không điển hình", example: "The behavior was atypical." },
    { word: "infallible", pos: "adjective", en: "always correct; never wrong", vi: "không thể sai", example: "The method is not infallible." },
    { word: "lucrative", pos: "adjective", en: "producing a lot of profit", vi: "sinh lợi", example: "It was a lucrative business." },
    { word: "tedious", pos: "adjective", en: "boring or repetitive", vi: "nhàm chán", example: "The task was tedious." },
    { word: "proponent of", pos: "phrase", en: "a supporter of an idea", vi: "người ủng hộ", example: "She is a proponent of reform." },
    { word: "buttress", pos: "verb", en: "to support or strengthen", vi: "củng cố", example: "Evidence buttressed the claim." },
    { word: "reciprocate", pos: "verb", en: "to respond in kind", vi: "đáp lại", example: "She reciprocated the gesture." },
    { word: "annotate", pos: "verb", en: "to add notes", vi: "chú thích", example: "Students annotated the text." },
    { word: "disengage", pos: "verb", en: "to detach or withdraw", vi: "tách ra, rút lui", example: "The machine disengaged automatically." },
    { word: "loath", pos: "adjective", en: "unwilling or reluctant", vi: "miễn cưỡng, ghét", example: "He was loath to admit his mistake." }
];

const practiceTest5 = [
    { word: "trace", pos: "noun", en: "evidence or a sign that something existed", vi: "dấu vết, bằng chứng", example: "There was no trace of the chemical in the sample." },
    { word: "antecedent", pos: "noun", en: "something that comes before; a noun replaced by a pronoun", vi: "cái đứng trước; đối tượng mà đại từ thay thế", example: "The noun is the antecedent of the pronoun in the sentence." },
    { word: "impending", pos: "adjective", en: "about to happen", vi: "sắp xảy ra, cận kề", example: "The report warned of an impending crisis." },
    { word: "innocuous", pos: "adjective", en: "harmless or not likely to cause damage", vi: "vô hại", example: "The comment seemed innocuous at first." },
    { word: "perpetual", pos: "adjective", en: "never-ending or continuous", vi: "liên tục, không dứt", example: "They faced perpetual challenges." },
    { word: "ameliorate", pos: "verb", en: "to make something better", vi: "cải thiện, khắc phục", example: "New policies aim to ameliorate the situation." },
    { word: "sanction", pos: "verb", en: "to give official approval or impose a penalty", vi: "phê chuẩn / áp đặt hình phạt", example: "The committee sanctioned the new rule." },
    { word: "rationalize", pos: "verb", en: "to explain or justify logically", vi: "hợp lý hóa, biện minh", example: "He tried to rationalize his decision." },
    { word: "postulate", pos: "verb", en: "to suggest a theory or claim", vi: "đưa ra giả thuyết", example: "Scientists postulated a new explanation." },
    { word: "tenuous", pos: "adjective", en: "weak or uncertain", vi: "mong manh, không chắc chắn", example: "The connection was tenuous." },
    { word: "contentious", pos: "adjective", en: "likely to cause disagreement", vi: "gây tranh cãi", example: "The proposal was highly contentious." },
    { word: "conspicuous", pos: "adjective", en: "easy to notice", vi: "rõ ràng, dễ thấy", example: "His absence was conspicuous." },
    { word: "defend", pos: "verb", en: "to support or protect", vi: "bảo vệ, ủng hộ", example: "She defended her argument strongly." },
    { word: "constitution", pos: "noun", en: "a system of laws or a person's physical condition", vi: "hiến pháp / thể trạng", example: "The country adopted a new constitution." },
    { word: "contempt", pos: "noun", en: "a feeling of disrespect", vi: "sự khinh thường", example: "He spoke with contempt." }
];

let currentData = [...practiceTest5];
let currentIndex = 0;

// Initialize
window.onload = () => {
    updateCard();
};

function switchMode(mode) {
    currentData = mode === 'test4' ? [...practiceTest4] : [...practiceTest5];
    currentIndex = 0;
    
    document.getElementById('btnTest4').classList.toggle('active', mode === 'test4');
    document.getElementById('btnTest5').classList.toggle('active', mode === 'test5');
    
    document.getElementById('card').classList.remove('is-flipped');
    updateCard();
}

function updateCard() {
    const wordObj = currentData[currentIndex];
    
    // Front
    document.getElementById('f-word').textContent = wordObj.word;
    document.getElementById('f-pos').textContent = wordObj.pos;
    
    // Back
    document.getElementById('b-en').textContent = wordObj.en;
    document.getElementById('b-vi').textContent = wordObj.vi;
    document.getElementById('b-ex').textContent = `"${wordObj.example}"`;
    
    // Progress
    const progress = ((currentIndex + 1) / currentData.length) * 100;
    document.getElementById('progress-text').textContent = `Word ${currentIndex + 1} of ${currentData.length}`;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function flipCard() {
    document.getElementById('card').classList.toggle('is-flipped');
}

function nextCard() {
    if (currentIndex < currentData.length - 1) {
        currentIndex++;
        resetAndUpdate();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        resetAndUpdate();
    }
}

function resetAndUpdate() {
    document.getElementById('card').classList.remove('is-flipped');
    setTimeout(updateCard, 150); // Small delay to allow flip animation to reset if moving fast
}

function shuffleCurrentSet() {
    currentData.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    resetAndUpdate();
}

// Web Speech API
function speakWord(event) {
    event.stopPropagation(); // Don't flip card when clicking audio
    const text = currentData[currentIndex].word;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

function speakExample(event) {
    event.stopPropagation();
    const text = currentData[currentIndex].example;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}