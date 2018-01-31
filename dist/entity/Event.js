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
const Location_1 = require("./Location");
const ExtLocation_1 = require("./ExtLocation");
const EventAttendee_1 = require("./EventAttendee");
let Event = class Event {
};
__decorate([
    typeorm_1.PrimaryColumn({ name: 'id' }),
    __metadata("design:type", Number)
], Event.prototype, "eventId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'event_type' }),
    __metadata("design:type", String)
], Event.prototype, "eventType", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'status' }),
    __metadata("design:type", String)
], Event.prototype, "eventStatus", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'created_by' }),
    __metadata("design:type", String)
], Event.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'updated_by' }),
    __metadata("design:type", String)
], Event.prototype, "updatedBy", void 0);
__decorate([
    typeorm_1.Column({ name: 'partner_id' }),
    __metadata("design:type", Number)
], Event.prototype, "partnerId", void 0);
__decorate([
    typeorm_1.Column({ name: 'rsvp_cap' }),
    __metadata("design:type", Number)
], Event.prototype, "rsvpCap", void 0);
__decorate([
    typeorm_1.Column({ name: 'cafe_host_id' }),
    __metadata("design:type", Number)
], Event.prototype, "cafeHostId", void 0);
__decorate([
    typeorm_1.Column({ name: 'location_id' }),
    __metadata("design:type", Number)
], Event.prototype, "locationId", void 0);
__decorate([
    typeorm_1.Column({ name: 'ext_location_id' }),
    __metadata("design:type", Number)
], Event.prototype, "extLocationId", void 0);
__decorate([
    typeorm_1.OneToOne(type => Location_1.Location, location => location.id),
    typeorm_1.JoinColumn({ name: 'cafe_host_id' }),
    __metadata("design:type", Location_1.Location)
], Event.prototype, "cafeHost", void 0);
__decorate([
    typeorm_1.OneToOne(type => ExtLocation_1.ExtLocation, extLocation => extLocation.id),
    typeorm_1.JoinColumn({ name: 'ext_location_id' }),
    __metadata("design:type", ExtLocation_1.ExtLocation)
], Event.prototype, "extLocation", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'disclaimer' }),
    __metadata("design:type", String)
], Event.prototype, "disclaimer", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'capitalone_poc' }),
    __metadata("design:type", String)
], Event.prototype, "capitalonePoc", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'short_desc' }),
    __metadata("design:type", String)
], Event.prototype, "shortDescription", void 0);
__decorate([
    typeorm_1.Column('timestamp', { name: 'start_time' }),
    __metadata("design:type", String)
], Event.prototype, "startTimeString", void 0);
__decorate([
    typeorm_1.Column('timestamp', { name: 'end_time' }),
    __metadata("design:type", String)
], Event.prototype, "endTimeString", void 0);
__decorate([
    typeorm_1.Column('timestamp', { name: 'created_dtm' }),
    __metadata("design:type", String)
], Event.prototype, "createdDtm", void 0);
__decorate([
    typeorm_1.Column('timestamp', { name: 'updated_dtm' }),
    __metadata("design:type", String)
], Event.prototype, "updatedDtm", void 0);
__decorate([
    typeorm_1.Column({ name: 'rsvp' }),
    __metadata("design:type", Boolean)
], Event.prototype, "rsvp", void 0);
__decorate([
    typeorm_1.OneToMany(type => EventAttendee_1.EventAttendee, eventAttendee => eventAttendee.event),
    __metadata("design:type", Array)
], Event.prototype, "eventAttendees", void 0);
Event = __decorate([
    typeorm_1.Entity()
], Event);
exports.Event = Event;
//# sourceMappingURL=Event.js.map