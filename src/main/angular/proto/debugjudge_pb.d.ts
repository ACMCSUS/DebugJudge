import * as $protobuf from "protobufjs";

export namespace acmcsus {

    namespace debugjudge {

        interface IC2SMessage {
            loginMessage?: (acmcsus.debugjudge.C2SMessage.ILoginMessage|null);
        }

        class C2SMessage implements IC2SMessage {
            constructor(properties?: acmcsus.debugjudge.IC2SMessage);
            public loginMessage?: (acmcsus.debugjudge.C2SMessage.ILoginMessage|null);
            public value?: "loginMessage";
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
        }

        interface IS2CMessage {
            debugMessage?: (acmcsus.debugjudge.S2CMessage.IDebugMessage|null);
            alertMessage?: (acmcsus.debugjudge.S2CMessage.IAlertMessage|null);
            loginResultMessage?: (acmcsus.debugjudge.S2CMessage.ILoginResultMessage|null);
            notificationMessage?: (acmcsus.debugjudge.S2CMessage.INotificationMessage|null);
            competitionStateChangeMessage?: (acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage|null);
        }

        class S2CMessage implements IS2CMessage {
            constructor(properties?: acmcsus.debugjudge.IS2CMessage);
            public debugMessage?: (acmcsus.debugjudge.S2CMessage.IDebugMessage|null);
            public alertMessage?: (acmcsus.debugjudge.S2CMessage.IAlertMessage|null);
            public loginResultMessage?: (acmcsus.debugjudge.S2CMessage.ILoginResultMessage|null);
            public notificationMessage?: (acmcsus.debugjudge.S2CMessage.INotificationMessage|null);
            public competitionStateChangeMessage?: (acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage|null);
            public value?: ("debugMessage"|"alertMessage"|"loginResultMessage"|"notificationMessage"|"competitionStateChangeMessage");
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
                    SUCCESS = 0,
                    FAILURE = 1
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

            interface ICompetitionStateChangeMessage {
                timeMillis?: (number|Long|null);
                state?: (acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.CompetitionState|null);
            }

            class CompetitionStateChangeMessage implements ICompetitionStateChangeMessage {
                constructor(properties?: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage);
                public timeMillis: (number|Long);
                public state: acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.CompetitionState;
                public static create(properties?: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage): acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage;
                public static encode(message: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage;
                public static toObject(message: acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace CompetitionStateChangeMessage {

                enum CompetitionState {
                    UNKNOWN = 0,
                    WAITING = 1,
                    STARTED = 2,
                    PAUSED = 3,
                    STOPPED = 5
                }
            }
        }
    }
}
