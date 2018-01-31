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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let ExtLocation = class ExtLocation {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], ExtLocation.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ExtLocation.prototype, "address1", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], ExtLocation.prototype, "address2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ExtLocation.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ExtLocation.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ExtLocation.prototype, "zip", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ExtLocation.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ExtLocation.prototype, "timezone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ExtLocation.prototype, "latitude", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ExtLocation.prototype, "longitude", void 0);
__decorate([
    typeorm_1.Column({ name: 'market_id', nullable: true }) //note: this col has no data in the qa db
    ,
    __metadata("design:type", Number)
], ExtLocation.prototype, "marketId", void 0);
ExtLocation = __decorate([
    typeorm_1.Entity()
], ExtLocation);
exports.ExtLocation = ExtLocation;
//# sourceMappingURL=ExtLocation.js.map