class Person {
  // 成员属性要先申明
  name: string
  age = 2
  private _sex = '0'
  constructor(name: string) {
    this.name = name
  }
  eating() {
    console.log(this.name)
  }

  /**
   * getter,setter主要是拦截
   */
  set sex(val: string) {
    this._sex = val
  }
  get sex() {
    return this._sex
  }
}

/**
 * 修饰符 public  private  protected
 *
 *  public：在任何地方都能访问，公共的
 *  private：仅在同一类中，可以访问的方法或者属性
 *  protected：在同一类以其子类中，可以访问的方法或者属性
 */

export {}
