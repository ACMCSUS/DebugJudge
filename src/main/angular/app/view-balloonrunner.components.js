"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var dbgjdg_pb_1 = require("./proto/dbgjdg_pb");
var debuggingjudge_component_1 = require("./debuggingjudge.component");
var JudgingStatusMessage = dbgjdg_pb_1.acmcsus.debugjudge.S2JMessage.JudgingStatusMessage;
var ViewBalloonrunnerComponents = /** @class */ (function () {
    function ViewBalloonrunnerComponents(api, apiWs) {
        this.api = api;
        this.apiWs = apiWs;
        //scoreboard: Scoreboard;
        this.bkgdColor = '#fff';
        this.displayColumns = ['teamId', 'problemName', 'judgmentStatus', 'colorId'];
        this.statusMessage = "Patience.....";
    }
    ViewBalloonrunnerComponents.prototype.ngOnInit = function () {
        this.problems = [];
        this.problemMap = new Map();
        this.assignmentSubscription = null;
        this.judgingStatus = JudgingStatusMessage.create();
        this.setBanner(0);
        this.problemSubscription = this.api.problems.subscribe();
        this.assignmentSubscription = this.api.assignedSubmission.subscribe();
        this.judgingStatusSubscription = this.api.judgingStatus.subscribe();
    };
    ViewBalloonrunnerComponents.prototype.ngOnDestroy = function () {
        this.s2cSubscription.unsubscribe();
        this.problemSubscription.unsubscribe();
        this.assignmentSubscription.unsubscribe();
        this.judgingStatusSubscription.unsubscribe();
    };
    //Need to change color with cases somehow
    ViewBalloonrunnerComponents.prototype.colorFor = function (sub) {
        if (!sub.judgement) {
            return '#666';
        }
        else {
            switch (sub.judgement) {
                case dbgjdg_pb_1.acmcsus.debugjudge.SubmissionJudgement.JUDGEMENT_SUCCESS:
                    return '#696';
                case dbgjdg_pb_1.acmcsus.debugjudge.SubmissionJudgement.JUDGEMENT_FAILURE:
                    return '#a66';
                default:
                    return '#666';
            }
        }
    };
    ViewBalloonrunnerComponents.prototype.ngAfterViewInit = function () {
        combineLatest(this.api.submissions, this.api.problems).subscribe(function (_a) {
            var sub = _a[0], probs = _a[1];
        });
    };
    ViewBalloonrunnerComponents.prototype.close = function () {
        this.api.submitJudgement('close');
    };
    ViewBalloonrunnerComponents.prototype.setBanner = function (problemId) {
        var _this = this;
        var color = (((this.problemMap[problemId] || {}).color) || '#cccccc');
        var rippleRef = this.ripple.launch(0, 0, {
            persistent: true,
            color: color
        });
        setTimeout(function () {
            _this.bkgdColor = color;
            rippleRef.fadeOut();
        }, 200);
    };
    ViewBalloonrunnerComponents = __decorate([
        core_1.Component({
            selector: 'app-runner-view',
            entryComponents: [debuggingjudge_component_1.DebugBalloonComponent],
            template: "\n  <div id=\"outer\">\n    <div id=\"wrap\">\n    <mat-card>\n      <mat-card-title>View for Ballons</mat-card-title>\n        <mat-card-title *ngIf=\"judgingStatus.judging && assignedSubmission\">View: {{problemMap[assignedSubmission.problemId].title}}</mat-card-title>\n        <mat-card-title *ngIf=\"judgingStatus.judging && !assignedSubmission\">Waiting for submissions...</mat-card-title>\n         <mat-card-content *ngIf=\"assignedSubmission\">\n         <table #submissionsTable [dataSource]=\"dataSource\">\n          <ng-container matColumnDef=\"teamId\">\n          <mat-header-cell *matHeaderCellDef>Team No.</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">{{row.teamId}}</mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"problemName\">\n            <mat-header-cell *matHeaderCellDef>Problem</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.problemName || '???'}}</mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"judgementStatus\">\n            <mat-header-cell *matHeaderCellDef>Submission Time</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">{{row.submissionTime}}</mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"colorStatus\">\n            <mat-header-cell *matHeaderCellDef>Color type</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">{{row.colorId}}</mat-cell>\n           </ng-container>\n           <mat-header-row *matHeaderRowDef=\"displayColumns\"></mat-header-row>\n           <mat-row *matRowDef=\"let myRowData; columns: displayColumns\"></mat-row>\n         </table>\n          <mat-progress-spinner *ngIf=\"!(problems&&problems.length)\" [mode]=\"'indeterminate'\" [diameter]=\"50\"></mat-progress-spinner>\n            <div [ngSwitch]=\"assignedSubmission.value\">\n              <app-judge-debug\n                  *ngSwitchCase=\"'debuggingSubmission'\"\n                  [team]=\"problemMap[assignedSubmission.teamId]\"\n                  [problem]=\"problemMap[assignedSubmission.problemId]\"\n                  [submission]=\"assignedSubmission\"></app-judge-debug>\n            </div>\n        </mat-card-content>\n        <mat-card-content *ngIf=\"!assignedSubmission\"></mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button color=\"primary\" (click)=\"close()\" [disabled]=\"!assignedSubmission\">Done</button>\n          \n        </mat-card-actions>\n    </mat-card>\n    </div>\n  </div>\n  ",
            styles: [""]
        }),
        __param(0, core_1.Inject('ApiJudgeService')), __param(1, core_1.Inject("ApiWebSocketService"))
    ], ViewBalloonrunnerComponents);
    return ViewBalloonrunnerComponents;
}());
exports.ViewBalloonrunnerComponents = ViewBalloonrunnerComponents;
