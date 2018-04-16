import * as $protobuf from "protobufjs";

/** Namespace acmcsus. */
export namespace acmcsus {

    /** Namespace debugjudge. */
    namespace debugjudge {

        /** Properties of a ProgrammingLanguage. */
        interface IProgrammingLanguage {

            /** ProgrammingLanguage name */
            name?: (string|null);

            /** ProgrammingLanguage compile */
            compile?: (string|null);

            /** ProgrammingLanguage run */
            run?: (string|null);
        }

        /** Represents a ProgrammingLanguage. */
        class ProgrammingLanguage implements IProgrammingLanguage {

            /**
             * Constructs a new ProgrammingLanguage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IProgrammingLanguage);

            /** ProgrammingLanguage name. */
            public name: string;

            /** ProgrammingLanguage compile. */
            public compile: string;

            /** ProgrammingLanguage run. */
            public run: string;

            /**
             * Creates a new ProgrammingLanguage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProgrammingLanguage instance
             */
            public static create(properties?: acmcsus.debugjudge.IProgrammingLanguage): acmcsus.debugjudge.ProgrammingLanguage;

            /**
             * Encodes the specified ProgrammingLanguage message. Does not implicitly {@link acmcsus.debugjudge.ProgrammingLanguage.verify|verify} messages.
             * @param message ProgrammingLanguage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IProgrammingLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProgrammingLanguage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.ProgrammingLanguage.verify|verify} messages.
             * @param message ProgrammingLanguage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IProgrammingLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProgrammingLanguage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProgrammingLanguage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.ProgrammingLanguage;

            /**
             * Decodes a ProgrammingLanguage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProgrammingLanguage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.ProgrammingLanguage;

            /**
             * Verifies a ProgrammingLanguage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProgrammingLanguage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProgrammingLanguage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.ProgrammingLanguage;

            /**
             * Creates a plain object from a ProgrammingLanguage message. Also converts values to other types if specified.
             * @param message ProgrammingLanguage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.ProgrammingLanguage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProgrammingLanguage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ProgrammingLanguage {

            /** Properties of a List. */
            interface IList {

                /** List language */
                language?: (acmcsus.debugjudge.IProgrammingLanguage[]|null);
            }

            /** Represents a List. */
            class List implements IList {

                /**
                 * Constructs a new List.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.ProgrammingLanguage.IList);

                /** List language. */
                public language: acmcsus.debugjudge.IProgrammingLanguage[];

                /**
                 * Creates a new List instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns List instance
                 */
                public static create(properties?: acmcsus.debugjudge.ProgrammingLanguage.IList): acmcsus.debugjudge.ProgrammingLanguage.List;

                /**
                 * Encodes the specified List message. Does not implicitly {@link acmcsus.debugjudge.ProgrammingLanguage.List.verify|verify} messages.
                 * @param message List message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.ProgrammingLanguage.IList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified List message, length delimited. Does not implicitly {@link acmcsus.debugjudge.ProgrammingLanguage.List.verify|verify} messages.
                 * @param message List message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.ProgrammingLanguage.IList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a List message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns List
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.ProgrammingLanguage.List;

                /**
                 * Decodes a List message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns List
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.ProgrammingLanguage.List;

                /**
                 * Verifies a List message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a List message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns List
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.ProgrammingLanguage.List;

                /**
                 * Creates a plain object from a List message. Also converts values to other types if specified.
                 * @param message List
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.ProgrammingLanguage.List, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this List to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** CompetitionState enum. */
        enum CompetitionState {
            UNKNOWN = 0,
            WAITING = 1,
            STARTED = 2,
            PAUSED = 3,
            STOPPED = 4
        }

        /** SubmissionJudgement enum. */
        enum SubmissionJudgement {
            JUDGEMENT_UNKNOWN = 0,
            JUDGEMENT_SUCCESS = 1,
            JUDGEMENT_FAILURE = 2
        }

        /** Properties of an ExecutionResult. */
        interface IExecutionResult {

            /** ExecutionResult resultOut */
            resultOut?: (string|null);

            /** ExecutionResult resultErr */
            resultErr?: (string|null);

            /** ExecutionResult exitCode */
            exitCode?: (number|null);

            /** ExecutionResult timeSeconds */
            timeSeconds?: (number|null);
        }

        /** Represents an ExecutionResult. */
        class ExecutionResult implements IExecutionResult {

            /**
             * Constructs a new ExecutionResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IExecutionResult);

            /** ExecutionResult resultOut. */
            public resultOut: string;

            /** ExecutionResult resultErr. */
            public resultErr: string;

            /** ExecutionResult exitCode. */
            public exitCode: number;

            /** ExecutionResult timeSeconds. */
            public timeSeconds: number;

            /**
             * Creates a new ExecutionResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionResult instance
             */
            public static create(properties?: acmcsus.debugjudge.IExecutionResult): acmcsus.debugjudge.ExecutionResult;

            /**
             * Encodes the specified ExecutionResult message. Does not implicitly {@link acmcsus.debugjudge.ExecutionResult.verify|verify} messages.
             * @param message ExecutionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IExecutionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecutionResult message, length delimited. Does not implicitly {@link acmcsus.debugjudge.ExecutionResult.verify|verify} messages.
             * @param message ExecutionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IExecutionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.ExecutionResult;

            /**
             * Decodes an ExecutionResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecutionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.ExecutionResult;

            /**
             * Verifies an ExecutionResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecutionResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecutionResult
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.ExecutionResult;

            /**
             * Creates a plain object from an ExecutionResult message. Also converts values to other types if specified.
             * @param message ExecutionResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.ExecutionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecutionResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Submission. */
        interface ISubmission {

            /** Submission problemId */
            problemId?: (number|null);

            /** Submission teamId */
            teamId?: (number|null);

            /** Submission submissionTimeSeconds */
            submissionTimeSeconds?: (number|Long|null);

            /** Submission judgeId */
            judgeId?: (number|null);

            /** Submission judgement */
            judgement?: (acmcsus.debugjudge.SubmissionJudgement|null);

            /** Submission judgementMessage */
            judgementMessage?: (string|null);

            /** Submission debuggingSubmission */
            debuggingSubmission?: (acmcsus.debugjudge.Submission.IDebuggingSubmission|null);

            /** Submission algorithmicSubmission */
            algorithmicSubmission?: (acmcsus.debugjudge.Submission.IAlgorithmicSubmission|null);
        }

        /** Represents a Submission. */
        class Submission implements ISubmission {

            /**
             * Constructs a new Submission.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.ISubmission);

            /** Submission problemId. */
            public problemId: number;

            /** Submission teamId. */
            public teamId: number;

            /** Submission submissionTimeSeconds. */
            public submissionTimeSeconds: (number|Long);

            /** Submission judgeId. */
            public judgeId: number;

            /** Submission judgement. */
            public judgement: acmcsus.debugjudge.SubmissionJudgement;

            /** Submission judgementMessage. */
            public judgementMessage: string;

            /** Submission debuggingSubmission. */
            public debuggingSubmission?: (acmcsus.debugjudge.Submission.IDebuggingSubmission|null);

            /** Submission algorithmicSubmission. */
            public algorithmicSubmission?: (acmcsus.debugjudge.Submission.IAlgorithmicSubmission|null);

            /** Submission value. */
            public value?: ("debuggingSubmission"|"algorithmicSubmission");

            /**
             * Creates a new Submission instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Submission instance
             */
            public static create(properties?: acmcsus.debugjudge.ISubmission): acmcsus.debugjudge.Submission;

            /**
             * Encodes the specified Submission message. Does not implicitly {@link acmcsus.debugjudge.Submission.verify|verify} messages.
             * @param message Submission message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.ISubmission, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Submission message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Submission.verify|verify} messages.
             * @param message Submission message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.ISubmission, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Submission message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Submission
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Submission;

            /**
             * Decodes a Submission message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Submission
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Submission;

            /**
             * Verifies a Submission message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Submission message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Submission
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Submission;

            /**
             * Creates a plain object from a Submission message. Also converts values to other types if specified.
             * @param message Submission
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.Submission, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Submission to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Submission {

            /** Properties of a DebuggingSubmission. */
            interface IDebuggingSubmission {

                /** DebuggingSubmission code */
                code?: (string|null);
            }

            /** Represents a DebuggingSubmission. */
            class DebuggingSubmission implements IDebuggingSubmission {

                /**
                 * Constructs a new DebuggingSubmission.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.Submission.IDebuggingSubmission);

                /** DebuggingSubmission code. */
                public code: string;

                /**
                 * Creates a new DebuggingSubmission instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DebuggingSubmission instance
                 */
                public static create(properties?: acmcsus.debugjudge.Submission.IDebuggingSubmission): acmcsus.debugjudge.Submission.DebuggingSubmission;

                /**
                 * Encodes the specified DebuggingSubmission message. Does not implicitly {@link acmcsus.debugjudge.Submission.DebuggingSubmission.verify|verify} messages.
                 * @param message DebuggingSubmission message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.Submission.IDebuggingSubmission, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DebuggingSubmission message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Submission.DebuggingSubmission.verify|verify} messages.
                 * @param message DebuggingSubmission message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.Submission.IDebuggingSubmission, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DebuggingSubmission message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DebuggingSubmission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Submission.DebuggingSubmission;

                /**
                 * Decodes a DebuggingSubmission message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DebuggingSubmission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Submission.DebuggingSubmission;

                /**
                 * Verifies a DebuggingSubmission message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DebuggingSubmission message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DebuggingSubmission
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Submission.DebuggingSubmission;

                /**
                 * Creates a plain object from a DebuggingSubmission message. Also converts values to other types if specified.
                 * @param message DebuggingSubmission
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.Submission.DebuggingSubmission, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DebuggingSubmission to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AlgorithmicSubmission. */
            interface IAlgorithmicSubmission {

                /** AlgorithmicSubmission fileName */
                fileName?: (string|null);

                /** AlgorithmicSubmission sourceCode */
                sourceCode?: (string|null);

                /** AlgorithmicSubmission language */
                language?: (string|null);

                /** AlgorithmicSubmission compileResult */
                compileResult?: (acmcsus.debugjudge.IExecutionResult|null);

                /** AlgorithmicSubmission caseResults */
                caseResults?: ({ [k: string]: acmcsus.debugjudge.IExecutionResult }|null);

                /** AlgorithmicSubmission preliminaryJudgement */
                preliminaryJudgement?: (acmcsus.debugjudge.SubmissionJudgement|null);

                /** AlgorithmicSubmission preliminaryJudgementMessage */
                preliminaryJudgementMessage?: (string|null);
            }

            /** Represents an AlgorithmicSubmission. */
            class AlgorithmicSubmission implements IAlgorithmicSubmission {

                /**
                 * Constructs a new AlgorithmicSubmission.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.Submission.IAlgorithmicSubmission);

                /** AlgorithmicSubmission fileName. */
                public fileName: string;

                /** AlgorithmicSubmission sourceCode. */
                public sourceCode: string;

                /** AlgorithmicSubmission language. */
                public language: string;

                /** AlgorithmicSubmission compileResult. */
                public compileResult?: (acmcsus.debugjudge.IExecutionResult|null);

                /** AlgorithmicSubmission caseResults. */
                public caseResults: { [k: string]: acmcsus.debugjudge.IExecutionResult };

                /** AlgorithmicSubmission preliminaryJudgement. */
                public preliminaryJudgement: acmcsus.debugjudge.SubmissionJudgement;

                /** AlgorithmicSubmission preliminaryJudgementMessage. */
                public preliminaryJudgementMessage: string;

                /**
                 * Creates a new AlgorithmicSubmission instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AlgorithmicSubmission instance
                 */
                public static create(properties?: acmcsus.debugjudge.Submission.IAlgorithmicSubmission): acmcsus.debugjudge.Submission.AlgorithmicSubmission;

                /**
                 * Encodes the specified AlgorithmicSubmission message. Does not implicitly {@link acmcsus.debugjudge.Submission.AlgorithmicSubmission.verify|verify} messages.
                 * @param message AlgorithmicSubmission message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.Submission.IAlgorithmicSubmission, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AlgorithmicSubmission message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Submission.AlgorithmicSubmission.verify|verify} messages.
                 * @param message AlgorithmicSubmission message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.Submission.IAlgorithmicSubmission, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AlgorithmicSubmission message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AlgorithmicSubmission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Submission.AlgorithmicSubmission;

                /**
                 * Decodes an AlgorithmicSubmission message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AlgorithmicSubmission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Submission.AlgorithmicSubmission;

                /**
                 * Verifies an AlgorithmicSubmission message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AlgorithmicSubmission message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AlgorithmicSubmission
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Submission.AlgorithmicSubmission;

                /**
                 * Creates a plain object from an AlgorithmicSubmission message. Also converts values to other types if specified.
                 * @param message AlgorithmicSubmission
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.Submission.AlgorithmicSubmission, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AlgorithmicSubmission to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a List. */
            interface IList {

                /** List value */
                value?: (acmcsus.debugjudge.ISubmission[]|null);
            }

            /** Represents a List. */
            class List implements IList {

                /**
                 * Constructs a new List.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.Submission.IList);

                /** List value. */
                public value: acmcsus.debugjudge.ISubmission[];

                /**
                 * Creates a new List instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns List instance
                 */
                public static create(properties?: acmcsus.debugjudge.Submission.IList): acmcsus.debugjudge.Submission.List;

                /**
                 * Encodes the specified List message. Does not implicitly {@link acmcsus.debugjudge.Submission.List.verify|verify} messages.
                 * @param message List message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.Submission.IList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified List message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Submission.List.verify|verify} messages.
                 * @param message List message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.Submission.IList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a List message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns List
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Submission.List;

                /**
                 * Decodes a List message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns List
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Submission.List;

                /**
                 * Verifies a List message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a List message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns List
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Submission.List;

                /**
                 * Creates a plain object from a List message. Also converts values to other types if specified.
                 * @param message List
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.Submission.List, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this List to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Profile. */
        interface IProfile {

            /** Profile id */
            id?: (number|null);

            /** Profile name */
            name?: (string|null);

            /** Profile profileType */
            profileType?: (acmcsus.debugjudge.Profile.ProfileType|null);
        }

        /** Represents a Profile. */
        class Profile implements IProfile {

            /**
             * Constructs a new Profile.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IProfile);

            /** Profile id. */
            public id: number;

            /** Profile name. */
            public name: string;

            /** Profile profileType. */
            public profileType: acmcsus.debugjudge.Profile.ProfileType;

            /**
             * Creates a new Profile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Profile instance
             */
            public static create(properties?: acmcsus.debugjudge.IProfile): acmcsus.debugjudge.Profile;

            /**
             * Encodes the specified Profile message. Does not implicitly {@link acmcsus.debugjudge.Profile.verify|verify} messages.
             * @param message Profile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Profile message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Profile.verify|verify} messages.
             * @param message Profile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Profile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Profile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Profile;

            /**
             * Decodes a Profile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Profile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Profile;

            /**
             * Verifies a Profile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Profile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Profile
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Profile;

            /**
             * Creates a plain object from a Profile message. Also converts values to other types if specified.
             * @param message Profile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.Profile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Profile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Profile {

            /** ProfileType enum. */
            enum ProfileType {
                TEAM = 0,
                JUDGE = 1,
                ADMIN = 2,
                AUTO_JUDGE = 3,
                REGISTRAR = 4,
                BALLOON_RUNNER = 5
            }

            /** Properties of a List. */
            interface IList {

                /** List value */
                value?: (acmcsus.debugjudge.IProfile[]|null);
            }

            /** Represents a List. */
            class List implements IList {

                /**
                 * Constructs a new List.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.Profile.IList);

                /** List value. */
                public value: acmcsus.debugjudge.IProfile[];

                /**
                 * Creates a new List instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns List instance
                 */
                public static create(properties?: acmcsus.debugjudge.Profile.IList): acmcsus.debugjudge.Profile.List;

                /**
                 * Encodes the specified List message. Does not implicitly {@link acmcsus.debugjudge.Profile.List.verify|verify} messages.
                 * @param message List message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.Profile.IList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified List message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Profile.List.verify|verify} messages.
                 * @param message List message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.Profile.IList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a List message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns List
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Profile.List;

                /**
                 * Decodes a List message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns List
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Profile.List;

                /**
                 * Verifies a List message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a List message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns List
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Profile.List;

                /**
                 * Creates a plain object from a List message. Also converts values to other types if specified.
                 * @param message List
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.Profile.List, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this List to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Problem. */
        interface IProblem {

            /** Problem id */
            id?: (number|null);

            /** Problem title */
            title?: (string|null);

            /** Problem orderIndex */
            orderIndex?: (number|null);

            /** Problem color */
            color?: (string|null);

            /** Problem descriptionText */
            descriptionText?: (string|null);

            /** Problem descriptionFile */
            descriptionFile?: (string|null);

            /** Problem debuggingProblem */
            debuggingProblem?: (acmcsus.debugjudge.Problem.IDebuggingProblemValue|null);

            /** Problem algorithmicProblem */
            algorithmicProblem?: (acmcsus.debugjudge.Problem.IAlgorithmicProblemValue|null);
        }

        /** Represents a Problem. */
        class Problem implements IProblem {

            /**
             * Constructs a new Problem.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IProblem);

            /** Problem id. */
            public id: number;

            /** Problem title. */
            public title: string;

            /** Problem orderIndex. */
            public orderIndex: number;

            /** Problem color. */
            public color: string;

            /** Problem descriptionText. */
            public descriptionText: string;

            /** Problem descriptionFile. */
            public descriptionFile: string;

            /** Problem debuggingProblem. */
            public debuggingProblem?: (acmcsus.debugjudge.Problem.IDebuggingProblemValue|null);

            /** Problem algorithmicProblem. */
            public algorithmicProblem?: (acmcsus.debugjudge.Problem.IAlgorithmicProblemValue|null);

            /** Problem description. */
            public description?: ("descriptionText"|"descriptionFile");

            /** Problem value. */
            public value?: ("debuggingProblem"|"algorithmicProblem");

            /**
             * Creates a new Problem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Problem instance
             */
            public static create(properties?: acmcsus.debugjudge.IProblem): acmcsus.debugjudge.Problem;

            /**
             * Encodes the specified Problem message. Does not implicitly {@link acmcsus.debugjudge.Problem.verify|verify} messages.
             * @param message Problem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IProblem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Problem message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.verify|verify} messages.
             * @param message Problem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IProblem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Problem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Problem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Problem;

            /**
             * Decodes a Problem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Problem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Problem;

            /**
             * Verifies a Problem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Problem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Problem
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Problem;

            /**
             * Creates a plain object from a Problem message. Also converts values to other types if specified.
             * @param message Problem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.Problem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Problem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Problem {

            /** Properties of a DebuggingProblemValue. */
            interface IDebuggingProblemValue {

                /** DebuggingProblemValue language */
                language?: (string|null);

                /** DebuggingProblemValue precode */
                precode?: (string|null);

                /** DebuggingProblemValue code */
                code?: (string|null);

                /** DebuggingProblemValue postcode */
                postcode?: (string|null);

                /** DebuggingProblemValue answer */
                answer?: (string|null);

                /** DebuggingProblemValue definitionFile */
                definitionFile?: (string|null);
            }

            /** Represents a DebuggingProblemValue. */
            class DebuggingProblemValue implements IDebuggingProblemValue {

                /**
                 * Constructs a new DebuggingProblemValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.Problem.IDebuggingProblemValue);

                /** DebuggingProblemValue language. */
                public language: string;

                /** DebuggingProblemValue precode. */
                public precode: string;

                /** DebuggingProblemValue code. */
                public code: string;

                /** DebuggingProblemValue postcode. */
                public postcode: string;

                /** DebuggingProblemValue answer. */
                public answer: string;

                /** DebuggingProblemValue definitionFile. */
                public definitionFile: string;

                /**
                 * Creates a new DebuggingProblemValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DebuggingProblemValue instance
                 */
                public static create(properties?: acmcsus.debugjudge.Problem.IDebuggingProblemValue): acmcsus.debugjudge.Problem.DebuggingProblemValue;

                /**
                 * Encodes the specified DebuggingProblemValue message. Does not implicitly {@link acmcsus.debugjudge.Problem.DebuggingProblemValue.verify|verify} messages.
                 * @param message DebuggingProblemValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.Problem.IDebuggingProblemValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DebuggingProblemValue message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.DebuggingProblemValue.verify|verify} messages.
                 * @param message DebuggingProblemValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.Problem.IDebuggingProblemValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DebuggingProblemValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DebuggingProblemValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Problem.DebuggingProblemValue;

                /**
                 * Decodes a DebuggingProblemValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DebuggingProblemValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Problem.DebuggingProblemValue;

                /**
                 * Verifies a DebuggingProblemValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DebuggingProblemValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DebuggingProblemValue
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Problem.DebuggingProblemValue;

                /**
                 * Creates a plain object from a DebuggingProblemValue message. Also converts values to other types if specified.
                 * @param message DebuggingProblemValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.Problem.DebuggingProblemValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DebuggingProblemValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AlgorithmicProblemValue. */
            interface IAlgorithmicProblemValue {

                /** AlgorithmicProblemValue testCaseDirectory */
                testCaseDirectory?: (string|null);

                /** AlgorithmicProblemValue timeLimitSeconds */
                timeLimitSeconds?: (number|null);

                /** AlgorithmicProblemValue memoryLimitMegabytes */
                memoryLimitMegabytes?: (number|null);

                /** AlgorithmicProblemValue validatorProgram */
                validatorProgram?: (string|null);

                /** AlgorithmicProblemValue validatorScanner */
                validatorScanner?: (acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner|null);

                /** AlgorithmicProblemValue testCase */
                testCase?: (acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase[]|null);
            }

            /** Represents an AlgorithmicProblemValue. */
            class AlgorithmicProblemValue implements IAlgorithmicProblemValue {

                /**
                 * Constructs a new AlgorithmicProblemValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.Problem.IAlgorithmicProblemValue);

                /** AlgorithmicProblemValue testCaseDirectory. */
                public testCaseDirectory: string;

                /** AlgorithmicProblemValue timeLimitSeconds. */
                public timeLimitSeconds: number;

                /** AlgorithmicProblemValue memoryLimitMegabytes. */
                public memoryLimitMegabytes: number;

                /** AlgorithmicProblemValue validatorProgram. */
                public validatorProgram: string;

                /** AlgorithmicProblemValue validatorScanner. */
                public validatorScanner?: (acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner|null);

                /** AlgorithmicProblemValue testCase. */
                public testCase: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase[];

                /** AlgorithmicProblemValue validator. */
                public validator?: ("validatorProgram"|"validatorScanner");

                /**
                 * Creates a new AlgorithmicProblemValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AlgorithmicProblemValue instance
                 */
                public static create(properties?: acmcsus.debugjudge.Problem.IAlgorithmicProblemValue): acmcsus.debugjudge.Problem.AlgorithmicProblemValue;

                /**
                 * Encodes the specified AlgorithmicProblemValue message. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.verify|verify} messages.
                 * @param message AlgorithmicProblemValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.Problem.IAlgorithmicProblemValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AlgorithmicProblemValue message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.verify|verify} messages.
                 * @param message AlgorithmicProblemValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.Problem.IAlgorithmicProblemValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AlgorithmicProblemValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AlgorithmicProblemValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Problem.AlgorithmicProblemValue;

                /**
                 * Decodes an AlgorithmicProblemValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AlgorithmicProblemValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Problem.AlgorithmicProblemValue;

                /**
                 * Verifies an AlgorithmicProblemValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AlgorithmicProblemValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AlgorithmicProblemValue
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Problem.AlgorithmicProblemValue;

                /**
                 * Creates a plain object from an AlgorithmicProblemValue message. Also converts values to other types if specified.
                 * @param message AlgorithmicProblemValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.Problem.AlgorithmicProblemValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AlgorithmicProblemValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace AlgorithmicProblemValue {

                /** Properties of a ValidatorScanner. */
                interface IValidatorScanner {

                    /** ValidatorScanner floatPrecision */
                    floatPrecision?: (number|null);

                    /** ValidatorScanner whitespaceSensitive */
                    whitespaceSensitive?: (boolean|null);

                    /** ValidatorScanner trailingNewlineSensitive */
                    trailingNewlineSensitive?: (boolean|null);
                }

                /** Represents a ValidatorScanner. */
                class ValidatorScanner implements IValidatorScanner {

                    /**
                     * Constructs a new ValidatorScanner.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner);

                    /** ValidatorScanner floatPrecision. */
                    public floatPrecision: number;

                    /** ValidatorScanner whitespaceSensitive. */
                    public whitespaceSensitive: boolean;

                    /** ValidatorScanner trailingNewlineSensitive. */
                    public trailingNewlineSensitive: boolean;

                    /**
                     * Creates a new ValidatorScanner instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValidatorScanner instance
                     */
                    public static create(properties?: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner): acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner;

                    /**
                     * Encodes the specified ValidatorScanner message. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner.verify|verify} messages.
                     * @param message ValidatorScanner message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValidatorScanner message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner.verify|verify} messages.
                     * @param message ValidatorScanner message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValidatorScanner message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValidatorScanner
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner;

                    /**
                     * Decodes a ValidatorScanner message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValidatorScanner
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner;

                    /**
                     * Verifies a ValidatorScanner message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValidatorScanner message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValidatorScanner
                     */
                    public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner;

                    /**
                     * Creates a plain object from a ValidatorScanner message. Also converts values to other types if specified.
                     * @param message ValidatorScanner
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValidatorScanner to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AlgorithmicTestCase. */
                interface IAlgorithmicTestCase {

                    /** AlgorithmicTestCase input */
                    input?: (string|null);

                    /** AlgorithmicTestCase expected */
                    expected?: (string|null);
                }

                /** Represents an AlgorithmicTestCase. */
                class AlgorithmicTestCase implements IAlgorithmicTestCase {

                    /**
                     * Constructs a new AlgorithmicTestCase.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase);

                    /** AlgorithmicTestCase input. */
                    public input: string;

                    /** AlgorithmicTestCase expected. */
                    public expected: string;

                    /**
                     * Creates a new AlgorithmicTestCase instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AlgorithmicTestCase instance
                     */
                    public static create(properties?: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase): acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase;

                    /**
                     * Encodes the specified AlgorithmicTestCase message. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.verify|verify} messages.
                     * @param message AlgorithmicTestCase message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AlgorithmicTestCase message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.verify|verify} messages.
                     * @param message AlgorithmicTestCase message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AlgorithmicTestCase message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AlgorithmicTestCase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase;

                    /**
                     * Decodes an AlgorithmicTestCase message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AlgorithmicTestCase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase;

                    /**
                     * Verifies an AlgorithmicTestCase message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AlgorithmicTestCase message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AlgorithmicTestCase
                     */
                    public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase;

                    /**
                     * Creates a plain object from an AlgorithmicTestCase message. Also converts values to other types if specified.
                     * @param message AlgorithmicTestCase
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AlgorithmicTestCase to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a List. */
            interface IList {

                /** List value */
                value?: (acmcsus.debugjudge.IProblem[]|null);
            }

            /** Represents a List. */
            class List implements IList {

                /**
                 * Constructs a new List.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.Problem.IList);

                /** List value. */
                public value: acmcsus.debugjudge.IProblem[];

                /**
                 * Creates a new List instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns List instance
                 */
                public static create(properties?: acmcsus.debugjudge.Problem.IList): acmcsus.debugjudge.Problem.List;

                /**
                 * Encodes the specified List message. Does not implicitly {@link acmcsus.debugjudge.Problem.List.verify|verify} messages.
                 * @param message List message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.Problem.IList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified List message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.List.verify|verify} messages.
                 * @param message List message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.Problem.IList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a List message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns List
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Problem.List;

                /**
                 * Decodes a List message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns List
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Problem.List;

                /**
                 * Verifies a List message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a List message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns List
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Problem.List;

                /**
                 * Creates a plain object from a List message. Also converts values to other types if specified.
                 * @param message List
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.Problem.List, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this List to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Scoreboard. */
        interface IScoreboard {

            /** Scoreboard row */
            row?: (acmcsus.debugjudge.Scoreboard.IScoreboardRow[]|null);

            /** Scoreboard updateTimeMillis */
            updateTimeMillis?: (number|Long|null);
        }

        /** Represents a Scoreboard. */
        class Scoreboard implements IScoreboard {

            /**
             * Constructs a new Scoreboard.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IScoreboard);

            /** Scoreboard row. */
            public row: acmcsus.debugjudge.Scoreboard.IScoreboardRow[];

            /** Scoreboard updateTimeMillis. */
            public updateTimeMillis: (number|Long);

            /**
             * Creates a new Scoreboard instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Scoreboard instance
             */
            public static create(properties?: acmcsus.debugjudge.IScoreboard): acmcsus.debugjudge.Scoreboard;

            /**
             * Encodes the specified Scoreboard message. Does not implicitly {@link acmcsus.debugjudge.Scoreboard.verify|verify} messages.
             * @param message Scoreboard message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IScoreboard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Scoreboard message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Scoreboard.verify|verify} messages.
             * @param message Scoreboard message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IScoreboard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Scoreboard message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Scoreboard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Scoreboard;

            /**
             * Decodes a Scoreboard message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Scoreboard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Scoreboard;

            /**
             * Verifies a Scoreboard message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Scoreboard message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Scoreboard
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Scoreboard;

            /**
             * Creates a plain object from a Scoreboard message. Also converts values to other types if specified.
             * @param message Scoreboard
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.Scoreboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Scoreboard to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Scoreboard {

            /** Properties of a ScoreboardRow. */
            interface IScoreboardRow {

                /** ScoreboardRow profileName */
                profileName?: (string|null);

                /** ScoreboardRow problemAttempts */
                problemAttempts?: ({ [k: string]: number }|null);

                /** ScoreboardRow problemCompletions */
                problemCompletions?: ({ [k: string]: boolean }|null);

                /** ScoreboardRow place */
                place?: (number|null);

                /** ScoreboardRow score */
                score?: (number|null);

                /** ScoreboardRow penalty */
                penalty?: (number|null);
            }

            /** Represents a ScoreboardRow. */
            class ScoreboardRow implements IScoreboardRow {

                /**
                 * Constructs a new ScoreboardRow.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.Scoreboard.IScoreboardRow);

                /** ScoreboardRow profileName. */
                public profileName: string;

                /** ScoreboardRow problemAttempts. */
                public problemAttempts: { [k: string]: number };

                /** ScoreboardRow problemCompletions. */
                public problemCompletions: { [k: string]: boolean };

                /** ScoreboardRow place. */
                public place: number;

                /** ScoreboardRow score. */
                public score: number;

                /** ScoreboardRow penalty. */
                public penalty: number;

                /**
                 * Creates a new ScoreboardRow instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ScoreboardRow instance
                 */
                public static create(properties?: acmcsus.debugjudge.Scoreboard.IScoreboardRow): acmcsus.debugjudge.Scoreboard.ScoreboardRow;

                /**
                 * Encodes the specified ScoreboardRow message. Does not implicitly {@link acmcsus.debugjudge.Scoreboard.ScoreboardRow.verify|verify} messages.
                 * @param message ScoreboardRow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.Scoreboard.IScoreboardRow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ScoreboardRow message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Scoreboard.ScoreboardRow.verify|verify} messages.
                 * @param message ScoreboardRow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.Scoreboard.IScoreboardRow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ScoreboardRow message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ScoreboardRow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.Scoreboard.ScoreboardRow;

                /**
                 * Decodes a ScoreboardRow message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ScoreboardRow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.Scoreboard.ScoreboardRow;

                /**
                 * Verifies a ScoreboardRow message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ScoreboardRow message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ScoreboardRow
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.Scoreboard.ScoreboardRow;

                /**
                 * Creates a plain object from a ScoreboardRow message. Also converts values to other types if specified.
                 * @param message ScoreboardRow
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.Scoreboard.ScoreboardRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ScoreboardRow to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a C2SMessage. */
        interface IC2SMessage {

            /** C2SMessage t2sMessage */
            t2sMessage?: (acmcsus.debugjudge.IT2SMessage|null);

            /** C2SMessage j2sMessage */
            j2sMessage?: (acmcsus.debugjudge.IJ2SMessage|null);

            /** C2SMessage a2sMessage */
            a2sMessage?: (acmcsus.debugjudge.IA2SMessage|null);

            /** C2SMessage aj2sMessage */
            aj2sMessage?: (acmcsus.debugjudge.IAJ2SMessage|null);

            /** C2SMessage b2sMessage */
            b2sMessage?: (acmcsus.debugjudge.IB2SMessage|null);

            /** C2SMessage rj2sMessage */
            rj2sMessage?: (acmcsus.debugjudge.IR2SMessage|null);

            /** C2SMessage loginMessage */
            loginMessage?: (acmcsus.debugjudge.C2SMessage.ILoginMessage|null);
        }

        /** Represents a C2SMessage. */
        class C2SMessage implements IC2SMessage {

            /**
             * Constructs a new C2SMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IC2SMessage);

            /** C2SMessage t2sMessage. */
            public t2sMessage?: (acmcsus.debugjudge.IT2SMessage|null);

            /** C2SMessage j2sMessage. */
            public j2sMessage?: (acmcsus.debugjudge.IJ2SMessage|null);

            /** C2SMessage a2sMessage. */
            public a2sMessage?: (acmcsus.debugjudge.IA2SMessage|null);

            /** C2SMessage aj2sMessage. */
            public aj2sMessage?: (acmcsus.debugjudge.IAJ2SMessage|null);

            /** C2SMessage b2sMessage. */
            public b2sMessage?: (acmcsus.debugjudge.IB2SMessage|null);

            /** C2SMessage rj2sMessage. */
            public rj2sMessage?: (acmcsus.debugjudge.IR2SMessage|null);

            /** C2SMessage loginMessage. */
            public loginMessage?: (acmcsus.debugjudge.C2SMessage.ILoginMessage|null);

            /** C2SMessage value. */
            public value?: ("t2sMessage"|"j2sMessage"|"a2sMessage"|"aj2sMessage"|"b2sMessage"|"rj2sMessage"|"loginMessage");

            /**
             * Creates a new C2SMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2SMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IC2SMessage): acmcsus.debugjudge.C2SMessage;

            /**
             * Encodes the specified C2SMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.verify|verify} messages.
             * @param message C2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IC2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.verify|verify} messages.
             * @param message C2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IC2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2SMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage;

            /**
             * Decodes a C2SMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage;

            /**
             * Verifies a C2SMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2SMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2SMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage;

            /**
             * Creates a plain object from a C2SMessage message. Also converts values to other types if specified.
             * @param message C2SMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.C2SMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2SMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace C2SMessage {

            /** Properties of a LoginMessage. */
            interface ILoginMessage {

                /** LoginMessage nonce */
                nonce?: (string|null);

                /** LoginMessage id */
                id?: (number|null);

                /** LoginMessage pass */
                pass?: (string|null);
            }

            /** Represents a LoginMessage. */
            class LoginMessage implements ILoginMessage {

                /**
                 * Constructs a new LoginMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.C2SMessage.ILoginMessage);

                /** LoginMessage nonce. */
                public nonce: string;

                /** LoginMessage id. */
                public id: number;

                /** LoginMessage pass. */
                public pass: string;

                /**
                 * Creates a new LoginMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoginMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.C2SMessage.ILoginMessage): acmcsus.debugjudge.C2SMessage.LoginMessage;

                /**
                 * Encodes the specified LoginMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.LoginMessage.verify|verify} messages.
                 * @param message LoginMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.C2SMessage.ILoginMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LoginMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.LoginMessage.verify|verify} messages.
                 * @param message LoginMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.C2SMessage.ILoginMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LoginMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoginMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.C2SMessage.LoginMessage;

                /**
                 * Decodes a LoginMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoginMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.C2SMessage.LoginMessage;

                /**
                 * Verifies a LoginMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LoginMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LoginMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.C2SMessage.LoginMessage;

                /**
                 * Creates a plain object from a LoginMessage message. Also converts values to other types if specified.
                 * @param message LoginMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.C2SMessage.LoginMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LoginMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a S2CMessage. */
        interface IS2CMessage {

            /** S2CMessage s2tMessage */
            s2tMessage?: (acmcsus.debugjudge.IS2TMessage|null);

            /** S2CMessage s2jMessage */
            s2jMessage?: (acmcsus.debugjudge.IS2JMessage|null);

            /** S2CMessage s2aMessage */
            s2aMessage?: (acmcsus.debugjudge.IS2AMessage|null);

            /** S2CMessage s2ajMessage */
            s2ajMessage?: (acmcsus.debugjudge.IS2AJMessage|null);

            /** S2CMessage debugMessage */
            debugMessage?: (acmcsus.debugjudge.S2CMessage.IDebugMessage|null);

            /** S2CMessage alertMessage */
            alertMessage?: (acmcsus.debugjudge.S2CMessage.IAlertMessage|null);

            /** S2CMessage loginResultMessage */
            loginResultMessage?: (acmcsus.debugjudge.S2CMessage.ILoginResultMessage|null);

            /** S2CMessage notificationMessage */
            notificationMessage?: (acmcsus.debugjudge.S2CMessage.INotificationMessage|null);

            /** S2CMessage competitionStateChangedMessage */
            competitionStateChangedMessage?: (acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage|null);

            /** S2CMessage scoreboardUpdateMessage */
            scoreboardUpdateMessage?: (acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage|null);

            /** S2CMessage reloadSubmissionMessage */
            reloadSubmissionMessage?: (acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage|null);

            /** S2CMessage reloadSubmissionsMessage */
            reloadSubmissionsMessage?: (acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage|null);

            /** S2CMessage reloadProblemsMessage */
            reloadProblemsMessage?: (acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage|null);
        }

        /** Represents a S2CMessage. */
        class S2CMessage implements IS2CMessage {

            /**
             * Constructs a new S2CMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IS2CMessage);

            /** S2CMessage s2tMessage. */
            public s2tMessage?: (acmcsus.debugjudge.IS2TMessage|null);

            /** S2CMessage s2jMessage. */
            public s2jMessage?: (acmcsus.debugjudge.IS2JMessage|null);

            /** S2CMessage s2aMessage. */
            public s2aMessage?: (acmcsus.debugjudge.IS2AMessage|null);

            /** S2CMessage s2ajMessage. */
            public s2ajMessage?: (acmcsus.debugjudge.IS2AJMessage|null);

            /** S2CMessage debugMessage. */
            public debugMessage?: (acmcsus.debugjudge.S2CMessage.IDebugMessage|null);

            /** S2CMessage alertMessage. */
            public alertMessage?: (acmcsus.debugjudge.S2CMessage.IAlertMessage|null);

            /** S2CMessage loginResultMessage. */
            public loginResultMessage?: (acmcsus.debugjudge.S2CMessage.ILoginResultMessage|null);

            /** S2CMessage notificationMessage. */
            public notificationMessage?: (acmcsus.debugjudge.S2CMessage.INotificationMessage|null);

            /** S2CMessage competitionStateChangedMessage. */
            public competitionStateChangedMessage?: (acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage|null);

            /** S2CMessage scoreboardUpdateMessage. */
            public scoreboardUpdateMessage?: (acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage|null);

            /** S2CMessage reloadSubmissionMessage. */
            public reloadSubmissionMessage?: (acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage|null);

            /** S2CMessage reloadSubmissionsMessage. */
            public reloadSubmissionsMessage?: (acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage|null);

            /** S2CMessage reloadProblemsMessage. */
            public reloadProblemsMessage?: (acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage|null);

            /** S2CMessage value. */
            public value?: ("s2tMessage"|"s2jMessage"|"s2aMessage"|"s2ajMessage"|"debugMessage"|"alertMessage"|"loginResultMessage"|"notificationMessage"|"competitionStateChangedMessage"|"scoreboardUpdateMessage"|"reloadSubmissionMessage"|"reloadSubmissionsMessage"|"reloadProblemsMessage");

            /**
             * Creates a new S2CMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2CMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IS2CMessage): acmcsus.debugjudge.S2CMessage;

            /**
             * Encodes the specified S2CMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.verify|verify} messages.
             * @param message S2CMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IS2CMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2CMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.verify|verify} messages.
             * @param message S2CMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IS2CMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2CMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2CMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage;

            /**
             * Decodes a S2CMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2CMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage;

            /**
             * Verifies a S2CMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2CMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2CMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage;

            /**
             * Creates a plain object from a S2CMessage message. Also converts values to other types if specified.
             * @param message S2CMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.S2CMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2CMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace S2CMessage {

            /** Properties of a DebugMessage. */
            interface IDebugMessage {

                /** DebugMessage message */
                message?: (string|null);
            }

            /** Represents a DebugMessage. */
            class DebugMessage implements IDebugMessage {

                /**
                 * Constructs a new DebugMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2CMessage.IDebugMessage);

                /** DebugMessage message. */
                public message: string;

                /**
                 * Creates a new DebugMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DebugMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2CMessage.IDebugMessage): acmcsus.debugjudge.S2CMessage.DebugMessage;

                /**
                 * Encodes the specified DebugMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.DebugMessage.verify|verify} messages.
                 * @param message DebugMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2CMessage.IDebugMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DebugMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.DebugMessage.verify|verify} messages.
                 * @param message DebugMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.IDebugMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DebugMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DebugMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.DebugMessage;

                /**
                 * Decodes a DebugMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DebugMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.DebugMessage;

                /**
                 * Verifies a DebugMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DebugMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DebugMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.DebugMessage;

                /**
                 * Creates a plain object from a DebugMessage message. Also converts values to other types if specified.
                 * @param message DebugMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2CMessage.DebugMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DebugMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AlertMessage. */
            interface IAlertMessage {

                /** AlertMessage message */
                message?: (string|null);
            }

            /** Represents an AlertMessage. */
            class AlertMessage implements IAlertMessage {

                /**
                 * Constructs a new AlertMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2CMessage.IAlertMessage);

                /** AlertMessage message. */
                public message: string;

                /**
                 * Creates a new AlertMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AlertMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2CMessage.IAlertMessage): acmcsus.debugjudge.S2CMessage.AlertMessage;

                /**
                 * Encodes the specified AlertMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.AlertMessage.verify|verify} messages.
                 * @param message AlertMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2CMessage.IAlertMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AlertMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.AlertMessage.verify|verify} messages.
                 * @param message AlertMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.IAlertMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AlertMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AlertMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.AlertMessage;

                /**
                 * Decodes an AlertMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AlertMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.AlertMessage;

                /**
                 * Verifies an AlertMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AlertMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AlertMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.AlertMessage;

                /**
                 * Creates a plain object from an AlertMessage message. Also converts values to other types if specified.
                 * @param message AlertMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2CMessage.AlertMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AlertMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LoginResultMessage. */
            interface ILoginResultMessage {

                /** LoginResultMessage value */
                value?: (acmcsus.debugjudge.S2CMessage.LoginResultMessage.LoginResult|null);

                /** LoginResultMessage profile */
                profile?: (acmcsus.debugjudge.IProfile|null);
            }

            /** Represents a LoginResultMessage. */
            class LoginResultMessage implements ILoginResultMessage {

                /**
                 * Constructs a new LoginResultMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2CMessage.ILoginResultMessage);

                /** LoginResultMessage value. */
                public value: acmcsus.debugjudge.S2CMessage.LoginResultMessage.LoginResult;

                /** LoginResultMessage profile. */
                public profile?: (acmcsus.debugjudge.IProfile|null);

                /**
                 * Creates a new LoginResultMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoginResultMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2CMessage.ILoginResultMessage): acmcsus.debugjudge.S2CMessage.LoginResultMessage;

                /**
                 * Encodes the specified LoginResultMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.LoginResultMessage.verify|verify} messages.
                 * @param message LoginResultMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2CMessage.ILoginResultMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LoginResultMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.LoginResultMessage.verify|verify} messages.
                 * @param message LoginResultMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.ILoginResultMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LoginResultMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoginResultMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.LoginResultMessage;

                /**
                 * Decodes a LoginResultMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoginResultMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.LoginResultMessage;

                /**
                 * Verifies a LoginResultMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LoginResultMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LoginResultMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.LoginResultMessage;

                /**
                 * Creates a plain object from a LoginResultMessage message. Also converts values to other types if specified.
                 * @param message LoginResultMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2CMessage.LoginResultMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LoginResultMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace LoginResultMessage {

                /** LoginResult enum. */
                enum LoginResult {
                    UNKNOWN = 0,
                    SUCCESS = 1,
                    FAILURE = 2
                }
            }

            /** Properties of a NotificationMessage. */
            interface INotificationMessage {

                /** NotificationMessage message */
                message?: (string|null);

                /** NotificationMessage icon */
                icon?: (string|null);
            }

            /** Represents a NotificationMessage. */
            class NotificationMessage implements INotificationMessage {

                /**
                 * Constructs a new NotificationMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2CMessage.INotificationMessage);

                /** NotificationMessage message. */
                public message: string;

                /** NotificationMessage icon. */
                public icon: string;

                /**
                 * Creates a new NotificationMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotificationMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2CMessage.INotificationMessage): acmcsus.debugjudge.S2CMessage.NotificationMessage;

                /**
                 * Encodes the specified NotificationMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.NotificationMessage.verify|verify} messages.
                 * @param message NotificationMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2CMessage.INotificationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotificationMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.NotificationMessage.verify|verify} messages.
                 * @param message NotificationMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.INotificationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotificationMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotificationMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.NotificationMessage;

                /**
                 * Decodes a NotificationMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotificationMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.NotificationMessage;

                /**
                 * Verifies a NotificationMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotificationMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotificationMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.NotificationMessage;

                /**
                 * Creates a plain object from a NotificationMessage message. Also converts values to other types if specified.
                 * @param message NotificationMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2CMessage.NotificationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotificationMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace NotificationMessage {

                /** NotificationLevel enum. */
                enum NotificationLevel {
                    DEFAULT = 0,
                    SUCCESS = 1,
                    FAILURE = 2,
                    WARNING = 3
                }
            }

            /** Properties of a CompetitionStateChangedMessage. */
            interface ICompetitionStateChangedMessage {

                /** CompetitionStateChangedMessage timeMillis */
                timeMillis?: (number|Long|null);

                /** CompetitionStateChangedMessage state */
                state?: (acmcsus.debugjudge.CompetitionState|null);
            }

            /** Represents a CompetitionStateChangedMessage. */
            class CompetitionStateChangedMessage implements ICompetitionStateChangedMessage {

                /**
                 * Constructs a new CompetitionStateChangedMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage);

                /** CompetitionStateChangedMessage timeMillis. */
                public timeMillis: (number|Long);

                /** CompetitionStateChangedMessage state. */
                public state: acmcsus.debugjudge.CompetitionState;

                /**
                 * Creates a new CompetitionStateChangedMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CompetitionStateChangedMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage): acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage;

                /**
                 * Encodes the specified CompetitionStateChangedMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.verify|verify} messages.
                 * @param message CompetitionStateChangedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CompetitionStateChangedMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.verify|verify} messages.
                 * @param message CompetitionStateChangedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CompetitionStateChangedMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CompetitionStateChangedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage;

                /**
                 * Decodes a CompetitionStateChangedMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CompetitionStateChangedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage;

                /**
                 * Verifies a CompetitionStateChangedMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CompetitionStateChangedMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CompetitionStateChangedMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage;

                /**
                 * Creates a plain object from a CompetitionStateChangedMessage message. Also converts values to other types if specified.
                 * @param message CompetitionStateChangedMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CompetitionStateChangedMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ScoreboardUpdateMessage. */
            interface IScoreboardUpdateMessage {

                /** ScoreboardUpdateMessage scoreboard */
                scoreboard?: (acmcsus.debugjudge.IScoreboard|null);
            }

            /** Represents a ScoreboardUpdateMessage. */
            class ScoreboardUpdateMessage implements IScoreboardUpdateMessage {

                /**
                 * Constructs a new ScoreboardUpdateMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage);

                /** ScoreboardUpdateMessage scoreboard. */
                public scoreboard?: (acmcsus.debugjudge.IScoreboard|null);

                /**
                 * Creates a new ScoreboardUpdateMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ScoreboardUpdateMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage): acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage;

                /**
                 * Encodes the specified ScoreboardUpdateMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.verify|verify} messages.
                 * @param message ScoreboardUpdateMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ScoreboardUpdateMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.verify|verify} messages.
                 * @param message ScoreboardUpdateMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ScoreboardUpdateMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ScoreboardUpdateMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage;

                /**
                 * Decodes a ScoreboardUpdateMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ScoreboardUpdateMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage;

                /**
                 * Verifies a ScoreboardUpdateMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ScoreboardUpdateMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ScoreboardUpdateMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage;

                /**
                 * Creates a plain object from a ScoreboardUpdateMessage message. Also converts values to other types if specified.
                 * @param message ScoreboardUpdateMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ScoreboardUpdateMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReloadProblemsMessage. */
            interface IReloadProblemsMessage {

                /** ReloadProblemsMessage problems */
                problems?: (acmcsus.debugjudge.Problem.IList|null);
            }

            /** Represents a ReloadProblemsMessage. */
            class ReloadProblemsMessage implements IReloadProblemsMessage {

                /**
                 * Constructs a new ReloadProblemsMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage);

                /** ReloadProblemsMessage problems. */
                public problems?: (acmcsus.debugjudge.Problem.IList|null);

                /**
                 * Creates a new ReloadProblemsMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReloadProblemsMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage): acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage;

                /**
                 * Encodes the specified ReloadProblemsMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage.verify|verify} messages.
                 * @param message ReloadProblemsMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReloadProblemsMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage.verify|verify} messages.
                 * @param message ReloadProblemsMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReloadProblemsMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReloadProblemsMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage;

                /**
                 * Decodes a ReloadProblemsMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReloadProblemsMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage;

                /**
                 * Verifies a ReloadProblemsMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReloadProblemsMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReloadProblemsMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage;

                /**
                 * Creates a plain object from a ReloadProblemsMessage message. Also converts values to other types if specified.
                 * @param message ReloadProblemsMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReloadProblemsMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReloadSubmissionMessage. */
            interface IReloadSubmissionMessage {

                /** ReloadSubmissionMessage submission */
                submission?: (acmcsus.debugjudge.ISubmission|null);
            }

            /** Represents a ReloadSubmissionMessage. */
            class ReloadSubmissionMessage implements IReloadSubmissionMessage {

                /**
                 * Constructs a new ReloadSubmissionMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage);

                /** ReloadSubmissionMessage submission. */
                public submission?: (acmcsus.debugjudge.ISubmission|null);

                /**
                 * Creates a new ReloadSubmissionMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReloadSubmissionMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage): acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage;

                /**
                 * Encodes the specified ReloadSubmissionMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage.verify|verify} messages.
                 * @param message ReloadSubmissionMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReloadSubmissionMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage.verify|verify} messages.
                 * @param message ReloadSubmissionMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReloadSubmissionMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReloadSubmissionMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage;

                /**
                 * Decodes a ReloadSubmissionMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReloadSubmissionMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage;

                /**
                 * Verifies a ReloadSubmissionMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReloadSubmissionMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReloadSubmissionMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage;

                /**
                 * Creates a plain object from a ReloadSubmissionMessage message. Also converts values to other types if specified.
                 * @param message ReloadSubmissionMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReloadSubmissionMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReloadSubmissionsMessage. */
            interface IReloadSubmissionsMessage {

                /** ReloadSubmissionsMessage submissions */
                submissions?: (acmcsus.debugjudge.Submission.IList|null);
            }

            /** Represents a ReloadSubmissionsMessage. */
            class ReloadSubmissionsMessage implements IReloadSubmissionsMessage {

                /**
                 * Constructs a new ReloadSubmissionsMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage);

                /** ReloadSubmissionsMessage submissions. */
                public submissions?: (acmcsus.debugjudge.Submission.IList|null);

                /**
                 * Creates a new ReloadSubmissionsMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReloadSubmissionsMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage): acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage;

                /**
                 * Encodes the specified ReloadSubmissionsMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage.verify|verify} messages.
                 * @param message ReloadSubmissionsMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReloadSubmissionsMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage.verify|verify} messages.
                 * @param message ReloadSubmissionsMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReloadSubmissionsMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReloadSubmissionsMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage;

                /**
                 * Decodes a ReloadSubmissionsMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReloadSubmissionsMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage;

                /**
                 * Verifies a ReloadSubmissionsMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReloadSubmissionsMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReloadSubmissionsMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage;

                /**
                 * Creates a plain object from a ReloadSubmissionsMessage message. Also converts values to other types if specified.
                 * @param message ReloadSubmissionsMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReloadSubmissionsMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a T2SMessage. */
        interface IT2SMessage {

            /** T2SMessage submissionCreateMessage */
            submissionCreateMessage?: (acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage|null);
        }

        /** Represents a T2SMessage. */
        class T2SMessage implements IT2SMessage {

            /**
             * Constructs a new T2SMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IT2SMessage);

            /** T2SMessage submissionCreateMessage. */
            public submissionCreateMessage?: (acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage|null);

            /** T2SMessage value. */
            public value?: "submissionCreateMessage";

            /**
             * Creates a new T2SMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns T2SMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IT2SMessage): acmcsus.debugjudge.T2SMessage;

            /**
             * Encodes the specified T2SMessage message. Does not implicitly {@link acmcsus.debugjudge.T2SMessage.verify|verify} messages.
             * @param message T2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IT2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified T2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.T2SMessage.verify|verify} messages.
             * @param message T2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IT2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a T2SMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns T2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.T2SMessage;

            /**
             * Decodes a T2SMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns T2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.T2SMessage;

            /**
             * Verifies a T2SMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a T2SMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns T2SMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.T2SMessage;

            /**
             * Creates a plain object from a T2SMessage message. Also converts values to other types if specified.
             * @param message T2SMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.T2SMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this T2SMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace T2SMessage {

            /** Properties of a SubmissionCreateMessage. */
            interface ISubmissionCreateMessage {

                /** SubmissionCreateMessage submission */
                submission?: (acmcsus.debugjudge.ISubmission|null);
            }

            /** Represents a SubmissionCreateMessage. */
            class SubmissionCreateMessage implements ISubmissionCreateMessage {

                /**
                 * Constructs a new SubmissionCreateMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage);

                /** SubmissionCreateMessage submission. */
                public submission?: (acmcsus.debugjudge.ISubmission|null);

                /**
                 * Creates a new SubmissionCreateMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SubmissionCreateMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage): acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage;

                /**
                 * Encodes the specified SubmissionCreateMessage message. Does not implicitly {@link acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage.verify|verify} messages.
                 * @param message SubmissionCreateMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SubmissionCreateMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage.verify|verify} messages.
                 * @param message SubmissionCreateMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SubmissionCreateMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SubmissionCreateMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage;

                /**
                 * Decodes a SubmissionCreateMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SubmissionCreateMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage;

                /**
                 * Verifies a SubmissionCreateMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SubmissionCreateMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SubmissionCreateMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage;

                /**
                 * Creates a plain object from a SubmissionCreateMessage message. Also converts values to other types if specified.
                 * @param message SubmissionCreateMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SubmissionCreateMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a S2TMessage. */
        interface IS2TMessage {
        }

        /** Represents a S2TMessage. */
        class S2TMessage implements IS2TMessage {

            /**
             * Constructs a new S2TMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IS2TMessage);

            /**
             * Creates a new S2TMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2TMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IS2TMessage): acmcsus.debugjudge.S2TMessage;

            /**
             * Encodes the specified S2TMessage message. Does not implicitly {@link acmcsus.debugjudge.S2TMessage.verify|verify} messages.
             * @param message S2TMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IS2TMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2TMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2TMessage.verify|verify} messages.
             * @param message S2TMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IS2TMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2TMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2TMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2TMessage;

            /**
             * Decodes a S2TMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2TMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2TMessage;

            /**
             * Verifies a S2TMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2TMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2TMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2TMessage;

            /**
             * Creates a plain object from a S2TMessage message. Also converts values to other types if specified.
             * @param message S2TMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.S2TMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2TMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a J2SMessage. */
        interface IJ2SMessage {

            /** J2SMessage startJudgingMessage */
            startJudgingMessage?: (acmcsus.debugjudge.J2SMessage.IStartJudgingMessage|null);

            /** J2SMessage stopJudgingMessage */
            stopJudgingMessage?: (acmcsus.debugjudge.J2SMessage.IStopJudgingMessage|null);

            /** J2SMessage submissionJudgementMessage */
            submissionJudgementMessage?: (acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage|null);

            /** J2SMessage judgingPreferencesMessage */
            judgingPreferencesMessage?: (acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage|null);
        }

        /** Represents a J2SMessage. */
        class J2SMessage implements IJ2SMessage {

            /**
             * Constructs a new J2SMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IJ2SMessage);

            /** J2SMessage startJudgingMessage. */
            public startJudgingMessage?: (acmcsus.debugjudge.J2SMessage.IStartJudgingMessage|null);

            /** J2SMessage stopJudgingMessage. */
            public stopJudgingMessage?: (acmcsus.debugjudge.J2SMessage.IStopJudgingMessage|null);

            /** J2SMessage submissionJudgementMessage. */
            public submissionJudgementMessage?: (acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage|null);

            /** J2SMessage judgingPreferencesMessage. */
            public judgingPreferencesMessage?: (acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage|null);

            /** J2SMessage value. */
            public value?: ("startJudgingMessage"|"stopJudgingMessage"|"submissionJudgementMessage"|"judgingPreferencesMessage");

            /**
             * Creates a new J2SMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns J2SMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IJ2SMessage): acmcsus.debugjudge.J2SMessage;

            /**
             * Encodes the specified J2SMessage message. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.verify|verify} messages.
             * @param message J2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IJ2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified J2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.verify|verify} messages.
             * @param message J2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IJ2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a J2SMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns J2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.J2SMessage;

            /**
             * Decodes a J2SMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns J2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.J2SMessage;

            /**
             * Verifies a J2SMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a J2SMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns J2SMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.J2SMessage;

            /**
             * Creates a plain object from a J2SMessage message. Also converts values to other types if specified.
             * @param message J2SMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.J2SMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this J2SMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace J2SMessage {

            /** Properties of a StartJudgingMessage. */
            interface IStartJudgingMessage {
            }

            /** Represents a StartJudgingMessage. */
            class StartJudgingMessage implements IStartJudgingMessage {

                /**
                 * Constructs a new StartJudgingMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.J2SMessage.IStartJudgingMessage);

                /**
                 * Creates a new StartJudgingMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StartJudgingMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.J2SMessage.IStartJudgingMessage): acmcsus.debugjudge.J2SMessage.StartJudgingMessage;

                /**
                 * Encodes the specified StartJudgingMessage message. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.StartJudgingMessage.verify|verify} messages.
                 * @param message StartJudgingMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.J2SMessage.IStartJudgingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StartJudgingMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.StartJudgingMessage.verify|verify} messages.
                 * @param message StartJudgingMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.J2SMessage.IStartJudgingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StartJudgingMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StartJudgingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.J2SMessage.StartJudgingMessage;

                /**
                 * Decodes a StartJudgingMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StartJudgingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.J2SMessage.StartJudgingMessage;

                /**
                 * Verifies a StartJudgingMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StartJudgingMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StartJudgingMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.J2SMessage.StartJudgingMessage;

                /**
                 * Creates a plain object from a StartJudgingMessage message. Also converts values to other types if specified.
                 * @param message StartJudgingMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.J2SMessage.StartJudgingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StartJudgingMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StopJudgingMessage. */
            interface IStopJudgingMessage {
            }

            /** Represents a StopJudgingMessage. */
            class StopJudgingMessage implements IStopJudgingMessage {

                /**
                 * Constructs a new StopJudgingMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.J2SMessage.IStopJudgingMessage);

                /**
                 * Creates a new StopJudgingMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StopJudgingMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.J2SMessage.IStopJudgingMessage): acmcsus.debugjudge.J2SMessage.StopJudgingMessage;

                /**
                 * Encodes the specified StopJudgingMessage message. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.StopJudgingMessage.verify|verify} messages.
                 * @param message StopJudgingMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.J2SMessage.IStopJudgingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StopJudgingMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.StopJudgingMessage.verify|verify} messages.
                 * @param message StopJudgingMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.J2SMessage.IStopJudgingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StopJudgingMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StopJudgingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.J2SMessage.StopJudgingMessage;

                /**
                 * Decodes a StopJudgingMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StopJudgingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.J2SMessage.StopJudgingMessage;

                /**
                 * Verifies a StopJudgingMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StopJudgingMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StopJudgingMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.J2SMessage.StopJudgingMessage;

                /**
                 * Creates a plain object from a StopJudgingMessage message. Also converts values to other types if specified.
                 * @param message StopJudgingMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.J2SMessage.StopJudgingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StopJudgingMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SubmissionJudgementMessage. */
            interface ISubmissionJudgementMessage {

                /** SubmissionJudgementMessage teamId */
                teamId?: (number|null);

                /** SubmissionJudgementMessage problemId */
                problemId?: (number|null);

                /** SubmissionJudgementMessage submissionId */
                submissionId?: (number|Long|null);

                /** SubmissionJudgementMessage ruling */
                ruling?: (acmcsus.debugjudge.SubmissionJudgement|null);

                /** SubmissionJudgementMessage rulingMessage */
                rulingMessage?: (string|null);
            }

            /** Represents a SubmissionJudgementMessage. */
            class SubmissionJudgementMessage implements ISubmissionJudgementMessage {

                /**
                 * Constructs a new SubmissionJudgementMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage);

                /** SubmissionJudgementMessage teamId. */
                public teamId: number;

                /** SubmissionJudgementMessage problemId. */
                public problemId: number;

                /** SubmissionJudgementMessage submissionId. */
                public submissionId: (number|Long);

                /** SubmissionJudgementMessage ruling. */
                public ruling: acmcsus.debugjudge.SubmissionJudgement;

                /** SubmissionJudgementMessage rulingMessage. */
                public rulingMessage: string;

                /**
                 * Creates a new SubmissionJudgementMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SubmissionJudgementMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage): acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage;

                /**
                 * Encodes the specified SubmissionJudgementMessage message. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage.verify|verify} messages.
                 * @param message SubmissionJudgementMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SubmissionJudgementMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage.verify|verify} messages.
                 * @param message SubmissionJudgementMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SubmissionJudgementMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SubmissionJudgementMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage;

                /**
                 * Decodes a SubmissionJudgementMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SubmissionJudgementMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage;

                /**
                 * Verifies a SubmissionJudgementMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SubmissionJudgementMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SubmissionJudgementMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage;

                /**
                 * Creates a plain object from a SubmissionJudgementMessage message. Also converts values to other types if specified.
                 * @param message SubmissionJudgementMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SubmissionJudgementMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a JudgingPreferencesMessage. */
            interface IJudgingPreferencesMessage {

                /** JudgingPreferencesMessage preferences */
                preferences?: ({ [k: string]: boolean }|null);
            }

            /** Represents a JudgingPreferencesMessage. */
            class JudgingPreferencesMessage implements IJudgingPreferencesMessage {

                /**
                 * Constructs a new JudgingPreferencesMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage);

                /** JudgingPreferencesMessage preferences. */
                public preferences: { [k: string]: boolean };

                /**
                 * Creates a new JudgingPreferencesMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JudgingPreferencesMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage): acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage;

                /**
                 * Encodes the specified JudgingPreferencesMessage message. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage.verify|verify} messages.
                 * @param message JudgingPreferencesMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified JudgingPreferencesMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage.verify|verify} messages.
                 * @param message JudgingPreferencesMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JudgingPreferencesMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JudgingPreferencesMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage;

                /**
                 * Decodes a JudgingPreferencesMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns JudgingPreferencesMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage;

                /**
                 * Verifies a JudgingPreferencesMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a JudgingPreferencesMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns JudgingPreferencesMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage;

                /**
                 * Creates a plain object from a JudgingPreferencesMessage message. Also converts values to other types if specified.
                 * @param message JudgingPreferencesMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this JudgingPreferencesMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a S2JMessage. */
        interface IS2JMessage {

            /** S2JMessage assignedSubmissionMessage */
            assignedSubmissionMessage?: (acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage|null);

            /** S2JMessage judgingStatus */
            judgingStatus?: (acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage|null);
        }

        /** Represents a S2JMessage. */
        class S2JMessage implements IS2JMessage {

            /**
             * Constructs a new S2JMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IS2JMessage);

            /** S2JMessage assignedSubmissionMessage. */
            public assignedSubmissionMessage?: (acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage|null);

            /** S2JMessage judgingStatus. */
            public judgingStatus?: (acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage|null);

            /** S2JMessage value. */
            public value?: ("assignedSubmissionMessage"|"judgingStatus");

            /**
             * Creates a new S2JMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2JMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IS2JMessage): acmcsus.debugjudge.S2JMessage;

            /**
             * Encodes the specified S2JMessage message. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.verify|verify} messages.
             * @param message S2JMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IS2JMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2JMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.verify|verify} messages.
             * @param message S2JMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IS2JMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2JMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2JMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2JMessage;

            /**
             * Decodes a S2JMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2JMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2JMessage;

            /**
             * Verifies a S2JMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2JMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2JMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2JMessage;

            /**
             * Creates a plain object from a S2JMessage message. Also converts values to other types if specified.
             * @param message S2JMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.S2JMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2JMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace S2JMessage {

            /** Properties of an AssignedSubmissionMessage. */
            interface IAssignedSubmissionMessage {

                /** AssignedSubmissionMessage submission */
                submission?: (acmcsus.debugjudge.ISubmission|null);
            }

            /** Represents an AssignedSubmissionMessage. */
            class AssignedSubmissionMessage implements IAssignedSubmissionMessage {

                /**
                 * Constructs a new AssignedSubmissionMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage);

                /** AssignedSubmissionMessage submission. */
                public submission?: (acmcsus.debugjudge.ISubmission|null);

                /**
                 * Creates a new AssignedSubmissionMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AssignedSubmissionMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage): acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage;

                /**
                 * Encodes the specified AssignedSubmissionMessage message. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage.verify|verify} messages.
                 * @param message AssignedSubmissionMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AssignedSubmissionMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage.verify|verify} messages.
                 * @param message AssignedSubmissionMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AssignedSubmissionMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AssignedSubmissionMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage;

                /**
                 * Decodes an AssignedSubmissionMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AssignedSubmissionMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage;

                /**
                 * Verifies an AssignedSubmissionMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AssignedSubmissionMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AssignedSubmissionMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage;

                /**
                 * Creates a plain object from an AssignedSubmissionMessage message. Also converts values to other types if specified.
                 * @param message AssignedSubmissionMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AssignedSubmissionMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a JudgingStatusMessage. */
            interface IJudgingStatusMessage {

                /** JudgingStatusMessage judging */
                judging?: (boolean|null);

                /** JudgingStatusMessage message */
                message?: (string|null);
            }

            /** Represents a JudgingStatusMessage. */
            class JudgingStatusMessage implements IJudgingStatusMessage {

                /**
                 * Constructs a new JudgingStatusMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage);

                /** JudgingStatusMessage judging. */
                public judging: boolean;

                /** JudgingStatusMessage message. */
                public message: string;

                /**
                 * Creates a new JudgingStatusMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JudgingStatusMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage): acmcsus.debugjudge.S2JMessage.JudgingStatusMessage;

                /**
                 * Encodes the specified JudgingStatusMessage message. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.JudgingStatusMessage.verify|verify} messages.
                 * @param message JudgingStatusMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified JudgingStatusMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.JudgingStatusMessage.verify|verify} messages.
                 * @param message JudgingStatusMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JudgingStatusMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JudgingStatusMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2JMessage.JudgingStatusMessage;

                /**
                 * Decodes a JudgingStatusMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns JudgingStatusMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2JMessage.JudgingStatusMessage;

                /**
                 * Verifies a JudgingStatusMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a JudgingStatusMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns JudgingStatusMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2JMessage.JudgingStatusMessage;

                /**
                 * Creates a plain object from a JudgingStatusMessage message. Also converts values to other types if specified.
                 * @param message JudgingStatusMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2JMessage.JudgingStatusMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this JudgingStatusMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a A2SMessage. */
        interface IA2SMessage {

            /** A2SMessage changeCompetitionStateMessage */
            changeCompetitionStateMessage?: (acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage|null);
        }

        /** Represents a A2SMessage. */
        class A2SMessage implements IA2SMessage {

            /**
             * Constructs a new A2SMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IA2SMessage);

            /** A2SMessage changeCompetitionStateMessage. */
            public changeCompetitionStateMessage?: (acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage|null);

            /** A2SMessage value. */
            public value?: "changeCompetitionStateMessage";

            /**
             * Creates a new A2SMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns A2SMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IA2SMessage): acmcsus.debugjudge.A2SMessage;

            /**
             * Encodes the specified A2SMessage message. Does not implicitly {@link acmcsus.debugjudge.A2SMessage.verify|verify} messages.
             * @param message A2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IA2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified A2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.A2SMessage.verify|verify} messages.
             * @param message A2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IA2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a A2SMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns A2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.A2SMessage;

            /**
             * Decodes a A2SMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns A2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.A2SMessage;

            /**
             * Verifies a A2SMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a A2SMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns A2SMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.A2SMessage;

            /**
             * Creates a plain object from a A2SMessage message. Also converts values to other types if specified.
             * @param message A2SMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.A2SMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this A2SMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace A2SMessage {

            /** Properties of a ChangeCompetitionStateMessage. */
            interface IChangeCompetitionStateMessage {

                /** ChangeCompetitionStateMessage timeMillis */
                timeMillis?: (number|Long|null);

                /** ChangeCompetitionStateMessage state */
                state?: (acmcsus.debugjudge.CompetitionState|null);
            }

            /** Represents a ChangeCompetitionStateMessage. */
            class ChangeCompetitionStateMessage implements IChangeCompetitionStateMessage {

                /**
                 * Constructs a new ChangeCompetitionStateMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage);

                /** ChangeCompetitionStateMessage timeMillis. */
                public timeMillis: (number|Long);

                /** ChangeCompetitionStateMessage state. */
                public state: acmcsus.debugjudge.CompetitionState;

                /**
                 * Creates a new ChangeCompetitionStateMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChangeCompetitionStateMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage): acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage;

                /**
                 * Encodes the specified ChangeCompetitionStateMessage message. Does not implicitly {@link acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage.verify|verify} messages.
                 * @param message ChangeCompetitionStateMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChangeCompetitionStateMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage.verify|verify} messages.
                 * @param message ChangeCompetitionStateMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChangeCompetitionStateMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChangeCompetitionStateMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage;

                /**
                 * Decodes a ChangeCompetitionStateMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ChangeCompetitionStateMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage;

                /**
                 * Verifies a ChangeCompetitionStateMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChangeCompetitionStateMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChangeCompetitionStateMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage;

                /**
                 * Creates a plain object from a ChangeCompetitionStateMessage message. Also converts values to other types if specified.
                 * @param message ChangeCompetitionStateMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChangeCompetitionStateMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a S2AMessage. */
        interface IS2AMessage {

            /** S2AMessage statusAppendMessage */
            statusAppendMessage?: (acmcsus.debugjudge.S2AMessage.IStatusAppendMessage|null);
        }

        /** Represents a S2AMessage. */
        class S2AMessage implements IS2AMessage {

            /**
             * Constructs a new S2AMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IS2AMessage);

            /** S2AMessage statusAppendMessage. */
            public statusAppendMessage?: (acmcsus.debugjudge.S2AMessage.IStatusAppendMessage|null);

            /** S2AMessage value. */
            public value?: "statusAppendMessage";

            /**
             * Creates a new S2AMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2AMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IS2AMessage): acmcsus.debugjudge.S2AMessage;

            /**
             * Encodes the specified S2AMessage message. Does not implicitly {@link acmcsus.debugjudge.S2AMessage.verify|verify} messages.
             * @param message S2AMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IS2AMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2AMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2AMessage.verify|verify} messages.
             * @param message S2AMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IS2AMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2AMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2AMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2AMessage;

            /**
             * Decodes a S2AMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2AMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2AMessage;

            /**
             * Verifies a S2AMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2AMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2AMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2AMessage;

            /**
             * Creates a plain object from a S2AMessage message. Also converts values to other types if specified.
             * @param message S2AMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.S2AMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2AMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace S2AMessage {

            /** Properties of a StatusAppendMessage. */
            interface IStatusAppendMessage {

                /** StatusAppendMessage value */
                value?: (string|null);
            }

            /** Represents a StatusAppendMessage. */
            class StatusAppendMessage implements IStatusAppendMessage {

                /**
                 * Constructs a new StatusAppendMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2AMessage.IStatusAppendMessage);

                /** StatusAppendMessage value. */
                public value: string;

                /**
                 * Creates a new StatusAppendMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StatusAppendMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2AMessage.IStatusAppendMessage): acmcsus.debugjudge.S2AMessage.StatusAppendMessage;

                /**
                 * Encodes the specified StatusAppendMessage message. Does not implicitly {@link acmcsus.debugjudge.S2AMessage.StatusAppendMessage.verify|verify} messages.
                 * @param message StatusAppendMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2AMessage.IStatusAppendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StatusAppendMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2AMessage.StatusAppendMessage.verify|verify} messages.
                 * @param message StatusAppendMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2AMessage.IStatusAppendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StatusAppendMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StatusAppendMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2AMessage.StatusAppendMessage;

                /**
                 * Decodes a StatusAppendMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StatusAppendMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2AMessage.StatusAppendMessage;

                /**
                 * Verifies a StatusAppendMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StatusAppendMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StatusAppendMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2AMessage.StatusAppendMessage;

                /**
                 * Creates a plain object from a StatusAppendMessage message. Also converts values to other types if specified.
                 * @param message StatusAppendMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2AMessage.StatusAppendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StatusAppendMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a AJ2SMessage. */
        interface IAJ2SMessage {

            /** AJ2SMessage submissionJudgementMessage */
            submissionJudgementMessage?: (acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage|null);
        }

        /** Represents a AJ2SMessage. */
        class AJ2SMessage implements IAJ2SMessage {

            /**
             * Constructs a new AJ2SMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IAJ2SMessage);

            /** AJ2SMessage submissionJudgementMessage. */
            public submissionJudgementMessage?: (acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage|null);

            /** AJ2SMessage value. */
            public value?: "submissionJudgementMessage";

            /**
             * Creates a new AJ2SMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AJ2SMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IAJ2SMessage): acmcsus.debugjudge.AJ2SMessage;

            /**
             * Encodes the specified AJ2SMessage message. Does not implicitly {@link acmcsus.debugjudge.AJ2SMessage.verify|verify} messages.
             * @param message AJ2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IAJ2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AJ2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.AJ2SMessage.verify|verify} messages.
             * @param message AJ2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IAJ2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AJ2SMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AJ2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.AJ2SMessage;

            /**
             * Decodes a AJ2SMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AJ2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.AJ2SMessage;

            /**
             * Verifies a AJ2SMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AJ2SMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AJ2SMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.AJ2SMessage;

            /**
             * Creates a plain object from a AJ2SMessage message. Also converts values to other types if specified.
             * @param message AJ2SMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.AJ2SMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AJ2SMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace AJ2SMessage {

            /** Properties of an AutoJudgeResultMessage. */
            interface IAutoJudgeResultMessage {

                /** AutoJudgeResultMessage teamId */
                teamId?: (number|null);

                /** AutoJudgeResultMessage problemId */
                problemId?: (number|null);

                /** AutoJudgeResultMessage submissionId */
                submissionId?: (number|Long|null);

                /** AutoJudgeResultMessage compileResult */
                compileResult?: (acmcsus.debugjudge.IExecutionResult|null);

                /** AutoJudgeResultMessage caseResults */
                caseResults?: ({ [k: string]: acmcsus.debugjudge.IExecutionResult }|null);

                /** AutoJudgeResultMessage preliminaryJudgement */
                preliminaryJudgement?: (acmcsus.debugjudge.SubmissionJudgement|null);

                /** AutoJudgeResultMessage preliminaryJudgementMessage */
                preliminaryJudgementMessage?: (string|null);
            }

            /** Represents an AutoJudgeResultMessage. */
            class AutoJudgeResultMessage implements IAutoJudgeResultMessage {

                /**
                 * Constructs a new AutoJudgeResultMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage);

                /** AutoJudgeResultMessage teamId. */
                public teamId: number;

                /** AutoJudgeResultMessage problemId. */
                public problemId: number;

                /** AutoJudgeResultMessage submissionId. */
                public submissionId: (number|Long);

                /** AutoJudgeResultMessage compileResult. */
                public compileResult?: (acmcsus.debugjudge.IExecutionResult|null);

                /** AutoJudgeResultMessage caseResults. */
                public caseResults: { [k: string]: acmcsus.debugjudge.IExecutionResult };

                /** AutoJudgeResultMessage preliminaryJudgement. */
                public preliminaryJudgement: acmcsus.debugjudge.SubmissionJudgement;

                /** AutoJudgeResultMessage preliminaryJudgementMessage. */
                public preliminaryJudgementMessage: string;

                /**
                 * Creates a new AutoJudgeResultMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AutoJudgeResultMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage): acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage;

                /**
                 * Encodes the specified AutoJudgeResultMessage message. Does not implicitly {@link acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.verify|verify} messages.
                 * @param message AutoJudgeResultMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AutoJudgeResultMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.verify|verify} messages.
                 * @param message AutoJudgeResultMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AutoJudgeResultMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AutoJudgeResultMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage;

                /**
                 * Decodes an AutoJudgeResultMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AutoJudgeResultMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage;

                /**
                 * Verifies an AutoJudgeResultMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AutoJudgeResultMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AutoJudgeResultMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage;

                /**
                 * Creates a plain object from an AutoJudgeResultMessage message. Also converts values to other types if specified.
                 * @param message AutoJudgeResultMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AutoJudgeResultMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a S2AJMessage. */
        interface IS2AJMessage {

            /** S2AJMessage executeSubmission */
            executeSubmission?: (acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage|null);
        }

        /** Represents a S2AJMessage. */
        class S2AJMessage implements IS2AJMessage {

            /**
             * Constructs a new S2AJMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IS2AJMessage);

            /** S2AJMessage executeSubmission. */
            public executeSubmission?: (acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage|null);

            /** S2AJMessage value. */
            public value?: "executeSubmission";

            /**
             * Creates a new S2AJMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2AJMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IS2AJMessage): acmcsus.debugjudge.S2AJMessage;

            /**
             * Encodes the specified S2AJMessage message. Does not implicitly {@link acmcsus.debugjudge.S2AJMessage.verify|verify} messages.
             * @param message S2AJMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IS2AJMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2AJMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2AJMessage.verify|verify} messages.
             * @param message S2AJMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IS2AJMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2AJMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2AJMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2AJMessage;

            /**
             * Decodes a S2AJMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2AJMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2AJMessage;

            /**
             * Verifies a S2AJMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2AJMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2AJMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2AJMessage;

            /**
             * Creates a plain object from a S2AJMessage message. Also converts values to other types if specified.
             * @param message S2AJMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.S2AJMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2AJMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace S2AJMessage {

            /** Properties of an ExecuteSubmissionMessage. */
            interface IExecuteSubmissionMessage {

                /** ExecuteSubmissionMessage submission */
                submission?: (acmcsus.debugjudge.ISubmission|null);
            }

            /** Represents an ExecuteSubmissionMessage. */
            class ExecuteSubmissionMessage implements IExecuteSubmissionMessage {

                /**
                 * Constructs a new ExecuteSubmissionMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage);

                /** ExecuteSubmissionMessage submission. */
                public submission?: (acmcsus.debugjudge.ISubmission|null);

                /**
                 * Creates a new ExecuteSubmissionMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExecuteSubmissionMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage): acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage;

                /**
                 * Encodes the specified ExecuteSubmissionMessage message. Does not implicitly {@link acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage.verify|verify} messages.
                 * @param message ExecuteSubmissionMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExecuteSubmissionMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage.verify|verify} messages.
                 * @param message ExecuteSubmissionMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExecuteSubmissionMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExecuteSubmissionMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage;

                /**
                 * Decodes an ExecuteSubmissionMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExecuteSubmissionMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage;

                /**
                 * Verifies an ExecuteSubmissionMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExecuteSubmissionMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExecuteSubmissionMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage;

                /**
                 * Creates a plain object from an ExecuteSubmissionMessage message. Also converts values to other types if specified.
                 * @param message ExecuteSubmissionMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExecuteSubmissionMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a S2BMessage. */
        interface IS2BMessage {

            /** S2BMessage executeSubmission */
            executeSubmission?: (acmcsus.debugjudge.S2BMessage.IExecuteSubmissionMessage|null);
        }

        /** Represents a S2BMessage. */
        class S2BMessage implements IS2BMessage {

            /**
             * Constructs a new S2BMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IS2BMessage);

            /** S2BMessage executeSubmission. */
            public executeSubmission?: (acmcsus.debugjudge.S2BMessage.IExecuteSubmissionMessage|null);

            /** S2BMessage value. */
            public value?: "executeSubmission";

            /**
             * Creates a new S2BMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2BMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IS2BMessage): acmcsus.debugjudge.S2BMessage;

            /**
             * Encodes the specified S2BMessage message. Does not implicitly {@link acmcsus.debugjudge.S2BMessage.verify|verify} messages.
             * @param message S2BMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IS2BMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2BMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2BMessage.verify|verify} messages.
             * @param message S2BMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IS2BMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2BMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2BMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2BMessage;

            /**
             * Decodes a S2BMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2BMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2BMessage;

            /**
             * Verifies a S2BMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2BMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2BMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2BMessage;

            /**
             * Creates a plain object from a S2BMessage message. Also converts values to other types if specified.
             * @param message S2BMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.S2BMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2BMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace S2BMessage {

            /** Properties of an ExecuteSubmissionMessage. */
            interface IExecuteSubmissionMessage {

                /** ExecuteSubmissionMessage submission */
                submission?: (acmcsus.debugjudge.ISubmission|null);
            }

            /** Represents an ExecuteSubmissionMessage. */
            class ExecuteSubmissionMessage implements IExecuteSubmissionMessage {

                /**
                 * Constructs a new ExecuteSubmissionMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.S2BMessage.IExecuteSubmissionMessage);

                /** ExecuteSubmissionMessage submission. */
                public submission?: (acmcsus.debugjudge.ISubmission|null);

                /**
                 * Creates a new ExecuteSubmissionMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExecuteSubmissionMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.S2BMessage.IExecuteSubmissionMessage): acmcsus.debugjudge.S2BMessage.ExecuteSubmissionMessage;

                /**
                 * Encodes the specified ExecuteSubmissionMessage message. Does not implicitly {@link acmcsus.debugjudge.S2BMessage.ExecuteSubmissionMessage.verify|verify} messages.
                 * @param message ExecuteSubmissionMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.S2BMessage.IExecuteSubmissionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExecuteSubmissionMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2BMessage.ExecuteSubmissionMessage.verify|verify} messages.
                 * @param message ExecuteSubmissionMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.S2BMessage.IExecuteSubmissionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExecuteSubmissionMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExecuteSubmissionMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.S2BMessage.ExecuteSubmissionMessage;

                /**
                 * Decodes an ExecuteSubmissionMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExecuteSubmissionMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.S2BMessage.ExecuteSubmissionMessage;

                /**
                 * Verifies an ExecuteSubmissionMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExecuteSubmissionMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExecuteSubmissionMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.S2BMessage.ExecuteSubmissionMessage;

                /**
                 * Creates a plain object from an ExecuteSubmissionMessage message. Also converts values to other types if specified.
                 * @param message ExecuteSubmissionMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.S2BMessage.ExecuteSubmissionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExecuteSubmissionMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a B2SMessage. */
        interface IB2SMessage {

            /** B2SMessage balloonDeliveredMessage */
            balloonDeliveredMessage?: (acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage|null);
        }

        /** Represents a B2SMessage. */
        class B2SMessage implements IB2SMessage {

            /**
             * Constructs a new B2SMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IB2SMessage);

            /** B2SMessage balloonDeliveredMessage. */
            public balloonDeliveredMessage?: (acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage|null);

            /** B2SMessage value. */
            public value?: "balloonDeliveredMessage";

            /**
             * Creates a new B2SMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns B2SMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IB2SMessage): acmcsus.debugjudge.B2SMessage;

            /**
             * Encodes the specified B2SMessage message. Does not implicitly {@link acmcsus.debugjudge.B2SMessage.verify|verify} messages.
             * @param message B2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IB2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified B2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.B2SMessage.verify|verify} messages.
             * @param message B2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IB2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a B2SMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns B2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.B2SMessage;

            /**
             * Decodes a B2SMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns B2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.B2SMessage;

            /**
             * Verifies a B2SMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a B2SMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns B2SMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.B2SMessage;

            /**
             * Creates a plain object from a B2SMessage message. Also converts values to other types if specified.
             * @param message B2SMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.B2SMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this B2SMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace B2SMessage {

            /** Properties of a BalloonDeliveredMessage. */
            interface IBalloonDeliveredMessage {

                /** BalloonDeliveredMessage teamId */
                teamId?: (number|null);

                /** BalloonDeliveredMessage problemId */
                problemId?: (number|null);
            }

            /** Represents a BalloonDeliveredMessage. */
            class BalloonDeliveredMessage implements IBalloonDeliveredMessage {

                /**
                 * Constructs a new BalloonDeliveredMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage);

                /** BalloonDeliveredMessage teamId. */
                public teamId: number;

                /** BalloonDeliveredMessage problemId. */
                public problemId: number;

                /**
                 * Creates a new BalloonDeliveredMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BalloonDeliveredMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage): acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage;

                /**
                 * Encodes the specified BalloonDeliveredMessage message. Does not implicitly {@link acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage.verify|verify} messages.
                 * @param message BalloonDeliveredMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BalloonDeliveredMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage.verify|verify} messages.
                 * @param message BalloonDeliveredMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BalloonDeliveredMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BalloonDeliveredMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage;

                /**
                 * Decodes a BalloonDeliveredMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BalloonDeliveredMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage;

                /**
                 * Verifies a BalloonDeliveredMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BalloonDeliveredMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BalloonDeliveredMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage;

                /**
                 * Creates a plain object from a BalloonDeliveredMessage message. Also converts values to other types if specified.
                 * @param message BalloonDeliveredMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BalloonDeliveredMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a R2SMessage. */
        interface IR2SMessage {

            /** R2SMessage message */
            message?: (acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage|null);
        }

        /** Represents a R2SMessage. */
        class R2SMessage implements IR2SMessage {

            /**
             * Constructs a new R2SMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: acmcsus.debugjudge.IR2SMessage);

            /** R2SMessage message. */
            public message?: (acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage|null);

            /** R2SMessage value. */
            public value?: "message";

            /**
             * Creates a new R2SMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns R2SMessage instance
             */
            public static create(properties?: acmcsus.debugjudge.IR2SMessage): acmcsus.debugjudge.R2SMessage;

            /**
             * Encodes the specified R2SMessage message. Does not implicitly {@link acmcsus.debugjudge.R2SMessage.verify|verify} messages.
             * @param message R2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: acmcsus.debugjudge.IR2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified R2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.R2SMessage.verify|verify} messages.
             * @param message R2SMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: acmcsus.debugjudge.IR2SMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a R2SMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns R2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.R2SMessage;

            /**
             * Decodes a R2SMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns R2SMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.R2SMessage;

            /**
             * Verifies a R2SMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a R2SMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns R2SMessage
             */
            public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.R2SMessage;

            /**
             * Creates a plain object from a R2SMessage message. Also converts values to other types if specified.
             * @param message R2SMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: acmcsus.debugjudge.R2SMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this R2SMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace R2SMessage {

            /** Properties of a RegisterTeamMessage. */
            interface IRegisterTeamMessage {

                /** RegisterTeamMessage teamId */
                teamId?: (number|null);

                /** RegisterTeamMessage problemId */
                problemId?: (number|null);

                /** RegisterTeamMessage submissionId */
                submissionId?: (number|Long|null);

                /** RegisterTeamMessage ruling */
                ruling?: (acmcsus.debugjudge.SubmissionJudgement|null);
            }

            /** Represents a RegisterTeamMessage. */
            class RegisterTeamMessage implements IRegisterTeamMessage {

                /**
                 * Constructs a new RegisterTeamMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage);

                /** RegisterTeamMessage teamId. */
                public teamId: number;

                /** RegisterTeamMessage problemId. */
                public problemId: number;

                /** RegisterTeamMessage submissionId. */
                public submissionId: (number|Long);

                /** RegisterTeamMessage ruling. */
                public ruling: acmcsus.debugjudge.SubmissionJudgement;

                /**
                 * Creates a new RegisterTeamMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegisterTeamMessage instance
                 */
                public static create(properties?: acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage): acmcsus.debugjudge.R2SMessage.RegisterTeamMessage;

                /**
                 * Encodes the specified RegisterTeamMessage message. Does not implicitly {@link acmcsus.debugjudge.R2SMessage.RegisterTeamMessage.verify|verify} messages.
                 * @param message RegisterTeamMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegisterTeamMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.R2SMessage.RegisterTeamMessage.verify|verify} messages.
                 * @param message RegisterTeamMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegisterTeamMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegisterTeamMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): acmcsus.debugjudge.R2SMessage.RegisterTeamMessage;

                /**
                 * Decodes a RegisterTeamMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegisterTeamMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): acmcsus.debugjudge.R2SMessage.RegisterTeamMessage;

                /**
                 * Verifies a RegisterTeamMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegisterTeamMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegisterTeamMessage
                 */
                public static fromObject(object: { [k: string]: any }): acmcsus.debugjudge.R2SMessage.RegisterTeamMessage;

                /**
                 * Creates a plain object from a RegisterTeamMessage message. Also converts values to other types if specified.
                 * @param message RegisterTeamMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: acmcsus.debugjudge.R2SMessage.RegisterTeamMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegisterTeamMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
