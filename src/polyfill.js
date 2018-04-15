if (typeof global != "undefined") {
  const MockMutationObserver = function(){
    return {
      observe: () => {}
    }
  }
  if (!global.document) {
    global.document = {
      documentElement: {}
    }
  }
  global.MutationObserver = window.MutationObserver || MockMutationObserver
}

require('@webcomponents/shadydom')
