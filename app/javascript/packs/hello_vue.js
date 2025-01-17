import { createApp } from 'vue'; // Vue 3 の名前付きエクスポートをインポート
import App from '../app.vue';    // 既存の Vue コンポーネント

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App);   // createApp を使ってアプリケーションを作成
  app.mount('#app');            // アプリケーションをマウントする要素を指定
});
