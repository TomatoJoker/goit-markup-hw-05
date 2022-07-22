$(function ($) {
    modal($('.main-banner__btn'), $('.modal'), $('.close, .modal__overlay'));
    function modal(btn, modal, close) {
        btn.on('click', function () {
            modal.addClass('modal_open');
        });
        modal.find(close).on('click', function () {
            $(this).closest(modal).removeClass('modal_open');
        })
    }
})