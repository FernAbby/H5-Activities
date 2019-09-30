(function($) {
  let $successModal = null;
  let $ruleModal = null;

  function successModal(options) {
    const opts = Object.assign({
      prizeImg: 'https://cdn.oaplusplus.com/h5/static/images/modal/prize2.png',
      afterOpen: () => {},
      close: () => {},
      fetch: () => {}
    }, options);

    const modalHtml = `<div id="modal-success" class="modal-wrap">
    <div class="blink"></div>
    <div class="modal-content">
      <div class="red-packet">
        <div class="red-packet-head"></div>
        <div class="red-packet-body"></div>
        <div class="card">
          <div class="prize">
            <img src="${opts.prizeImg}" alt="奖品"/>
          </div>
        </div>
      </div>
      <div id="fetch-prize" class="fetch-btn">我要领奖</div>
      <div id="close-success"></div>
    </div>
  </div>`;

    $successModal = $(modalHtml).appendTo('body');
    opts.afterOpen($successModal);

    function closeModal() {
      opts.close();
      $successModal.remove();
      $successModal = null;
    }

    $successModal.find("#fetch-prize").on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      opts.fetch(e);
      closeModal();
    });
    $successModal.find("#close-modal").on('click', closeModal);
  }

  function ruleModal(options) {
    const opts = Object.assign({
      title: '活动说明',
      content: `<p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>`,
      close: () => {},
    }, options);

    const modalHtml = `<div id="modal-rule">
    <div class="rules-body">
      <span id="close-rule"></span>
      <div class="title">活动说明</div>
      <div class="rule-content">
        ${opts.content}
      </div>
    </div>`;

    $ruleModal = $(modalHtml).appendTo('body');

    $ruleModal.find("#close-rule").on('click', function(){
      opts.close();
      $ruleModal.remove();
      $ruleModal = null;
    });
  }

  $.successModal = (options) => {
    if (!$successModal) {
      successModal(options);
      setTimeout(() => {
        $successModal.addClass("animationIn");
      }, 1);
    }
  };

  $.ruleModal = (options) => {
    if (!$ruleModal) {
      ruleModal(options);
      setTimeout(() => {
        $ruleModal.addClass("animationIn");
      }, 1);
    }
  }

})(jQuery || $ || Zepto);