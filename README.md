# RestaurantList

我最愛的餐廳清單
這是一份由個人在台北市最喜愛的8間餐廳組成的清單
可進行搜尋、瀏覽詳細資訊、查詢Google地圖等功能

## 專案畫面
![MyImage](/Restaurant_List_photo.png)

## 目錄

- [功能](#專案功能)
- [安裝](#專案安裝流程)
- [開發工具](#開發工具)

## 專案功能
**使用者可以在首頁看到所有餐廳與它們的簡單資料：**
  * 餐廳照片
  * 餐廳名稱
  * 餐廳分類
  * 餐廳評分

**使用者可以再點進去看餐廳的詳細資訊：**
  * 類別
  * 電話
  * 描述
  * 圖片
  * 地址
  * Google Map
  
**使用者可以透過搜尋餐廳名稱/類別來找到特定的餐廳**

## 專案安裝流程
1.確保您的電腦安裝node.js之後開啟終端機輸入以下指令下載專案
```
git clone 
```
2.終端機輸入以下指令進入專案資料夾
```
cd restaurantList
```
3.終端機輸入以下指令安裝npm
```
npm install
```
4.終端機輸入以下指令開啟伺服器
```
nodemon app.js
```
5.開啟任意瀏覽器輸入網址就可以進入畫面囉
```
http://localhost:3000
```
6. 如需停止
```
^C //ctrl=C
```

## 開發工具
+ Node.js 16.19.1
+ Express 4.18.2
+ Express-Handlebars 3.0.0
+ Bootstrap 5.1.3