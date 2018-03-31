/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.acmcsus = (function() {
    
        /**
         * Namespace acmcsus.
         * @exports acmcsus
         * @namespace
         */
        var acmcsus = {};
    
        acmcsus.debugjudge = (function() {
    
            /**
             * Namespace debugjudge.
             * @memberof acmcsus
             * @namespace
             */
            var debugjudge = {};
    
            /**
             * CompetitionState enum.
             * @name acmcsus.debugjudge.CompetitionState
             * @enum {string}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} WAITING=1 WAITING value
             * @property {number} STARTED=2 STARTED value
             * @property {number} PAUSED=3 PAUSED value
             * @property {number} STOPPED=4 STOPPED value
             */
            debugjudge.CompetitionState = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "WAITING"] = 1;
                values[valuesById[2] = "STARTED"] = 2;
                values[valuesById[3] = "PAUSED"] = 3;
                values[valuesById[4] = "STOPPED"] = 4;
                return values;
            })();
    
            /**
             * SubmissionJudgement enum.
             * @name acmcsus.debugjudge.SubmissionJudgement
             * @enum {string}
             * @property {number} JUDGEMENT_UNKNOWN=0 JUDGEMENT_UNKNOWN value
             * @property {number} JUDGEMENT_SUCCESS=1 JUDGEMENT_SUCCESS value
             * @property {number} JUDGEMENT_FAILURE=2 JUDGEMENT_FAILURE value
             */
            debugjudge.SubmissionJudgement = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JUDGEMENT_UNKNOWN"] = 0;
                values[valuesById[1] = "JUDGEMENT_SUCCESS"] = 1;
                values[valuesById[2] = "JUDGEMENT_FAILURE"] = 2;
                return values;
            })();
    
            debugjudge.Submission = (function() {
    
                /**
                 * Properties of a Submission.
                 * @memberof acmcsus.debugjudge
                 * @interface ISubmission
                 * @property {number|Long|null} [problemId] Submission problemId
                 * @property {number|Long|null} [teamId] Submission teamId
                 * @property {number|Long|null} [submissionTimeSeconds] Submission submissionTimeSeconds
                 * @property {number|Long|null} [judgeId] Submission judgeId
                 * @property {acmcsus.debugjudge.SubmissionJudgement|null} [judgement] Submission judgement
                 * @property {string|null} [judgementMessage] Submission judgementMessage
                 * @property {acmcsus.debugjudge.Submission.IDebuggingSubmission|null} [debuggingSubmission] Submission debuggingSubmission
                 */
    
                /**
                 * Constructs a new Submission.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a Submission.
                 * @implements ISubmission
                 * @constructor
                 * @param {acmcsus.debugjudge.ISubmission=} [properties] Properties to set
                 */
                function Submission(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Submission problemId.
                 * @member {number|Long} problemId
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.problemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Submission teamId.
                 * @member {number|Long} teamId
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Submission submissionTimeSeconds.
                 * @member {number|Long} submissionTimeSeconds
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.submissionTimeSeconds = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Submission judgeId.
                 * @member {number|Long} judgeId
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.judgeId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Submission judgement.
                 * @member {acmcsus.debugjudge.SubmissionJudgement} judgement
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.judgement = 0;
    
                /**
                 * Submission judgementMessage.
                 * @member {string} judgementMessage
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.judgementMessage = "";
    
                /**
                 * Submission debuggingSubmission.
                 * @member {acmcsus.debugjudge.Submission.IDebuggingSubmission|null|undefined} debuggingSubmission
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.debuggingSubmission = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * Submission value.
                 * @member {"debuggingSubmission"|undefined} value
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Object.defineProperty(Submission.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["debuggingSubmission"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new Submission instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.Submission
                 * @static
                 * @param {acmcsus.debugjudge.ISubmission=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.Submission} Submission instance
                 */
                Submission.create = function create(properties) {
                    return new Submission(properties);
                };
    
                /**
                 * Encodes the specified Submission message. Does not implicitly {@link acmcsus.debugjudge.Submission.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.Submission
                 * @static
                 * @param {acmcsus.debugjudge.ISubmission} message Submission message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Submission.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.problemId != null && message.hasOwnProperty("problemId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.problemId);
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.teamId);
                    if (message.submissionTimeSeconds != null && message.hasOwnProperty("submissionTimeSeconds"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.submissionTimeSeconds);
                    if (message.judgeId != null && message.hasOwnProperty("judgeId"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.judgeId);
                    if (message.judgement != null && message.hasOwnProperty("judgement"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.judgement);
                    if (message.judgementMessage != null && message.hasOwnProperty("judgementMessage"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.judgementMessage);
                    if (message.debuggingSubmission != null && message.hasOwnProperty("debuggingSubmission"))
                        $root.acmcsus.debugjudge.Submission.DebuggingSubmission.encode(message.debuggingSubmission, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Submission message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Submission.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.Submission
                 * @static
                 * @param {acmcsus.debugjudge.ISubmission} message Submission message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Submission.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Submission message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.Submission
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.Submission} Submission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Submission.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Submission();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.problemId = reader.int64();
                            break;
                        case 3:
                            message.teamId = reader.int64();
                            break;
                        case 4:
                            message.submissionTimeSeconds = reader.uint64();
                            break;
                        case 5:
                            message.judgeId = reader.int64();
                            break;
                        case 6:
                            message.judgement = reader.int32();
                            break;
                        case 7:
                            message.judgementMessage = reader.string();
                            break;
                        case 9:
                            message.debuggingSubmission = $root.acmcsus.debugjudge.Submission.DebuggingSubmission.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Submission message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.Submission
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.Submission} Submission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Submission.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Submission message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.Submission
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Submission.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.problemId != null && message.hasOwnProperty("problemId"))
                        if (!$util.isInteger(message.problemId) && !(message.problemId && $util.isInteger(message.problemId.low) && $util.isInteger(message.problemId.high)))
                            return "problemId: integer|Long expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                            return "teamId: integer|Long expected";
                    if (message.submissionTimeSeconds != null && message.hasOwnProperty("submissionTimeSeconds"))
                        if (!$util.isInteger(message.submissionTimeSeconds) && !(message.submissionTimeSeconds && $util.isInteger(message.submissionTimeSeconds.low) && $util.isInteger(message.submissionTimeSeconds.high)))
                            return "submissionTimeSeconds: integer|Long expected";
                    if (message.judgeId != null && message.hasOwnProperty("judgeId"))
                        if (!$util.isInteger(message.judgeId) && !(message.judgeId && $util.isInteger(message.judgeId.low) && $util.isInteger(message.judgeId.high)))
                            return "judgeId: integer|Long expected";
                    if (message.judgement != null && message.hasOwnProperty("judgement"))
                        switch (message.judgement) {
                        default:
                            return "judgement: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.judgementMessage != null && message.hasOwnProperty("judgementMessage"))
                        if (!$util.isString(message.judgementMessage))
                            return "judgementMessage: string expected";
                    if (message.debuggingSubmission != null && message.hasOwnProperty("debuggingSubmission")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.Submission.DebuggingSubmission.verify(message.debuggingSubmission);
                            if (error)
                                return "debuggingSubmission." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Submission message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.Submission
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.Submission} Submission
                 */
                Submission.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.Submission)
                        return object;
                    var message = new $root.acmcsus.debugjudge.Submission();
                    if (object.problemId != null)
                        if ($util.Long)
                            (message.problemId = $util.Long.fromValue(object.problemId)).unsigned = false;
                        else if (typeof object.problemId === "string")
                            message.problemId = parseInt(object.problemId, 10);
                        else if (typeof object.problemId === "number")
                            message.problemId = object.problemId;
                        else if (typeof object.problemId === "object")
                            message.problemId = new $util.LongBits(object.problemId.low >>> 0, object.problemId.high >>> 0).toNumber();
                    if (object.teamId != null)
                        if ($util.Long)
                            (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                        else if (typeof object.teamId === "string")
                            message.teamId = parseInt(object.teamId, 10);
                        else if (typeof object.teamId === "number")
                            message.teamId = object.teamId;
                        else if (typeof object.teamId === "object")
                            message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                    if (object.submissionTimeSeconds != null)
                        if ($util.Long)
                            (message.submissionTimeSeconds = $util.Long.fromValue(object.submissionTimeSeconds)).unsigned = true;
                        else if (typeof object.submissionTimeSeconds === "string")
                            message.submissionTimeSeconds = parseInt(object.submissionTimeSeconds, 10);
                        else if (typeof object.submissionTimeSeconds === "number")
                            message.submissionTimeSeconds = object.submissionTimeSeconds;
                        else if (typeof object.submissionTimeSeconds === "object")
                            message.submissionTimeSeconds = new $util.LongBits(object.submissionTimeSeconds.low >>> 0, object.submissionTimeSeconds.high >>> 0).toNumber(true);
                    if (object.judgeId != null)
                        if ($util.Long)
                            (message.judgeId = $util.Long.fromValue(object.judgeId)).unsigned = false;
                        else if (typeof object.judgeId === "string")
                            message.judgeId = parseInt(object.judgeId, 10);
                        else if (typeof object.judgeId === "number")
                            message.judgeId = object.judgeId;
                        else if (typeof object.judgeId === "object")
                            message.judgeId = new $util.LongBits(object.judgeId.low >>> 0, object.judgeId.high >>> 0).toNumber();
                    switch (object.judgement) {
                    case "JUDGEMENT_UNKNOWN":
                    case 0:
                        message.judgement = 0;
                        break;
                    case "JUDGEMENT_SUCCESS":
                    case 1:
                        message.judgement = 1;
                        break;
                    case "JUDGEMENT_FAILURE":
                    case 2:
                        message.judgement = 2;
                        break;
                    }
                    if (object.judgementMessage != null)
                        message.judgementMessage = String(object.judgementMessage);
                    if (object.debuggingSubmission != null) {
                        if (typeof object.debuggingSubmission !== "object")
                            throw TypeError(".acmcsus.debugjudge.Submission.debuggingSubmission: object expected");
                        message.debuggingSubmission = $root.acmcsus.debugjudge.Submission.DebuggingSubmission.fromObject(object.debuggingSubmission);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Submission message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.Submission
                 * @static
                 * @param {acmcsus.debugjudge.Submission} message Submission
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Submission.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.problemId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.problemId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.teamId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.submissionTimeSeconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.submissionTimeSeconds = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.judgeId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.judgeId = options.longs === String ? "0" : 0;
                        object.judgement = options.enums === String ? "JUDGEMENT_UNKNOWN" : 0;
                        object.judgementMessage = "";
                    }
                    if (message.problemId != null && message.hasOwnProperty("problemId"))
                        if (typeof message.problemId === "number")
                            object.problemId = options.longs === String ? String(message.problemId) : message.problemId;
                        else
                            object.problemId = options.longs === String ? $util.Long.prototype.toString.call(message.problemId) : options.longs === Number ? new $util.LongBits(message.problemId.low >>> 0, message.problemId.high >>> 0).toNumber() : message.problemId;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (typeof message.teamId === "number")
                            object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                        else
                            object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                    if (message.submissionTimeSeconds != null && message.hasOwnProperty("submissionTimeSeconds"))
                        if (typeof message.submissionTimeSeconds === "number")
                            object.submissionTimeSeconds = options.longs === String ? String(message.submissionTimeSeconds) : message.submissionTimeSeconds;
                        else
                            object.submissionTimeSeconds = options.longs === String ? $util.Long.prototype.toString.call(message.submissionTimeSeconds) : options.longs === Number ? new $util.LongBits(message.submissionTimeSeconds.low >>> 0, message.submissionTimeSeconds.high >>> 0).toNumber(true) : message.submissionTimeSeconds;
                    if (message.judgeId != null && message.hasOwnProperty("judgeId"))
                        if (typeof message.judgeId === "number")
                            object.judgeId = options.longs === String ? String(message.judgeId) : message.judgeId;
                        else
                            object.judgeId = options.longs === String ? $util.Long.prototype.toString.call(message.judgeId) : options.longs === Number ? new $util.LongBits(message.judgeId.low >>> 0, message.judgeId.high >>> 0).toNumber() : message.judgeId;
                    if (message.judgement != null && message.hasOwnProperty("judgement"))
                        object.judgement = options.enums === String ? $root.acmcsus.debugjudge.SubmissionJudgement[message.judgement] : message.judgement;
                    if (message.judgementMessage != null && message.hasOwnProperty("judgementMessage"))
                        object.judgementMessage = message.judgementMessage;
                    if (message.debuggingSubmission != null && message.hasOwnProperty("debuggingSubmission")) {
                        object.debuggingSubmission = $root.acmcsus.debugjudge.Submission.DebuggingSubmission.toObject(message.debuggingSubmission, options);
                        if (options.oneofs)
                            object.value = "debuggingSubmission";
                    }
                    return object;
                };
    
                /**
                 * Converts this Submission to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Submission.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                Submission.DebuggingSubmission = (function() {
    
                    /**
                     * Properties of a DebuggingSubmission.
                     * @memberof acmcsus.debugjudge.Submission
                     * @interface IDebuggingSubmission
                     * @property {string|null} [code] DebuggingSubmission code
                     */
    
                    /**
                     * Constructs a new DebuggingSubmission.
                     * @memberof acmcsus.debugjudge.Submission
                     * @classdesc Represents a DebuggingSubmission.
                     * @implements IDebuggingSubmission
                     * @constructor
                     * @param {acmcsus.debugjudge.Submission.IDebuggingSubmission=} [properties] Properties to set
                     */
                    function DebuggingSubmission(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * DebuggingSubmission code.
                     * @member {string} code
                     * @memberof acmcsus.debugjudge.Submission.DebuggingSubmission
                     * @instance
                     */
                    DebuggingSubmission.prototype.code = "";
    
                    /**
                     * Creates a new DebuggingSubmission instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.Submission.DebuggingSubmission
                     * @static
                     * @param {acmcsus.debugjudge.Submission.IDebuggingSubmission=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.Submission.DebuggingSubmission} DebuggingSubmission instance
                     */
                    DebuggingSubmission.create = function create(properties) {
                        return new DebuggingSubmission(properties);
                    };
    
                    /**
                     * Encodes the specified DebuggingSubmission message. Does not implicitly {@link acmcsus.debugjudge.Submission.DebuggingSubmission.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.Submission.DebuggingSubmission
                     * @static
                     * @param {acmcsus.debugjudge.Submission.IDebuggingSubmission} message DebuggingSubmission message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DebuggingSubmission.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.code != null && message.hasOwnProperty("code"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DebuggingSubmission message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Submission.DebuggingSubmission.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.Submission.DebuggingSubmission
                     * @static
                     * @param {acmcsus.debugjudge.Submission.IDebuggingSubmission} message DebuggingSubmission message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DebuggingSubmission.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DebuggingSubmission message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.Submission.DebuggingSubmission
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.Submission.DebuggingSubmission} DebuggingSubmission
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DebuggingSubmission.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Submission.DebuggingSubmission();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.code = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a DebuggingSubmission message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.Submission.DebuggingSubmission
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.Submission.DebuggingSubmission} DebuggingSubmission
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DebuggingSubmission.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a DebuggingSubmission message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.Submission.DebuggingSubmission
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DebuggingSubmission.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            if (!$util.isString(message.code))
                                return "code: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a DebuggingSubmission message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.Submission.DebuggingSubmission
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.Submission.DebuggingSubmission} DebuggingSubmission
                     */
                    DebuggingSubmission.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.Submission.DebuggingSubmission)
                            return object;
                        var message = new $root.acmcsus.debugjudge.Submission.DebuggingSubmission();
                        if (object.code != null)
                            message.code = String(object.code);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DebuggingSubmission message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.Submission.DebuggingSubmission
                     * @static
                     * @param {acmcsus.debugjudge.Submission.DebuggingSubmission} message DebuggingSubmission
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DebuggingSubmission.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.code = "";
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = message.code;
                        return object;
                    };
    
                    /**
                     * Converts this DebuggingSubmission to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.Submission.DebuggingSubmission
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DebuggingSubmission.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return DebuggingSubmission;
                })();
    
                Submission.List = (function() {
    
                    /**
                     * Properties of a List.
                     * @memberof acmcsus.debugjudge.Submission
                     * @interface IList
                     * @property {Array.<acmcsus.debugjudge.ISubmission>|null} [value] List value
                     */
    
                    /**
                     * Constructs a new List.
                     * @memberof acmcsus.debugjudge.Submission
                     * @classdesc Represents a List.
                     * @implements IList
                     * @constructor
                     * @param {acmcsus.debugjudge.Submission.IList=} [properties] Properties to set
                     */
                    function List(properties) {
                        this.value = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * List value.
                     * @member {Array.<acmcsus.debugjudge.ISubmission>} value
                     * @memberof acmcsus.debugjudge.Submission.List
                     * @instance
                     */
                    List.prototype.value = $util.emptyArray;
    
                    /**
                     * Creates a new List instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.Submission.List
                     * @static
                     * @param {acmcsus.debugjudge.Submission.IList=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.Submission.List} List instance
                     */
                    List.create = function create(properties) {
                        return new List(properties);
                    };
    
                    /**
                     * Encodes the specified List message. Does not implicitly {@link acmcsus.debugjudge.Submission.List.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.Submission.List
                     * @static
                     * @param {acmcsus.debugjudge.Submission.IList} message List message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    List.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && message.value.length)
                            for (var i = 0; i < message.value.length; ++i)
                                $root.acmcsus.debugjudge.Submission.encode(message.value[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified List message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Submission.List.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.Submission.List
                     * @static
                     * @param {acmcsus.debugjudge.Submission.IList} message List message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    List.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a List message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.Submission.List
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.Submission.List} List
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    List.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Submission.List();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.value && message.value.length))
                                    message.value = [];
                                message.value.push($root.acmcsus.debugjudge.Submission.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a List message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.Submission.List
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.Submission.List} List
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    List.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a List message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.Submission.List
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    List.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value")) {
                            if (!Array.isArray(message.value))
                                return "value: array expected";
                            for (var i = 0; i < message.value.length; ++i) {
                                var error = $root.acmcsus.debugjudge.Submission.verify(message.value[i]);
                                if (error)
                                    return "value." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a List message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.Submission.List
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.Submission.List} List
                     */
                    List.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.Submission.List)
                            return object;
                        var message = new $root.acmcsus.debugjudge.Submission.List();
                        if (object.value) {
                            if (!Array.isArray(object.value))
                                throw TypeError(".acmcsus.debugjudge.Submission.List.value: array expected");
                            message.value = [];
                            for (var i = 0; i < object.value.length; ++i) {
                                if (typeof object.value[i] !== "object")
                                    throw TypeError(".acmcsus.debugjudge.Submission.List.value: object expected");
                                message.value[i] = $root.acmcsus.debugjudge.Submission.fromObject(object.value[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a List message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.Submission.List
                     * @static
                     * @param {acmcsus.debugjudge.Submission.List} message List
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    List.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.value = [];
                        if (message.value && message.value.length) {
                            object.value = [];
                            for (var j = 0; j < message.value.length; ++j)
                                object.value[j] = $root.acmcsus.debugjudge.Submission.toObject(message.value[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this List to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.Submission.List
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    List.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return List;
                })();
    
                return Submission;
            })();
    
            debugjudge.Profile = (function() {
    
                /**
                 * Properties of a Profile.
                 * @memberof acmcsus.debugjudge
                 * @interface IProfile
                 * @property {number|Long|null} [id] Profile id
                 * @property {string|null} [name] Profile name
                 * @property {acmcsus.debugjudge.Profile.ProfileType|null} [profileType] Profile profileType
                 */
    
                /**
                 * Constructs a new Profile.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a Profile.
                 * @implements IProfile
                 * @constructor
                 * @param {acmcsus.debugjudge.IProfile=} [properties] Properties to set
                 */
                function Profile(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Profile id.
                 * @member {number|Long} id
                 * @memberof acmcsus.debugjudge.Profile
                 * @instance
                 */
                Profile.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Profile name.
                 * @member {string} name
                 * @memberof acmcsus.debugjudge.Profile
                 * @instance
                 */
                Profile.prototype.name = "";
    
                /**
                 * Profile profileType.
                 * @member {acmcsus.debugjudge.Profile.ProfileType} profileType
                 * @memberof acmcsus.debugjudge.Profile
                 * @instance
                 */
                Profile.prototype.profileType = 0;
    
                /**
                 * Creates a new Profile instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.Profile
                 * @static
                 * @param {acmcsus.debugjudge.IProfile=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.Profile} Profile instance
                 */
                Profile.create = function create(properties) {
                    return new Profile(properties);
                };
    
                /**
                 * Encodes the specified Profile message. Does not implicitly {@link acmcsus.debugjudge.Profile.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.Profile
                 * @static
                 * @param {acmcsus.debugjudge.IProfile} message Profile message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Profile.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.profileType != null && message.hasOwnProperty("profileType"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.profileType);
                    return writer;
                };
    
                /**
                 * Encodes the specified Profile message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Profile.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.Profile
                 * @static
                 * @param {acmcsus.debugjudge.IProfile} message Profile message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Profile.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Profile message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.Profile
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.Profile} Profile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Profile.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Profile();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.profileType = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Profile message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.Profile
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.Profile} Profile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Profile.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Profile message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.Profile
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Profile.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.profileType != null && message.hasOwnProperty("profileType"))
                        switch (message.profileType) {
                        default:
                            return "profileType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };
    
                /**
                 * Creates a Profile message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.Profile
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.Profile} Profile
                 */
                Profile.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.Profile)
                        return object;
                    var message = new $root.acmcsus.debugjudge.Profile();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.name != null)
                        message.name = String(object.name);
                    switch (object.profileType) {
                    case "TEAM":
                    case 0:
                        message.profileType = 0;
                        break;
                    case "JUDGE":
                    case 1:
                        message.profileType = 1;
                        break;
                    case "ADMIN":
                    case 2:
                        message.profileType = 2;
                        break;
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Profile message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.Profile
                 * @static
                 * @param {acmcsus.debugjudge.Profile} message Profile
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Profile.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        object.name = "";
                        object.profileType = options.enums === String ? "TEAM" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.profileType != null && message.hasOwnProperty("profileType"))
                        object.profileType = options.enums === String ? $root.acmcsus.debugjudge.Profile.ProfileType[message.profileType] : message.profileType;
                    return object;
                };
    
                /**
                 * Converts this Profile to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.Profile
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Profile.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * ProfileType enum.
                 * @name acmcsus.debugjudge.Profile.ProfileType
                 * @enum {string}
                 * @property {number} TEAM=0 TEAM value
                 * @property {number} JUDGE=1 JUDGE value
                 * @property {number} ADMIN=2 ADMIN value
                 */
                Profile.ProfileType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "TEAM"] = 0;
                    values[valuesById[1] = "JUDGE"] = 1;
                    values[valuesById[2] = "ADMIN"] = 2;
                    return values;
                })();
    
                Profile.List = (function() {
    
                    /**
                     * Properties of a List.
                     * @memberof acmcsus.debugjudge.Profile
                     * @interface IList
                     * @property {Array.<acmcsus.debugjudge.IProfile>|null} [value] List value
                     */
    
                    /**
                     * Constructs a new List.
                     * @memberof acmcsus.debugjudge.Profile
                     * @classdesc Represents a List.
                     * @implements IList
                     * @constructor
                     * @param {acmcsus.debugjudge.Profile.IList=} [properties] Properties to set
                     */
                    function List(properties) {
                        this.value = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * List value.
                     * @member {Array.<acmcsus.debugjudge.IProfile>} value
                     * @memberof acmcsus.debugjudge.Profile.List
                     * @instance
                     */
                    List.prototype.value = $util.emptyArray;
    
                    /**
                     * Creates a new List instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.Profile.List
                     * @static
                     * @param {acmcsus.debugjudge.Profile.IList=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.Profile.List} List instance
                     */
                    List.create = function create(properties) {
                        return new List(properties);
                    };
    
                    /**
                     * Encodes the specified List message. Does not implicitly {@link acmcsus.debugjudge.Profile.List.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.Profile.List
                     * @static
                     * @param {acmcsus.debugjudge.Profile.IList} message List message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    List.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && message.value.length)
                            for (var i = 0; i < message.value.length; ++i)
                                $root.acmcsus.debugjudge.Profile.encode(message.value[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified List message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Profile.List.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.Profile.List
                     * @static
                     * @param {acmcsus.debugjudge.Profile.IList} message List message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    List.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a List message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.Profile.List
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.Profile.List} List
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    List.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Profile.List();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.value && message.value.length))
                                    message.value = [];
                                message.value.push($root.acmcsus.debugjudge.Profile.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a List message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.Profile.List
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.Profile.List} List
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    List.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a List message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.Profile.List
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    List.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value")) {
                            if (!Array.isArray(message.value))
                                return "value: array expected";
                            for (var i = 0; i < message.value.length; ++i) {
                                var error = $root.acmcsus.debugjudge.Profile.verify(message.value[i]);
                                if (error)
                                    return "value." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a List message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.Profile.List
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.Profile.List} List
                     */
                    List.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.Profile.List)
                            return object;
                        var message = new $root.acmcsus.debugjudge.Profile.List();
                        if (object.value) {
                            if (!Array.isArray(object.value))
                                throw TypeError(".acmcsus.debugjudge.Profile.List.value: array expected");
                            message.value = [];
                            for (var i = 0; i < object.value.length; ++i) {
                                if (typeof object.value[i] !== "object")
                                    throw TypeError(".acmcsus.debugjudge.Profile.List.value: object expected");
                                message.value[i] = $root.acmcsus.debugjudge.Profile.fromObject(object.value[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a List message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.Profile.List
                     * @static
                     * @param {acmcsus.debugjudge.Profile.List} message List
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    List.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.value = [];
                        if (message.value && message.value.length) {
                            object.value = [];
                            for (var j = 0; j < message.value.length; ++j)
                                object.value[j] = $root.acmcsus.debugjudge.Profile.toObject(message.value[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this List to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.Profile.List
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    List.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return List;
                })();
    
                return Profile;
            })();
    
            debugjudge.Problem = (function() {
    
                /**
                 * Properties of a Problem.
                 * @memberof acmcsus.debugjudge
                 * @interface IProblem
                 * @property {number|Long|null} [id] Problem id
                 * @property {string|null} [title] Problem title
                 * @property {number|null} [orderIndex] Problem orderIndex
                 * @property {string|null} [color] Problem color
                 * @property {string|null} [descriptionText] Problem descriptionText
                 * @property {string|null} [descriptionFile] Problem descriptionFile
                 * @property {acmcsus.debugjudge.Problem.IDebuggingProblemValue|null} [debuggingProblem] Problem debuggingProblem
                 */
    
                /**
                 * Constructs a new Problem.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a Problem.
                 * @implements IProblem
                 * @constructor
                 * @param {acmcsus.debugjudge.IProblem=} [properties] Properties to set
                 */
                function Problem(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Problem id.
                 * @member {number|Long} id
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Problem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Problem title.
                 * @member {string} title
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Problem.prototype.title = "";
    
                /**
                 * Problem orderIndex.
                 * @member {number} orderIndex
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Problem.prototype.orderIndex = 0;
    
                /**
                 * Problem color.
                 * @member {string} color
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Problem.prototype.color = "";
    
                /**
                 * Problem descriptionText.
                 * @member {string} descriptionText
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Problem.prototype.descriptionText = "";
    
                /**
                 * Problem descriptionFile.
                 * @member {string} descriptionFile
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Problem.prototype.descriptionFile = "";
    
                /**
                 * Problem debuggingProblem.
                 * @member {acmcsus.debugjudge.Problem.IDebuggingProblemValue|null|undefined} debuggingProblem
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Problem.prototype.debuggingProblem = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * Problem description.
                 * @member {"descriptionText"|"descriptionFile"|undefined} description
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Object.defineProperty(Problem.prototype, "description", {
                    get: $util.oneOfGetter($oneOfFields = ["descriptionText", "descriptionFile"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Problem value.
                 * @member {"debuggingProblem"|undefined} value
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Object.defineProperty(Problem.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["debuggingProblem"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new Problem instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.Problem
                 * @static
                 * @param {acmcsus.debugjudge.IProblem=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.Problem} Problem instance
                 */
                Problem.create = function create(properties) {
                    return new Problem(properties);
                };
    
                /**
                 * Encodes the specified Problem message. Does not implicitly {@link acmcsus.debugjudge.Problem.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.Problem
                 * @static
                 * @param {acmcsus.debugjudge.IProblem} message Problem message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Problem.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.title != null && message.hasOwnProperty("title"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                    if (message.orderIndex != null && message.hasOwnProperty("orderIndex"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.orderIndex);
                    if (message.color != null && message.hasOwnProperty("color"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.color);
                    if (message.descriptionText != null && message.hasOwnProperty("descriptionText"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.descriptionText);
                    if (message.descriptionFile != null && message.hasOwnProperty("descriptionFile"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.descriptionFile);
                    if (message.debuggingProblem != null && message.hasOwnProperty("debuggingProblem"))
                        $root.acmcsus.debugjudge.Problem.DebuggingProblemValue.encode(message.debuggingProblem, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Problem message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.Problem
                 * @static
                 * @param {acmcsus.debugjudge.IProblem} message Problem message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Problem.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Problem message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.Problem
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.Problem} Problem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Problem.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Problem();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.title = reader.string();
                            break;
                        case 3:
                            message.orderIndex = reader.int32();
                            break;
                        case 4:
                            message.color = reader.string();
                            break;
                        case 7:
                            message.descriptionText = reader.string();
                            break;
                        case 8:
                            message.descriptionFile = reader.string();
                            break;
                        case 9:
                            message.debuggingProblem = $root.acmcsus.debugjudge.Problem.DebuggingProblemValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Problem message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.Problem
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.Problem} Problem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Problem.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Problem message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.Problem
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Problem.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    if (message.orderIndex != null && message.hasOwnProperty("orderIndex"))
                        if (!$util.isInteger(message.orderIndex))
                            return "orderIndex: integer expected";
                    if (message.color != null && message.hasOwnProperty("color"))
                        if (!$util.isString(message.color))
                            return "color: string expected";
                    if (message.descriptionText != null && message.hasOwnProperty("descriptionText")) {
                        properties.description = 1;
                        if (!$util.isString(message.descriptionText))
                            return "descriptionText: string expected";
                    }
                    if (message.descriptionFile != null && message.hasOwnProperty("descriptionFile")) {
                        if (properties.description === 1)
                            return "description: multiple values";
                        properties.description = 1;
                        if (!$util.isString(message.descriptionFile))
                            return "descriptionFile: string expected";
                    }
                    if (message.debuggingProblem != null && message.hasOwnProperty("debuggingProblem")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.Problem.DebuggingProblemValue.verify(message.debuggingProblem);
                            if (error)
                                return "debuggingProblem." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Problem message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.Problem
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.Problem} Problem
                 */
                Problem.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.Problem)
                        return object;
                    var message = new $root.acmcsus.debugjudge.Problem();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.orderIndex != null)
                        message.orderIndex = object.orderIndex | 0;
                    if (object.color != null)
                        message.color = String(object.color);
                    if (object.descriptionText != null)
                        message.descriptionText = String(object.descriptionText);
                    if (object.descriptionFile != null)
                        message.descriptionFile = String(object.descriptionFile);
                    if (object.debuggingProblem != null) {
                        if (typeof object.debuggingProblem !== "object")
                            throw TypeError(".acmcsus.debugjudge.Problem.debuggingProblem: object expected");
                        message.debuggingProblem = $root.acmcsus.debugjudge.Problem.DebuggingProblemValue.fromObject(object.debuggingProblem);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Problem message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.Problem
                 * @static
                 * @param {acmcsus.debugjudge.Problem} message Problem
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Problem.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        object.title = "";
                        object.orderIndex = 0;
                        object.color = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.orderIndex != null && message.hasOwnProperty("orderIndex"))
                        object.orderIndex = message.orderIndex;
                    if (message.color != null && message.hasOwnProperty("color"))
                        object.color = message.color;
                    if (message.descriptionText != null && message.hasOwnProperty("descriptionText")) {
                        object.descriptionText = message.descriptionText;
                        if (options.oneofs)
                            object.description = "descriptionText";
                    }
                    if (message.descriptionFile != null && message.hasOwnProperty("descriptionFile")) {
                        object.descriptionFile = message.descriptionFile;
                        if (options.oneofs)
                            object.description = "descriptionFile";
                    }
                    if (message.debuggingProblem != null && message.hasOwnProperty("debuggingProblem")) {
                        object.debuggingProblem = $root.acmcsus.debugjudge.Problem.DebuggingProblemValue.toObject(message.debuggingProblem, options);
                        if (options.oneofs)
                            object.value = "debuggingProblem";
                    }
                    return object;
                };
    
                /**
                 * Converts this Problem to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Problem.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                Problem.DebuggingProblemValue = (function() {
    
                    /**
                     * Properties of a DebuggingProblemValue.
                     * @memberof acmcsus.debugjudge.Problem
                     * @interface IDebuggingProblemValue
                     * @property {string|null} [language] DebuggingProblemValue language
                     * @property {string|null} [precode] DebuggingProblemValue precode
                     * @property {string|null} [code] DebuggingProblemValue code
                     * @property {string|null} [postcode] DebuggingProblemValue postcode
                     * @property {string|null} [answer] DebuggingProblemValue answer
                     * @property {string|null} [definitionFile] DebuggingProblemValue definitionFile
                     */
    
                    /**
                     * Constructs a new DebuggingProblemValue.
                     * @memberof acmcsus.debugjudge.Problem
                     * @classdesc Represents a DebuggingProblemValue.
                     * @implements IDebuggingProblemValue
                     * @constructor
                     * @param {acmcsus.debugjudge.Problem.IDebuggingProblemValue=} [properties] Properties to set
                     */
                    function DebuggingProblemValue(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * DebuggingProblemValue language.
                     * @member {string} language
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @instance
                     */
                    DebuggingProblemValue.prototype.language = "";
    
                    /**
                     * DebuggingProblemValue precode.
                     * @member {string} precode
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @instance
                     */
                    DebuggingProblemValue.prototype.precode = "";
    
                    /**
                     * DebuggingProblemValue code.
                     * @member {string} code
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @instance
                     */
                    DebuggingProblemValue.prototype.code = "";
    
                    /**
                     * DebuggingProblemValue postcode.
                     * @member {string} postcode
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @instance
                     */
                    DebuggingProblemValue.prototype.postcode = "";
    
                    /**
                     * DebuggingProblemValue answer.
                     * @member {string} answer
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @instance
                     */
                    DebuggingProblemValue.prototype.answer = "";
    
                    /**
                     * DebuggingProblemValue definitionFile.
                     * @member {string} definitionFile
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @instance
                     */
                    DebuggingProblemValue.prototype.definitionFile = "";
    
                    /**
                     * Creates a new DebuggingProblemValue instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @static
                     * @param {acmcsus.debugjudge.Problem.IDebuggingProblemValue=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.Problem.DebuggingProblemValue} DebuggingProblemValue instance
                     */
                    DebuggingProblemValue.create = function create(properties) {
                        return new DebuggingProblemValue(properties);
                    };
    
                    /**
                     * Encodes the specified DebuggingProblemValue message. Does not implicitly {@link acmcsus.debugjudge.Problem.DebuggingProblemValue.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @static
                     * @param {acmcsus.debugjudge.Problem.IDebuggingProblemValue} message DebuggingProblemValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DebuggingProblemValue.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.language != null && message.hasOwnProperty("language"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.language);
                        if (message.precode != null && message.hasOwnProperty("precode"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.precode);
                        if (message.code != null && message.hasOwnProperty("code"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.code);
                        if (message.postcode != null && message.hasOwnProperty("postcode"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.postcode);
                        if (message.answer != null && message.hasOwnProperty("answer"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.answer);
                        if (message.definitionFile != null && message.hasOwnProperty("definitionFile"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.definitionFile);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DebuggingProblemValue message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.DebuggingProblemValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @static
                     * @param {acmcsus.debugjudge.Problem.IDebuggingProblemValue} message DebuggingProblemValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DebuggingProblemValue.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DebuggingProblemValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.Problem.DebuggingProblemValue} DebuggingProblemValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DebuggingProblemValue.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Problem.DebuggingProblemValue();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.language = reader.string();
                                break;
                            case 2:
                                message.precode = reader.string();
                                break;
                            case 3:
                                message.code = reader.string();
                                break;
                            case 4:
                                message.postcode = reader.string();
                                break;
                            case 5:
                                message.answer = reader.string();
                                break;
                            case 6:
                                message.definitionFile = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a DebuggingProblemValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.Problem.DebuggingProblemValue} DebuggingProblemValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DebuggingProblemValue.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a DebuggingProblemValue message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DebuggingProblemValue.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.language != null && message.hasOwnProperty("language"))
                            if (!$util.isString(message.language))
                                return "language: string expected";
                        if (message.precode != null && message.hasOwnProperty("precode"))
                            if (!$util.isString(message.precode))
                                return "precode: string expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            if (!$util.isString(message.code))
                                return "code: string expected";
                        if (message.postcode != null && message.hasOwnProperty("postcode"))
                            if (!$util.isString(message.postcode))
                                return "postcode: string expected";
                        if (message.answer != null && message.hasOwnProperty("answer"))
                            if (!$util.isString(message.answer))
                                return "answer: string expected";
                        if (message.definitionFile != null && message.hasOwnProperty("definitionFile"))
                            if (!$util.isString(message.definitionFile))
                                return "definitionFile: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a DebuggingProblemValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.Problem.DebuggingProblemValue} DebuggingProblemValue
                     */
                    DebuggingProblemValue.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.Problem.DebuggingProblemValue)
                            return object;
                        var message = new $root.acmcsus.debugjudge.Problem.DebuggingProblemValue();
                        if (object.language != null)
                            message.language = String(object.language);
                        if (object.precode != null)
                            message.precode = String(object.precode);
                        if (object.code != null)
                            message.code = String(object.code);
                        if (object.postcode != null)
                            message.postcode = String(object.postcode);
                        if (object.answer != null)
                            message.answer = String(object.answer);
                        if (object.definitionFile != null)
                            message.definitionFile = String(object.definitionFile);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DebuggingProblemValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @static
                     * @param {acmcsus.debugjudge.Problem.DebuggingProblemValue} message DebuggingProblemValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DebuggingProblemValue.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.language = "";
                            object.precode = "";
                            object.code = "";
                            object.postcode = "";
                            object.answer = "";
                            object.definitionFile = "";
                        }
                        if (message.language != null && message.hasOwnProperty("language"))
                            object.language = message.language;
                        if (message.precode != null && message.hasOwnProperty("precode"))
                            object.precode = message.precode;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = message.code;
                        if (message.postcode != null && message.hasOwnProperty("postcode"))
                            object.postcode = message.postcode;
                        if (message.answer != null && message.hasOwnProperty("answer"))
                            object.answer = message.answer;
                        if (message.definitionFile != null && message.hasOwnProperty("definitionFile"))
                            object.definitionFile = message.definitionFile;
                        return object;
                    };
    
                    /**
                     * Converts this DebuggingProblemValue to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.Problem.DebuggingProblemValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DebuggingProblemValue.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return DebuggingProblemValue;
                })();
    
                Problem.List = (function() {
    
                    /**
                     * Properties of a List.
                     * @memberof acmcsus.debugjudge.Problem
                     * @interface IList
                     * @property {Array.<acmcsus.debugjudge.IProblem>|null} [value] List value
                     */
    
                    /**
                     * Constructs a new List.
                     * @memberof acmcsus.debugjudge.Problem
                     * @classdesc Represents a List.
                     * @implements IList
                     * @constructor
                     * @param {acmcsus.debugjudge.Problem.IList=} [properties] Properties to set
                     */
                    function List(properties) {
                        this.value = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * List value.
                     * @member {Array.<acmcsus.debugjudge.IProblem>} value
                     * @memberof acmcsus.debugjudge.Problem.List
                     * @instance
                     */
                    List.prototype.value = $util.emptyArray;
    
                    /**
                     * Creates a new List instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.Problem.List
                     * @static
                     * @param {acmcsus.debugjudge.Problem.IList=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.Problem.List} List instance
                     */
                    List.create = function create(properties) {
                        return new List(properties);
                    };
    
                    /**
                     * Encodes the specified List message. Does not implicitly {@link acmcsus.debugjudge.Problem.List.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.Problem.List
                     * @static
                     * @param {acmcsus.debugjudge.Problem.IList} message List message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    List.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && message.value.length)
                            for (var i = 0; i < message.value.length; ++i)
                                $root.acmcsus.debugjudge.Problem.encode(message.value[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified List message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.List.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.Problem.List
                     * @static
                     * @param {acmcsus.debugjudge.Problem.IList} message List message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    List.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a List message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.Problem.List
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.Problem.List} List
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    List.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Problem.List();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.value && message.value.length))
                                    message.value = [];
                                message.value.push($root.acmcsus.debugjudge.Problem.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a List message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.Problem.List
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.Problem.List} List
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    List.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a List message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.Problem.List
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    List.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value")) {
                            if (!Array.isArray(message.value))
                                return "value: array expected";
                            for (var i = 0; i < message.value.length; ++i) {
                                var error = $root.acmcsus.debugjudge.Problem.verify(message.value[i]);
                                if (error)
                                    return "value." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a List message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.Problem.List
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.Problem.List} List
                     */
                    List.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.Problem.List)
                            return object;
                        var message = new $root.acmcsus.debugjudge.Problem.List();
                        if (object.value) {
                            if (!Array.isArray(object.value))
                                throw TypeError(".acmcsus.debugjudge.Problem.List.value: array expected");
                            message.value = [];
                            for (var i = 0; i < object.value.length; ++i) {
                                if (typeof object.value[i] !== "object")
                                    throw TypeError(".acmcsus.debugjudge.Problem.List.value: object expected");
                                message.value[i] = $root.acmcsus.debugjudge.Problem.fromObject(object.value[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a List message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.Problem.List
                     * @static
                     * @param {acmcsus.debugjudge.Problem.List} message List
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    List.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.value = [];
                        if (message.value && message.value.length) {
                            object.value = [];
                            for (var j = 0; j < message.value.length; ++j)
                                object.value[j] = $root.acmcsus.debugjudge.Problem.toObject(message.value[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this List to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.Problem.List
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    List.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return List;
                })();
    
                return Problem;
            })();
    
            debugjudge.Scoreboard = (function() {
    
                /**
                 * Properties of a Scoreboard.
                 * @memberof acmcsus.debugjudge
                 * @interface IScoreboard
                 * @property {Array.<acmcsus.debugjudge.Scoreboard.IScoreboardRow>|null} [row] Scoreboard row
                 * @property {number|Long|null} [updateTimeMillis] Scoreboard updateTimeMillis
                 */
    
                /**
                 * Constructs a new Scoreboard.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a Scoreboard.
                 * @implements IScoreboard
                 * @constructor
                 * @param {acmcsus.debugjudge.IScoreboard=} [properties] Properties to set
                 */
                function Scoreboard(properties) {
                    this.row = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Scoreboard row.
                 * @member {Array.<acmcsus.debugjudge.Scoreboard.IScoreboardRow>} row
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @instance
                 */
                Scoreboard.prototype.row = $util.emptyArray;
    
                /**
                 * Scoreboard updateTimeMillis.
                 * @member {number|Long} updateTimeMillis
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @instance
                 */
                Scoreboard.prototype.updateTimeMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Creates a new Scoreboard instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @static
                 * @param {acmcsus.debugjudge.IScoreboard=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.Scoreboard} Scoreboard instance
                 */
                Scoreboard.create = function create(properties) {
                    return new Scoreboard(properties);
                };
    
                /**
                 * Encodes the specified Scoreboard message. Does not implicitly {@link acmcsus.debugjudge.Scoreboard.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @static
                 * @param {acmcsus.debugjudge.IScoreboard} message Scoreboard message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Scoreboard.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.row != null && message.row.length)
                        for (var i = 0; i < message.row.length; ++i)
                            $root.acmcsus.debugjudge.Scoreboard.ScoreboardRow.encode(message.row[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.updateTimeMillis != null && message.hasOwnProperty("updateTimeMillis"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.updateTimeMillis);
                    return writer;
                };
    
                /**
                 * Encodes the specified Scoreboard message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Scoreboard.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @static
                 * @param {acmcsus.debugjudge.IScoreboard} message Scoreboard message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Scoreboard.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Scoreboard message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.Scoreboard} Scoreboard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Scoreboard.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Scoreboard();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.row && message.row.length))
                                message.row = [];
                            message.row.push($root.acmcsus.debugjudge.Scoreboard.ScoreboardRow.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.updateTimeMillis = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Scoreboard message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.Scoreboard} Scoreboard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Scoreboard.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Scoreboard message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Scoreboard.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.row != null && message.hasOwnProperty("row")) {
                        if (!Array.isArray(message.row))
                            return "row: array expected";
                        for (var i = 0; i < message.row.length; ++i) {
                            var error = $root.acmcsus.debugjudge.Scoreboard.ScoreboardRow.verify(message.row[i]);
                            if (error)
                                return "row." + error;
                        }
                    }
                    if (message.updateTimeMillis != null && message.hasOwnProperty("updateTimeMillis"))
                        if (!$util.isInteger(message.updateTimeMillis) && !(message.updateTimeMillis && $util.isInteger(message.updateTimeMillis.low) && $util.isInteger(message.updateTimeMillis.high)))
                            return "updateTimeMillis: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a Scoreboard message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.Scoreboard} Scoreboard
                 */
                Scoreboard.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.Scoreboard)
                        return object;
                    var message = new $root.acmcsus.debugjudge.Scoreboard();
                    if (object.row) {
                        if (!Array.isArray(object.row))
                            throw TypeError(".acmcsus.debugjudge.Scoreboard.row: array expected");
                        message.row = [];
                        for (var i = 0; i < object.row.length; ++i) {
                            if (typeof object.row[i] !== "object")
                                throw TypeError(".acmcsus.debugjudge.Scoreboard.row: object expected");
                            message.row[i] = $root.acmcsus.debugjudge.Scoreboard.ScoreboardRow.fromObject(object.row[i]);
                        }
                    }
                    if (object.updateTimeMillis != null)
                        if ($util.Long)
                            (message.updateTimeMillis = $util.Long.fromValue(object.updateTimeMillis)).unsigned = false;
                        else if (typeof object.updateTimeMillis === "string")
                            message.updateTimeMillis = parseInt(object.updateTimeMillis, 10);
                        else if (typeof object.updateTimeMillis === "number")
                            message.updateTimeMillis = object.updateTimeMillis;
                        else if (typeof object.updateTimeMillis === "object")
                            message.updateTimeMillis = new $util.LongBits(object.updateTimeMillis.low >>> 0, object.updateTimeMillis.high >>> 0).toNumber();
                    return message;
                };
    
                /**
                 * Creates a plain object from a Scoreboard message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @static
                 * @param {acmcsus.debugjudge.Scoreboard} message Scoreboard
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Scoreboard.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.row = [];
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.updateTimeMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.updateTimeMillis = options.longs === String ? "0" : 0;
                    if (message.row && message.row.length) {
                        object.row = [];
                        for (var j = 0; j < message.row.length; ++j)
                            object.row[j] = $root.acmcsus.debugjudge.Scoreboard.ScoreboardRow.toObject(message.row[j], options);
                    }
                    if (message.updateTimeMillis != null && message.hasOwnProperty("updateTimeMillis"))
                        if (typeof message.updateTimeMillis === "number")
                            object.updateTimeMillis = options.longs === String ? String(message.updateTimeMillis) : message.updateTimeMillis;
                        else
                            object.updateTimeMillis = options.longs === String ? $util.Long.prototype.toString.call(message.updateTimeMillis) : options.longs === Number ? new $util.LongBits(message.updateTimeMillis.low >>> 0, message.updateTimeMillis.high >>> 0).toNumber() : message.updateTimeMillis;
                    return object;
                };
    
                /**
                 * Converts this Scoreboard to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.Scoreboard
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Scoreboard.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                Scoreboard.ScoreboardRow = (function() {
    
                    /**
                     * Properties of a ScoreboardRow.
                     * @memberof acmcsus.debugjudge.Scoreboard
                     * @interface IScoreboardRow
                     * @property {string|null} [profileName] ScoreboardRow profileName
                     * @property {Object.<string,number>|null} [problemAttempts] ScoreboardRow problemAttempts
                     * @property {Object.<string,boolean>|null} [problemCompletions] ScoreboardRow problemCompletions
                     * @property {number|null} [place] ScoreboardRow place
                     * @property {number|null} [score] ScoreboardRow score
                     * @property {number|null} [penalty] ScoreboardRow penalty
                     */
    
                    /**
                     * Constructs a new ScoreboardRow.
                     * @memberof acmcsus.debugjudge.Scoreboard
                     * @classdesc Represents a ScoreboardRow.
                     * @implements IScoreboardRow
                     * @constructor
                     * @param {acmcsus.debugjudge.Scoreboard.IScoreboardRow=} [properties] Properties to set
                     */
                    function ScoreboardRow(properties) {
                        this.problemAttempts = {};
                        this.problemCompletions = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ScoreboardRow profileName.
                     * @member {string} profileName
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @instance
                     */
                    ScoreboardRow.prototype.profileName = "";
    
                    /**
                     * ScoreboardRow problemAttempts.
                     * @member {Object.<string,number>} problemAttempts
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @instance
                     */
                    ScoreboardRow.prototype.problemAttempts = $util.emptyObject;
    
                    /**
                     * ScoreboardRow problemCompletions.
                     * @member {Object.<string,boolean>} problemCompletions
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @instance
                     */
                    ScoreboardRow.prototype.problemCompletions = $util.emptyObject;
    
                    /**
                     * ScoreboardRow place.
                     * @member {number} place
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @instance
                     */
                    ScoreboardRow.prototype.place = 0;
    
                    /**
                     * ScoreboardRow score.
                     * @member {number} score
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @instance
                     */
                    ScoreboardRow.prototype.score = 0;
    
                    /**
                     * ScoreboardRow penalty.
                     * @member {number} penalty
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @instance
                     */
                    ScoreboardRow.prototype.penalty = 0;
    
                    /**
                     * Creates a new ScoreboardRow instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @static
                     * @param {acmcsus.debugjudge.Scoreboard.IScoreboardRow=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.Scoreboard.ScoreboardRow} ScoreboardRow instance
                     */
                    ScoreboardRow.create = function create(properties) {
                        return new ScoreboardRow(properties);
                    };
    
                    /**
                     * Encodes the specified ScoreboardRow message. Does not implicitly {@link acmcsus.debugjudge.Scoreboard.ScoreboardRow.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @static
                     * @param {acmcsus.debugjudge.Scoreboard.IScoreboardRow} message ScoreboardRow message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScoreboardRow.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.profileName != null && message.hasOwnProperty("profileName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.profileName);
                        if (message.problemAttempts != null && message.hasOwnProperty("problemAttempts"))
                            for (var keys = Object.keys(message.problemAttempts), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.problemAttempts[keys[i]]).ldelim();
                        if (message.problemCompletions != null && message.hasOwnProperty("problemCompletions"))
                            for (var keys = Object.keys(message.problemCompletions), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.problemCompletions[keys[i]]).ldelim();
                        if (message.place != null && message.hasOwnProperty("place"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.place);
                        if (message.score != null && message.hasOwnProperty("score"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.score);
                        if (message.penalty != null && message.hasOwnProperty("penalty"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.penalty);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ScoreboardRow message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Scoreboard.ScoreboardRow.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @static
                     * @param {acmcsus.debugjudge.Scoreboard.IScoreboardRow} message ScoreboardRow message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScoreboardRow.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ScoreboardRow message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.Scoreboard.ScoreboardRow} ScoreboardRow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScoreboardRow.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Scoreboard.ScoreboardRow(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.profileName = reader.string();
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.problemAttempts === $util.emptyObject)
                                    message.problemAttempts = {};
                                key = reader.int64();
                                reader.pos++;
                                message.problemAttempts[typeof key === "object" ? $util.longToHash(key) : key] = reader.int32();
                                break;
                            case 3:
                                reader.skip().pos++;
                                if (message.problemCompletions === $util.emptyObject)
                                    message.problemCompletions = {};
                                key = reader.int64();
                                reader.pos++;
                                message.problemCompletions[typeof key === "object" ? $util.longToHash(key) : key] = reader.bool();
                                break;
                            case 4:
                                message.place = reader.int32();
                                break;
                            case 5:
                                message.score = reader.int32();
                                break;
                            case 6:
                                message.penalty = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ScoreboardRow message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.Scoreboard.ScoreboardRow} ScoreboardRow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScoreboardRow.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ScoreboardRow message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScoreboardRow.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.profileName != null && message.hasOwnProperty("profileName"))
                            if (!$util.isString(message.profileName))
                                return "profileName: string expected";
                        if (message.problemAttempts != null && message.hasOwnProperty("problemAttempts")) {
                            if (!$util.isObject(message.problemAttempts))
                                return "problemAttempts: object expected";
                            var key = Object.keys(message.problemAttempts);
                            for (var i = 0; i < key.length; ++i) {
                                if (!$util.key64Re.test(key[i]))
                                    return "problemAttempts: integer|Long key{k:int64} expected";
                                if (!$util.isInteger(message.problemAttempts[key[i]]))
                                    return "problemAttempts: integer{k:int64} expected";
                            }
                        }
                        if (message.problemCompletions != null && message.hasOwnProperty("problemCompletions")) {
                            if (!$util.isObject(message.problemCompletions))
                                return "problemCompletions: object expected";
                            var key = Object.keys(message.problemCompletions);
                            for (var i = 0; i < key.length; ++i) {
                                if (!$util.key64Re.test(key[i]))
                                    return "problemCompletions: integer|Long key{k:int64} expected";
                                if (typeof message.problemCompletions[key[i]] !== "boolean")
                                    return "problemCompletions: boolean{k:int64} expected";
                            }
                        }
                        if (message.place != null && message.hasOwnProperty("place"))
                            if (!$util.isInteger(message.place))
                                return "place: integer expected";
                        if (message.score != null && message.hasOwnProperty("score"))
                            if (!$util.isInteger(message.score))
                                return "score: integer expected";
                        if (message.penalty != null && message.hasOwnProperty("penalty"))
                            if (!$util.isInteger(message.penalty))
                                return "penalty: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ScoreboardRow message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.Scoreboard.ScoreboardRow} ScoreboardRow
                     */
                    ScoreboardRow.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.Scoreboard.ScoreboardRow)
                            return object;
                        var message = new $root.acmcsus.debugjudge.Scoreboard.ScoreboardRow();
                        if (object.profileName != null)
                            message.profileName = String(object.profileName);
                        if (object.problemAttempts) {
                            if (typeof object.problemAttempts !== "object")
                                throw TypeError(".acmcsus.debugjudge.Scoreboard.ScoreboardRow.problemAttempts: object expected");
                            message.problemAttempts = {};
                            for (var keys = Object.keys(object.problemAttempts), i = 0; i < keys.length; ++i)
                                message.problemAttempts[keys[i]] = object.problemAttempts[keys[i]] | 0;
                        }
                        if (object.problemCompletions) {
                            if (typeof object.problemCompletions !== "object")
                                throw TypeError(".acmcsus.debugjudge.Scoreboard.ScoreboardRow.problemCompletions: object expected");
                            message.problemCompletions = {};
                            for (var keys = Object.keys(object.problemCompletions), i = 0; i < keys.length; ++i)
                                message.problemCompletions[keys[i]] = Boolean(object.problemCompletions[keys[i]]);
                        }
                        if (object.place != null)
                            message.place = object.place | 0;
                        if (object.score != null)
                            message.score = object.score | 0;
                        if (object.penalty != null)
                            message.penalty = object.penalty | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ScoreboardRow message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @static
                     * @param {acmcsus.debugjudge.Scoreboard.ScoreboardRow} message ScoreboardRow
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScoreboardRow.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults) {
                            object.problemAttempts = {};
                            object.problemCompletions = {};
                        }
                        if (options.defaults) {
                            object.profileName = "";
                            object.place = 0;
                            object.score = 0;
                            object.penalty = 0;
                        }
                        if (message.profileName != null && message.hasOwnProperty("profileName"))
                            object.profileName = message.profileName;
                        var keys2;
                        if (message.problemAttempts && (keys2 = Object.keys(message.problemAttempts)).length) {
                            object.problemAttempts = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.problemAttempts[keys2[j]] = message.problemAttempts[keys2[j]];
                        }
                        if (message.problemCompletions && (keys2 = Object.keys(message.problemCompletions)).length) {
                            object.problemCompletions = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.problemCompletions[keys2[j]] = message.problemCompletions[keys2[j]];
                        }
                        if (message.place != null && message.hasOwnProperty("place"))
                            object.place = message.place;
                        if (message.score != null && message.hasOwnProperty("score"))
                            object.score = message.score;
                        if (message.penalty != null && message.hasOwnProperty("penalty"))
                            object.penalty = message.penalty;
                        return object;
                    };
    
                    /**
                     * Converts this ScoreboardRow to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScoreboardRow.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ScoreboardRow;
                })();
    
                return Scoreboard;
            })();
    
            debugjudge.C2SMessage = (function() {
    
                /**
                 * Properties of a C2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IC2SMessage
                 * @property {acmcsus.debugjudge.C2SMessage.IT2SMessage|null} [t2sMessage] C2SMessage t2sMessage
                 * @property {acmcsus.debugjudge.C2SMessage.IJ2SMessage|null} [j2sMessage] C2SMessage j2sMessage
                 * @property {acmcsus.debugjudge.C2SMessage.ILoginMessage|null} [loginMessage] C2SMessage loginMessage
                 */
    
                /**
                 * Constructs a new C2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a C2SMessage.
                 * @implements IC2SMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IC2SMessage=} [properties] Properties to set
                 */
                function C2SMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * C2SMessage t2sMessage.
                 * @member {acmcsus.debugjudge.C2SMessage.IT2SMessage|null|undefined} t2sMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.t2sMessage = null;
    
                /**
                 * C2SMessage j2sMessage.
                 * @member {acmcsus.debugjudge.C2SMessage.IJ2SMessage|null|undefined} j2sMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.j2sMessage = null;
    
                /**
                 * C2SMessage loginMessage.
                 * @member {acmcsus.debugjudge.C2SMessage.ILoginMessage|null|undefined} loginMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.loginMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * C2SMessage value.
                 * @member {"t2sMessage"|"j2sMessage"|"loginMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                Object.defineProperty(C2SMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["t2sMessage", "j2sMessage", "loginMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new C2SMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IC2SMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.C2SMessage} C2SMessage instance
                 */
                C2SMessage.create = function create(properties) {
                    return new C2SMessage(properties);
                };
    
                /**
                 * Encodes the specified C2SMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IC2SMessage} message C2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2SMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.t2sMessage != null && message.hasOwnProperty("t2sMessage"))
                        $root.acmcsus.debugjudge.C2SMessage.T2SMessage.encode(message.t2sMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.j2sMessage != null && message.hasOwnProperty("j2sMessage"))
                        $root.acmcsus.debugjudge.C2SMessage.J2SMessage.encode(message.j2sMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.loginMessage != null && message.hasOwnProperty("loginMessage"))
                        $root.acmcsus.debugjudge.C2SMessage.LoginMessage.encode(message.loginMessage, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified C2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IC2SMessage} message C2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2SMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a C2SMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.C2SMessage} C2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2SMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.t2sMessage = $root.acmcsus.debugjudge.C2SMessage.T2SMessage.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.j2sMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.loginMessage = $root.acmcsus.debugjudge.C2SMessage.LoginMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a C2SMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.C2SMessage} C2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2SMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a C2SMessage message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2SMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.t2sMessage != null && message.hasOwnProperty("t2sMessage")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.C2SMessage.T2SMessage.verify(message.t2sMessage);
                            if (error)
                                return "t2sMessage." + error;
                        }
                    }
                    if (message.j2sMessage != null && message.hasOwnProperty("j2sMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.verify(message.j2sMessage);
                            if (error)
                                return "j2sMessage." + error;
                        }
                    }
                    if (message.loginMessage != null && message.hasOwnProperty("loginMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.C2SMessage.LoginMessage.verify(message.loginMessage);
                            if (error)
                                return "loginMessage." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a C2SMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.C2SMessage} C2SMessage
                 */
                C2SMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.C2SMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.C2SMessage();
                    if (object.t2sMessage != null) {
                        if (typeof object.t2sMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.C2SMessage.t2sMessage: object expected");
                        message.t2sMessage = $root.acmcsus.debugjudge.C2SMessage.T2SMessage.fromObject(object.t2sMessage);
                    }
                    if (object.j2sMessage != null) {
                        if (typeof object.j2sMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.C2SMessage.j2sMessage: object expected");
                        message.j2sMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.fromObject(object.j2sMessage);
                    }
                    if (object.loginMessage != null) {
                        if (typeof object.loginMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.C2SMessage.loginMessage: object expected");
                        message.loginMessage = $root.acmcsus.debugjudge.C2SMessage.LoginMessage.fromObject(object.loginMessage);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a C2SMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.C2SMessage} message C2SMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2SMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.t2sMessage != null && message.hasOwnProperty("t2sMessage")) {
                        object.t2sMessage = $root.acmcsus.debugjudge.C2SMessage.T2SMessage.toObject(message.t2sMessage, options);
                        if (options.oneofs)
                            object.value = "t2sMessage";
                    }
                    if (message.j2sMessage != null && message.hasOwnProperty("j2sMessage")) {
                        object.j2sMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.toObject(message.j2sMessage, options);
                        if (options.oneofs)
                            object.value = "j2sMessage";
                    }
                    if (message.loginMessage != null && message.hasOwnProperty("loginMessage")) {
                        object.loginMessage = $root.acmcsus.debugjudge.C2SMessage.LoginMessage.toObject(message.loginMessage, options);
                        if (options.oneofs)
                            object.value = "loginMessage";
                    }
                    return object;
                };
    
                /**
                 * Converts this C2SMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2SMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                C2SMessage.LoginMessage = (function() {
    
                    /**
                     * Properties of a LoginMessage.
                     * @memberof acmcsus.debugjudge.C2SMessage
                     * @interface ILoginMessage
                     * @property {string|null} [nonce] LoginMessage nonce
                     */
    
                    /**
                     * Constructs a new LoginMessage.
                     * @memberof acmcsus.debugjudge.C2SMessage
                     * @classdesc Represents a LoginMessage.
                     * @implements ILoginMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.C2SMessage.ILoginMessage=} [properties] Properties to set
                     */
                    function LoginMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * LoginMessage nonce.
                     * @member {string} nonce
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @instance
                     */
                    LoginMessage.prototype.nonce = "";
    
                    /**
                     * Creates a new LoginMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.ILoginMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.C2SMessage.LoginMessage} LoginMessage instance
                     */
                    LoginMessage.create = function create(properties) {
                        return new LoginMessage(properties);
                    };
    
                    /**
                     * Encodes the specified LoginMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.LoginMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.ILoginMessage} message LoginMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.nonce != null && message.hasOwnProperty("nonce"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nonce);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified LoginMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.LoginMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.ILoginMessage} message LoginMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a LoginMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.C2SMessage.LoginMessage} LoginMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage.LoginMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.nonce = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a LoginMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.C2SMessage.LoginMessage} LoginMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a LoginMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LoginMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.nonce != null && message.hasOwnProperty("nonce"))
                            if (!$util.isString(message.nonce))
                                return "nonce: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a LoginMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.C2SMessage.LoginMessage} LoginMessage
                     */
                    LoginMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.C2SMessage.LoginMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.C2SMessage.LoginMessage();
                        if (object.nonce != null)
                            message.nonce = String(object.nonce);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a LoginMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.LoginMessage} message LoginMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LoginMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.nonce = "";
                        if (message.nonce != null && message.hasOwnProperty("nonce"))
                            object.nonce = message.nonce;
                        return object;
                    };
    
                    /**
                     * Converts this LoginMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LoginMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return LoginMessage;
                })();
    
                C2SMessage.T2SMessage = (function() {
    
                    /**
                     * Properties of a T2SMessage.
                     * @memberof acmcsus.debugjudge.C2SMessage
                     * @interface IT2SMessage
                     * @property {acmcsus.debugjudge.C2SMessage.T2SMessage.ISubmissionCreateMessage|null} [submissionCreateMessage] T2SMessage submissionCreateMessage
                     */
    
                    /**
                     * Constructs a new T2SMessage.
                     * @memberof acmcsus.debugjudge.C2SMessage
                     * @classdesc Represents a T2SMessage.
                     * @implements IT2SMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.C2SMessage.IT2SMessage=} [properties] Properties to set
                     */
                    function T2SMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * T2SMessage submissionCreateMessage.
                     * @member {acmcsus.debugjudge.C2SMessage.T2SMessage.ISubmissionCreateMessage|null|undefined} submissionCreateMessage
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @instance
                     */
                    T2SMessage.prototype.submissionCreateMessage = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * T2SMessage value.
                     * @member {"submissionCreateMessage"|undefined} value
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @instance
                     */
                    Object.defineProperty(T2SMessage.prototype, "value", {
                        get: $util.oneOfGetter($oneOfFields = ["submissionCreateMessage"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new T2SMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.IT2SMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.C2SMessage.T2SMessage} T2SMessage instance
                     */
                    T2SMessage.create = function create(properties) {
                        return new T2SMessage(properties);
                    };
    
                    /**
                     * Encodes the specified T2SMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.T2SMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.IT2SMessage} message T2SMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    T2SMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.submissionCreateMessage != null && message.hasOwnProperty("submissionCreateMessage"))
                            $root.acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage.encode(message.submissionCreateMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified T2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.T2SMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.IT2SMessage} message T2SMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    T2SMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a T2SMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.C2SMessage.T2SMessage} T2SMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    T2SMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage.T2SMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.submissionCreateMessage = $root.acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a T2SMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.C2SMessage.T2SMessage} T2SMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    T2SMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a T2SMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    T2SMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.submissionCreateMessage != null && message.hasOwnProperty("submissionCreateMessage")) {
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage.verify(message.submissionCreateMessage);
                                if (error)
                                    return "submissionCreateMessage." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a T2SMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.C2SMessage.T2SMessage} T2SMessage
                     */
                    T2SMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.C2SMessage.T2SMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.C2SMessage.T2SMessage();
                        if (object.submissionCreateMessage != null) {
                            if (typeof object.submissionCreateMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.C2SMessage.T2SMessage.submissionCreateMessage: object expected");
                            message.submissionCreateMessage = $root.acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage.fromObject(object.submissionCreateMessage);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a T2SMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.T2SMessage} message T2SMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    T2SMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.submissionCreateMessage != null && message.hasOwnProperty("submissionCreateMessage")) {
                            object.submissionCreateMessage = $root.acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage.toObject(message.submissionCreateMessage, options);
                            if (options.oneofs)
                                object.value = "submissionCreateMessage";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this T2SMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    T2SMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    T2SMessage.SubmissionCreateMessage = (function() {
    
                        /**
                         * Properties of a SubmissionCreateMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                         * @interface ISubmissionCreateMessage
                         * @property {acmcsus.debugjudge.ISubmission|null} [submission] SubmissionCreateMessage submission
                         */
    
                        /**
                         * Constructs a new SubmissionCreateMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage
                         * @classdesc Represents a SubmissionCreateMessage.
                         * @implements ISubmissionCreateMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.C2SMessage.T2SMessage.ISubmissionCreateMessage=} [properties] Properties to set
                         */
                        function SubmissionCreateMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * SubmissionCreateMessage submission.
                         * @member {acmcsus.debugjudge.ISubmission|null|undefined} submission
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage
                         * @instance
                         */
                        SubmissionCreateMessage.prototype.submission = null;
    
                        /**
                         * Creates a new SubmissionCreateMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.T2SMessage.ISubmissionCreateMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage} SubmissionCreateMessage instance
                         */
                        SubmissionCreateMessage.create = function create(properties) {
                            return new SubmissionCreateMessage(properties);
                        };
    
                        /**
                         * Encodes the specified SubmissionCreateMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.T2SMessage.ISubmissionCreateMessage} message SubmissionCreateMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SubmissionCreateMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.submission != null && message.hasOwnProperty("submission"))
                                $root.acmcsus.debugjudge.Submission.encode(message.submission, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified SubmissionCreateMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.T2SMessage.ISubmissionCreateMessage} message SubmissionCreateMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SubmissionCreateMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a SubmissionCreateMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage} SubmissionCreateMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SubmissionCreateMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.submission = $root.acmcsus.debugjudge.Submission.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a SubmissionCreateMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage} SubmissionCreateMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SubmissionCreateMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a SubmissionCreateMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SubmissionCreateMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.submission != null && message.hasOwnProperty("submission")) {
                                var error = $root.acmcsus.debugjudge.Submission.verify(message.submission);
                                if (error)
                                    return "submission." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a SubmissionCreateMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage} SubmissionCreateMessage
                         */
                        SubmissionCreateMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage)
                                return object;
                            var message = new $root.acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage();
                            if (object.submission != null) {
                                if (typeof object.submission !== "object")
                                    throw TypeError(".acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage.submission: object expected");
                                message.submission = $root.acmcsus.debugjudge.Submission.fromObject(object.submission);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a SubmissionCreateMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage} message SubmissionCreateMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SubmissionCreateMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.submission = null;
                            if (message.submission != null && message.hasOwnProperty("submission"))
                                object.submission = $root.acmcsus.debugjudge.Submission.toObject(message.submission, options);
                            return object;
                        };
    
                        /**
                         * Converts this SubmissionCreateMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.C2SMessage.T2SMessage.SubmissionCreateMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SubmissionCreateMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return SubmissionCreateMessage;
                    })();
    
                    return T2SMessage;
                })();
    
                C2SMessage.J2SMessage = (function() {
    
                    /**
                     * Properties of a J2SMessage.
                     * @memberof acmcsus.debugjudge.C2SMessage
                     * @interface IJ2SMessage
                     * @property {acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage|null} [startJudgingMessage] J2SMessage startJudgingMessage
                     * @property {acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage|null} [stopJudgingMessage] J2SMessage stopJudgingMessage
                     * @property {acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage|null} [submissionJudgementMessage] J2SMessage submissionJudgementMessage
                     * @property {acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage|null} [judgingPreferencesMessage] J2SMessage judgingPreferencesMessage
                     * @property {acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage|null} [changeCompetitionStateMessage] J2SMessage changeCompetitionStateMessage
                     */
    
                    /**
                     * Constructs a new J2SMessage.
                     * @memberof acmcsus.debugjudge.C2SMessage
                     * @classdesc Represents a J2SMessage.
                     * @implements IJ2SMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.C2SMessage.IJ2SMessage=} [properties] Properties to set
                     */
                    function J2SMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * J2SMessage startJudgingMessage.
                     * @member {acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage|null|undefined} startJudgingMessage
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @instance
                     */
                    J2SMessage.prototype.startJudgingMessage = null;
    
                    /**
                     * J2SMessage stopJudgingMessage.
                     * @member {acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage|null|undefined} stopJudgingMessage
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @instance
                     */
                    J2SMessage.prototype.stopJudgingMessage = null;
    
                    /**
                     * J2SMessage submissionJudgementMessage.
                     * @member {acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage|null|undefined} submissionJudgementMessage
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @instance
                     */
                    J2SMessage.prototype.submissionJudgementMessage = null;
    
                    /**
                     * J2SMessage judgingPreferencesMessage.
                     * @member {acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage|null|undefined} judgingPreferencesMessage
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @instance
                     */
                    J2SMessage.prototype.judgingPreferencesMessage = null;
    
                    /**
                     * J2SMessage changeCompetitionStateMessage.
                     * @member {acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage|null|undefined} changeCompetitionStateMessage
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @instance
                     */
                    J2SMessage.prototype.changeCompetitionStateMessage = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * J2SMessage value.
                     * @member {"startJudgingMessage"|"stopJudgingMessage"|"submissionJudgementMessage"|"judgingPreferencesMessage"|"changeCompetitionStateMessage"|undefined} value
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @instance
                     */
                    Object.defineProperty(J2SMessage.prototype, "value", {
                        get: $util.oneOfGetter($oneOfFields = ["startJudgingMessage", "stopJudgingMessage", "submissionJudgementMessage", "judgingPreferencesMessage", "changeCompetitionStateMessage"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new J2SMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.IJ2SMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage} J2SMessage instance
                     */
                    J2SMessage.create = function create(properties) {
                        return new J2SMessage(properties);
                    };
    
                    /**
                     * Encodes the specified J2SMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.IJ2SMessage} message J2SMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    J2SMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.startJudgingMessage != null && message.hasOwnProperty("startJudgingMessage"))
                            $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage.encode(message.startJudgingMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.stopJudgingMessage != null && message.hasOwnProperty("stopJudgingMessage"))
                            $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage.encode(message.stopJudgingMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.submissionJudgementMessage != null && message.hasOwnProperty("submissionJudgementMessage"))
                            $root.acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage.encode(message.submissionJudgementMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.judgingPreferencesMessage != null && message.hasOwnProperty("judgingPreferencesMessage"))
                            $root.acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage.encode(message.judgingPreferencesMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.changeCompetitionStateMessage != null && message.hasOwnProperty("changeCompetitionStateMessage"))
                            $root.acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage.encode(message.changeCompetitionStateMessage, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified J2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.IJ2SMessage} message J2SMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    J2SMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a J2SMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage} J2SMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    J2SMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage.J2SMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.startJudgingMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.stopJudgingMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.submissionJudgementMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.judgingPreferencesMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.changeCompetitionStateMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a J2SMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage} J2SMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    J2SMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a J2SMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    J2SMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.startJudgingMessage != null && message.hasOwnProperty("startJudgingMessage")) {
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage.verify(message.startJudgingMessage);
                                if (error)
                                    return "startJudgingMessage." + error;
                            }
                        }
                        if (message.stopJudgingMessage != null && message.hasOwnProperty("stopJudgingMessage")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage.verify(message.stopJudgingMessage);
                                if (error)
                                    return "stopJudgingMessage." + error;
                            }
                        }
                        if (message.submissionJudgementMessage != null && message.hasOwnProperty("submissionJudgementMessage")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage.verify(message.submissionJudgementMessage);
                                if (error)
                                    return "submissionJudgementMessage." + error;
                            }
                        }
                        if (message.judgingPreferencesMessage != null && message.hasOwnProperty("judgingPreferencesMessage")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage.verify(message.judgingPreferencesMessage);
                                if (error)
                                    return "judgingPreferencesMessage." + error;
                            }
                        }
                        if (message.changeCompetitionStateMessage != null && message.hasOwnProperty("changeCompetitionStateMessage")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage.verify(message.changeCompetitionStateMessage);
                                if (error)
                                    return "changeCompetitionStateMessage." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a J2SMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage} J2SMessage
                     */
                    J2SMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.C2SMessage.J2SMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.C2SMessage.J2SMessage();
                        if (object.startJudgingMessage != null) {
                            if (typeof object.startJudgingMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.C2SMessage.J2SMessage.startJudgingMessage: object expected");
                            message.startJudgingMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage.fromObject(object.startJudgingMessage);
                        }
                        if (object.stopJudgingMessage != null) {
                            if (typeof object.stopJudgingMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.C2SMessage.J2SMessage.stopJudgingMessage: object expected");
                            message.stopJudgingMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage.fromObject(object.stopJudgingMessage);
                        }
                        if (object.submissionJudgementMessage != null) {
                            if (typeof object.submissionJudgementMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.C2SMessage.J2SMessage.submissionJudgementMessage: object expected");
                            message.submissionJudgementMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage.fromObject(object.submissionJudgementMessage);
                        }
                        if (object.judgingPreferencesMessage != null) {
                            if (typeof object.judgingPreferencesMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.C2SMessage.J2SMessage.judgingPreferencesMessage: object expected");
                            message.judgingPreferencesMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage.fromObject(object.judgingPreferencesMessage);
                        }
                        if (object.changeCompetitionStateMessage != null) {
                            if (typeof object.changeCompetitionStateMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.C2SMessage.J2SMessage.changeCompetitionStateMessage: object expected");
                            message.changeCompetitionStateMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage.fromObject(object.changeCompetitionStateMessage);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a J2SMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.J2SMessage} message J2SMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    J2SMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.startJudgingMessage != null && message.hasOwnProperty("startJudgingMessage")) {
                            object.startJudgingMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage.toObject(message.startJudgingMessage, options);
                            if (options.oneofs)
                                object.value = "startJudgingMessage";
                        }
                        if (message.stopJudgingMessage != null && message.hasOwnProperty("stopJudgingMessage")) {
                            object.stopJudgingMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage.toObject(message.stopJudgingMessage, options);
                            if (options.oneofs)
                                object.value = "stopJudgingMessage";
                        }
                        if (message.submissionJudgementMessage != null && message.hasOwnProperty("submissionJudgementMessage")) {
                            object.submissionJudgementMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage.toObject(message.submissionJudgementMessage, options);
                            if (options.oneofs)
                                object.value = "submissionJudgementMessage";
                        }
                        if (message.judgingPreferencesMessage != null && message.hasOwnProperty("judgingPreferencesMessage")) {
                            object.judgingPreferencesMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage.toObject(message.judgingPreferencesMessage, options);
                            if (options.oneofs)
                                object.value = "judgingPreferencesMessage";
                        }
                        if (message.changeCompetitionStateMessage != null && message.hasOwnProperty("changeCompetitionStateMessage")) {
                            object.changeCompetitionStateMessage = $root.acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage.toObject(message.changeCompetitionStateMessage, options);
                            if (options.oneofs)
                                object.value = "changeCompetitionStateMessage";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this J2SMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    J2SMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    J2SMessage.StartJudgingMessage = (function() {
    
                        /**
                         * Properties of a StartJudgingMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                         * @interface IStartJudgingMessage
                         */
    
                        /**
                         * Constructs a new StartJudgingMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                         * @classdesc Represents a StartJudgingMessage.
                         * @implements IStartJudgingMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage=} [properties] Properties to set
                         */
                        function StartJudgingMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Creates a new StartJudgingMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage} StartJudgingMessage instance
                         */
                        StartJudgingMessage.create = function create(properties) {
                            return new StartJudgingMessage(properties);
                        };
    
                        /**
                         * Encodes the specified StartJudgingMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage} message StartJudgingMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StartJudgingMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified StartJudgingMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IStartJudgingMessage} message StartJudgingMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StartJudgingMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a StartJudgingMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage} StartJudgingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StartJudgingMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a StartJudgingMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage} StartJudgingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StartJudgingMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a StartJudgingMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        StartJudgingMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            return null;
                        };
    
                        /**
                         * Creates a StartJudgingMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage} StartJudgingMessage
                         */
                        StartJudgingMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage)
                                return object;
                            return new $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage();
                        };
    
                        /**
                         * Creates a plain object from a StartJudgingMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage} message StartJudgingMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        StartJudgingMessage.toObject = function toObject() {
                            return {};
                        };
    
                        /**
                         * Converts this StartJudgingMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StartJudgingMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        StartJudgingMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return StartJudgingMessage;
                    })();
    
                    J2SMessage.StopJudgingMessage = (function() {
    
                        /**
                         * Properties of a StopJudgingMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                         * @interface IStopJudgingMessage
                         */
    
                        /**
                         * Constructs a new StopJudgingMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                         * @classdesc Represents a StopJudgingMessage.
                         * @implements IStopJudgingMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage=} [properties] Properties to set
                         */
                        function StopJudgingMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Creates a new StopJudgingMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage} StopJudgingMessage instance
                         */
                        StopJudgingMessage.create = function create(properties) {
                            return new StopJudgingMessage(properties);
                        };
    
                        /**
                         * Encodes the specified StopJudgingMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage} message StopJudgingMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StopJudgingMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified StopJudgingMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IStopJudgingMessage} message StopJudgingMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StopJudgingMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a StopJudgingMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage} StopJudgingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StopJudgingMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a StopJudgingMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage} StopJudgingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StopJudgingMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a StopJudgingMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        StopJudgingMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            return null;
                        };
    
                        /**
                         * Creates a StopJudgingMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage} StopJudgingMessage
                         */
                        StopJudgingMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage)
                                return object;
                            return new $root.acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage();
                        };
    
                        /**
                         * Creates a plain object from a StopJudgingMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage} message StopJudgingMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        StopJudgingMessage.toObject = function toObject() {
                            return {};
                        };
    
                        /**
                         * Converts this StopJudgingMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.StopJudgingMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        StopJudgingMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return StopJudgingMessage;
                    })();
    
                    J2SMessage.SubmissionJudgementMessage = (function() {
    
                        /**
                         * Properties of a SubmissionJudgementMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                         * @interface ISubmissionJudgementMessage
                         * @property {number|Long|null} [teamId] SubmissionJudgementMessage teamId
                         * @property {number|Long|null} [problemId] SubmissionJudgementMessage problemId
                         * @property {number|Long|null} [submissionId] SubmissionJudgementMessage submissionId
                         * @property {acmcsus.debugjudge.SubmissionJudgement|null} [ruling] SubmissionJudgementMessage ruling
                         */
    
                        /**
                         * Constructs a new SubmissionJudgementMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                         * @classdesc Represents a SubmissionJudgementMessage.
                         * @implements ISubmissionJudgementMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage=} [properties] Properties to set
                         */
                        function SubmissionJudgementMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * SubmissionJudgementMessage teamId.
                         * @member {number|Long} teamId
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @instance
                         */
                        SubmissionJudgementMessage.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * SubmissionJudgementMessage problemId.
                         * @member {number|Long} problemId
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @instance
                         */
                        SubmissionJudgementMessage.prototype.problemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * SubmissionJudgementMessage submissionId.
                         * @member {number|Long} submissionId
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @instance
                         */
                        SubmissionJudgementMessage.prototype.submissionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * SubmissionJudgementMessage ruling.
                         * @member {acmcsus.debugjudge.SubmissionJudgement} ruling
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @instance
                         */
                        SubmissionJudgementMessage.prototype.ruling = 0;
    
                        /**
                         * Creates a new SubmissionJudgementMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage} SubmissionJudgementMessage instance
                         */
                        SubmissionJudgementMessage.create = function create(properties) {
                            return new SubmissionJudgementMessage(properties);
                        };
    
                        /**
                         * Encodes the specified SubmissionJudgementMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage} message SubmissionJudgementMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SubmissionJudgementMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.teamId != null && message.hasOwnProperty("teamId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                            if (message.problemId != null && message.hasOwnProperty("problemId"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.problemId);
                            if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.submissionId);
                            if (message.ruling != null && message.hasOwnProperty("ruling"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ruling);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified SubmissionJudgementMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.ISubmissionJudgementMessage} message SubmissionJudgementMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SubmissionJudgementMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a SubmissionJudgementMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage} SubmissionJudgementMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SubmissionJudgementMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.teamId = reader.int64();
                                    break;
                                case 2:
                                    message.problemId = reader.int64();
                                    break;
                                case 3:
                                    message.submissionId = reader.int64();
                                    break;
                                case 4:
                                    message.ruling = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a SubmissionJudgementMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage} SubmissionJudgementMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SubmissionJudgementMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a SubmissionJudgementMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SubmissionJudgementMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.teamId != null && message.hasOwnProperty("teamId"))
                                if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                    return "teamId: integer|Long expected";
                            if (message.problemId != null && message.hasOwnProperty("problemId"))
                                if (!$util.isInteger(message.problemId) && !(message.problemId && $util.isInteger(message.problemId.low) && $util.isInteger(message.problemId.high)))
                                    return "problemId: integer|Long expected";
                            if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                                if (!$util.isInteger(message.submissionId) && !(message.submissionId && $util.isInteger(message.submissionId.low) && $util.isInteger(message.submissionId.high)))
                                    return "submissionId: integer|Long expected";
                            if (message.ruling != null && message.hasOwnProperty("ruling"))
                                switch (message.ruling) {
                                default:
                                    return "ruling: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            return null;
                        };
    
                        /**
                         * Creates a SubmissionJudgementMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage} SubmissionJudgementMessage
                         */
                        SubmissionJudgementMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage)
                                return object;
                            var message = new $root.acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage();
                            if (object.teamId != null)
                                if ($util.Long)
                                    (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                                else if (typeof object.teamId === "string")
                                    message.teamId = parseInt(object.teamId, 10);
                                else if (typeof object.teamId === "number")
                                    message.teamId = object.teamId;
                                else if (typeof object.teamId === "object")
                                    message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                            if (object.problemId != null)
                                if ($util.Long)
                                    (message.problemId = $util.Long.fromValue(object.problemId)).unsigned = false;
                                else if (typeof object.problemId === "string")
                                    message.problemId = parseInt(object.problemId, 10);
                                else if (typeof object.problemId === "number")
                                    message.problemId = object.problemId;
                                else if (typeof object.problemId === "object")
                                    message.problemId = new $util.LongBits(object.problemId.low >>> 0, object.problemId.high >>> 0).toNumber();
                            if (object.submissionId != null)
                                if ($util.Long)
                                    (message.submissionId = $util.Long.fromValue(object.submissionId)).unsigned = false;
                                else if (typeof object.submissionId === "string")
                                    message.submissionId = parseInt(object.submissionId, 10);
                                else if (typeof object.submissionId === "number")
                                    message.submissionId = object.submissionId;
                                else if (typeof object.submissionId === "object")
                                    message.submissionId = new $util.LongBits(object.submissionId.low >>> 0, object.submissionId.high >>> 0).toNumber();
                            switch (object.ruling) {
                            case "JUDGEMENT_UNKNOWN":
                            case 0:
                                message.ruling = 0;
                                break;
                            case "JUDGEMENT_SUCCESS":
                            case 1:
                                message.ruling = 1;
                                break;
                            case "JUDGEMENT_FAILURE":
                            case 2:
                                message.ruling = 2;
                                break;
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a SubmissionJudgementMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage} message SubmissionJudgementMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SubmissionJudgementMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.teamId = options.longs === String ? "0" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.problemId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.problemId = options.longs === String ? "0" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.submissionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.submissionId = options.longs === String ? "0" : 0;
                                object.ruling = options.enums === String ? "JUDGEMENT_UNKNOWN" : 0;
                            }
                            if (message.teamId != null && message.hasOwnProperty("teamId"))
                                if (typeof message.teamId === "number")
                                    object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                                else
                                    object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                            if (message.problemId != null && message.hasOwnProperty("problemId"))
                                if (typeof message.problemId === "number")
                                    object.problemId = options.longs === String ? String(message.problemId) : message.problemId;
                                else
                                    object.problemId = options.longs === String ? $util.Long.prototype.toString.call(message.problemId) : options.longs === Number ? new $util.LongBits(message.problemId.low >>> 0, message.problemId.high >>> 0).toNumber() : message.problemId;
                            if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                                if (typeof message.submissionId === "number")
                                    object.submissionId = options.longs === String ? String(message.submissionId) : message.submissionId;
                                else
                                    object.submissionId = options.longs === String ? $util.Long.prototype.toString.call(message.submissionId) : options.longs === Number ? new $util.LongBits(message.submissionId.low >>> 0, message.submissionId.high >>> 0).toNumber() : message.submissionId;
                            if (message.ruling != null && message.hasOwnProperty("ruling"))
                                object.ruling = options.enums === String ? $root.acmcsus.debugjudge.SubmissionJudgement[message.ruling] : message.ruling;
                            return object;
                        };
    
                        /**
                         * Converts this SubmissionJudgementMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.SubmissionJudgementMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SubmissionJudgementMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return SubmissionJudgementMessage;
                    })();
    
                    J2SMessage.JudgingPreferencesMessage = (function() {
    
                        /**
                         * Properties of a JudgingPreferencesMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                         * @interface IJudgingPreferencesMessage
                         * @property {Object.<string,boolean>|null} [preferences] JudgingPreferencesMessage preferences
                         */
    
                        /**
                         * Constructs a new JudgingPreferencesMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                         * @classdesc Represents a JudgingPreferencesMessage.
                         * @implements IJudgingPreferencesMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage=} [properties] Properties to set
                         */
                        function JudgingPreferencesMessage(properties) {
                            this.preferences = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * JudgingPreferencesMessage preferences.
                         * @member {Object.<string,boolean>} preferences
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage
                         * @instance
                         */
                        JudgingPreferencesMessage.prototype.preferences = $util.emptyObject;
    
                        /**
                         * Creates a new JudgingPreferencesMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage} JudgingPreferencesMessage instance
                         */
                        JudgingPreferencesMessage.create = function create(properties) {
                            return new JudgingPreferencesMessage(properties);
                        };
    
                        /**
                         * Encodes the specified JudgingPreferencesMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage} message JudgingPreferencesMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        JudgingPreferencesMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.preferences != null && message.hasOwnProperty("preferences"))
                                for (var keys = Object.keys(message.preferences), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.preferences[keys[i]]).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified JudgingPreferencesMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IJudgingPreferencesMessage} message JudgingPreferencesMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        JudgingPreferencesMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a JudgingPreferencesMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage} JudgingPreferencesMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        JudgingPreferencesMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    reader.skip().pos++;
                                    if (message.preferences === $util.emptyObject)
                                        message.preferences = {};
                                    key = reader.int64();
                                    reader.pos++;
                                    message.preferences[typeof key === "object" ? $util.longToHash(key) : key] = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a JudgingPreferencesMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage} JudgingPreferencesMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        JudgingPreferencesMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a JudgingPreferencesMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        JudgingPreferencesMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.preferences != null && message.hasOwnProperty("preferences")) {
                                if (!$util.isObject(message.preferences))
                                    return "preferences: object expected";
                                var key = Object.keys(message.preferences);
                                for (var i = 0; i < key.length; ++i) {
                                    if (!$util.key64Re.test(key[i]))
                                        return "preferences: integer|Long key{k:int64} expected";
                                    if (typeof message.preferences[key[i]] !== "boolean")
                                        return "preferences: boolean{k:int64} expected";
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a JudgingPreferencesMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage} JudgingPreferencesMessage
                         */
                        JudgingPreferencesMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage)
                                return object;
                            var message = new $root.acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage();
                            if (object.preferences) {
                                if (typeof object.preferences !== "object")
                                    throw TypeError(".acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage.preferences: object expected");
                                message.preferences = {};
                                for (var keys = Object.keys(object.preferences), i = 0; i < keys.length; ++i)
                                    message.preferences[keys[i]] = Boolean(object.preferences[keys[i]]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a JudgingPreferencesMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage} message JudgingPreferencesMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        JudgingPreferencesMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults)
                                object.preferences = {};
                            var keys2;
                            if (message.preferences && (keys2 = Object.keys(message.preferences)).length) {
                                object.preferences = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.preferences[keys2[j]] = message.preferences[keys2[j]];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this JudgingPreferencesMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.JudgingPreferencesMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        JudgingPreferencesMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return JudgingPreferencesMessage;
                    })();
    
                    J2SMessage.ChangeCompetitionStateMessage = (function() {
    
                        /**
                         * Properties of a ChangeCompetitionStateMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                         * @interface IChangeCompetitionStateMessage
                         * @property {number|Long|null} [timeMillis] ChangeCompetitionStateMessage timeMillis
                         * @property {acmcsus.debugjudge.CompetitionState|null} [state] ChangeCompetitionStateMessage state
                         */
    
                        /**
                         * Constructs a new ChangeCompetitionStateMessage.
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage
                         * @classdesc Represents a ChangeCompetitionStateMessage.
                         * @implements IChangeCompetitionStateMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage=} [properties] Properties to set
                         */
                        function ChangeCompetitionStateMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ChangeCompetitionStateMessage timeMillis.
                         * @member {number|Long} timeMillis
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @instance
                         */
                        ChangeCompetitionStateMessage.prototype.timeMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * ChangeCompetitionStateMessage state.
                         * @member {acmcsus.debugjudge.CompetitionState} state
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @instance
                         */
                        ChangeCompetitionStateMessage.prototype.state = 0;
    
                        /**
                         * Creates a new ChangeCompetitionStateMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage} ChangeCompetitionStateMessage instance
                         */
                        ChangeCompetitionStateMessage.create = function create(properties) {
                            return new ChangeCompetitionStateMessage(properties);
                        };
    
                        /**
                         * Encodes the specified ChangeCompetitionStateMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage} message ChangeCompetitionStateMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ChangeCompetitionStateMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.timeMillis != null && message.hasOwnProperty("timeMillis"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timeMillis);
                            if (message.state != null && message.hasOwnProperty("state"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ChangeCompetitionStateMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.IChangeCompetitionStateMessage} message ChangeCompetitionStateMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ChangeCompetitionStateMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ChangeCompetitionStateMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage} ChangeCompetitionStateMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ChangeCompetitionStateMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.timeMillis = reader.int64();
                                    break;
                                case 2:
                                    message.state = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ChangeCompetitionStateMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage} ChangeCompetitionStateMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ChangeCompetitionStateMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ChangeCompetitionStateMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ChangeCompetitionStateMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.timeMillis != null && message.hasOwnProperty("timeMillis"))
                                if (!$util.isInteger(message.timeMillis) && !(message.timeMillis && $util.isInteger(message.timeMillis.low) && $util.isInteger(message.timeMillis.high)))
                                    return "timeMillis: integer|Long expected";
                            if (message.state != null && message.hasOwnProperty("state"))
                                switch (message.state) {
                                default:
                                    return "state: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                    break;
                                }
                            return null;
                        };
    
                        /**
                         * Creates a ChangeCompetitionStateMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage} ChangeCompetitionStateMessage
                         */
                        ChangeCompetitionStateMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage)
                                return object;
                            var message = new $root.acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage();
                            if (object.timeMillis != null)
                                if ($util.Long)
                                    (message.timeMillis = $util.Long.fromValue(object.timeMillis)).unsigned = false;
                                else if (typeof object.timeMillis === "string")
                                    message.timeMillis = parseInt(object.timeMillis, 10);
                                else if (typeof object.timeMillis === "number")
                                    message.timeMillis = object.timeMillis;
                                else if (typeof object.timeMillis === "object")
                                    message.timeMillis = new $util.LongBits(object.timeMillis.low >>> 0, object.timeMillis.high >>> 0).toNumber();
                            switch (object.state) {
                            case "UNKNOWN":
                            case 0:
                                message.state = 0;
                                break;
                            case "WAITING":
                            case 1:
                                message.state = 1;
                                break;
                            case "STARTED":
                            case 2:
                                message.state = 2;
                                break;
                            case "PAUSED":
                            case 3:
                                message.state = 3;
                                break;
                            case "STOPPED":
                            case 4:
                                message.state = 4;
                                break;
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ChangeCompetitionStateMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @static
                         * @param {acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage} message ChangeCompetitionStateMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ChangeCompetitionStateMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.timeMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.timeMillis = options.longs === String ? "0" : 0;
                                object.state = options.enums === String ? "UNKNOWN" : 0;
                            }
                            if (message.timeMillis != null && message.hasOwnProperty("timeMillis"))
                                if (typeof message.timeMillis === "number")
                                    object.timeMillis = options.longs === String ? String(message.timeMillis) : message.timeMillis;
                                else
                                    object.timeMillis = options.longs === String ? $util.Long.prototype.toString.call(message.timeMillis) : options.longs === Number ? new $util.LongBits(message.timeMillis.low >>> 0, message.timeMillis.high >>> 0).toNumber() : message.timeMillis;
                            if (message.state != null && message.hasOwnProperty("state"))
                                object.state = options.enums === String ? $root.acmcsus.debugjudge.CompetitionState[message.state] : message.state;
                            return object;
                        };
    
                        /**
                         * Converts this ChangeCompetitionStateMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.C2SMessage.J2SMessage.ChangeCompetitionStateMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ChangeCompetitionStateMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ChangeCompetitionStateMessage;
                    })();
    
                    return J2SMessage;
                })();
    
                return C2SMessage;
            })();
    
            debugjudge.S2CMessage = (function() {
    
                /**
                 * Properties of a S2CMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IS2CMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IS2TMessage|null} [s2tMessage] S2CMessage s2tMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IS2JMessage|null} [s2jMessage] S2CMessage s2jMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IDebugMessage|null} [debugMessage] S2CMessage debugMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IAlertMessage|null} [alertMessage] S2CMessage alertMessage
                 * @property {acmcsus.debugjudge.S2CMessage.ILoginResultMessage|null} [loginResultMessage] S2CMessage loginResultMessage
                 * @property {acmcsus.debugjudge.S2CMessage.INotificationMessage|null} [notificationMessage] S2CMessage notificationMessage
                 * @property {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage|null} [competitionStateChangedMessage] S2CMessage competitionStateChangedMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage|null} [scoreboardUpdateMessage] S2CMessage scoreboardUpdateMessage
                 */
    
                /**
                 * Constructs a new S2CMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a S2CMessage.
                 * @implements IS2CMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IS2CMessage=} [properties] Properties to set
                 */
                function S2CMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * S2CMessage s2tMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.IS2TMessage|null|undefined} s2tMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.s2tMessage = null;
    
                /**
                 * S2CMessage s2jMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.IS2JMessage|null|undefined} s2jMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.s2jMessage = null;
    
                /**
                 * S2CMessage debugMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.IDebugMessage|null|undefined} debugMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.debugMessage = null;
    
                /**
                 * S2CMessage alertMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.IAlertMessage|null|undefined} alertMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.alertMessage = null;
    
                /**
                 * S2CMessage loginResultMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.ILoginResultMessage|null|undefined} loginResultMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.loginResultMessage = null;
    
                /**
                 * S2CMessage notificationMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.INotificationMessage|null|undefined} notificationMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.notificationMessage = null;
    
                /**
                 * S2CMessage competitionStateChangedMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage|null|undefined} competitionStateChangedMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.competitionStateChangedMessage = null;
    
                /**
                 * S2CMessage scoreboardUpdateMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage|null|undefined} scoreboardUpdateMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.scoreboardUpdateMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * S2CMessage value.
                 * @member {"s2tMessage"|"s2jMessage"|"debugMessage"|"alertMessage"|"loginResultMessage"|"notificationMessage"|"competitionStateChangedMessage"|"scoreboardUpdateMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                Object.defineProperty(S2CMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["s2tMessage", "s2jMessage", "debugMessage", "alertMessage", "loginResultMessage", "notificationMessage", "competitionStateChangedMessage", "scoreboardUpdateMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new S2CMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2CMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.S2CMessage} S2CMessage instance
                 */
                S2CMessage.create = function create(properties) {
                    return new S2CMessage(properties);
                };
    
                /**
                 * Encodes the specified S2CMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2CMessage} message S2CMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2CMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.s2tMessage != null && message.hasOwnProperty("s2tMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.S2TMessage.encode(message.s2tMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.s2jMessage != null && message.hasOwnProperty("s2jMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.S2JMessage.encode(message.s2jMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.debugMessage != null && message.hasOwnProperty("debugMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.DebugMessage.encode(message.debugMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.alertMessage != null && message.hasOwnProperty("alertMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.AlertMessage.encode(message.alertMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.loginResultMessage != null && message.hasOwnProperty("loginResultMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.encode(message.loginResultMessage, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.notificationMessage != null && message.hasOwnProperty("notificationMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.NotificationMessage.encode(message.notificationMessage, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.competitionStateChangedMessage != null && message.hasOwnProperty("competitionStateChangedMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.encode(message.competitionStateChangedMessage, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.scoreboardUpdateMessage != null && message.hasOwnProperty("scoreboardUpdateMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.encode(message.scoreboardUpdateMessage, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified S2CMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2CMessage} message S2CMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2CMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a S2CMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.S2CMessage} S2CMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                S2CMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.s2tMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.s2jMessage = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.debugMessage = $root.acmcsus.debugjudge.S2CMessage.DebugMessage.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.alertMessage = $root.acmcsus.debugjudge.S2CMessage.AlertMessage.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.loginResultMessage = $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.notificationMessage = $root.acmcsus.debugjudge.S2CMessage.NotificationMessage.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.competitionStateChangedMessage = $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.scoreboardUpdateMessage = $root.acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a S2CMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.S2CMessage} S2CMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                S2CMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a S2CMessage message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                S2CMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.s2tMessage != null && message.hasOwnProperty("s2tMessage")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.verify(message.s2tMessage);
                            if (error)
                                return "s2tMessage." + error;
                        }
                    }
                    if (message.s2jMessage != null && message.hasOwnProperty("s2jMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.verify(message.s2jMessage);
                            if (error)
                                return "s2jMessage." + error;
                        }
                    }
                    if (message.debugMessage != null && message.hasOwnProperty("debugMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.DebugMessage.verify(message.debugMessage);
                            if (error)
                                return "debugMessage." + error;
                        }
                    }
                    if (message.alertMessage != null && message.hasOwnProperty("alertMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.AlertMessage.verify(message.alertMessage);
                            if (error)
                                return "alertMessage." + error;
                        }
                    }
                    if (message.loginResultMessage != null && message.hasOwnProperty("loginResultMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.verify(message.loginResultMessage);
                            if (error)
                                return "loginResultMessage." + error;
                        }
                    }
                    if (message.notificationMessage != null && message.hasOwnProperty("notificationMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.NotificationMessage.verify(message.notificationMessage);
                            if (error)
                                return "notificationMessage." + error;
                        }
                    }
                    if (message.competitionStateChangedMessage != null && message.hasOwnProperty("competitionStateChangedMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.verify(message.competitionStateChangedMessage);
                            if (error)
                                return "competitionStateChangedMessage." + error;
                        }
                    }
                    if (message.scoreboardUpdateMessage != null && message.hasOwnProperty("scoreboardUpdateMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.verify(message.scoreboardUpdateMessage);
                            if (error)
                                return "scoreboardUpdateMessage." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a S2CMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.S2CMessage} S2CMessage
                 */
                S2CMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.S2CMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.S2CMessage();
                    if (object.s2tMessage != null) {
                        if (typeof object.s2tMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.s2tMessage: object expected");
                        message.s2tMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.fromObject(object.s2tMessage);
                    }
                    if (object.s2jMessage != null) {
                        if (typeof object.s2jMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.s2jMessage: object expected");
                        message.s2jMessage = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.fromObject(object.s2jMessage);
                    }
                    if (object.debugMessage != null) {
                        if (typeof object.debugMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.debugMessage: object expected");
                        message.debugMessage = $root.acmcsus.debugjudge.S2CMessage.DebugMessage.fromObject(object.debugMessage);
                    }
                    if (object.alertMessage != null) {
                        if (typeof object.alertMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.alertMessage: object expected");
                        message.alertMessage = $root.acmcsus.debugjudge.S2CMessage.AlertMessage.fromObject(object.alertMessage);
                    }
                    if (object.loginResultMessage != null) {
                        if (typeof object.loginResultMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.loginResultMessage: object expected");
                        message.loginResultMessage = $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.fromObject(object.loginResultMessage);
                    }
                    if (object.notificationMessage != null) {
                        if (typeof object.notificationMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.notificationMessage: object expected");
                        message.notificationMessage = $root.acmcsus.debugjudge.S2CMessage.NotificationMessage.fromObject(object.notificationMessage);
                    }
                    if (object.competitionStateChangedMessage != null) {
                        if (typeof object.competitionStateChangedMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.competitionStateChangedMessage: object expected");
                        message.competitionStateChangedMessage = $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.fromObject(object.competitionStateChangedMessage);
                    }
                    if (object.scoreboardUpdateMessage != null) {
                        if (typeof object.scoreboardUpdateMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.scoreboardUpdateMessage: object expected");
                        message.scoreboardUpdateMessage = $root.acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.fromObject(object.scoreboardUpdateMessage);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a S2CMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @static
                 * @param {acmcsus.debugjudge.S2CMessage} message S2CMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                S2CMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.s2tMessage != null && message.hasOwnProperty("s2tMessage")) {
                        object.s2tMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.toObject(message.s2tMessage, options);
                        if (options.oneofs)
                            object.value = "s2tMessage";
                    }
                    if (message.s2jMessage != null && message.hasOwnProperty("s2jMessage")) {
                        object.s2jMessage = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.toObject(message.s2jMessage, options);
                        if (options.oneofs)
                            object.value = "s2jMessage";
                    }
                    if (message.debugMessage != null && message.hasOwnProperty("debugMessage")) {
                        object.debugMessage = $root.acmcsus.debugjudge.S2CMessage.DebugMessage.toObject(message.debugMessage, options);
                        if (options.oneofs)
                            object.value = "debugMessage";
                    }
                    if (message.alertMessage != null && message.hasOwnProperty("alertMessage")) {
                        object.alertMessage = $root.acmcsus.debugjudge.S2CMessage.AlertMessage.toObject(message.alertMessage, options);
                        if (options.oneofs)
                            object.value = "alertMessage";
                    }
                    if (message.loginResultMessage != null && message.hasOwnProperty("loginResultMessage")) {
                        object.loginResultMessage = $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.toObject(message.loginResultMessage, options);
                        if (options.oneofs)
                            object.value = "loginResultMessage";
                    }
                    if (message.notificationMessage != null && message.hasOwnProperty("notificationMessage")) {
                        object.notificationMessage = $root.acmcsus.debugjudge.S2CMessage.NotificationMessage.toObject(message.notificationMessage, options);
                        if (options.oneofs)
                            object.value = "notificationMessage";
                    }
                    if (message.competitionStateChangedMessage != null && message.hasOwnProperty("competitionStateChangedMessage")) {
                        object.competitionStateChangedMessage = $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.toObject(message.competitionStateChangedMessage, options);
                        if (options.oneofs)
                            object.value = "competitionStateChangedMessage";
                    }
                    if (message.scoreboardUpdateMessage != null && message.hasOwnProperty("scoreboardUpdateMessage")) {
                        object.scoreboardUpdateMessage = $root.acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.toObject(message.scoreboardUpdateMessage, options);
                        if (options.oneofs)
                            object.value = "scoreboardUpdateMessage";
                    }
                    return object;
                };
    
                /**
                 * Converts this S2CMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                S2CMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                S2CMessage.DebugMessage = (function() {
    
                    /**
                     * Properties of a DebugMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface IDebugMessage
                     * @property {string|null} [message] DebugMessage message
                     */
    
                    /**
                     * Constructs a new DebugMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a DebugMessage.
                     * @implements IDebugMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.IDebugMessage=} [properties] Properties to set
                     */
                    function DebugMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * DebugMessage message.
                     * @member {string} message
                     * @memberof acmcsus.debugjudge.S2CMessage.DebugMessage
                     * @instance
                     */
                    DebugMessage.prototype.message = "";
    
                    /**
                     * Creates a new DebugMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.DebugMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IDebugMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.DebugMessage} DebugMessage instance
                     */
                    DebugMessage.create = function create(properties) {
                        return new DebugMessage(properties);
                    };
    
                    /**
                     * Encodes the specified DebugMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.DebugMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.DebugMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IDebugMessage} message DebugMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DebugMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DebugMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.DebugMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.DebugMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IDebugMessage} message DebugMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DebugMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DebugMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.DebugMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.DebugMessage} DebugMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DebugMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.DebugMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.message = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a DebugMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.DebugMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.DebugMessage} DebugMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DebugMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a DebugMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2CMessage.DebugMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DebugMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a DebugMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2CMessage.DebugMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.DebugMessage} DebugMessage
                     */
                    DebugMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.DebugMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.DebugMessage();
                        if (object.message != null)
                            message.message = String(object.message);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DebugMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.DebugMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.DebugMessage} message DebugMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DebugMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.message = "";
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        return object;
                    };
    
                    /**
                     * Converts this DebugMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2CMessage.DebugMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DebugMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return DebugMessage;
                })();
    
                S2CMessage.AlertMessage = (function() {
    
                    /**
                     * Properties of an AlertMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface IAlertMessage
                     * @property {string|null} [message] AlertMessage message
                     */
    
                    /**
                     * Constructs a new AlertMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents an AlertMessage.
                     * @implements IAlertMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.IAlertMessage=} [properties] Properties to set
                     */
                    function AlertMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * AlertMessage message.
                     * @member {string} message
                     * @memberof acmcsus.debugjudge.S2CMessage.AlertMessage
                     * @instance
                     */
                    AlertMessage.prototype.message = "";
    
                    /**
                     * Creates a new AlertMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.AlertMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IAlertMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.AlertMessage} AlertMessage instance
                     */
                    AlertMessage.create = function create(properties) {
                        return new AlertMessage(properties);
                    };
    
                    /**
                     * Encodes the specified AlertMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.AlertMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.AlertMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IAlertMessage} message AlertMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AlertMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified AlertMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.AlertMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.AlertMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IAlertMessage} message AlertMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AlertMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an AlertMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.AlertMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.AlertMessage} AlertMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AlertMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.AlertMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.message = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an AlertMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.AlertMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.AlertMessage} AlertMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AlertMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an AlertMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2CMessage.AlertMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AlertMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        return null;
                    };
    
                    /**
                     * Creates an AlertMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2CMessage.AlertMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.AlertMessage} AlertMessage
                     */
                    AlertMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.AlertMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.AlertMessage();
                        if (object.message != null)
                            message.message = String(object.message);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an AlertMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.AlertMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.AlertMessage} message AlertMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AlertMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.message = "";
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        return object;
                    };
    
                    /**
                     * Converts this AlertMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2CMessage.AlertMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AlertMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return AlertMessage;
                })();
    
                S2CMessage.LoginResultMessage = (function() {
    
                    /**
                     * Properties of a LoginResultMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface ILoginResultMessage
                     * @property {acmcsus.debugjudge.S2CMessage.LoginResultMessage.LoginResult|null} [value] LoginResultMessage value
                     */
    
                    /**
                     * Constructs a new LoginResultMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a LoginResultMessage.
                     * @implements ILoginResultMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.ILoginResultMessage=} [properties] Properties to set
                     */
                    function LoginResultMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * LoginResultMessage value.
                     * @member {acmcsus.debugjudge.S2CMessage.LoginResultMessage.LoginResult} value
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @instance
                     */
                    LoginResultMessage.prototype.value = 0;
    
                    /**
                     * Creates a new LoginResultMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ILoginResultMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.LoginResultMessage} LoginResultMessage instance
                     */
                    LoginResultMessage.create = function create(properties) {
                        return new LoginResultMessage(properties);
                    };
    
                    /**
                     * Encodes the specified LoginResultMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.LoginResultMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ILoginResultMessage} message LoginResultMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginResultMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && message.hasOwnProperty("value"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified LoginResultMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.LoginResultMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ILoginResultMessage} message LoginResultMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginResultMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a LoginResultMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.LoginResultMessage} LoginResultMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginResultMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a LoginResultMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.LoginResultMessage} LoginResultMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginResultMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a LoginResultMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LoginResultMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value"))
                            switch (message.value) {
                            default:
                                return "value: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };
    
                    /**
                     * Creates a LoginResultMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.LoginResultMessage} LoginResultMessage
                     */
                    LoginResultMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage();
                        switch (object.value) {
                        case "UNKNOWN":
                        case 0:
                            message.value = 0;
                            break;
                        case "SUCCESS":
                        case 1:
                            message.value = 1;
                            break;
                        case "FAILURE":
                        case 2:
                            message.value = 2;
                            break;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a LoginResultMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.LoginResultMessage} message LoginResultMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LoginResultMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.value = options.enums === String ? "UNKNOWN" : 0;
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = options.enums === String ? $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.LoginResult[message.value] : message.value;
                        return object;
                    };
    
                    /**
                     * Converts this LoginResultMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LoginResultMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * LoginResult enum.
                     * @name acmcsus.debugjudge.S2CMessage.LoginResultMessage.LoginResult
                     * @enum {string}
                     * @property {number} UNKNOWN=0 UNKNOWN value
                     * @property {number} SUCCESS=1 SUCCESS value
                     * @property {number} FAILURE=2 FAILURE value
                     */
                    LoginResultMessage.LoginResult = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "UNKNOWN"] = 0;
                        values[valuesById[1] = "SUCCESS"] = 1;
                        values[valuesById[2] = "FAILURE"] = 2;
                        return values;
                    })();
    
                    return LoginResultMessage;
                })();
    
                S2CMessage.NotificationMessage = (function() {
    
                    /**
                     * Properties of a NotificationMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface INotificationMessage
                     * @property {string|null} [message] NotificationMessage message
                     * @property {string|null} [icon] NotificationMessage icon
                     */
    
                    /**
                     * Constructs a new NotificationMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a NotificationMessage.
                     * @implements INotificationMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.INotificationMessage=} [properties] Properties to set
                     */
                    function NotificationMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NotificationMessage message.
                     * @member {string} message
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @instance
                     */
                    NotificationMessage.prototype.message = "";
    
                    /**
                     * NotificationMessage icon.
                     * @member {string} icon
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @instance
                     */
                    NotificationMessage.prototype.icon = "";
    
                    /**
                     * Creates a new NotificationMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.INotificationMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.NotificationMessage} NotificationMessage instance
                     */
                    NotificationMessage.create = function create(properties) {
                        return new NotificationMessage(properties);
                    };
    
                    /**
                     * Encodes the specified NotificationMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.NotificationMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.INotificationMessage} message NotificationMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NotificationMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                        if (message.icon != null && message.hasOwnProperty("icon"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.icon);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NotificationMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.NotificationMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.INotificationMessage} message NotificationMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NotificationMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NotificationMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.NotificationMessage} NotificationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NotificationMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.NotificationMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.message = reader.string();
                                break;
                            case 2:
                                message.icon = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a NotificationMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.NotificationMessage} NotificationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NotificationMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NotificationMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NotificationMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        if (message.icon != null && message.hasOwnProperty("icon"))
                            if (!$util.isString(message.icon))
                                return "icon: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a NotificationMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.NotificationMessage} NotificationMessage
                     */
                    NotificationMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.NotificationMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.NotificationMessage();
                        if (object.message != null)
                            message.message = String(object.message);
                        if (object.icon != null)
                            message.icon = String(object.icon);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NotificationMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.NotificationMessage} message NotificationMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NotificationMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.message = "";
                            object.icon = "";
                        }
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.icon != null && message.hasOwnProperty("icon"))
                            object.icon = message.icon;
                        return object;
                    };
    
                    /**
                     * Converts this NotificationMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2CMessage.NotificationMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NotificationMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * NotificationLevel enum.
                     * @name acmcsus.debugjudge.S2CMessage.NotificationMessage.NotificationLevel
                     * @enum {string}
                     * @property {number} DEFAULT=0 DEFAULT value
                     * @property {number} SUCCESS=1 SUCCESS value
                     * @property {number} FAILURE=2 FAILURE value
                     * @property {number} WARNING=3 WARNING value
                     */
                    NotificationMessage.NotificationLevel = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "DEFAULT"] = 0;
                        values[valuesById[1] = "SUCCESS"] = 1;
                        values[valuesById[2] = "FAILURE"] = 2;
                        values[valuesById[3] = "WARNING"] = 3;
                        return values;
                    })();
    
                    return NotificationMessage;
                })();
    
                S2CMessage.CompetitionStateChangedMessage = (function() {
    
                    /**
                     * Properties of a CompetitionStateChangedMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface ICompetitionStateChangedMessage
                     * @property {number|Long|null} [timeMillis] CompetitionStateChangedMessage timeMillis
                     * @property {acmcsus.debugjudge.CompetitionState|null} [state] CompetitionStateChangedMessage state
                     */
    
                    /**
                     * Constructs a new CompetitionStateChangedMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a CompetitionStateChangedMessage.
                     * @implements ICompetitionStateChangedMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage=} [properties] Properties to set
                     */
                    function CompetitionStateChangedMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CompetitionStateChangedMessage timeMillis.
                     * @member {number|Long} timeMillis
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @instance
                     */
                    CompetitionStateChangedMessage.prototype.timeMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * CompetitionStateChangedMessage state.
                     * @member {acmcsus.debugjudge.CompetitionState} state
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @instance
                     */
                    CompetitionStateChangedMessage.prototype.state = 0;
    
                    /**
                     * Creates a new CompetitionStateChangedMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage} CompetitionStateChangedMessage instance
                     */
                    CompetitionStateChangedMessage.create = function create(properties) {
                        return new CompetitionStateChangedMessage(properties);
                    };
    
                    /**
                     * Encodes the specified CompetitionStateChangedMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage} message CompetitionStateChangedMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CompetitionStateChangedMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.timeMillis != null && message.hasOwnProperty("timeMillis"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timeMillis);
                        if (message.state != null && message.hasOwnProperty("state"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CompetitionStateChangedMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage} message CompetitionStateChangedMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CompetitionStateChangedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CompetitionStateChangedMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage} CompetitionStateChangedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CompetitionStateChangedMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.timeMillis = reader.int64();
                                break;
                            case 2:
                                message.state = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a CompetitionStateChangedMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage} CompetitionStateChangedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CompetitionStateChangedMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CompetitionStateChangedMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CompetitionStateChangedMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.timeMillis != null && message.hasOwnProperty("timeMillis"))
                            if (!$util.isInteger(message.timeMillis) && !(message.timeMillis && $util.isInteger(message.timeMillis.low) && $util.isInteger(message.timeMillis.high)))
                                return "timeMillis: integer|Long expected";
                        if (message.state != null && message.hasOwnProperty("state"))
                            switch (message.state) {
                            default:
                                return "state: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        return null;
                    };
    
                    /**
                     * Creates a CompetitionStateChangedMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage} CompetitionStateChangedMessage
                     */
                    CompetitionStateChangedMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage();
                        if (object.timeMillis != null)
                            if ($util.Long)
                                (message.timeMillis = $util.Long.fromValue(object.timeMillis)).unsigned = false;
                            else if (typeof object.timeMillis === "string")
                                message.timeMillis = parseInt(object.timeMillis, 10);
                            else if (typeof object.timeMillis === "number")
                                message.timeMillis = object.timeMillis;
                            else if (typeof object.timeMillis === "object")
                                message.timeMillis = new $util.LongBits(object.timeMillis.low >>> 0, object.timeMillis.high >>> 0).toNumber();
                        switch (object.state) {
                        case "UNKNOWN":
                        case 0:
                            message.state = 0;
                            break;
                        case "WAITING":
                        case 1:
                            message.state = 1;
                            break;
                        case "STARTED":
                        case 2:
                            message.state = 2;
                            break;
                        case "PAUSED":
                        case 3:
                            message.state = 3;
                            break;
                        case "STOPPED":
                        case 4:
                            message.state = 4;
                            break;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CompetitionStateChangedMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage} message CompetitionStateChangedMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CompetitionStateChangedMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timeMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timeMillis = options.longs === String ? "0" : 0;
                            object.state = options.enums === String ? "UNKNOWN" : 0;
                        }
                        if (message.timeMillis != null && message.hasOwnProperty("timeMillis"))
                            if (typeof message.timeMillis === "number")
                                object.timeMillis = options.longs === String ? String(message.timeMillis) : message.timeMillis;
                            else
                                object.timeMillis = options.longs === String ? $util.Long.prototype.toString.call(message.timeMillis) : options.longs === Number ? new $util.LongBits(message.timeMillis.low >>> 0, message.timeMillis.high >>> 0).toNumber() : message.timeMillis;
                        if (message.state != null && message.hasOwnProperty("state"))
                            object.state = options.enums === String ? $root.acmcsus.debugjudge.CompetitionState[message.state] : message.state;
                        return object;
                    };
    
                    /**
                     * Converts this CompetitionStateChangedMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CompetitionStateChangedMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return CompetitionStateChangedMessage;
                })();
    
                S2CMessage.ScoreboardUpdateMessage = (function() {
    
                    /**
                     * Properties of a ScoreboardUpdateMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface IScoreboardUpdateMessage
                     * @property {acmcsus.debugjudge.IScoreboard|null} [scoreboard] ScoreboardUpdateMessage scoreboard
                     */
    
                    /**
                     * Constructs a new ScoreboardUpdateMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a ScoreboardUpdateMessage.
                     * @implements IScoreboardUpdateMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage=} [properties] Properties to set
                     */
                    function ScoreboardUpdateMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ScoreboardUpdateMessage scoreboard.
                     * @member {acmcsus.debugjudge.IScoreboard|null|undefined} scoreboard
                     * @memberof acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage
                     * @instance
                     */
                    ScoreboardUpdateMessage.prototype.scoreboard = null;
    
                    /**
                     * Creates a new ScoreboardUpdateMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage} ScoreboardUpdateMessage instance
                     */
                    ScoreboardUpdateMessage.create = function create(properties) {
                        return new ScoreboardUpdateMessage(properties);
                    };
    
                    /**
                     * Encodes the specified ScoreboardUpdateMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage} message ScoreboardUpdateMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScoreboardUpdateMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.scoreboard != null && message.hasOwnProperty("scoreboard"))
                            $root.acmcsus.debugjudge.Scoreboard.encode(message.scoreboard, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ScoreboardUpdateMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage} message ScoreboardUpdateMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScoreboardUpdateMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ScoreboardUpdateMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage} ScoreboardUpdateMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScoreboardUpdateMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.scoreboard = $root.acmcsus.debugjudge.Scoreboard.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ScoreboardUpdateMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage} ScoreboardUpdateMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScoreboardUpdateMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ScoreboardUpdateMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScoreboardUpdateMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.scoreboard != null && message.hasOwnProperty("scoreboard")) {
                            var error = $root.acmcsus.debugjudge.Scoreboard.verify(message.scoreboard);
                            if (error)
                                return "scoreboard." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a ScoreboardUpdateMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage} ScoreboardUpdateMessage
                     */
                    ScoreboardUpdateMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage();
                        if (object.scoreboard != null) {
                            if (typeof object.scoreboard !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.scoreboard: object expected");
                            message.scoreboard = $root.acmcsus.debugjudge.Scoreboard.fromObject(object.scoreboard);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ScoreboardUpdateMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage} message ScoreboardUpdateMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScoreboardUpdateMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.scoreboard = null;
                        if (message.scoreboard != null && message.hasOwnProperty("scoreboard"))
                            object.scoreboard = $root.acmcsus.debugjudge.Scoreboard.toObject(message.scoreboard, options);
                        return object;
                    };
    
                    /**
                     * Converts this ScoreboardUpdateMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScoreboardUpdateMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ScoreboardUpdateMessage;
                })();
    
                S2CMessage.S2TMessage = (function() {
    
                    /**
                     * Properties of a S2TMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface IS2TMessage
                     * @property {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionMessage|null} [reloadSubmissionMessage] S2TMessage reloadSubmissionMessage
                     * @property {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionsMessage|null} [reloadSubmissionsMessage] S2TMessage reloadSubmissionsMessage
                     * @property {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadProblemsMessage|null} [reloadProblemsMessage] S2TMessage reloadProblemsMessage
                     */
    
                    /**
                     * Constructs a new S2TMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a S2TMessage.
                     * @implements IS2TMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.IS2TMessage=} [properties] Properties to set
                     */
                    function S2TMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * S2TMessage reloadSubmissionMessage.
                     * @member {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionMessage|null|undefined} reloadSubmissionMessage
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @instance
                     */
                    S2TMessage.prototype.reloadSubmissionMessage = null;
    
                    /**
                     * S2TMessage reloadSubmissionsMessage.
                     * @member {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionsMessage|null|undefined} reloadSubmissionsMessage
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @instance
                     */
                    S2TMessage.prototype.reloadSubmissionsMessage = null;
    
                    /**
                     * S2TMessage reloadProblemsMessage.
                     * @member {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadProblemsMessage|null|undefined} reloadProblemsMessage
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @instance
                     */
                    S2TMessage.prototype.reloadProblemsMessage = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * S2TMessage value.
                     * @member {"reloadSubmissionMessage"|"reloadSubmissionsMessage"|"reloadProblemsMessage"|undefined} value
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @instance
                     */
                    Object.defineProperty(S2TMessage.prototype, "value", {
                        get: $util.oneOfGetter($oneOfFields = ["reloadSubmissionMessage", "reloadSubmissionsMessage", "reloadProblemsMessage"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new S2TMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IS2TMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage} S2TMessage instance
                     */
                    S2TMessage.create = function create(properties) {
                        return new S2TMessage(properties);
                    };
    
                    /**
                     * Encodes the specified S2TMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2TMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IS2TMessage} message S2TMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    S2TMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.reloadSubmissionMessage != null && message.hasOwnProperty("reloadSubmissionMessage"))
                            $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage.encode(message.reloadSubmissionMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.reloadSubmissionsMessage != null && message.hasOwnProperty("reloadSubmissionsMessage"))
                            $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage.encode(message.reloadSubmissionsMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.reloadProblemsMessage != null && message.hasOwnProperty("reloadProblemsMessage"))
                            $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage.encode(message.reloadProblemsMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified S2TMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2TMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IS2TMessage} message S2TMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    S2TMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a S2TMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage} S2TMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    S2TMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.S2TMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.reloadSubmissionMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.reloadSubmissionsMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.reloadProblemsMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a S2TMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage} S2TMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    S2TMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a S2TMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    S2TMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.reloadSubmissionMessage != null && message.hasOwnProperty("reloadSubmissionMessage")) {
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage.verify(message.reloadSubmissionMessage);
                                if (error)
                                    return "reloadSubmissionMessage." + error;
                            }
                        }
                        if (message.reloadSubmissionsMessage != null && message.hasOwnProperty("reloadSubmissionsMessage")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage.verify(message.reloadSubmissionsMessage);
                                if (error)
                                    return "reloadSubmissionsMessage." + error;
                            }
                        }
                        if (message.reloadProblemsMessage != null && message.hasOwnProperty("reloadProblemsMessage")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage.verify(message.reloadProblemsMessage);
                                if (error)
                                    return "reloadProblemsMessage." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a S2TMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage} S2TMessage
                     */
                    S2TMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.S2TMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.S2TMessage();
                        if (object.reloadSubmissionMessage != null) {
                            if (typeof object.reloadSubmissionMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.S2TMessage.reloadSubmissionMessage: object expected");
                            message.reloadSubmissionMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage.fromObject(object.reloadSubmissionMessage);
                        }
                        if (object.reloadSubmissionsMessage != null) {
                            if (typeof object.reloadSubmissionsMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.S2TMessage.reloadSubmissionsMessage: object expected");
                            message.reloadSubmissionsMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage.fromObject(object.reloadSubmissionsMessage);
                        }
                        if (object.reloadProblemsMessage != null) {
                            if (typeof object.reloadProblemsMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.S2TMessage.reloadProblemsMessage: object expected");
                            message.reloadProblemsMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage.fromObject(object.reloadProblemsMessage);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a S2TMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.S2TMessage} message S2TMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    S2TMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.reloadSubmissionMessage != null && message.hasOwnProperty("reloadSubmissionMessage")) {
                            object.reloadSubmissionMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage.toObject(message.reloadSubmissionMessage, options);
                            if (options.oneofs)
                                object.value = "reloadSubmissionMessage";
                        }
                        if (message.reloadSubmissionsMessage != null && message.hasOwnProperty("reloadSubmissionsMessage")) {
                            object.reloadSubmissionsMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage.toObject(message.reloadSubmissionsMessage, options);
                            if (options.oneofs)
                                object.value = "reloadSubmissionsMessage";
                        }
                        if (message.reloadProblemsMessage != null && message.hasOwnProperty("reloadProblemsMessage")) {
                            object.reloadProblemsMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage.toObject(message.reloadProblemsMessage, options);
                            if (options.oneofs)
                                object.value = "reloadProblemsMessage";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this S2TMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    S2TMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    S2TMessage.ReloadSubmissionMessage = (function() {
    
                        /**
                         * Properties of a ReloadSubmissionMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                         * @interface IReloadSubmissionMessage
                         * @property {acmcsus.debugjudge.ISubmission|null} [submission] ReloadSubmissionMessage submission
                         */
    
                        /**
                         * Constructs a new ReloadSubmissionMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                         * @classdesc Represents a ReloadSubmissionMessage.
                         * @implements IReloadSubmissionMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionMessage=} [properties] Properties to set
                         */
                        function ReloadSubmissionMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ReloadSubmissionMessage submission.
                         * @member {acmcsus.debugjudge.ISubmission|null|undefined} submission
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage
                         * @instance
                         */
                        ReloadSubmissionMessage.prototype.submission = null;
    
                        /**
                         * Creates a new ReloadSubmissionMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage} ReloadSubmissionMessage instance
                         */
                        ReloadSubmissionMessage.create = function create(properties) {
                            return new ReloadSubmissionMessage(properties);
                        };
    
                        /**
                         * Encodes the specified ReloadSubmissionMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionMessage} message ReloadSubmissionMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReloadSubmissionMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.submission != null && message.hasOwnProperty("submission"))
                                $root.acmcsus.debugjudge.Submission.encode(message.submission, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ReloadSubmissionMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionMessage} message ReloadSubmissionMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReloadSubmissionMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ReloadSubmissionMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage} ReloadSubmissionMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReloadSubmissionMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.submission = $root.acmcsus.debugjudge.Submission.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ReloadSubmissionMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage} ReloadSubmissionMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReloadSubmissionMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ReloadSubmissionMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ReloadSubmissionMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.submission != null && message.hasOwnProperty("submission")) {
                                var error = $root.acmcsus.debugjudge.Submission.verify(message.submission);
                                if (error)
                                    return "submission." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a ReloadSubmissionMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage} ReloadSubmissionMessage
                         */
                        ReloadSubmissionMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage)
                                return object;
                            var message = new $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage();
                            if (object.submission != null) {
                                if (typeof object.submission !== "object")
                                    throw TypeError(".acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage.submission: object expected");
                                message.submission = $root.acmcsus.debugjudge.Submission.fromObject(object.submission);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ReloadSubmissionMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage} message ReloadSubmissionMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ReloadSubmissionMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.submission = null;
                            if (message.submission != null && message.hasOwnProperty("submission"))
                                object.submission = $root.acmcsus.debugjudge.Submission.toObject(message.submission, options);
                            return object;
                        };
    
                        /**
                         * Converts this ReloadSubmissionMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ReloadSubmissionMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ReloadSubmissionMessage;
                    })();
    
                    S2TMessage.ReloadSubmissionsMessage = (function() {
    
                        /**
                         * Properties of a ReloadSubmissionsMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                         * @interface IReloadSubmissionsMessage
                         * @property {acmcsus.debugjudge.Submission.IList|null} [submissions] ReloadSubmissionsMessage submissions
                         */
    
                        /**
                         * Constructs a new ReloadSubmissionsMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                         * @classdesc Represents a ReloadSubmissionsMessage.
                         * @implements IReloadSubmissionsMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionsMessage=} [properties] Properties to set
                         */
                        function ReloadSubmissionsMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ReloadSubmissionsMessage submissions.
                         * @member {acmcsus.debugjudge.Submission.IList|null|undefined} submissions
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage
                         * @instance
                         */
                        ReloadSubmissionsMessage.prototype.submissions = null;
    
                        /**
                         * Creates a new ReloadSubmissionsMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionsMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage} ReloadSubmissionsMessage instance
                         */
                        ReloadSubmissionsMessage.create = function create(properties) {
                            return new ReloadSubmissionsMessage(properties);
                        };
    
                        /**
                         * Encodes the specified ReloadSubmissionsMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionsMessage} message ReloadSubmissionsMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReloadSubmissionsMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.submissions != null && message.hasOwnProperty("submissions"))
                                $root.acmcsus.debugjudge.Submission.List.encode(message.submissions, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ReloadSubmissionsMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadSubmissionsMessage} message ReloadSubmissionsMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReloadSubmissionsMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ReloadSubmissionsMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage} ReloadSubmissionsMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReloadSubmissionsMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.submissions = $root.acmcsus.debugjudge.Submission.List.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ReloadSubmissionsMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage} ReloadSubmissionsMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReloadSubmissionsMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ReloadSubmissionsMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ReloadSubmissionsMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.submissions != null && message.hasOwnProperty("submissions")) {
                                var error = $root.acmcsus.debugjudge.Submission.List.verify(message.submissions);
                                if (error)
                                    return "submissions." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a ReloadSubmissionsMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage} ReloadSubmissionsMessage
                         */
                        ReloadSubmissionsMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage)
                                return object;
                            var message = new $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage();
                            if (object.submissions != null) {
                                if (typeof object.submissions !== "object")
                                    throw TypeError(".acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage.submissions: object expected");
                                message.submissions = $root.acmcsus.debugjudge.Submission.List.fromObject(object.submissions);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ReloadSubmissionsMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage} message ReloadSubmissionsMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ReloadSubmissionsMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.submissions = null;
                            if (message.submissions != null && message.hasOwnProperty("submissions"))
                                object.submissions = $root.acmcsus.debugjudge.Submission.List.toObject(message.submissions, options);
                            return object;
                        };
    
                        /**
                         * Converts this ReloadSubmissionsMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadSubmissionsMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ReloadSubmissionsMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ReloadSubmissionsMessage;
                    })();
    
                    S2TMessage.ReloadProblemsMessage = (function() {
    
                        /**
                         * Properties of a ReloadProblemsMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                         * @interface IReloadProblemsMessage
                         * @property {acmcsus.debugjudge.Problem.IList|null} [problems] ReloadProblemsMessage problems
                         */
    
                        /**
                         * Constructs a new ReloadProblemsMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                         * @classdesc Represents a ReloadProblemsMessage.
                         * @implements IReloadProblemsMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadProblemsMessage=} [properties] Properties to set
                         */
                        function ReloadProblemsMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ReloadProblemsMessage problems.
                         * @member {acmcsus.debugjudge.Problem.IList|null|undefined} problems
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage
                         * @instance
                         */
                        ReloadProblemsMessage.prototype.problems = null;
    
                        /**
                         * Creates a new ReloadProblemsMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadProblemsMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage} ReloadProblemsMessage instance
                         */
                        ReloadProblemsMessage.create = function create(properties) {
                            return new ReloadProblemsMessage(properties);
                        };
    
                        /**
                         * Encodes the specified ReloadProblemsMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadProblemsMessage} message ReloadProblemsMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReloadProblemsMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.problems != null && message.hasOwnProperty("problems"))
                                $root.acmcsus.debugjudge.Problem.List.encode(message.problems, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ReloadProblemsMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.IReloadProblemsMessage} message ReloadProblemsMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReloadProblemsMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ReloadProblemsMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage} ReloadProblemsMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReloadProblemsMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.problems = $root.acmcsus.debugjudge.Problem.List.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ReloadProblemsMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage} ReloadProblemsMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReloadProblemsMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ReloadProblemsMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ReloadProblemsMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.problems != null && message.hasOwnProperty("problems")) {
                                var error = $root.acmcsus.debugjudge.Problem.List.verify(message.problems);
                                if (error)
                                    return "problems." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a ReloadProblemsMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage} ReloadProblemsMessage
                         */
                        ReloadProblemsMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage)
                                return object;
                            var message = new $root.acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage();
                            if (object.problems != null) {
                                if (typeof object.problems !== "object")
                                    throw TypeError(".acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage.problems: object expected");
                                message.problems = $root.acmcsus.debugjudge.Problem.List.fromObject(object.problems);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ReloadProblemsMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage} message ReloadProblemsMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ReloadProblemsMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.problems = null;
                            if (message.problems != null && message.hasOwnProperty("problems"))
                                object.problems = $root.acmcsus.debugjudge.Problem.List.toObject(message.problems, options);
                            return object;
                        };
    
                        /**
                         * Converts this ReloadProblemsMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.ReloadProblemsMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ReloadProblemsMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ReloadProblemsMessage;
                    })();
    
                    return S2TMessage;
                })();
    
                S2CMessage.S2JMessage = (function() {
    
                    /**
                     * Properties of a S2JMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface IS2JMessage
                     * @property {acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage|null} [assignedSubmissionMessage] S2JMessage assignedSubmissionMessage
                     * @property {acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage|null} [kickMessage] S2JMessage kickMessage
                     */
    
                    /**
                     * Constructs a new S2JMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a S2JMessage.
                     * @implements IS2JMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.IS2JMessage=} [properties] Properties to set
                     */
                    function S2JMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * S2JMessage assignedSubmissionMessage.
                     * @member {acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage|null|undefined} assignedSubmissionMessage
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @instance
                     */
                    S2JMessage.prototype.assignedSubmissionMessage = null;
    
                    /**
                     * S2JMessage kickMessage.
                     * @member {acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage|null|undefined} kickMessage
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @instance
                     */
                    S2JMessage.prototype.kickMessage = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * S2JMessage value.
                     * @member {"assignedSubmissionMessage"|"kickMessage"|undefined} value
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @instance
                     */
                    Object.defineProperty(S2JMessage.prototype, "value", {
                        get: $util.oneOfGetter($oneOfFields = ["assignedSubmissionMessage", "kickMessage"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new S2JMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IS2JMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage} S2JMessage instance
                     */
                    S2JMessage.create = function create(properties) {
                        return new S2JMessage(properties);
                    };
    
                    /**
                     * Encodes the specified S2JMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2JMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IS2JMessage} message S2JMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    S2JMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.assignedSubmissionMessage != null && message.hasOwnProperty("assignedSubmissionMessage"))
                            $root.acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage.encode(message.assignedSubmissionMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.kickMessage != null && message.hasOwnProperty("kickMessage"))
                            $root.acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage.encode(message.kickMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified S2JMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2JMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IS2JMessage} message S2JMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    S2JMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a S2JMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage} S2JMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    S2JMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.S2JMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.assignedSubmissionMessage = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.kickMessage = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a S2JMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage} S2JMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    S2JMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a S2JMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    S2JMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.assignedSubmissionMessage != null && message.hasOwnProperty("assignedSubmissionMessage")) {
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage.verify(message.assignedSubmissionMessage);
                                if (error)
                                    return "assignedSubmissionMessage." + error;
                            }
                        }
                        if (message.kickMessage != null && message.hasOwnProperty("kickMessage")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage.verify(message.kickMessage);
                                if (error)
                                    return "kickMessage." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a S2JMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage} S2JMessage
                     */
                    S2JMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.S2JMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.S2JMessage();
                        if (object.assignedSubmissionMessage != null) {
                            if (typeof object.assignedSubmissionMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.S2JMessage.assignedSubmissionMessage: object expected");
                            message.assignedSubmissionMessage = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage.fromObject(object.assignedSubmissionMessage);
                        }
                        if (object.kickMessage != null) {
                            if (typeof object.kickMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.S2JMessage.kickMessage: object expected");
                            message.kickMessage = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage.fromObject(object.kickMessage);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a S2JMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.S2JMessage} message S2JMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    S2JMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.assignedSubmissionMessage != null && message.hasOwnProperty("assignedSubmissionMessage")) {
                            object.assignedSubmissionMessage = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage.toObject(message.assignedSubmissionMessage, options);
                            if (options.oneofs)
                                object.value = "assignedSubmissionMessage";
                        }
                        if (message.kickMessage != null && message.hasOwnProperty("kickMessage")) {
                            object.kickMessage = $root.acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage.toObject(message.kickMessage, options);
                            if (options.oneofs)
                                object.value = "kickMessage";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this S2JMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    S2JMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    S2JMessage.AssignedSubmissionMessage = (function() {
    
                        /**
                         * Properties of an AssignedSubmissionMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                         * @interface IAssignedSubmissionMessage
                         * @property {acmcsus.debugjudge.ISubmission|null} [submission] AssignedSubmissionMessage submission
                         */
    
                        /**
                         * Constructs a new AssignedSubmissionMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                         * @classdesc Represents an AssignedSubmissionMessage.
                         * @implements IAssignedSubmissionMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage=} [properties] Properties to set
                         */
                        function AssignedSubmissionMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AssignedSubmissionMessage submission.
                         * @member {acmcsus.debugjudge.ISubmission|null|undefined} submission
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @instance
                         */
                        AssignedSubmissionMessage.prototype.submission = null;
    
                        /**
                         * Creates a new AssignedSubmissionMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage} AssignedSubmissionMessage instance
                         */
                        AssignedSubmissionMessage.create = function create(properties) {
                            return new AssignedSubmissionMessage(properties);
                        };
    
                        /**
                         * Encodes the specified AssignedSubmissionMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage} message AssignedSubmissionMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AssignedSubmissionMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.submission != null && message.hasOwnProperty("submission"))
                                $root.acmcsus.debugjudge.Submission.encode(message.submission, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AssignedSubmissionMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2JMessage.IAssignedSubmissionMessage} message AssignedSubmissionMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AssignedSubmissionMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AssignedSubmissionMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage} AssignedSubmissionMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AssignedSubmissionMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.submission = $root.acmcsus.debugjudge.Submission.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an AssignedSubmissionMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage} AssignedSubmissionMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AssignedSubmissionMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AssignedSubmissionMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AssignedSubmissionMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.submission != null && message.hasOwnProperty("submission")) {
                                var error = $root.acmcsus.debugjudge.Submission.verify(message.submission);
                                if (error)
                                    return "submission." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates an AssignedSubmissionMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage} AssignedSubmissionMessage
                         */
                        AssignedSubmissionMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage)
                                return object;
                            var message = new $root.acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage();
                            if (object.submission != null) {
                                if (typeof object.submission !== "object")
                                    throw TypeError(".acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage.submission: object expected");
                                message.submission = $root.acmcsus.debugjudge.Submission.fromObject(object.submission);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an AssignedSubmissionMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage} message AssignedSubmissionMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AssignedSubmissionMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.submission = null;
                            if (message.submission != null && message.hasOwnProperty("submission"))
                                object.submission = $root.acmcsus.debugjudge.Submission.toObject(message.submission, options);
                            return object;
                        };
    
                        /**
                         * Converts this AssignedSubmissionMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AssignedSubmissionMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return AssignedSubmissionMessage;
                    })();
    
                    S2JMessage.KickMessage = (function() {
    
                        /**
                         * Properties of a KickMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                         * @interface IKickMessage
                         * @property {string|null} [message] KickMessage message
                         */
    
                        /**
                         * Constructs a new KickMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage
                         * @classdesc Represents a KickMessage.
                         * @implements IKickMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage=} [properties] Properties to set
                         */
                        function KickMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * KickMessage message.
                         * @member {string} message
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage
                         * @instance
                         */
                        KickMessage.prototype.message = "";
    
                        /**
                         * Creates a new KickMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage} KickMessage instance
                         */
                        KickMessage.create = function create(properties) {
                            return new KickMessage(properties);
                        };
    
                        /**
                         * Encodes the specified KickMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage} message KickMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        KickMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.message != null && message.hasOwnProperty("message"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified KickMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2JMessage.IKickMessage} message KickMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        KickMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a KickMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage} KickMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        KickMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.message = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a KickMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage} KickMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        KickMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a KickMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        KickMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.message != null && message.hasOwnProperty("message"))
                                if (!$util.isString(message.message))
                                    return "message: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a KickMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage} KickMessage
                         */
                        KickMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage)
                                return object;
                            var message = new $root.acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage();
                            if (object.message != null)
                                message.message = String(object.message);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a KickMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage} message KickMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        KickMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.message = "";
                            if (message.message != null && message.hasOwnProperty("message"))
                                object.message = message.message;
                            return object;
                        };
    
                        /**
                         * Converts this KickMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.KickMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        KickMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return KickMessage;
                    })();
    
                    return S2JMessage;
                })();
    
                return S2CMessage;
            })();
    
            return debugjudge;
        })();
    
        return acmcsus;
    })();

    return $root;
});
