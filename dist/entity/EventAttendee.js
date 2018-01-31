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
const Event_1 = require("./Event");
let EventAttendee = class EventAttendee {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], EventAttendee.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'event_id' }),
    __metadata("design:type", Number)
], EventAttendee.prototype, "eventId", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: 'event_id' }),
    typeorm_1.ManyToOne(type => Event_1.Event, event => event.eventAttendees),
    __metadata("design:type", Event_1.Event)
], EventAttendee.prototype, "event", void 0);
__decorate([
    typeorm_1.Column({ name: 'ticket_num' }),
    __metadata("design:type", String)
], EventAttendee.prototype, "ticketNum", void 0);
__decorate([
    typeorm_1.Column({ name: 'attendance_status' }),
    __metadata("design:type", String)
], EventAttendee.prototype, "attendanceStatus", void 0);
__decorate([
    typeorm_1.Column({ name: 'first_name' }),
    __metadata("design:type", String)
], EventAttendee.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ name: 'last_name' }),
    __metadata("design:type", String)
], EventAttendee.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ name: 'email' }),
    __metadata("design:type", String)
], EventAttendee.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EventAttendee.prototype, "zipcode", void 0);
__decorate([
    typeorm_1.Column({ name: 'rsvp_date' }),
    __metadata("design:type", String)
], EventAttendee.prototype, "rsvpDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], EventAttendee.prototype, "checkin", void 0);
EventAttendee = __decorate([
    typeorm_1.Entity({ name: 'event_attendee' })
], EventAttendee);
exports.EventAttendee = EventAttendee;
//# sourceMappingURL=EventAttendee.js.map