	'use strict';

// 対象行にカーソルをおいて、cmd + / でコメントアウトできる
// cmd + shift + dで複製
// 文字列
	 console.log("it's me!");
	 console.log('it\'s me!');
	 console.log('hello\no wor\tld');
	 console.log('hello' + 'world');
	 
	 // 四則演算
	 console.log(10 + 3); // 13
	 console.log(10 - 3); // 7
	 console.log(10 * 3); // 30
	 console.log(10 / 3); // 3.333...
	 console.log(10 % 3); // 1
	 console.log(10 ** 3); // 1000

	 //優先順位
	 console.log(2 + 10 *3); // 32
	 console.log((2 + 10) *3); // 36

   //定数　const
	 console.log(150 * 140);
	 console.log(150 * 150);
   console.log(150 * 160);

   //const price = 150;
   // console.log(price * 140);
   // console.log(price * 160);

   //変数 let
   /*
   let price = 150;
   console.log(price * 140);
   console.log(price * 160);
   */
  
   // price = 500
   // console.log(price * 140);
   // console.log(price * 160);

   let price = 500

   price = price + 100; //600
   // price += 100;

   price *= 2; // price = price * 2 /1200

   // price = price + 1; 
   // price += 1 
   price++; // 1201



   price--; // price -= 1 //1200
   console.log(price)

   //データ型
   console.log(typeof 'hello');
   console.log(typeof 5);
   console.log(typeof true);
   console.log(typeof undefined);
   console.log(typeof null);






















