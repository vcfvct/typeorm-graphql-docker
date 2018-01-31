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
const Market_1 = require("./Market");
let Location = class Location {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Location.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Location.prototype, "address1", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Location.prototype, "address2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Location.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Location.prototype, "state", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'zip' }),
    __metadata("design:type", String)
], Location.prototype, "postalCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Location.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Location.prototype, "timezone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Location.prototype, "latitude", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Location.prototype, "longitude", void 0);
__decorate([
    typeorm_1.Column({ name: 'market_id' }),
    __metadata("design:type", Number)
], Location.prototype, "marketId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Market_1.Market, market => market.id, { eager: true }),
    typeorm_1.JoinColumn({ name: 'market_id' }),
    __metadata("design:type", Market_1.Market)
], Location.prototype, "market", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'cafe_url_link' }),
    __metadata("design:type", String)
], Location.prototype, "cafeUrlLink", void 0);
__decorate([
    typeorm_1.Column({ name: 'is_market_level' }),
    __metadata("design:type", Boolean)
], Location.prototype, "isMarketLevel", void 0);
Location = __decorate([
    typeorm_1.Entity()
], Location);
exports.Location = Location;
//# sourceMappingURL=Location.js.map