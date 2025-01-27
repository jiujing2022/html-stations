async function getData() {
  // Promiseを使った実装で、３秒後にフルネームを表示
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];

  // test 関数で 3秒後に表示する処理を実装
  const result = await test(userList);
  return result;
}

function test(userList) {
  return new Promise((resolve) => {
    // 3秒後に実行
    setTimeout(() => {
      // 既存のリストアイテムを削除してから新しいリストを表示
      const resultList = document.getElementById("result");
      resultList.innerHTML = ''; // 既存のリストをクリア

      // 新しいリストアイテムを追加
      userList.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.family_name} ${user.first_name}`;
        resultList.appendChild(li);
      });
      resolve(userList);
    }, 3000);
  });
}

// テスト実行前にリストをリセットする関数を追加
function resetList() {
  const resultList = document.getElementById("result");
  resultList.innerHTML = ''; // テスト前にリストをクリア
}