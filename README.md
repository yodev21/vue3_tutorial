# セットアップ

```bash
git clone https://github.com/yodev21/vue3_tutorial.git

cd vue3_tutorial

docker-compose up
```

下記 URL にアクセスし、「Welcome to Your Vue.js App」が表示されること  
http://localhost:8080/

# Teleportについて
TeleportはコンポーネントをDOMツリーの別の場所にレンダリングすることができます。

使用用途として、モーダルなどz-indexの問題や親要素のstyleが干渉してしまう問題に対応可能です。
https://re-engines.com/2020/11/02/vue3-teleport/

# SFC

https://github.com/vuejs/rfcs/pull/231