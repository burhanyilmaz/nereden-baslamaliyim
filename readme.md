
# Nereden Başlamalıyım?

![](./resources/images/logo.png)

Bilgisayar dünyasına giriş yapmak isteyip nereden başlayacağını bilmeyenlere yol göstermek.

## İlk Hedef
Başlangıç olarak yalnızca yazılım alanında yol göstermek hızlı bir şekilde ürünümüzü ortaya çıkarmamızı sağlayacaktır. Daha sonra ki zamanlarda bu amacı farklı alanlarda da yön göstermeyi sağlayacak şekilde dallandırabiliriz.

Hızlı Kurulum
-------------

```sh
$ git clone https://github.com/burhanyilmaz/neredenbaslamaliyim
$ cd neredenbaslamaliyim
$ npm install || yarn install
$ npm start || yarn start

Server running at http://localhost:1234

```
Komutlar
--------

|Script|Tanım|
|---|---|
|`npm start`| `localhost:1234` adresinde geliştirme server'ını başlatır.|
|`npm run build`| Uygulamanun production'a hazır halini `./dist`'e çıkarır.|
|`npm run test`| Testleri çalıştırmayı sağlar.|

### Demo

### Test

### Dizin Yapısı 
```sh
.
├── package.json
├── public
│   ├── App.js
│   └── index.html
├── readme.md
├── src
│   ├── modules
│   │   └── Home
│   │       ├── actions
│   │       │   └── HomeActions.js
│   │       ├── constants.js
│   │       ├── container
│   │       │   └── Home
│   │       │       ├── Home.js
│   │       │       └── index.js
│   │       ├── index.js
│   │       ├── reducer
│   │       │   └── HomeReducer.js
│   │       ├── style
│   │       │   └── style.css
│   │       └── __test__
│   │           └── container
│   │               ├── ParcelHome.test.js
│   │               └── __snapshots__
│   │                   └── ParcelHome.test.js.snap
│   ├── redux
│   │   ├── reducers.js
│   │   └── store.js
│   └── route
│       └── route.js
└── test
    └── bootstrapTests.js

15 directories, 17 files

```