// extends
interface Fish {
    name: string
}
interface Water {
    name: string
}
interface Bird {
    name: string
}
interface Sky {
    name: string
}

//若 T 能够赋值给 Fish，那么类型是 Water,否则为 Sky
type Condition<T> = T extends Fish ? Water : Sky;


let condition: Condition<Fish> = { name: '水' };


// 上面这个代码看起来匪夷所思，感觉毫无用去，但其实是表达，使用extends关键字，可以实现if的效果。后续会在深入他的使用方式