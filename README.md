# セットアップ

```bash
git clone https://github.com/yodev21/vue3_tutorial.git

cd vue3_tutorial

docker-compose up
```

下記 URL にアクセスし、「Welcome to Your Vue.js App」が表示されること  
http://localhost:8080/

# Teleportについて
使用用途として、モーダルなど入れ子になったコンポーネントの中に表示するのではなく、 
body の直下のような、他のコンポーネントとは独立した所に配置される方が都合が良いです。