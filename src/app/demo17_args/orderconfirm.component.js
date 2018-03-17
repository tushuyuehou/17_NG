"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var OrderConfirmComponent = (function () {
    function OrderConfirmComponent(myAR) {
        this.myAR = myAR;
    }
    OrderConfirmComponent.prototype.ngOnInit = function () {
        this.myAR.params.subscribe(function (result) {
            console.log(result);
        });
    };
    OrderConfirmComponent = __decorate([
        core_1.Component({
            selector: 'orderConfirm',
            template: "\n        <h1>\u8FD9\u662F\u8BA2\u5355\u786E\u8BA4\u9875\u9762</h1>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], OrderConfirmComponent);
    return OrderConfirmComponent;
}());
exports.OrderConfirmComponent = OrderConfirmComponent;
//# sourceMappingURL=orderconfirm.component.js.map