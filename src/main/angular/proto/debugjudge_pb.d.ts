import * as $protobuf from "protobufjs";

export namespace acmcsus {

    namespace debugjudge {

        enum CompetitionState {
            UNKNOWN = 0,
            WAITING = 1,
            STARTED = 2,
            PAUSED = 3,
            STOPPED = 4
        }

        enum SubmissionJudgement {
            SUCCESS = 0,
            FAILURE = 1,
            DEFERRED = 2
        }

        interface IC2SMessage {
            t2sMessage?: (acmcsus.debugjudge.C2SMessage.IT2SMessage|null);
            j2sMessage?: (acmcsus.debugjudge.C2SMessage.IJ2SMessage|null);
            loginMessage?: (acmcsus.debugjudge.C2SMessage.ILoginMessage|null);
        }

        class C2SMessage implements IC2SMessage {
            constructor(properties?: acmcsus.debugjudge.IC2SMessage);
            public t2sMessage?: (acmcsus.debugjudge.C2SMessage.IT2SMessage|null);
            public j2sMessage?: (acmcsus.debugjudge.C2SMessage.IJ2SMessage|null);
            public loginMessage?: (acmcsus.debugjudge.C2SMessage.ILoginMessage|null);
            public value?: ("t2sMessage"|"j2sMessage"|"loginMessage");
            public static create(properties?: acmcsus.debugjudge.IC2SMessage): acmcsus.debugjudge.C2SMessage;
            public static encode(message: acmcsus.debugjudge.IC2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: acmcsus.debugjudge.IC2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage;
            public static toObject(message: acmcsus.debugjudge.C2SMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace C2SMessage {

            interface ILoginMessage {
                nonce?: (string|null);
            }

            class LoginMessage implements ILoginMessage {
                constructor(properties?: acmcsus.debugjudge.C2SMessage.ILoginMessage);
                public nonce: string;
                public static create(properties?: acmcsus.debugjudge.C2SMessage.ILoginMessage): acmcsus.debugjudge.C2SMessage.LoginMessage;
                public static encode(message: acmcsus.debugjudge.C2SMessage.ILoginMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.C2SMessage.ILoginMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage.LoginMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage.LoginMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage.LoginMessage;
                public static toObject(message: acmcsus.debugjudge.C2SMessage.LoginMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IT2SMessage {
            }

            class T2SMessage implements IT2SMessage {
                constructor(properties?: acmcsus.debugjudge.C2SMessage.IT2SMessage);
                public static create(properties?: acmcsus.debugjudge.C2SMessage.IT2SMessage): acmcsus.debugjudge.C2SMessage.T2SMessage;
                public static encode(message: acmcsus.debugjudge.C2SMessage.IT2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.C2SMessage.IT2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage.T2SMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage.T2SMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage.T2SMessage;
                public static toObject(message: acmcsus.debugjudge.C2SMessage.T2SMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IJ2SMessage {
                startJudgingMessage?: (acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage|null);
                stopJudgingMessage?: (acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage|null);
                submissionJudgementMessage?: (acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage|null);
                judgingPreferencesMessage?: (acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage|null);
                changeCompetitionStateMessage?: (acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage|null);
            }

            class J2SMessage implements IJ2SMessage {
                constructor(properties?: acmcsus.debugjudge.C2SMessage.IJ2SMessage);
                public startJudgingMessage?: (acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage|null);
                public stopJudgingMessage?: (acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage|null);
                public submissionJudgementMessage?: (acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage|null);
                public judgingPreferencesMessage?: (acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage|null);
                public changeCompetitionStateMessage?: (acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage|null);
                public value?: ("startJudgingMessage"|"stopJudgingMessage"|"submissionJudgementMessage"|"judgingPreferencesMessage"|"changeCompetitionStateMessage");
                public static create(properties?: acmcsus.debugjudge.C2SMessage.IJ2SMessage): acmcsus.debugjudge.C2SMessage.J2SMessage;
                public static encode(message: acmcsus.debugjudge.C2SMessage.IJ2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.C2SMessage.IJ2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage.J2SMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage.J2SMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage.J2SMessage;
                public static toObject(message: acmcsus.debugjudge.C2SMessage.J2SMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace J2SMessage {

                interface IStartJudgingMessage {
                }

                class StartJudgingMessage implements IStartJudgingMessage {
                    constructor(properties?: acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage);
                    public static create(properties?: acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage): acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage;
                    public static encode(message: acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage;
                    public static toObject(message: acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IStopJudgingMessage {
                }

                class StopJudgingMessage implements IStopJudgingMessage {
                    constructor(properties?: acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage);
                    public static create(properties?: acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage): acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage;
                    public static encode(message: acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage;
                    public static toObject(message: acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISubmissionJudgementMessage {
                    submissionId?: (number|Long|null);
                    ruling?: (acmcsus.debugjudge.SubmissionJudgement|null);
                }

                class SubmissionJudgementMessage implements ISubmissionJudgementMessage {
                    constructor(properties?: acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage);
                    public submissionId: (number|Long);
                    public ruling: acmcsus.debugjudge.SubmissionJudgement;
                    public static create(properties?: acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage): acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage;
                    public static encode(message: acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage;
                    public static toObject(message: acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IJudgingPreferencesMessage {
                    preferences?: ({ [k: string]: boolean }|null);
                }

                class JudgingPreferencesMessage implements IJudgingPreferencesMessage {
                    constructor(properties?: acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage);
                    public preferences: { [k: string]: boolean };
                    public static create(properties?: acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage): acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage;
                    public static encode(message: acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage;
                    public static toObject(message: acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IChangeCompetitionStateMessage {
                    timeMillis?: (number|Long|null);
                    state?: (acmcsus.debugjudge.CompetitionState|null);
                }

                class ChangeCompetitionStateMessage implements IChangeCompetitionStateMessage {
                    constructor(properties?: acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage);
                    public timeMillis: (number|Long);
                    public state: acmcsus.debugjudge.CompetitionState;
                    public static create(properties?: acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage): acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage;
                    public static encode(message: acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage;
                    public static toObject(message: acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        interface IS2CMessage {
            s2tMessage?: (acmcsus.debugjudge.S2CMessage.IS2TMessage|null);
            s2jMessage?: (acmcsus.debugjudge.S2CMessage.IS2JMessage|null);
            debugMessage?: (acmcsus.debugjudge.S2CMessage.IDebugMessage|null);
            alertMessage?: (acmcsus.debugjudge.S2CMessage.IAlertMessage|null);
            loginResultMessage?: (acmcsus.debugjudge.S2CMessage.ILoginResultMessage|null);
            notificationMessage?: (acmcsus.debugjudge.S2CMessage.INotificationMessage|null);
            competitionStateChangedMessage?: (acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage|null);
        }

        class S2CMessage implements IS2CMessage {
            constructor(properties?: acmcsus.debugjudge.IS2CMessage);
            public s2tMessage?: (acmcsus.debugjudge.S2CMessage.IS2TMessage|null);
            public s2jMessage?: (acmcsus.debugjudge.S2CMessage.IS2JMessage|null);
            public debugMessage?: (acmcsus.debugjudge.S2CMessage.IDebugMessage|null);
            public alertMessage?: (acmcsus.debugjudge.S2CMessage.IAlertMessage|null);
            public loginResultMessage?: (acmcsus.debugjudge.S2CMessage.ILoginResultMessage|null);
            public notificationMessage?: (acmcsus.debugjudge.S2CMessage.INotificationMessage|null);
            public competitionStateChangedMessage?: (acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage|null);
            public value?: ("s2tMessage"|"s2jMessage"|"debugMessage"|"alertMessage"|"loginResultMessage"|"notificationMessage"|"competitionStateChangedMessage");
            public static create(properties?: acmcsus.debugjudge.IS2CMessage): acmcsus.debugjudge.S2CMessage;
            public static encode(message: acmcsus.debugjudge.IS2CMessage, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: acmcsus.debugjudge.IS2CMessage, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage;
            public static toObject(message: acmcsus.debugjudge.S2CMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace S2CMessage {

            interface IDebugMessage {
                message?: (string|null);
            }

            class DebugMessage implements IDebugMessage {
                constructor(properties?: acmcsus.debugjudge.S2CMessage.IDebugMessage);
                public message: string;
                public static create(properties?: acmcsus.debugjudge.S2CMessage.IDebugMessage): acmcsus.debugjudge.S2CMessage.DebugMessage;
                public static encode(message: acmcsus.debugjudge.S2CMessage.IDebugMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.IDebugMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.DebugMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.DebugMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.DebugMessage;
                public static toObject(message: acmcsus.debugjudge.S2CMessage.DebugMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IAlertMessage {
                message?: (string|null);
            }

            class AlertMessage implements IAlertMessage {
                constructor(properties?: acmcsus.debugjudge.S2CMessage.IAlertMessage);
                public message: string;
                public static create(properties?: acmcsus.debugjudge.S2CMessage.IAlertMessage): acmcsus.debugjudge.S2CMessage.AlertMessage;
                public static encode(message: acmcsus.debugjudge.S2CMessage.IAlertMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.IAlertMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.AlertMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.AlertMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.AlertMessage;
                public static toObject(message: acmcsus.debugjudge.S2CMessage.AlertMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface ILoginResultMessage {
                value?: (acmcsus.debugjudge.S2CMessage.LoginResultMessage.LoginResult|null);
            }

            class LoginResultMessage implements ILoginResultMessage {
                constructor(properties?: acmcsus.debugjudge.S2CMessage.ILoginResultMessage);
                public value: acmcsus.debugjudge.S2CMessage.LoginResultMessage.LoginResult;
                public static create(properties?: acmcsus.debugjudge.S2CMessage.ILoginResultMessage): acmcsus.debugjudge.S2CMessage.LoginResultMessage;
                public static encode(message: acmcsus.debugjudge.S2CMessage.ILoginResultMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.ILoginResultMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.LoginResultMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.LoginResultMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.LoginResultMessage;
                public static toObject(message: acmcsus.debugjudge.S2CMessage.LoginResultMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace LoginResultMessage {

                enum LoginResult {
                    UNKNOWN = 0,
                    SUCCESS = 1,
                    FAILURE = 2
                }
            }

            interface INotificationMessage {
                message?: (string|null);
                icon?: (string|null);
            }

            class NotificationMessage implements INotificationMessage {
                constructor(properties?: acmcsus.debugjudge.S2CMessage.INotificationMessage);
                public message: string;
                public icon: string;
                public static create(properties?: acmcsus.debugjudge.S2CMessage.INotificationMessage): acmcsus.debugjudge.S2CMessage.NotificationMessage;
                public static encode(message: acmcsus.debugjudge.S2CMessage.INotificationMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.INotificationMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.NotificationMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.NotificationMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.NotificationMessage;
                public static toObject(message: acmcsus.debugjudge.S2CMessage.NotificationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace NotificationMessage {

                enum NotificationLevel {
                    DEFAULT = 0,
                    SUCCESS = 1,
                    FAILURE = 2,
                    WARNING = 3
                }
            }

            interface ICompetitionStateChangedMessage {
                timeMillis?: (number|Long|null);
                state?: (acmcsus.debugjudge.CompetitionState|null);
            }

            class CompetitionStateChangedMessage implements ICompetitionStateChangedMessage {
                constructor(properties?: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage);
                public timeMillis: (number|Long);
                public state: acmcsus.debugjudge.CompetitionState;
                public static create(properties?: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage): acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage;
                public static encode(message: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage;
                public static toObject(message: acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IS2TMessage {
                submissionResultMessage?: (acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage|null);
            }

            class S2TMessage implements IS2TMessage {
                constructor(properties?: acmcsus.debugjudge.S2CMessage.IS2TMessage);
                public submissionResultMessage?: (acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage|null);
                public value?: "submissionResultMessage";
                public static create(properties?: acmcsus.debugjudge.S2CMessage.IS2TMessage): acmcsus.debugjudge.S2CMessage.S2TMessage;
                public static encode(message: acmcsus.debugjudge.S2CMessage.IS2TMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.IS2TMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.S2TMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.S2TMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.S2TMessage;
                public static toObject(message: acmcsus.debugjudge.S2CMessage.S2TMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace S2TMessage {

                interface ISubmissionJudgedMessage {
                    submissionId?: (number|Long|null);
                    result?: (acmcsus.debugjudge.SubmissionJudgement|null);
                }

                class SubmissionJudgedMessage implements ISubmissionJudgedMessage {
                    constructor(properties?: acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage);
                    public submissionId: (number|Long);
                    public result: acmcsus.debugjudge.SubmissionJudgement;
                    public static create(properties?: acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage): acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage;
                    public static encode(message: acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage;
                    public static toObject(message: acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IS2JMessage {
                assignedSubmissionMessage?: (acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage|null);
                kickMessage?: (acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage|null);
            }

            class S2JMessage implements IS2JMessage {
                constructor(properties?: acmcsus.debugjudge.S2CMessage.IS2JMessage);
                public assignedSubmissionMessage?: (acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage|null);
                public kickMessage?: (acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage|null);
                public value?: ("assignedSubmissionMessage"|"kickMessage");
                public static create(properties?: acmcsus.debugjudge.S2CMessage.IS2JMessage): acmcsus.debugjudge.S2CMessage.S2JMessage;
                public static encode(message: acmcsus.debugjudge.S2CMessage.IS2JMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.IS2JMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.S2JMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.S2JMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.S2JMessage;
                public static toObject(message: acmcsus.debugjudge.S2CMessage.S2JMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace S2JMessage {

                interface IAssignedSubmissionMessage {
                    submissionId?: (number|Long|null);
                    submissionId2?: (number|Long|null);
                }

                class AssignedSubmissionMessage implements IAssignedSubmissionMessage {
                    constructor(properties?: acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage);
                    public submissionId: (number|Long);
                    public submissionId2: (number|Long);
                    public value?: ("submissionId"|"submissionId2");
                    public static create(properties?: acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage): acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage;
                    public static encode(message: acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage;
                    public static toObject(message: acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IKickMessage {
                    message?: (string|null);
                }

                class KickMessage implements IKickMessage {
                    constructor(properties?: acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage);
                    public message: string;
                    public static create(properties?: acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage): acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage;
                    public static encode(message: acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage;
                    public static toObject(message: acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
