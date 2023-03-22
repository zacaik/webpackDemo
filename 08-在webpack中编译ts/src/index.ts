const msg: string = 'hello Typescript~'

const foo = (info: string) => {
    console.log(info);
}

foo(msg);

// 通过export语句将该文件声明为一个独立的模块，避免变量重复声明报错
export {}