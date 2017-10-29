import * as $protobuf from "protobufjs";

export namespace acmcsus {

    namespace debugjudge {

        enum CompetitionState {
            UNKNOWN = 0,
            WAITING = 1,
            STARTED = 2,
            PAUSED = 3,
            STOPPED = 5
        }

        interface IStateChangedEvent {
            timeMillis?: (number|Long);
            currentState?: acmcsus.debugjudge.CompetitionState;
        }

        class StateChangedEvent {
            constructor(properties?: acmcsus.debugjudge.IStateChangedEvent);
            public timeMillis: (number|Long);
            public currentState: acmcsus.debugjudge.CompetitionState;
            public static create(properties?: acmcsus.debugjudge.IStateChangedEvent): acmcsus.debugjudge.StateChangedEvent;
            public static encode(message: acmcsus.debugjudge.IStateChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: acmcsus.debugjudge.IStateChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.StateChangedEvent;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.StateChangedEvent;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.StateChangedEvent;
            public static toObject(message: acmcsus.debugjudge.StateChangedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }
}
