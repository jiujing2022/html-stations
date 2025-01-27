function getData() {
    const test = [
        { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
        { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
    ];
    return test.map(buildFullName); // 各オブジェクトに full_name プロパティを追加
}

function buildFullName(data) {
    // フルネームを作成し、各オブジェクトに full_name プロパティを追加
    data.full_name = `${data.family_name} ${data.first_name}`;
    return data;
}

// 結果を表示する関数
function displayNames() {
    const data = getData(); // フルネームを含むデータを取得
    const resultElement = document.getElementById('result'); // HTML の ul 要素を取得

    // 結果が表示される要素が存在しない場合は、何もせずに終了
    if (!resultElement) return;

    // 各人物のフルネームを <li> 要素として追加
    data.forEach(person => {
        const li = document.createElement('li');
        li.textContent = person.full_name;
        resultElement.appendChild(li); // <ul> 要素に <li> を追加
    });
}

// ページ読み込み時に displayNames 関数を実行
window.onload = displayNames;
