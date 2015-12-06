define([
    'uiComponent'
], function (Component) {
    'use strict';
    var show_hide_custom_blockConfig = window.checkoutConfig.show_hide_custom_block;
    return Component.extend({
        defaults: {
            template: 'SR_AdditionalShippingBlock/checkout/shipping/additional-block'
        },
        canVisibleBlock: show_hide_custom_blockConfig
    });
});
