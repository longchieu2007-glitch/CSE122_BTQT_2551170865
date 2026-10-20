const expressionEl = document.getElementById('expression');
const resultEl = document.getElementById('result');

let rawExpression = '';

function appendCharacter(char) {
    if (char === '()') {
        // Tự động nhận diện đóng/mở ngoặc đơn giản
        const openCount = (rawExpression.match(/\(/g) || []).length;
        const closeCount = (rawExpression.match(/\)/g) || []).length;
        const lastChar = rawExpression.slice(-1);

        if (openCount > closeCount && !['+', '-', '×', '÷', '('].includes(lastChar) && lastChar !== '') {
            rawExpression += ')';
        } else {
            rawExpression += '(';
        }
    } else {
        rawExpression += char;
    }

    updateDisplay();
}

function clearAll() {
    rawExpression = '';
    expressionEl.innerText = '';
    resultEl.innerText = '0';
}

function updateDisplay() {

    let formattedDisplay = rawExpression
        .replace(/\+/g, ' + ')
        .replace(/-/g, ' - ')
        .replace(/×/g, ' × ')
        .replace(/÷/g, ' ÷ ')
        .replace(/%/g, ' % ')
        .replace(/\s+/g, ' ')
        .trim();

    expressionEl.innerText = formattedDisplay;
}

function calculateResult() {
    if (!rawExpression) return;

    try {
        
        let jsExpression = rawExpression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/%/g, '/100');

        let evaluatedResult = eval(jsExpression);

        // Xử lý làm tròn số thập phân dài nếu có
        if (typeof evaluatedResult === 'number' && !Number.isInteger(evaluatedResult)) {
            evaluatedResult = parseFloat(evaluatedResult.toFixed(8));
        }

        resultEl.innerText = evaluatedResult;
    } catch (error) {
        resultEl.innerText = 'Lỗi';
    }
}