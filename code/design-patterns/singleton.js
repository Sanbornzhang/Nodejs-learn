/**
 * mySingleton
 */
const mySingleton = (()=>{
  let instance
  /**
   * init
   * @return {Object}
   */
  function init() {
    /**
     * publicFunc
     */
    function publicFunc() {
      console.log('this is public func')
    }
    return {
      name: '1',
      age: 111,
      func: publicFunc,
    }
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = init()
        return instance
      }
      return instance
    },
  }
})()
module.exports.mySingleton = mySingleton
