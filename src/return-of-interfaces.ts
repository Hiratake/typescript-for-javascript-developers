export {}

// class Mahotsukai {}
// class Souryo {}

// class Taro extends Mahotsukai, Souryo {}

// 複数のクラスを継承はできない
// 複数のインターフェースを継承のようなことをすることはできる
// インターフェースから継承のようなことをすることを「実装する」という

interface Kenja {
  ionazun(): void
}

interface Senshi {
  kougeki(): void
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun')
  }

  kougeki(): void {
    console.log('kougeki')
  }
}

const jiro = new Jiro()
jiro.ionazun()
jiro.kougeki()
