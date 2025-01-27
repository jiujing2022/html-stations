// グローバルスコープでの data 定義
data = "global data";

// returnThisData 関数をアロー関数に書き換え
const returnThisData = () => {
  return window.data; // window オブジェクトを使ってグローバルスコープの data を参照
};

const object = {
  data: "object data",
  func: returnThisData,
};

function getData() {
  return object.func();
}
