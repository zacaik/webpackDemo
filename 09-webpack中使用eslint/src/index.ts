const msg = 'hello Typescript~';

const foo = (info) => {
  console.log(info);
};

foo(msg);

var foo2 = '123';

// 通过export语句将该文件声明为一个独立的模块，避免变量重复声明报错
export {};
