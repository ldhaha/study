/**
 * 内核 如webkit 分为webCore,jsCore
 *
 * jsCore  著名的有v8引擎
 *
 *
 * 过程：
 *
 * 首先对js代码进行parse（或者预解析）。Scanner代码扫描，进行词法分析，生成tokens.再进行语法分析，生成ast语法树
 * 再由v8的ignation进行处理生成字节码（因为不同的cpu的机器码不太一样，所以限制生成字节码），
 * 另外对于一些用的比较多的函数，还会有v8的TuboFan，生成机器码直接运行，或者是字节码
 *
 *
 */
