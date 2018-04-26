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
    
            debugjudge.ProgrammingLanguage = (function() {
    
                /**
                 * Properties of a ProgrammingLanguage.
                 * @memberof acmcsus.debugjudge
                 * @interface IProgrammingLanguage
                 * @property {string|null} [name] ProgrammingLanguage name
                 * @property {string|null} [compile] ProgrammingLanguage compile
                 * @property {string|null} [run] ProgrammingLanguage run
                 */
    
                /**
                 * Constructs a new ProgrammingLanguage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a ProgrammingLanguage.
                 * @implements IProgrammingLanguage
                 * @constructor
                 * @param {acmcsus.debugjudge.IProgrammingLanguage=} [properties] Properties to set
                 */
                function ProgrammingLanguage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ProgrammingLanguage name.
                 * @member {string} name
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @instance
                 */
                ProgrammingLanguage.prototype.name = "";
    
                /**
                 * ProgrammingLanguage compile.
                 * @member {string} compile
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @instance
                 */
                ProgrammingLanguage.prototype.compile = "";
    
                /**
                 * ProgrammingLanguage run.
                 * @member {string} run
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @instance
                 */
                ProgrammingLanguage.prototype.run = "";
    
                /**
                 * Creates a new ProgrammingLanguage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @static
                 * @param {acmcsus.debugjudge.IProgrammingLanguage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.ProgrammingLanguage} ProgrammingLanguage instance
                 */
                ProgrammingLanguage.create = function create(properties) {
                    return new ProgrammingLanguage(properties);
                };
    
                /**
                 * Encodes the specified ProgrammingLanguage message. Does not implicitly {@link acmcsus.debugjudge.ProgrammingLanguage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @static
                 * @param {acmcsus.debugjudge.IProgrammingLanguage} message ProgrammingLanguage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProgrammingLanguage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.compile != null && message.hasOwnProperty("compile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.compile);
                    if (message.run != null && message.hasOwnProperty("run"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.run);
                    return writer;
                };
    
                /**
                 * Encodes the specified ProgrammingLanguage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.ProgrammingLanguage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @static
                 * @param {acmcsus.debugjudge.IProgrammingLanguage} message ProgrammingLanguage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProgrammingLanguage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ProgrammingLanguage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.ProgrammingLanguage} ProgrammingLanguage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProgrammingLanguage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.ProgrammingLanguage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.compile = reader.string();
                            break;
                        case 3:
                            message.run = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ProgrammingLanguage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.ProgrammingLanguage} ProgrammingLanguage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProgrammingLanguage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ProgrammingLanguage message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ProgrammingLanguage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.compile != null && message.hasOwnProperty("compile"))
                        if (!$util.isString(message.compile))
                            return "compile: string expected";
                    if (message.run != null && message.hasOwnProperty("run"))
                        if (!$util.isString(message.run))
                            return "run: string expected";
                    return null;
                };
    
                /**
                 * Creates a ProgrammingLanguage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.ProgrammingLanguage} ProgrammingLanguage
                 */
                ProgrammingLanguage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.ProgrammingLanguage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.ProgrammingLanguage();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.compile != null)
                        message.compile = String(object.compile);
                    if (object.run != null)
                        message.run = String(object.run);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ProgrammingLanguage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @static
                 * @param {acmcsus.debugjudge.ProgrammingLanguage} message ProgrammingLanguage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ProgrammingLanguage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.compile = "";
                        object.run = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.compile != null && message.hasOwnProperty("compile"))
                        object.compile = message.compile;
                    if (message.run != null && message.hasOwnProperty("run"))
                        object.run = message.run;
                    return object;
                };
    
                /**
                 * Converts this ProgrammingLanguage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.ProgrammingLanguage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ProgrammingLanguage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                ProgrammingLanguage.List = (function() {
    
                    /**
                     * Properties of a List.
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage
                     * @interface IList
                     * @property {Array.<acmcsus.debugjudge.IProgrammingLanguage>|null} [language] List language
                     */
    
                    /**
                     * Constructs a new List.
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage
                     * @classdesc Represents a List.
                     * @implements IList
                     * @constructor
                     * @param {acmcsus.debugjudge.ProgrammingLanguage.IList=} [properties] Properties to set
                     */
                    function List(properties) {
                        this.language = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * List language.
                     * @member {Array.<acmcsus.debugjudge.IProgrammingLanguage>} language
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage.List
                     * @instance
                     */
                    List.prototype.language = $util.emptyArray;
    
                    /**
                     * Creates a new List instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage.List
                     * @static
                     * @param {acmcsus.debugjudge.ProgrammingLanguage.IList=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.ProgrammingLanguage.List} List instance
                     */
                    List.create = function create(properties) {
                        return new List(properties);
                    };
    
                    /**
                     * Encodes the specified List message. Does not implicitly {@link acmcsus.debugjudge.ProgrammingLanguage.List.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage.List
                     * @static
                     * @param {acmcsus.debugjudge.ProgrammingLanguage.IList} message List message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    List.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.language != null && message.language.length)
                            for (var i = 0; i < message.language.length; ++i)
                                $root.acmcsus.debugjudge.ProgrammingLanguage.encode(message.language[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified List message, length delimited. Does not implicitly {@link acmcsus.debugjudge.ProgrammingLanguage.List.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage.List
                     * @static
                     * @param {acmcsus.debugjudge.ProgrammingLanguage.IList} message List message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    List.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a List message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage.List
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.ProgrammingLanguage.List} List
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    List.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.ProgrammingLanguage.List();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.language && message.language.length))
                                    message.language = [];
                                message.language.push($root.acmcsus.debugjudge.ProgrammingLanguage.decode(reader, reader.uint32()));
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
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage.List
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.ProgrammingLanguage.List} List
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
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage.List
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    List.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.language != null && message.hasOwnProperty("language")) {
                            if (!Array.isArray(message.language))
                                return "language: array expected";
                            for (var i = 0; i < message.language.length; ++i) {
                                var error = $root.acmcsus.debugjudge.ProgrammingLanguage.verify(message.language[i]);
                                if (error)
                                    return "language." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a List message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage.List
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.ProgrammingLanguage.List} List
                     */
                    List.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.ProgrammingLanguage.List)
                            return object;
                        var message = new $root.acmcsus.debugjudge.ProgrammingLanguage.List();
                        if (object.language) {
                            if (!Array.isArray(object.language))
                                throw TypeError(".acmcsus.debugjudge.ProgrammingLanguage.List.language: array expected");
                            message.language = [];
                            for (var i = 0; i < object.language.length; ++i) {
                                if (typeof object.language[i] !== "object")
                                    throw TypeError(".acmcsus.debugjudge.ProgrammingLanguage.List.language: object expected");
                                message.language[i] = $root.acmcsus.debugjudge.ProgrammingLanguage.fromObject(object.language[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a List message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage.List
                     * @static
                     * @param {acmcsus.debugjudge.ProgrammingLanguage.List} message List
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    List.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.language = [];
                        if (message.language && message.language.length) {
                            object.language = [];
                            for (var j = 0; j < message.language.length; ++j)
                                object.language[j] = $root.acmcsus.debugjudge.ProgrammingLanguage.toObject(message.language[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this List to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.ProgrammingLanguage.List
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    List.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return List;
                })();
    
                return ProgrammingLanguage;
            })();
    
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
    
            debugjudge.ExecutionResult = (function() {
    
                /**
                 * Properties of an ExecutionResult.
                 * @memberof acmcsus.debugjudge
                 * @interface IExecutionResult
                 * @property {string|null} [resultOut] ExecutionResult resultOut
                 * @property {string|null} [resultErr] ExecutionResult resultErr
                 * @property {number|null} [exitCode] ExecutionResult exitCode
                 * @property {number|null} [timeSeconds] ExecutionResult timeSeconds
                 */
    
                /**
                 * Constructs a new ExecutionResult.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents an ExecutionResult.
                 * @implements IExecutionResult
                 * @constructor
                 * @param {acmcsus.debugjudge.IExecutionResult=} [properties] Properties to set
                 */
                function ExecutionResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ExecutionResult resultOut.
                 * @member {string} resultOut
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @instance
                 */
                ExecutionResult.prototype.resultOut = "";
    
                /**
                 * ExecutionResult resultErr.
                 * @member {string} resultErr
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @instance
                 */
                ExecutionResult.prototype.resultErr = "";
    
                /**
                 * ExecutionResult exitCode.
                 * @member {number} exitCode
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @instance
                 */
                ExecutionResult.prototype.exitCode = 0;
    
                /**
                 * ExecutionResult timeSeconds.
                 * @member {number} timeSeconds
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @instance
                 */
                ExecutionResult.prototype.timeSeconds = 0;
    
                /**
                 * Creates a new ExecutionResult instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @static
                 * @param {acmcsus.debugjudge.IExecutionResult=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.ExecutionResult} ExecutionResult instance
                 */
                ExecutionResult.create = function create(properties) {
                    return new ExecutionResult(properties);
                };
    
                /**
                 * Encodes the specified ExecutionResult message. Does not implicitly {@link acmcsus.debugjudge.ExecutionResult.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @static
                 * @param {acmcsus.debugjudge.IExecutionResult} message ExecutionResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExecutionResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.resultOut != null && message.hasOwnProperty("resultOut"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.resultOut);
                    if (message.resultErr != null && message.hasOwnProperty("resultErr"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.resultErr);
                    if (message.exitCode != null && message.hasOwnProperty("exitCode"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.exitCode);
                    if (message.timeSeconds != null && message.hasOwnProperty("timeSeconds"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timeSeconds);
                    return writer;
                };
    
                /**
                 * Encodes the specified ExecutionResult message, length delimited. Does not implicitly {@link acmcsus.debugjudge.ExecutionResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @static
                 * @param {acmcsus.debugjudge.IExecutionResult} message ExecutionResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExecutionResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an ExecutionResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.ExecutionResult} ExecutionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExecutionResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.ExecutionResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.resultOut = reader.string();
                            break;
                        case 2:
                            message.resultErr = reader.string();
                            break;
                        case 3:
                            message.exitCode = reader.int32();
                            break;
                        case 4:
                            message.timeSeconds = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an ExecutionResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.ExecutionResult} ExecutionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExecutionResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an ExecutionResult message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExecutionResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.resultOut != null && message.hasOwnProperty("resultOut"))
                        if (!$util.isString(message.resultOut))
                            return "resultOut: string expected";
                    if (message.resultErr != null && message.hasOwnProperty("resultErr"))
                        if (!$util.isString(message.resultErr))
                            return "resultErr: string expected";
                    if (message.exitCode != null && message.hasOwnProperty("exitCode"))
                        if (!$util.isInteger(message.exitCode))
                            return "exitCode: integer expected";
                    if (message.timeSeconds != null && message.hasOwnProperty("timeSeconds"))
                        if (!$util.isInteger(message.timeSeconds))
                            return "timeSeconds: integer expected";
                    return null;
                };
    
                /**
                 * Creates an ExecutionResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.ExecutionResult} ExecutionResult
                 */
                ExecutionResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.ExecutionResult)
                        return object;
                    var message = new $root.acmcsus.debugjudge.ExecutionResult();
                    if (object.resultOut != null)
                        message.resultOut = String(object.resultOut);
                    if (object.resultErr != null)
                        message.resultErr = String(object.resultErr);
                    if (object.exitCode != null)
                        message.exitCode = object.exitCode | 0;
                    if (object.timeSeconds != null)
                        message.timeSeconds = object.timeSeconds | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from an ExecutionResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @static
                 * @param {acmcsus.debugjudge.ExecutionResult} message ExecutionResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExecutionResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.resultOut = "";
                        object.resultErr = "";
                        object.exitCode = 0;
                        object.timeSeconds = 0;
                    }
                    if (message.resultOut != null && message.hasOwnProperty("resultOut"))
                        object.resultOut = message.resultOut;
                    if (message.resultErr != null && message.hasOwnProperty("resultErr"))
                        object.resultErr = message.resultErr;
                    if (message.exitCode != null && message.hasOwnProperty("exitCode"))
                        object.exitCode = message.exitCode;
                    if (message.timeSeconds != null && message.hasOwnProperty("timeSeconds"))
                        object.timeSeconds = message.timeSeconds;
                    return object;
                };
    
                /**
                 * Converts this ExecutionResult to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.ExecutionResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExecutionResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ExecutionResult;
            })();
    
            debugjudge.Submission = (function() {
    
                /**
                 * Properties of a Submission.
                 * @memberof acmcsus.debugjudge
                 * @interface ISubmission
                 * @property {number|null} [problemId] Submission problemId
                 * @property {number|null} [teamId] Submission teamId
                 * @property {number|Long|null} [submissionTimeSeconds] Submission submissionTimeSeconds
                 * @property {number|null} [judgeId] Submission judgeId
                 * @property {acmcsus.debugjudge.SubmissionJudgement|null} [judgement] Submission judgement
                 * @property {string|null} [judgementMessage] Submission judgementMessage
                 * @property {acmcsus.debugjudge.Submission.IDebuggingSubmission|null} [debuggingSubmission] Submission debuggingSubmission
                 * @property {acmcsus.debugjudge.Submission.IAlgorithmicSubmission|null} [algorithmicSubmission] Submission algorithmicSubmission
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
                 * @member {number} problemId
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.problemId = 0;
    
                /**
                 * Submission teamId.
                 * @member {number} teamId
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.teamId = 0;
    
                /**
                 * Submission submissionTimeSeconds.
                 * @member {number|Long} submissionTimeSeconds
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.submissionTimeSeconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Submission judgeId.
                 * @member {number} judgeId
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.judgeId = 0;
    
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
    
                /**
                 * Submission algorithmicSubmission.
                 * @member {acmcsus.debugjudge.Submission.IAlgorithmicSubmission|null|undefined} algorithmicSubmission
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Submission.prototype.algorithmicSubmission = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * Submission value.
                 * @member {"debuggingSubmission"|"algorithmicSubmission"|undefined} value
                 * @memberof acmcsus.debugjudge.Submission
                 * @instance
                 */
                Object.defineProperty(Submission.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["debuggingSubmission", "algorithmicSubmission"]),
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
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.problemId);
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.teamId);
                    if (message.submissionTimeSeconds != null && message.hasOwnProperty("submissionTimeSeconds"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.submissionTimeSeconds);
                    if (message.judgeId != null && message.hasOwnProperty("judgeId"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.judgeId);
                    if (message.judgement != null && message.hasOwnProperty("judgement"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.judgement);
                    if (message.judgementMessage != null && message.hasOwnProperty("judgementMessage"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.judgementMessage);
                    if (message.debuggingSubmission != null && message.hasOwnProperty("debuggingSubmission"))
                        $root.acmcsus.debugjudge.Submission.DebuggingSubmission.encode(message.debuggingSubmission, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.algorithmicSubmission != null && message.hasOwnProperty("algorithmicSubmission"))
                        $root.acmcsus.debugjudge.Submission.AlgorithmicSubmission.encode(message.algorithmicSubmission, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
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
                            message.problemId = reader.int32();
                            break;
                        case 3:
                            message.teamId = reader.int32();
                            break;
                        case 4:
                            message.submissionTimeSeconds = reader.int64();
                            break;
                        case 5:
                            message.judgeId = reader.int32();
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
                        case 10:
                            message.algorithmicSubmission = $root.acmcsus.debugjudge.Submission.AlgorithmicSubmission.decode(reader, reader.uint32());
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
                        if (!$util.isInteger(message.problemId))
                            return "problemId: integer expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId))
                            return "teamId: integer expected";
                    if (message.submissionTimeSeconds != null && message.hasOwnProperty("submissionTimeSeconds"))
                        if (!$util.isInteger(message.submissionTimeSeconds) && !(message.submissionTimeSeconds && $util.isInteger(message.submissionTimeSeconds.low) && $util.isInteger(message.submissionTimeSeconds.high)))
                            return "submissionTimeSeconds: integer|Long expected";
                    if (message.judgeId != null && message.hasOwnProperty("judgeId"))
                        if (!$util.isInteger(message.judgeId))
                            return "judgeId: integer expected";
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
                    if (message.algorithmicSubmission != null && message.hasOwnProperty("algorithmicSubmission")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.Submission.AlgorithmicSubmission.verify(message.algorithmicSubmission);
                            if (error)
                                return "algorithmicSubmission." + error;
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
                        message.problemId = object.problemId | 0;
                    if (object.teamId != null)
                        message.teamId = object.teamId | 0;
                    if (object.submissionTimeSeconds != null)
                        if ($util.Long)
                            (message.submissionTimeSeconds = $util.Long.fromValue(object.submissionTimeSeconds)).unsigned = false;
                        else if (typeof object.submissionTimeSeconds === "string")
                            message.submissionTimeSeconds = parseInt(object.submissionTimeSeconds, 10);
                        else if (typeof object.submissionTimeSeconds === "number")
                            message.submissionTimeSeconds = object.submissionTimeSeconds;
                        else if (typeof object.submissionTimeSeconds === "object")
                            message.submissionTimeSeconds = new $util.LongBits(object.submissionTimeSeconds.low >>> 0, object.submissionTimeSeconds.high >>> 0).toNumber();
                    if (object.judgeId != null)
                        message.judgeId = object.judgeId | 0;
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
                    if (object.algorithmicSubmission != null) {
                        if (typeof object.algorithmicSubmission !== "object")
                            throw TypeError(".acmcsus.debugjudge.Submission.algorithmicSubmission: object expected");
                        message.algorithmicSubmission = $root.acmcsus.debugjudge.Submission.AlgorithmicSubmission.fromObject(object.algorithmicSubmission);
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
                        object.problemId = 0;
                        object.teamId = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.submissionTimeSeconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.submissionTimeSeconds = options.longs === String ? "0" : 0;
                        object.judgeId = 0;
                        object.judgement = options.enums === String ? "JUDGEMENT_UNKNOWN" : 0;
                        object.judgementMessage = "";
                    }
                    if (message.problemId != null && message.hasOwnProperty("problemId"))
                        object.problemId = message.problemId;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        object.teamId = message.teamId;
                    if (message.submissionTimeSeconds != null && message.hasOwnProperty("submissionTimeSeconds"))
                        if (typeof message.submissionTimeSeconds === "number")
                            object.submissionTimeSeconds = options.longs === String ? String(message.submissionTimeSeconds) : message.submissionTimeSeconds;
                        else
                            object.submissionTimeSeconds = options.longs === String ? $util.Long.prototype.toString.call(message.submissionTimeSeconds) : options.longs === Number ? new $util.LongBits(message.submissionTimeSeconds.low >>> 0, message.submissionTimeSeconds.high >>> 0).toNumber() : message.submissionTimeSeconds;
                    if (message.judgeId != null && message.hasOwnProperty("judgeId"))
                        object.judgeId = message.judgeId;
                    if (message.judgement != null && message.hasOwnProperty("judgement"))
                        object.judgement = options.enums === String ? $root.acmcsus.debugjudge.SubmissionJudgement[message.judgement] : message.judgement;
                    if (message.judgementMessage != null && message.hasOwnProperty("judgementMessage"))
                        object.judgementMessage = message.judgementMessage;
                    if (message.debuggingSubmission != null && message.hasOwnProperty("debuggingSubmission")) {
                        object.debuggingSubmission = $root.acmcsus.debugjudge.Submission.DebuggingSubmission.toObject(message.debuggingSubmission, options);
                        if (options.oneofs)
                            object.value = "debuggingSubmission";
                    }
                    if (message.algorithmicSubmission != null && message.hasOwnProperty("algorithmicSubmission")) {
                        object.algorithmicSubmission = $root.acmcsus.debugjudge.Submission.AlgorithmicSubmission.toObject(message.algorithmicSubmission, options);
                        if (options.oneofs)
                            object.value = "algorithmicSubmission";
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
    
                Submission.AlgorithmicSubmission = (function() {
    
                    /**
                     * Properties of an AlgorithmicSubmission.
                     * @memberof acmcsus.debugjudge.Submission
                     * @interface IAlgorithmicSubmission
                     * @property {string|null} [fileName] AlgorithmicSubmission fileName
                     * @property {string|null} [sourceCode] AlgorithmicSubmission sourceCode
                     * @property {string|null} [language] AlgorithmicSubmission language
                     * @property {acmcsus.debugjudge.IExecutionResult|null} [compileResult] AlgorithmicSubmission compileResult
                     * @property {Object.<string,acmcsus.debugjudge.IExecutionResult>|null} [caseResults] AlgorithmicSubmission caseResults
                     * @property {acmcsus.debugjudge.SubmissionJudgement|null} [preliminaryJudgement] AlgorithmicSubmission preliminaryJudgement
                     * @property {string|null} [preliminaryJudgementMessage] AlgorithmicSubmission preliminaryJudgementMessage
                     */
    
                    /**
                     * Constructs a new AlgorithmicSubmission.
                     * @memberof acmcsus.debugjudge.Submission
                     * @classdesc Represents an AlgorithmicSubmission.
                     * @implements IAlgorithmicSubmission
                     * @constructor
                     * @param {acmcsus.debugjudge.Submission.IAlgorithmicSubmission=} [properties] Properties to set
                     */
                    function AlgorithmicSubmission(properties) {
                        this.caseResults = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * AlgorithmicSubmission fileName.
                     * @member {string} fileName
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @instance
                     */
                    AlgorithmicSubmission.prototype.fileName = "";
    
                    /**
                     * AlgorithmicSubmission sourceCode.
                     * @member {string} sourceCode
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @instance
                     */
                    AlgorithmicSubmission.prototype.sourceCode = "";
    
                    /**
                     * AlgorithmicSubmission language.
                     * @member {string} language
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @instance
                     */
                    AlgorithmicSubmission.prototype.language = "";
    
                    /**
                     * AlgorithmicSubmission compileResult.
                     * @member {acmcsus.debugjudge.IExecutionResult|null|undefined} compileResult
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @instance
                     */
                    AlgorithmicSubmission.prototype.compileResult = null;
    
                    /**
                     * AlgorithmicSubmission caseResults.
                     * @member {Object.<string,acmcsus.debugjudge.IExecutionResult>} caseResults
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @instance
                     */
                    AlgorithmicSubmission.prototype.caseResults = $util.emptyObject;
    
                    /**
                     * AlgorithmicSubmission preliminaryJudgement.
                     * @member {acmcsus.debugjudge.SubmissionJudgement} preliminaryJudgement
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @instance
                     */
                    AlgorithmicSubmission.prototype.preliminaryJudgement = 0;
    
                    /**
                     * AlgorithmicSubmission preliminaryJudgementMessage.
                     * @member {string} preliminaryJudgementMessage
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @instance
                     */
                    AlgorithmicSubmission.prototype.preliminaryJudgementMessage = "";
    
                    /**
                     * Creates a new AlgorithmicSubmission instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @static
                     * @param {acmcsus.debugjudge.Submission.IAlgorithmicSubmission=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.Submission.AlgorithmicSubmission} AlgorithmicSubmission instance
                     */
                    AlgorithmicSubmission.create = function create(properties) {
                        return new AlgorithmicSubmission(properties);
                    };
    
                    /**
                     * Encodes the specified AlgorithmicSubmission message. Does not implicitly {@link acmcsus.debugjudge.Submission.AlgorithmicSubmission.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @static
                     * @param {acmcsus.debugjudge.Submission.IAlgorithmicSubmission} message AlgorithmicSubmission message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AlgorithmicSubmission.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.fileName != null && message.hasOwnProperty("fileName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileName);
                        if (message.sourceCode != null && message.hasOwnProperty("sourceCode"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceCode);
                        if (message.language != null && message.hasOwnProperty("language"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.language);
                        if (message.compileResult != null && message.hasOwnProperty("compileResult"))
                            $root.acmcsus.debugjudge.ExecutionResult.encode(message.compileResult, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.caseResults != null && message.hasOwnProperty("caseResults"))
                            for (var keys = Object.keys(message.caseResults), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                                $root.acmcsus.debugjudge.ExecutionResult.encode(message.caseResults[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.preliminaryJudgement != null && message.hasOwnProperty("preliminaryJudgement"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.preliminaryJudgement);
                        if (message.preliminaryJudgementMessage != null && message.hasOwnProperty("preliminaryJudgementMessage"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.preliminaryJudgementMessage);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified AlgorithmicSubmission message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Submission.AlgorithmicSubmission.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @static
                     * @param {acmcsus.debugjudge.Submission.IAlgorithmicSubmission} message AlgorithmicSubmission message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AlgorithmicSubmission.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an AlgorithmicSubmission message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.Submission.AlgorithmicSubmission} AlgorithmicSubmission
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AlgorithmicSubmission.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Submission.AlgorithmicSubmission(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.fileName = reader.string();
                                break;
                            case 2:
                                message.sourceCode = reader.string();
                                break;
                            case 3:
                                message.language = reader.string();
                                break;
                            case 4:
                                message.compileResult = $root.acmcsus.debugjudge.ExecutionResult.decode(reader, reader.uint32());
                                break;
                            case 5:
                                reader.skip().pos++;
                                if (message.caseResults === $util.emptyObject)
                                    message.caseResults = {};
                                key = reader.int32();
                                reader.pos++;
                                message.caseResults[key] = $root.acmcsus.debugjudge.ExecutionResult.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.preliminaryJudgement = reader.int32();
                                break;
                            case 7:
                                message.preliminaryJudgementMessage = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an AlgorithmicSubmission message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.Submission.AlgorithmicSubmission} AlgorithmicSubmission
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AlgorithmicSubmission.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an AlgorithmicSubmission message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AlgorithmicSubmission.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.fileName != null && message.hasOwnProperty("fileName"))
                            if (!$util.isString(message.fileName))
                                return "fileName: string expected";
                        if (message.sourceCode != null && message.hasOwnProperty("sourceCode"))
                            if (!$util.isString(message.sourceCode))
                                return "sourceCode: string expected";
                        if (message.language != null && message.hasOwnProperty("language"))
                            if (!$util.isString(message.language))
                                return "language: string expected";
                        if (message.compileResult != null && message.hasOwnProperty("compileResult")) {
                            var error = $root.acmcsus.debugjudge.ExecutionResult.verify(message.compileResult);
                            if (error)
                                return "compileResult." + error;
                        }
                        if (message.caseResults != null && message.hasOwnProperty("caseResults")) {
                            if (!$util.isObject(message.caseResults))
                                return "caseResults: object expected";
                            var key = Object.keys(message.caseResults);
                            for (var i = 0; i < key.length; ++i) {
                                if (!$util.key32Re.test(key[i]))
                                    return "caseResults: integer key{k:int32} expected";
                                {
                                    var error = $root.acmcsus.debugjudge.ExecutionResult.verify(message.caseResults[key[i]]);
                                    if (error)
                                        return "caseResults." + error;
                                }
                            }
                        }
                        if (message.preliminaryJudgement != null && message.hasOwnProperty("preliminaryJudgement"))
                            switch (message.preliminaryJudgement) {
                            default:
                                return "preliminaryJudgement: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.preliminaryJudgementMessage != null && message.hasOwnProperty("preliminaryJudgementMessage"))
                            if (!$util.isString(message.preliminaryJudgementMessage))
                                return "preliminaryJudgementMessage: string expected";
                        return null;
                    };
    
                    /**
                     * Creates an AlgorithmicSubmission message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.Submission.AlgorithmicSubmission} AlgorithmicSubmission
                     */
                    AlgorithmicSubmission.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.Submission.AlgorithmicSubmission)
                            return object;
                        var message = new $root.acmcsus.debugjudge.Submission.AlgorithmicSubmission();
                        if (object.fileName != null)
                            message.fileName = String(object.fileName);
                        if (object.sourceCode != null)
                            message.sourceCode = String(object.sourceCode);
                        if (object.language != null)
                            message.language = String(object.language);
                        if (object.compileResult != null) {
                            if (typeof object.compileResult !== "object")
                                throw TypeError(".acmcsus.debugjudge.Submission.AlgorithmicSubmission.compileResult: object expected");
                            message.compileResult = $root.acmcsus.debugjudge.ExecutionResult.fromObject(object.compileResult);
                        }
                        if (object.caseResults) {
                            if (typeof object.caseResults !== "object")
                                throw TypeError(".acmcsus.debugjudge.Submission.AlgorithmicSubmission.caseResults: object expected");
                            message.caseResults = {};
                            for (var keys = Object.keys(object.caseResults), i = 0; i < keys.length; ++i) {
                                if (typeof object.caseResults[keys[i]] !== "object")
                                    throw TypeError(".acmcsus.debugjudge.Submission.AlgorithmicSubmission.caseResults: object expected");
                                message.caseResults[keys[i]] = $root.acmcsus.debugjudge.ExecutionResult.fromObject(object.caseResults[keys[i]]);
                            }
                        }
                        switch (object.preliminaryJudgement) {
                        case "JUDGEMENT_UNKNOWN":
                        case 0:
                            message.preliminaryJudgement = 0;
                            break;
                        case "JUDGEMENT_SUCCESS":
                        case 1:
                            message.preliminaryJudgement = 1;
                            break;
                        case "JUDGEMENT_FAILURE":
                        case 2:
                            message.preliminaryJudgement = 2;
                            break;
                        }
                        if (object.preliminaryJudgementMessage != null)
                            message.preliminaryJudgementMessage = String(object.preliminaryJudgementMessage);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an AlgorithmicSubmission message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @static
                     * @param {acmcsus.debugjudge.Submission.AlgorithmicSubmission} message AlgorithmicSubmission
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AlgorithmicSubmission.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.caseResults = {};
                        if (options.defaults) {
                            object.fileName = "";
                            object.sourceCode = "";
                            object.language = "";
                            object.compileResult = null;
                            object.preliminaryJudgement = options.enums === String ? "JUDGEMENT_UNKNOWN" : 0;
                            object.preliminaryJudgementMessage = "";
                        }
                        if (message.fileName != null && message.hasOwnProperty("fileName"))
                            object.fileName = message.fileName;
                        if (message.sourceCode != null && message.hasOwnProperty("sourceCode"))
                            object.sourceCode = message.sourceCode;
                        if (message.language != null && message.hasOwnProperty("language"))
                            object.language = message.language;
                        if (message.compileResult != null && message.hasOwnProperty("compileResult"))
                            object.compileResult = $root.acmcsus.debugjudge.ExecutionResult.toObject(message.compileResult, options);
                        var keys2;
                        if (message.caseResults && (keys2 = Object.keys(message.caseResults)).length) {
                            object.caseResults = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.caseResults[keys2[j]] = $root.acmcsus.debugjudge.ExecutionResult.toObject(message.caseResults[keys2[j]], options);
                        }
                        if (message.preliminaryJudgement != null && message.hasOwnProperty("preliminaryJudgement"))
                            object.preliminaryJudgement = options.enums === String ? $root.acmcsus.debugjudge.SubmissionJudgement[message.preliminaryJudgement] : message.preliminaryJudgement;
                        if (message.preliminaryJudgementMessage != null && message.hasOwnProperty("preliminaryJudgementMessage"))
                            object.preliminaryJudgementMessage = message.preliminaryJudgementMessage;
                        return object;
                    };
    
                    /**
                     * Converts this AlgorithmicSubmission to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.Submission.AlgorithmicSubmission
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AlgorithmicSubmission.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return AlgorithmicSubmission;
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
                 * @property {number|null} [id] Profile id
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
                 * @member {number} id
                 * @memberof acmcsus.debugjudge.Profile
                 * @instance
                 */
                Profile.prototype.id = 0;
    
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
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
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
                            message.id = reader.int32();
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
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
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
                        case 3:
                        case 4:
                        case 5:
                        case 6:
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
                        message.id = object.id | 0;
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
                    case "AUTO_JUDGE":
                    case 3:
                        message.profileType = 3;
                        break;
                    case "REGISTRAR":
                    case 4:
                        message.profileType = 4;
                        break;
                    case "BALLOON_RUNNER":
                    case 5:
                        message.profileType = 5;
                        break;
                    case "RESOLVER_VIEWER":
                    case 6:
                        message.profileType = 6;
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
                        object.id = 0;
                        object.name = "";
                        object.profileType = options.enums === String ? "TEAM" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
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
                 * @property {number} AUTO_JUDGE=3 AUTO_JUDGE value
                 * @property {number} REGISTRAR=4 REGISTRAR value
                 * @property {number} BALLOON_RUNNER=5 BALLOON_RUNNER value
                 * @property {number} RESOLVER_VIEWER=6 RESOLVER_VIEWER value
                 */
                Profile.ProfileType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "TEAM"] = 0;
                    values[valuesById[1] = "JUDGE"] = 1;
                    values[valuesById[2] = "ADMIN"] = 2;
                    values[valuesById[3] = "AUTO_JUDGE"] = 3;
                    values[valuesById[4] = "REGISTRAR"] = 4;
                    values[valuesById[5] = "BALLOON_RUNNER"] = 5;
                    values[valuesById[6] = "RESOLVER_VIEWER"] = 6;
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
                 * @property {number|null} [id] Problem id
                 * @property {string|null} [title] Problem title
                 * @property {number|null} [orderIndex] Problem orderIndex
                 * @property {string|null} [color] Problem color
                 * @property {string|null} [descriptionText] Problem descriptionText
                 * @property {string|null} [descriptionFile] Problem descriptionFile
                 * @property {acmcsus.debugjudge.Problem.IDebuggingProblemValue|null} [debuggingProblem] Problem debuggingProblem
                 * @property {acmcsus.debugjudge.Problem.IAlgorithmicProblemValue|null} [algorithmicProblem] Problem algorithmicProblem
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
                 * @member {number} id
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Problem.prototype.id = 0;
    
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
    
                /**
                 * Problem algorithmicProblem.
                 * @member {acmcsus.debugjudge.Problem.IAlgorithmicProblemValue|null|undefined} algorithmicProblem
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Problem.prototype.algorithmicProblem = null;
    
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
                 * @member {"debuggingProblem"|"algorithmicProblem"|undefined} value
                 * @memberof acmcsus.debugjudge.Problem
                 * @instance
                 */
                Object.defineProperty(Problem.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["debuggingProblem", "algorithmicProblem"]),
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
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
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
                    if (message.algorithmicProblem != null && message.hasOwnProperty("algorithmicProblem"))
                        $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.encode(message.algorithmicProblem, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
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
                            message.id = reader.int32();
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
                        case 10:
                            message.algorithmicProblem = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.decode(reader, reader.uint32());
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
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
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
                    if (message.algorithmicProblem != null && message.hasOwnProperty("algorithmicProblem")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.verify(message.algorithmicProblem);
                            if (error)
                                return "algorithmicProblem." + error;
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
                        message.id = object.id | 0;
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
                    if (object.algorithmicProblem != null) {
                        if (typeof object.algorithmicProblem !== "object")
                            throw TypeError(".acmcsus.debugjudge.Problem.algorithmicProblem: object expected");
                        message.algorithmicProblem = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.fromObject(object.algorithmicProblem);
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
                        object.id = 0;
                        object.title = "";
                        object.orderIndex = 0;
                        object.color = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
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
                    if (message.algorithmicProblem != null && message.hasOwnProperty("algorithmicProblem")) {
                        object.algorithmicProblem = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.toObject(message.algorithmicProblem, options);
                        if (options.oneofs)
                            object.value = "algorithmicProblem";
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
    
                Problem.AlgorithmicProblemValue = (function() {
    
                    /**
                     * Properties of an AlgorithmicProblemValue.
                     * @memberof acmcsus.debugjudge.Problem
                     * @interface IAlgorithmicProblemValue
                     * @property {string|null} [testCaseDirectory] AlgorithmicProblemValue testCaseDirectory
                     * @property {number|null} [timeLimitSeconds] AlgorithmicProblemValue timeLimitSeconds
                     * @property {number|null} [memoryLimitMegabytes] AlgorithmicProblemValue memoryLimitMegabytes
                     * @property {string|null} [validatorProgram] AlgorithmicProblemValue validatorProgram
                     * @property {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner|null} [validatorScanner] AlgorithmicProblemValue validatorScanner
                     * @property {Array.<acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase>|null} [testCase] AlgorithmicProblemValue testCase
                     */
    
                    /**
                     * Constructs a new AlgorithmicProblemValue.
                     * @memberof acmcsus.debugjudge.Problem
                     * @classdesc Represents an AlgorithmicProblemValue.
                     * @implements IAlgorithmicProblemValue
                     * @constructor
                     * @param {acmcsus.debugjudge.Problem.IAlgorithmicProblemValue=} [properties] Properties to set
                     */
                    function AlgorithmicProblemValue(properties) {
                        this.testCase = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * AlgorithmicProblemValue testCaseDirectory.
                     * @member {string} testCaseDirectory
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @instance
                     */
                    AlgorithmicProblemValue.prototype.testCaseDirectory = "";
    
                    /**
                     * AlgorithmicProblemValue timeLimitSeconds.
                     * @member {number} timeLimitSeconds
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @instance
                     */
                    AlgorithmicProblemValue.prototype.timeLimitSeconds = 0;
    
                    /**
                     * AlgorithmicProblemValue memoryLimitMegabytes.
                     * @member {number} memoryLimitMegabytes
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @instance
                     */
                    AlgorithmicProblemValue.prototype.memoryLimitMegabytes = 0;
    
                    /**
                     * AlgorithmicProblemValue validatorProgram.
                     * @member {string} validatorProgram
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @instance
                     */
                    AlgorithmicProblemValue.prototype.validatorProgram = "";
    
                    /**
                     * AlgorithmicProblemValue validatorScanner.
                     * @member {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner|null|undefined} validatorScanner
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @instance
                     */
                    AlgorithmicProblemValue.prototype.validatorScanner = null;
    
                    /**
                     * AlgorithmicProblemValue testCase.
                     * @member {Array.<acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase>} testCase
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @instance
                     */
                    AlgorithmicProblemValue.prototype.testCase = $util.emptyArray;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * AlgorithmicProblemValue validator.
                     * @member {"validatorProgram"|"validatorScanner"|undefined} validator
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @instance
                     */
                    Object.defineProperty(AlgorithmicProblemValue.prototype, "validator", {
                        get: $util.oneOfGetter($oneOfFields = ["validatorProgram", "validatorScanner"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new AlgorithmicProblemValue instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @static
                     * @param {acmcsus.debugjudge.Problem.IAlgorithmicProblemValue=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue} AlgorithmicProblemValue instance
                     */
                    AlgorithmicProblemValue.create = function create(properties) {
                        return new AlgorithmicProblemValue(properties);
                    };
    
                    /**
                     * Encodes the specified AlgorithmicProblemValue message. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @static
                     * @param {acmcsus.debugjudge.Problem.IAlgorithmicProblemValue} message AlgorithmicProblemValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AlgorithmicProblemValue.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.testCaseDirectory != null && message.hasOwnProperty("testCaseDirectory"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.testCaseDirectory);
                        if (message.timeLimitSeconds != null && message.hasOwnProperty("timeLimitSeconds"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.timeLimitSeconds);
                        if (message.memoryLimitMegabytes != null && message.hasOwnProperty("memoryLimitMegabytes"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.memoryLimitMegabytes);
                        if (message.validatorProgram != null && message.hasOwnProperty("validatorProgram"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.validatorProgram);
                        if (message.validatorScanner != null && message.hasOwnProperty("validatorScanner"))
                            $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner.encode(message.validatorScanner, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.testCase != null && message.testCase.length)
                            for (var i = 0; i < message.testCase.length; ++i)
                                $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.encode(message.testCase[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified AlgorithmicProblemValue message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @static
                     * @param {acmcsus.debugjudge.Problem.IAlgorithmicProblemValue} message AlgorithmicProblemValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AlgorithmicProblemValue.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an AlgorithmicProblemValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue} AlgorithmicProblemValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AlgorithmicProblemValue.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 2:
                                message.testCaseDirectory = reader.string();
                                break;
                            case 3:
                                message.timeLimitSeconds = reader.int32();
                                break;
                            case 4:
                                message.memoryLimitMegabytes = reader.int32();
                                break;
                            case 5:
                                message.validatorProgram = reader.string();
                                break;
                            case 6:
                                message.validatorScanner = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner.decode(reader, reader.uint32());
                                break;
                            case 7:
                                if (!(message.testCase && message.testCase.length))
                                    message.testCase = [];
                                message.testCase.push($root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an AlgorithmicProblemValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue} AlgorithmicProblemValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AlgorithmicProblemValue.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an AlgorithmicProblemValue message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AlgorithmicProblemValue.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.testCaseDirectory != null && message.hasOwnProperty("testCaseDirectory"))
                            if (!$util.isString(message.testCaseDirectory))
                                return "testCaseDirectory: string expected";
                        if (message.timeLimitSeconds != null && message.hasOwnProperty("timeLimitSeconds"))
                            if (!$util.isInteger(message.timeLimitSeconds))
                                return "timeLimitSeconds: integer expected";
                        if (message.memoryLimitMegabytes != null && message.hasOwnProperty("memoryLimitMegabytes"))
                            if (!$util.isInteger(message.memoryLimitMegabytes))
                                return "memoryLimitMegabytes: integer expected";
                        if (message.validatorProgram != null && message.hasOwnProperty("validatorProgram")) {
                            properties.validator = 1;
                            if (!$util.isString(message.validatorProgram))
                                return "validatorProgram: string expected";
                        }
                        if (message.validatorScanner != null && message.hasOwnProperty("validatorScanner")) {
                            if (properties.validator === 1)
                                return "validator: multiple values";
                            properties.validator = 1;
                            {
                                var error = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner.verify(message.validatorScanner);
                                if (error)
                                    return "validatorScanner." + error;
                            }
                        }
                        if (message.testCase != null && message.hasOwnProperty("testCase")) {
                            if (!Array.isArray(message.testCase))
                                return "testCase: array expected";
                            for (var i = 0; i < message.testCase.length; ++i) {
                                var error = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.verify(message.testCase[i]);
                                if (error)
                                    return "testCase." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates an AlgorithmicProblemValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue} AlgorithmicProblemValue
                     */
                    AlgorithmicProblemValue.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue)
                            return object;
                        var message = new $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue();
                        if (object.testCaseDirectory != null)
                            message.testCaseDirectory = String(object.testCaseDirectory);
                        if (object.timeLimitSeconds != null)
                            message.timeLimitSeconds = object.timeLimitSeconds | 0;
                        if (object.memoryLimitMegabytes != null)
                            message.memoryLimitMegabytes = object.memoryLimitMegabytes | 0;
                        if (object.validatorProgram != null)
                            message.validatorProgram = String(object.validatorProgram);
                        if (object.validatorScanner != null) {
                            if (typeof object.validatorScanner !== "object")
                                throw TypeError(".acmcsus.debugjudge.Problem.AlgorithmicProblemValue.validatorScanner: object expected");
                            message.validatorScanner = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner.fromObject(object.validatorScanner);
                        }
                        if (object.testCase) {
                            if (!Array.isArray(object.testCase))
                                throw TypeError(".acmcsus.debugjudge.Problem.AlgorithmicProblemValue.testCase: array expected");
                            message.testCase = [];
                            for (var i = 0; i < object.testCase.length; ++i) {
                                if (typeof object.testCase[i] !== "object")
                                    throw TypeError(".acmcsus.debugjudge.Problem.AlgorithmicProblemValue.testCase: object expected");
                                message.testCase[i] = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.fromObject(object.testCase[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an AlgorithmicProblemValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @static
                     * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue} message AlgorithmicProblemValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AlgorithmicProblemValue.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.testCase = [];
                        if (options.defaults) {
                            object.testCaseDirectory = "";
                            object.timeLimitSeconds = 0;
                            object.memoryLimitMegabytes = 0;
                        }
                        if (message.testCaseDirectory != null && message.hasOwnProperty("testCaseDirectory"))
                            object.testCaseDirectory = message.testCaseDirectory;
                        if (message.timeLimitSeconds != null && message.hasOwnProperty("timeLimitSeconds"))
                            object.timeLimitSeconds = message.timeLimitSeconds;
                        if (message.memoryLimitMegabytes != null && message.hasOwnProperty("memoryLimitMegabytes"))
                            object.memoryLimitMegabytes = message.memoryLimitMegabytes;
                        if (message.validatorProgram != null && message.hasOwnProperty("validatorProgram")) {
                            object.validatorProgram = message.validatorProgram;
                            if (options.oneofs)
                                object.validator = "validatorProgram";
                        }
                        if (message.validatorScanner != null && message.hasOwnProperty("validatorScanner")) {
                            object.validatorScanner = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner.toObject(message.validatorScanner, options);
                            if (options.oneofs)
                                object.validator = "validatorScanner";
                        }
                        if (message.testCase && message.testCase.length) {
                            object.testCase = [];
                            for (var j = 0; j < message.testCase.length; ++j)
                                object.testCase[j] = $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.toObject(message.testCase[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this AlgorithmicProblemValue to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AlgorithmicProblemValue.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    AlgorithmicProblemValue.ValidatorScanner = (function() {
    
                        /**
                         * Properties of a ValidatorScanner.
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                         * @interface IValidatorScanner
                         * @property {number|null} [floatPrecision] ValidatorScanner floatPrecision
                         * @property {boolean|null} [whitespaceSensitive] ValidatorScanner whitespaceSensitive
                         * @property {boolean|null} [trailingNewlineSensitive] ValidatorScanner trailingNewlineSensitive
                         */
    
                        /**
                         * Constructs a new ValidatorScanner.
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                         * @classdesc Represents a ValidatorScanner.
                         * @implements IValidatorScanner
                         * @constructor
                         * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner=} [properties] Properties to set
                         */
                        function ValidatorScanner(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ValidatorScanner floatPrecision.
                         * @member {number} floatPrecision
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @instance
                         */
                        ValidatorScanner.prototype.floatPrecision = 0;
    
                        /**
                         * ValidatorScanner whitespaceSensitive.
                         * @member {boolean} whitespaceSensitive
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @instance
                         */
                        ValidatorScanner.prototype.whitespaceSensitive = false;
    
                        /**
                         * ValidatorScanner trailingNewlineSensitive.
                         * @member {boolean} trailingNewlineSensitive
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @instance
                         */
                        ValidatorScanner.prototype.trailingNewlineSensitive = false;
    
                        /**
                         * Creates a new ValidatorScanner instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @static
                         * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner} ValidatorScanner instance
                         */
                        ValidatorScanner.create = function create(properties) {
                            return new ValidatorScanner(properties);
                        };
    
                        /**
                         * Encodes the specified ValidatorScanner message. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @static
                         * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner} message ValidatorScanner message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ValidatorScanner.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.floatPrecision != null && message.hasOwnProperty("floatPrecision"))
                                writer.uint32(/* id 1, wireType 5 =*/13).float(message.floatPrecision);
                            if (message.whitespaceSensitive != null && message.hasOwnProperty("whitespaceSensitive"))
                                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.whitespaceSensitive);
                            if (message.trailingNewlineSensitive != null && message.hasOwnProperty("trailingNewlineSensitive"))
                                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.trailingNewlineSensitive);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ValidatorScanner message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @static
                         * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IValidatorScanner} message ValidatorScanner message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ValidatorScanner.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ValidatorScanner message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner} ValidatorScanner
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ValidatorScanner.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.floatPrecision = reader.float();
                                    break;
                                case 2:
                                    message.whitespaceSensitive = reader.bool();
                                    break;
                                case 3:
                                    message.trailingNewlineSensitive = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ValidatorScanner message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner} ValidatorScanner
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ValidatorScanner.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ValidatorScanner message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ValidatorScanner.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.floatPrecision != null && message.hasOwnProperty("floatPrecision"))
                                if (typeof message.floatPrecision !== "number")
                                    return "floatPrecision: number expected";
                            if (message.whitespaceSensitive != null && message.hasOwnProperty("whitespaceSensitive"))
                                if (typeof message.whitespaceSensitive !== "boolean")
                                    return "whitespaceSensitive: boolean expected";
                            if (message.trailingNewlineSensitive != null && message.hasOwnProperty("trailingNewlineSensitive"))
                                if (typeof message.trailingNewlineSensitive !== "boolean")
                                    return "trailingNewlineSensitive: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates a ValidatorScanner message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner} ValidatorScanner
                         */
                        ValidatorScanner.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner)
                                return object;
                            var message = new $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner();
                            if (object.floatPrecision != null)
                                message.floatPrecision = Number(object.floatPrecision);
                            if (object.whitespaceSensitive != null)
                                message.whitespaceSensitive = Boolean(object.whitespaceSensitive);
                            if (object.trailingNewlineSensitive != null)
                                message.trailingNewlineSensitive = Boolean(object.trailingNewlineSensitive);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ValidatorScanner message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @static
                         * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner} message ValidatorScanner
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ValidatorScanner.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.floatPrecision = 0;
                                object.whitespaceSensitive = false;
                                object.trailingNewlineSensitive = false;
                            }
                            if (message.floatPrecision != null && message.hasOwnProperty("floatPrecision"))
                                object.floatPrecision = options.json && !isFinite(message.floatPrecision) ? String(message.floatPrecision) : message.floatPrecision;
                            if (message.whitespaceSensitive != null && message.hasOwnProperty("whitespaceSensitive"))
                                object.whitespaceSensitive = message.whitespaceSensitive;
                            if (message.trailingNewlineSensitive != null && message.hasOwnProperty("trailingNewlineSensitive"))
                                object.trailingNewlineSensitive = message.trailingNewlineSensitive;
                            return object;
                        };
    
                        /**
                         * Converts this ValidatorScanner to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.ValidatorScanner
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ValidatorScanner.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ValidatorScanner;
                    })();
    
                    AlgorithmicProblemValue.AlgorithmicTestCase = (function() {
    
                        /**
                         * Properties of an AlgorithmicTestCase.
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                         * @interface IAlgorithmicTestCase
                         * @property {string|null} [input] AlgorithmicTestCase input
                         * @property {string|null} [expected] AlgorithmicTestCase expected
                         */
    
                        /**
                         * Constructs a new AlgorithmicTestCase.
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue
                         * @classdesc Represents an AlgorithmicTestCase.
                         * @implements IAlgorithmicTestCase
                         * @constructor
                         * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase=} [properties] Properties to set
                         */
                        function AlgorithmicTestCase(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AlgorithmicTestCase input.
                         * @member {string} input
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @instance
                         */
                        AlgorithmicTestCase.prototype.input = "";
    
                        /**
                         * AlgorithmicTestCase expected.
                         * @member {string} expected
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @instance
                         */
                        AlgorithmicTestCase.prototype.expected = "";
    
                        /**
                         * Creates a new AlgorithmicTestCase instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @static
                         * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase} AlgorithmicTestCase instance
                         */
                        AlgorithmicTestCase.create = function create(properties) {
                            return new AlgorithmicTestCase(properties);
                        };
    
                        /**
                         * Encodes the specified AlgorithmicTestCase message. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @static
                         * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase} message AlgorithmicTestCase message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AlgorithmicTestCase.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.input != null && message.hasOwnProperty("input"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.input);
                            if (message.expected != null && message.hasOwnProperty("expected"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.expected);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AlgorithmicTestCase message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @static
                         * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.IAlgorithmicTestCase} message AlgorithmicTestCase message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AlgorithmicTestCase.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AlgorithmicTestCase message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase} AlgorithmicTestCase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AlgorithmicTestCase.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.input = reader.string();
                                    break;
                                case 2:
                                    message.expected = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an AlgorithmicTestCase message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase} AlgorithmicTestCase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AlgorithmicTestCase.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AlgorithmicTestCase message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AlgorithmicTestCase.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.input != null && message.hasOwnProperty("input"))
                                if (!$util.isString(message.input))
                                    return "input: string expected";
                            if (message.expected != null && message.hasOwnProperty("expected"))
                                if (!$util.isString(message.expected))
                                    return "expected: string expected";
                            return null;
                        };
    
                        /**
                         * Creates an AlgorithmicTestCase message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase} AlgorithmicTestCase
                         */
                        AlgorithmicTestCase.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase)
                                return object;
                            var message = new $root.acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase();
                            if (object.input != null)
                                message.input = String(object.input);
                            if (object.expected != null)
                                message.expected = String(object.expected);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an AlgorithmicTestCase message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @static
                         * @param {acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase} message AlgorithmicTestCase
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AlgorithmicTestCase.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.input = "";
                                object.expected = "";
                            }
                            if (message.input != null && message.hasOwnProperty("input"))
                                object.input = message.input;
                            if (message.expected != null && message.hasOwnProperty("expected"))
                                object.expected = message.expected;
                            return object;
                        };
    
                        /**
                         * Converts this AlgorithmicTestCase to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.Problem.AlgorithmicProblemValue.AlgorithmicTestCase
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AlgorithmicTestCase.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return AlgorithmicTestCase;
                    })();
    
                    return AlgorithmicProblemValue;
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
    
            debugjudge.Clarification = (function() {
    
                /**
                 * Properties of a Clarification.
                 * @memberof acmcsus.debugjudge
                 * @interface IClarification
                 * @property {string|null} [id] Clarification id
                 * @property {number|null} [teamId] Clarification teamId
                 * @property {number|null} [problemName] Clarification problemName
                 * @property {boolean|null} ["public"] Clarification public
                 * @property {string|null} [message] Clarification message
                 * @property {string|null} [response] Clarification response
                 */
    
                /**
                 * Constructs a new Clarification.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a Clarification.
                 * @implements IClarification
                 * @constructor
                 * @param {acmcsus.debugjudge.IClarification=} [properties] Properties to set
                 */
                function Clarification(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Clarification id.
                 * @member {string} id
                 * @memberof acmcsus.debugjudge.Clarification
                 * @instance
                 */
                Clarification.prototype.id = "";
    
                /**
                 * Clarification teamId.
                 * @member {number} teamId
                 * @memberof acmcsus.debugjudge.Clarification
                 * @instance
                 */
                Clarification.prototype.teamId = 0;
    
                /**
                 * Clarification problemName.
                 * @member {number} problemName
                 * @memberof acmcsus.debugjudge.Clarification
                 * @instance
                 */
                Clarification.prototype.problemName = 0;
    
                /**
                 * Clarification public.
                 * @member {boolean} public
                 * @memberof acmcsus.debugjudge.Clarification
                 * @instance
                 */
                Clarification.prototype["public"] = false;
    
                /**
                 * Clarification message.
                 * @member {string} message
                 * @memberof acmcsus.debugjudge.Clarification
                 * @instance
                 */
                Clarification.prototype.message = "";
    
                /**
                 * Clarification response.
                 * @member {string} response
                 * @memberof acmcsus.debugjudge.Clarification
                 * @instance
                 */
                Clarification.prototype.response = "";
    
                /**
                 * Creates a new Clarification instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.Clarification
                 * @static
                 * @param {acmcsus.debugjudge.IClarification=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.Clarification} Clarification instance
                 */
                Clarification.create = function create(properties) {
                    return new Clarification(properties);
                };
    
                /**
                 * Encodes the specified Clarification message. Does not implicitly {@link acmcsus.debugjudge.Clarification.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.Clarification
                 * @static
                 * @param {acmcsus.debugjudge.IClarification} message Clarification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Clarification.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.teamId);
                    if (message.problemName != null && message.hasOwnProperty("problemName"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.problemName);
                    if (message["public"] != null && message.hasOwnProperty("public"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message["public"]);
                    if (message.message != null && message.hasOwnProperty("message"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.message);
                    if (message.response != null && message.hasOwnProperty("response"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.response);
                    return writer;
                };
    
                /**
                 * Encodes the specified Clarification message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Clarification.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.Clarification
                 * @static
                 * @param {acmcsus.debugjudge.IClarification} message Clarification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Clarification.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Clarification message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.Clarification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.Clarification} Clarification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Clarification.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Clarification();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.teamId = reader.int32();
                            break;
                        case 3:
                            message.problemName = reader.int32();
                            break;
                        case 4:
                            message["public"] = reader.bool();
                            break;
                        case 5:
                            message.message = reader.string();
                            break;
                        case 6:
                            message.response = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Clarification message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.Clarification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.Clarification} Clarification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Clarification.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Clarification message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.Clarification
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Clarification.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId))
                            return "teamId: integer expected";
                    if (message.problemName != null && message.hasOwnProperty("problemName"))
                        if (!$util.isInteger(message.problemName))
                            return "problemName: integer expected";
                    if (message["public"] != null && message.hasOwnProperty("public"))
                        if (typeof message["public"] !== "boolean")
                            return "public: boolean expected";
                    if (message.message != null && message.hasOwnProperty("message"))
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    if (message.response != null && message.hasOwnProperty("response"))
                        if (!$util.isString(message.response))
                            return "response: string expected";
                    return null;
                };
    
                /**
                 * Creates a Clarification message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.Clarification
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.Clarification} Clarification
                 */
                Clarification.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.Clarification)
                        return object;
                    var message = new $root.acmcsus.debugjudge.Clarification();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.teamId != null)
                        message.teamId = object.teamId | 0;
                    if (object.problemName != null)
                        message.problemName = object.problemName | 0;
                    if (object["public"] != null)
                        message["public"] = Boolean(object["public"]);
                    if (object.message != null)
                        message.message = String(object.message);
                    if (object.response != null)
                        message.response = String(object.response);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Clarification message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.Clarification
                 * @static
                 * @param {acmcsus.debugjudge.Clarification} message Clarification
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Clarification.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.teamId = 0;
                        object.problemName = 0;
                        object["public"] = false;
                        object.message = "";
                        object.response = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        object.teamId = message.teamId;
                    if (message.problemName != null && message.hasOwnProperty("problemName"))
                        object.problemName = message.problemName;
                    if (message["public"] != null && message.hasOwnProperty("public"))
                        object["public"] = message["public"];
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = message.message;
                    if (message.response != null && message.hasOwnProperty("response"))
                        object.response = message.response;
                    return object;
                };
    
                /**
                 * Converts this Clarification to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.Clarification
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Clarification.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Clarification;
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
                     * @property {number|null} [teamId] ScoreboardRow teamId
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
                     * ScoreboardRow teamId.
                     * @member {number} teamId
                     * @memberof acmcsus.debugjudge.Scoreboard.ScoreboardRow
                     * @instance
                     */
                    ScoreboardRow.prototype.teamId = 0;
    
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
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.problemAttempts[keys[i]]).ldelim();
                        if (message.problemCompletions != null && message.hasOwnProperty("problemCompletions"))
                            for (var keys = Object.keys(message.problemCompletions), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.problemCompletions[keys[i]]).ldelim();
                        if (message.place != null && message.hasOwnProperty("place"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.place);
                        if (message.score != null && message.hasOwnProperty("score"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.score);
                        if (message.penalty != null && message.hasOwnProperty("penalty"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.penalty);
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.teamId);
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
                            case 7:
                                message.teamId = reader.int32();
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.problemAttempts === $util.emptyObject)
                                    message.problemAttempts = {};
                                key = reader.int32();
                                reader.pos++;
                                message.problemAttempts[key] = reader.int32();
                                break;
                            case 3:
                                reader.skip().pos++;
                                if (message.problemCompletions === $util.emptyObject)
                                    message.problemCompletions = {};
                                key = reader.int32();
                                reader.pos++;
                                message.problemCompletions[key] = reader.bool();
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
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId))
                                return "teamId: integer expected";
                        if (message.problemAttempts != null && message.hasOwnProperty("problemAttempts")) {
                            if (!$util.isObject(message.problemAttempts))
                                return "problemAttempts: object expected";
                            var key = Object.keys(message.problemAttempts);
                            for (var i = 0; i < key.length; ++i) {
                                if (!$util.key32Re.test(key[i]))
                                    return "problemAttempts: integer key{k:int32} expected";
                                if (!$util.isInteger(message.problemAttempts[key[i]]))
                                    return "problemAttempts: integer{k:int32} expected";
                            }
                        }
                        if (message.problemCompletions != null && message.hasOwnProperty("problemCompletions")) {
                            if (!$util.isObject(message.problemCompletions))
                                return "problemCompletions: object expected";
                            var key = Object.keys(message.problemCompletions);
                            for (var i = 0; i < key.length; ++i) {
                                if (!$util.key32Re.test(key[i]))
                                    return "problemCompletions: integer key{k:int32} expected";
                                if (typeof message.problemCompletions[key[i]] !== "boolean")
                                    return "problemCompletions: boolean{k:int32} expected";
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
                        if (object.teamId != null)
                            message.teamId = object.teamId | 0;
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
                            object.teamId = 0;
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
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            object.teamId = message.teamId;
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
    
            debugjudge.FreezeState = (function() {
    
                /**
                 * Properties of a FreezeState.
                 * @memberof acmcsus.debugjudge
                 * @interface IFreezeState
                 * @property {acmcsus.debugjudge.IScoreboard|null} [scoreboard] FreezeState scoreboard
                 * @property {Array.<acmcsus.debugjudge.ISubmission>|null} [submission] FreezeState submission
                 */
    
                /**
                 * Constructs a new FreezeState.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a FreezeState.
                 * @implements IFreezeState
                 * @constructor
                 * @param {acmcsus.debugjudge.IFreezeState=} [properties] Properties to set
                 */
                function FreezeState(properties) {
                    this.submission = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FreezeState scoreboard.
                 * @member {acmcsus.debugjudge.IScoreboard|null|undefined} scoreboard
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @instance
                 */
                FreezeState.prototype.scoreboard = null;
    
                /**
                 * FreezeState submission.
                 * @member {Array.<acmcsus.debugjudge.ISubmission>} submission
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @instance
                 */
                FreezeState.prototype.submission = $util.emptyArray;
    
                /**
                 * Creates a new FreezeState instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @static
                 * @param {acmcsus.debugjudge.IFreezeState=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.FreezeState} FreezeState instance
                 */
                FreezeState.create = function create(properties) {
                    return new FreezeState(properties);
                };
    
                /**
                 * Encodes the specified FreezeState message. Does not implicitly {@link acmcsus.debugjudge.FreezeState.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @static
                 * @param {acmcsus.debugjudge.IFreezeState} message FreezeState message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FreezeState.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.scoreboard != null && message.hasOwnProperty("scoreboard"))
                        $root.acmcsus.debugjudge.Scoreboard.encode(message.scoreboard, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.submission != null && message.submission.length)
                        for (var i = 0; i < message.submission.length; ++i)
                            $root.acmcsus.debugjudge.Submission.encode(message.submission[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FreezeState message, length delimited. Does not implicitly {@link acmcsus.debugjudge.FreezeState.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @static
                 * @param {acmcsus.debugjudge.IFreezeState} message FreezeState message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FreezeState.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FreezeState message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.FreezeState} FreezeState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FreezeState.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.FreezeState();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.scoreboard = $root.acmcsus.debugjudge.Scoreboard.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.submission && message.submission.length))
                                message.submission = [];
                            message.submission.push($root.acmcsus.debugjudge.Submission.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FreezeState message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.FreezeState} FreezeState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FreezeState.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FreezeState message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FreezeState.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.scoreboard != null && message.hasOwnProperty("scoreboard")) {
                        var error = $root.acmcsus.debugjudge.Scoreboard.verify(message.scoreboard);
                        if (error)
                            return "scoreboard." + error;
                    }
                    if (message.submission != null && message.hasOwnProperty("submission")) {
                        if (!Array.isArray(message.submission))
                            return "submission: array expected";
                        for (var i = 0; i < message.submission.length; ++i) {
                            var error = $root.acmcsus.debugjudge.Submission.verify(message.submission[i]);
                            if (error)
                                return "submission." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FreezeState message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.FreezeState} FreezeState
                 */
                FreezeState.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.FreezeState)
                        return object;
                    var message = new $root.acmcsus.debugjudge.FreezeState();
                    if (object.scoreboard != null) {
                        if (typeof object.scoreboard !== "object")
                            throw TypeError(".acmcsus.debugjudge.FreezeState.scoreboard: object expected");
                        message.scoreboard = $root.acmcsus.debugjudge.Scoreboard.fromObject(object.scoreboard);
                    }
                    if (object.submission) {
                        if (!Array.isArray(object.submission))
                            throw TypeError(".acmcsus.debugjudge.FreezeState.submission: array expected");
                        message.submission = [];
                        for (var i = 0; i < object.submission.length; ++i) {
                            if (typeof object.submission[i] !== "object")
                                throw TypeError(".acmcsus.debugjudge.FreezeState.submission: object expected");
                            message.submission[i] = $root.acmcsus.debugjudge.Submission.fromObject(object.submission[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FreezeState message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @static
                 * @param {acmcsus.debugjudge.FreezeState} message FreezeState
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FreezeState.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.submission = [];
                    if (options.defaults)
                        object.scoreboard = null;
                    if (message.scoreboard != null && message.hasOwnProperty("scoreboard"))
                        object.scoreboard = $root.acmcsus.debugjudge.Scoreboard.toObject(message.scoreboard, options);
                    if (message.submission && message.submission.length) {
                        object.submission = [];
                        for (var j = 0; j < message.submission.length; ++j)
                            object.submission[j] = $root.acmcsus.debugjudge.Submission.toObject(message.submission[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FreezeState to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.FreezeState
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FreezeState.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FreezeState;
            })();
    
            debugjudge.Resolution = (function() {
    
                /**
                 * Properties of a Resolution.
                 * @memberof acmcsus.debugjudge
                 * @interface IResolution
                 * @property {number|null} [teamId] Resolution teamId
                 * @property {number|null} [problemId] Resolution problemId
                 * @property {boolean|null} [solved] Resolution solved
                 * @property {number|null} [penalty] Resolution penalty
                 */
    
                /**
                 * Constructs a new Resolution.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a Resolution.
                 * @implements IResolution
                 * @constructor
                 * @param {acmcsus.debugjudge.IResolution=} [properties] Properties to set
                 */
                function Resolution(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Resolution teamId.
                 * @member {number} teamId
                 * @memberof acmcsus.debugjudge.Resolution
                 * @instance
                 */
                Resolution.prototype.teamId = 0;
    
                /**
                 * Resolution problemId.
                 * @member {number} problemId
                 * @memberof acmcsus.debugjudge.Resolution
                 * @instance
                 */
                Resolution.prototype.problemId = 0;
    
                /**
                 * Resolution solved.
                 * @member {boolean} solved
                 * @memberof acmcsus.debugjudge.Resolution
                 * @instance
                 */
                Resolution.prototype.solved = false;
    
                /**
                 * Resolution penalty.
                 * @member {number} penalty
                 * @memberof acmcsus.debugjudge.Resolution
                 * @instance
                 */
                Resolution.prototype.penalty = 0;
    
                /**
                 * Creates a new Resolution instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.Resolution
                 * @static
                 * @param {acmcsus.debugjudge.IResolution=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.Resolution} Resolution instance
                 */
                Resolution.create = function create(properties) {
                    return new Resolution(properties);
                };
    
                /**
                 * Encodes the specified Resolution message. Does not implicitly {@link acmcsus.debugjudge.Resolution.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.Resolution
                 * @static
                 * @param {acmcsus.debugjudge.IResolution} message Resolution message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Resolution.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamId);
                    if (message.problemId != null && message.hasOwnProperty("problemId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.problemId);
                    if (message.solved != null && message.hasOwnProperty("solved"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.solved);
                    if (message.penalty != null && message.hasOwnProperty("penalty"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.penalty);
                    return writer;
                };
    
                /**
                 * Encodes the specified Resolution message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Resolution.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.Resolution
                 * @static
                 * @param {acmcsus.debugjudge.IResolution} message Resolution message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Resolution.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Resolution message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.Resolution
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.Resolution} Resolution
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Resolution.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Resolution();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.teamId = reader.int32();
                            break;
                        case 2:
                            message.problemId = reader.int32();
                            break;
                        case 3:
                            message.solved = reader.bool();
                            break;
                        case 4:
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
                 * Decodes a Resolution message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.Resolution
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.Resolution} Resolution
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Resolution.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Resolution message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.Resolution
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Resolution.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId))
                            return "teamId: integer expected";
                    if (message.problemId != null && message.hasOwnProperty("problemId"))
                        if (!$util.isInteger(message.problemId))
                            return "problemId: integer expected";
                    if (message.solved != null && message.hasOwnProperty("solved"))
                        if (typeof message.solved !== "boolean")
                            return "solved: boolean expected";
                    if (message.penalty != null && message.hasOwnProperty("penalty"))
                        if (!$util.isInteger(message.penalty))
                            return "penalty: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Resolution message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.Resolution
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.Resolution} Resolution
                 */
                Resolution.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.Resolution)
                        return object;
                    var message = new $root.acmcsus.debugjudge.Resolution();
                    if (object.teamId != null)
                        message.teamId = object.teamId | 0;
                    if (object.problemId != null)
                        message.problemId = object.problemId | 0;
                    if (object.solved != null)
                        message.solved = Boolean(object.solved);
                    if (object.penalty != null)
                        message.penalty = object.penalty | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Resolution message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.Resolution
                 * @static
                 * @param {acmcsus.debugjudge.Resolution} message Resolution
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Resolution.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.teamId = 0;
                        object.problemId = 0;
                        object.solved = false;
                        object.penalty = 0;
                    }
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        object.teamId = message.teamId;
                    if (message.problemId != null && message.hasOwnProperty("problemId"))
                        object.problemId = message.problemId;
                    if (message.solved != null && message.hasOwnProperty("solved"))
                        object.solved = message.solved;
                    if (message.penalty != null && message.hasOwnProperty("penalty"))
                        object.penalty = message.penalty;
                    return object;
                };
    
                /**
                 * Converts this Resolution to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.Resolution
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Resolution.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                Resolution.List = (function() {
    
                    /**
                     * Properties of a List.
                     * @memberof acmcsus.debugjudge.Resolution
                     * @interface IList
                     * @property {Array.<acmcsus.debugjudge.IResolution>|null} [resolution] List resolution
                     */
    
                    /**
                     * Constructs a new List.
                     * @memberof acmcsus.debugjudge.Resolution
                     * @classdesc Represents a List.
                     * @implements IList
                     * @constructor
                     * @param {acmcsus.debugjudge.Resolution.IList=} [properties] Properties to set
                     */
                    function List(properties) {
                        this.resolution = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * List resolution.
                     * @member {Array.<acmcsus.debugjudge.IResolution>} resolution
                     * @memberof acmcsus.debugjudge.Resolution.List
                     * @instance
                     */
                    List.prototype.resolution = $util.emptyArray;
    
                    /**
                     * Creates a new List instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.Resolution.List
                     * @static
                     * @param {acmcsus.debugjudge.Resolution.IList=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.Resolution.List} List instance
                     */
                    List.create = function create(properties) {
                        return new List(properties);
                    };
    
                    /**
                     * Encodes the specified List message. Does not implicitly {@link acmcsus.debugjudge.Resolution.List.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.Resolution.List
                     * @static
                     * @param {acmcsus.debugjudge.Resolution.IList} message List message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    List.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resolution != null && message.resolution.length)
                            for (var i = 0; i < message.resolution.length; ++i)
                                $root.acmcsus.debugjudge.Resolution.encode(message.resolution[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified List message, length delimited. Does not implicitly {@link acmcsus.debugjudge.Resolution.List.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.Resolution.List
                     * @static
                     * @param {acmcsus.debugjudge.Resolution.IList} message List message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    List.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a List message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.Resolution.List
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.Resolution.List} List
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    List.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.Resolution.List();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.resolution && message.resolution.length))
                                    message.resolution = [];
                                message.resolution.push($root.acmcsus.debugjudge.Resolution.decode(reader, reader.uint32()));
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
                     * @memberof acmcsus.debugjudge.Resolution.List
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.Resolution.List} List
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
                     * @memberof acmcsus.debugjudge.Resolution.List
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    List.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resolution != null && message.hasOwnProperty("resolution")) {
                            if (!Array.isArray(message.resolution))
                                return "resolution: array expected";
                            for (var i = 0; i < message.resolution.length; ++i) {
                                var error = $root.acmcsus.debugjudge.Resolution.verify(message.resolution[i]);
                                if (error)
                                    return "resolution." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a List message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.Resolution.List
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.Resolution.List} List
                     */
                    List.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.Resolution.List)
                            return object;
                        var message = new $root.acmcsus.debugjudge.Resolution.List();
                        if (object.resolution) {
                            if (!Array.isArray(object.resolution))
                                throw TypeError(".acmcsus.debugjudge.Resolution.List.resolution: array expected");
                            message.resolution = [];
                            for (var i = 0; i < object.resolution.length; ++i) {
                                if (typeof object.resolution[i] !== "object")
                                    throw TypeError(".acmcsus.debugjudge.Resolution.List.resolution: object expected");
                                message.resolution[i] = $root.acmcsus.debugjudge.Resolution.fromObject(object.resolution[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a List message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.Resolution.List
                     * @static
                     * @param {acmcsus.debugjudge.Resolution.List} message List
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    List.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.resolution = [];
                        if (message.resolution && message.resolution.length) {
                            object.resolution = [];
                            for (var j = 0; j < message.resolution.length; ++j)
                                object.resolution[j] = $root.acmcsus.debugjudge.Resolution.toObject(message.resolution[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this List to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.Resolution.List
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    List.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return List;
                })();
    
                return Resolution;
            })();
    
            debugjudge.C2SMessage = (function() {
    
                /**
                 * Properties of a C2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IC2SMessage
                 * @property {acmcsus.debugjudge.IT2SMessage|null} [t2sMessage] C2SMessage t2sMessage
                 * @property {acmcsus.debugjudge.IJ2SMessage|null} [j2sMessage] C2SMessage j2sMessage
                 * @property {acmcsus.debugjudge.IA2SMessage|null} [a2sMessage] C2SMessage a2sMessage
                 * @property {acmcsus.debugjudge.IAJ2SMessage|null} [aj2sMessage] C2SMessage aj2sMessage
                 * @property {acmcsus.debugjudge.IB2SMessage|null} [b2sMessage] C2SMessage b2sMessage
                 * @property {acmcsus.debugjudge.IR2SMessage|null} [rj2sMessage] C2SMessage rj2sMessage
                 * @property {acmcsus.debugjudge.C2SMessage.ILoginMessage|null} [loginMessage] C2SMessage loginMessage
                 * @property {acmcsus.debugjudge.C2SMessage.ISubmitClarificationMessage|null} [submitClarificationMessage] C2SMessage submitClarificationMessage
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
                 * @member {acmcsus.debugjudge.IT2SMessage|null|undefined} t2sMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.t2sMessage = null;
    
                /**
                 * C2SMessage j2sMessage.
                 * @member {acmcsus.debugjudge.IJ2SMessage|null|undefined} j2sMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.j2sMessage = null;
    
                /**
                 * C2SMessage a2sMessage.
                 * @member {acmcsus.debugjudge.IA2SMessage|null|undefined} a2sMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.a2sMessage = null;
    
                /**
                 * C2SMessage aj2sMessage.
                 * @member {acmcsus.debugjudge.IAJ2SMessage|null|undefined} aj2sMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.aj2sMessage = null;
    
                /**
                 * C2SMessage b2sMessage.
                 * @member {acmcsus.debugjudge.IB2SMessage|null|undefined} b2sMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.b2sMessage = null;
    
                /**
                 * C2SMessage rj2sMessage.
                 * @member {acmcsus.debugjudge.IR2SMessage|null|undefined} rj2sMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.rj2sMessage = null;
    
                /**
                 * C2SMessage loginMessage.
                 * @member {acmcsus.debugjudge.C2SMessage.ILoginMessage|null|undefined} loginMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.loginMessage = null;
    
                /**
                 * C2SMessage submitClarificationMessage.
                 * @member {acmcsus.debugjudge.C2SMessage.ISubmitClarificationMessage|null|undefined} submitClarificationMessage
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                C2SMessage.prototype.submitClarificationMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * C2SMessage value.
                 * @member {"t2sMessage"|"j2sMessage"|"a2sMessage"|"aj2sMessage"|"b2sMessage"|"rj2sMessage"|"loginMessage"|"submitClarificationMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                Object.defineProperty(C2SMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["t2sMessage", "j2sMessage", "a2sMessage", "aj2sMessage", "b2sMessage", "rj2sMessage", "loginMessage", "submitClarificationMessage"]),
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
                        $root.acmcsus.debugjudge.T2SMessage.encode(message.t2sMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.j2sMessage != null && message.hasOwnProperty("j2sMessage"))
                        $root.acmcsus.debugjudge.J2SMessage.encode(message.j2sMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.a2sMessage != null && message.hasOwnProperty("a2sMessage"))
                        $root.acmcsus.debugjudge.A2SMessage.encode(message.a2sMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.aj2sMessage != null && message.hasOwnProperty("aj2sMessage"))
                        $root.acmcsus.debugjudge.AJ2SMessage.encode(message.aj2sMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.b2sMessage != null && message.hasOwnProperty("b2sMessage"))
                        $root.acmcsus.debugjudge.B2SMessage.encode(message.b2sMessage, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.rj2sMessage != null && message.hasOwnProperty("rj2sMessage"))
                        $root.acmcsus.debugjudge.R2SMessage.encode(message.rj2sMessage, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.loginMessage != null && message.hasOwnProperty("loginMessage"))
                        $root.acmcsus.debugjudge.C2SMessage.LoginMessage.encode(message.loginMessage, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    if (message.submitClarificationMessage != null && message.hasOwnProperty("submitClarificationMessage"))
                        $root.acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage.encode(message.submitClarificationMessage, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
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
                            message.t2sMessage = $root.acmcsus.debugjudge.T2SMessage.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.j2sMessage = $root.acmcsus.debugjudge.J2SMessage.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.a2sMessage = $root.acmcsus.debugjudge.A2SMessage.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.aj2sMessage = $root.acmcsus.debugjudge.AJ2SMessage.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.b2sMessage = $root.acmcsus.debugjudge.B2SMessage.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.rj2sMessage = $root.acmcsus.debugjudge.R2SMessage.decode(reader, reader.uint32());
                            break;
                        case 10:
                            message.loginMessage = $root.acmcsus.debugjudge.C2SMessage.LoginMessage.decode(reader, reader.uint32());
                            break;
                        case 11:
                            message.submitClarificationMessage = $root.acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage.decode(reader, reader.uint32());
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
                            var error = $root.acmcsus.debugjudge.T2SMessage.verify(message.t2sMessage);
                            if (error)
                                return "t2sMessage." + error;
                        }
                    }
                    if (message.j2sMessage != null && message.hasOwnProperty("j2sMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.J2SMessage.verify(message.j2sMessage);
                            if (error)
                                return "j2sMessage." + error;
                        }
                    }
                    if (message.a2sMessage != null && message.hasOwnProperty("a2sMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.A2SMessage.verify(message.a2sMessage);
                            if (error)
                                return "a2sMessage." + error;
                        }
                    }
                    if (message.aj2sMessage != null && message.hasOwnProperty("aj2sMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.AJ2SMessage.verify(message.aj2sMessage);
                            if (error)
                                return "aj2sMessage." + error;
                        }
                    }
                    if (message.b2sMessage != null && message.hasOwnProperty("b2sMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.B2SMessage.verify(message.b2sMessage);
                            if (error)
                                return "b2sMessage." + error;
                        }
                    }
                    if (message.rj2sMessage != null && message.hasOwnProperty("rj2sMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.R2SMessage.verify(message.rj2sMessage);
                            if (error)
                                return "rj2sMessage." + error;
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
                    if (message.submitClarificationMessage != null && message.hasOwnProperty("submitClarificationMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage.verify(message.submitClarificationMessage);
                            if (error)
                                return "submitClarificationMessage." + error;
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
                        message.t2sMessage = $root.acmcsus.debugjudge.T2SMessage.fromObject(object.t2sMessage);
                    }
                    if (object.j2sMessage != null) {
                        if (typeof object.j2sMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.C2SMessage.j2sMessage: object expected");
                        message.j2sMessage = $root.acmcsus.debugjudge.J2SMessage.fromObject(object.j2sMessage);
                    }
                    if (object.a2sMessage != null) {
                        if (typeof object.a2sMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.C2SMessage.a2sMessage: object expected");
                        message.a2sMessage = $root.acmcsus.debugjudge.A2SMessage.fromObject(object.a2sMessage);
                    }
                    if (object.aj2sMessage != null) {
                        if (typeof object.aj2sMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.C2SMessage.aj2sMessage: object expected");
                        message.aj2sMessage = $root.acmcsus.debugjudge.AJ2SMessage.fromObject(object.aj2sMessage);
                    }
                    if (object.b2sMessage != null) {
                        if (typeof object.b2sMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.C2SMessage.b2sMessage: object expected");
                        message.b2sMessage = $root.acmcsus.debugjudge.B2SMessage.fromObject(object.b2sMessage);
                    }
                    if (object.rj2sMessage != null) {
                        if (typeof object.rj2sMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.C2SMessage.rj2sMessage: object expected");
                        message.rj2sMessage = $root.acmcsus.debugjudge.R2SMessage.fromObject(object.rj2sMessage);
                    }
                    if (object.loginMessage != null) {
                        if (typeof object.loginMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.C2SMessage.loginMessage: object expected");
                        message.loginMessage = $root.acmcsus.debugjudge.C2SMessage.LoginMessage.fromObject(object.loginMessage);
                    }
                    if (object.submitClarificationMessage != null) {
                        if (typeof object.submitClarificationMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.C2SMessage.submitClarificationMessage: object expected");
                        message.submitClarificationMessage = $root.acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage.fromObject(object.submitClarificationMessage);
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
                        object.t2sMessage = $root.acmcsus.debugjudge.T2SMessage.toObject(message.t2sMessage, options);
                        if (options.oneofs)
                            object.value = "t2sMessage";
                    }
                    if (message.j2sMessage != null && message.hasOwnProperty("j2sMessage")) {
                        object.j2sMessage = $root.acmcsus.debugjudge.J2SMessage.toObject(message.j2sMessage, options);
                        if (options.oneofs)
                            object.value = "j2sMessage";
                    }
                    if (message.a2sMessage != null && message.hasOwnProperty("a2sMessage")) {
                        object.a2sMessage = $root.acmcsus.debugjudge.A2SMessage.toObject(message.a2sMessage, options);
                        if (options.oneofs)
                            object.value = "a2sMessage";
                    }
                    if (message.aj2sMessage != null && message.hasOwnProperty("aj2sMessage")) {
                        object.aj2sMessage = $root.acmcsus.debugjudge.AJ2SMessage.toObject(message.aj2sMessage, options);
                        if (options.oneofs)
                            object.value = "aj2sMessage";
                    }
                    if (message.b2sMessage != null && message.hasOwnProperty("b2sMessage")) {
                        object.b2sMessage = $root.acmcsus.debugjudge.B2SMessage.toObject(message.b2sMessage, options);
                        if (options.oneofs)
                            object.value = "b2sMessage";
                    }
                    if (message.rj2sMessage != null && message.hasOwnProperty("rj2sMessage")) {
                        object.rj2sMessage = $root.acmcsus.debugjudge.R2SMessage.toObject(message.rj2sMessage, options);
                        if (options.oneofs)
                            object.value = "rj2sMessage";
                    }
                    if (message.loginMessage != null && message.hasOwnProperty("loginMessage")) {
                        object.loginMessage = $root.acmcsus.debugjudge.C2SMessage.LoginMessage.toObject(message.loginMessage, options);
                        if (options.oneofs)
                            object.value = "loginMessage";
                    }
                    if (message.submitClarificationMessage != null && message.hasOwnProperty("submitClarificationMessage")) {
                        object.submitClarificationMessage = $root.acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage.toObject(message.submitClarificationMessage, options);
                        if (options.oneofs)
                            object.value = "submitClarificationMessage";
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
                     * @property {number|null} [id] LoginMessage id
                     * @property {string|null} [pass] LoginMessage pass
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
                     * LoginMessage id.
                     * @member {number} id
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @instance
                     */
                    LoginMessage.prototype.id = 0;
    
                    /**
                     * LoginMessage pass.
                     * @member {string} pass
                     * @memberof acmcsus.debugjudge.C2SMessage.LoginMessage
                     * @instance
                     */
                    LoginMessage.prototype.pass = "";
    
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
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
                        if (message.pass != null && message.hasOwnProperty("pass"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.pass);
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
                            case 2:
                                message.id = reader.int32();
                                break;
                            case 3:
                                message.pass = reader.string();
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
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id))
                                return "id: integer expected";
                        if (message.pass != null && message.hasOwnProperty("pass"))
                            if (!$util.isString(message.pass))
                                return "pass: string expected";
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
                        if (object.id != null)
                            message.id = object.id | 0;
                        if (object.pass != null)
                            message.pass = String(object.pass);
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
                        if (options.defaults) {
                            object.nonce = "";
                            object.id = 0;
                            object.pass = "";
                        }
                        if (message.nonce != null && message.hasOwnProperty("nonce"))
                            object.nonce = message.nonce;
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.pass != null && message.hasOwnProperty("pass"))
                            object.pass = message.pass;
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
    
                C2SMessage.SubmitClarificationMessage = (function() {
    
                    /**
                     * Properties of a SubmitClarificationMessage.
                     * @memberof acmcsus.debugjudge.C2SMessage
                     * @interface ISubmitClarificationMessage
                     * @property {acmcsus.debugjudge.IClarification|null} [clarification] SubmitClarificationMessage clarification
                     */
    
                    /**
                     * Constructs a new SubmitClarificationMessage.
                     * @memberof acmcsus.debugjudge.C2SMessage
                     * @classdesc Represents a SubmitClarificationMessage.
                     * @implements ISubmitClarificationMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.C2SMessage.ISubmitClarificationMessage=} [properties] Properties to set
                     */
                    function SubmitClarificationMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * SubmitClarificationMessage clarification.
                     * @member {acmcsus.debugjudge.IClarification|null|undefined} clarification
                     * @memberof acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage
                     * @instance
                     */
                    SubmitClarificationMessage.prototype.clarification = null;
    
                    /**
                     * Creates a new SubmitClarificationMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.ISubmitClarificationMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage} SubmitClarificationMessage instance
                     */
                    SubmitClarificationMessage.create = function create(properties) {
                        return new SubmitClarificationMessage(properties);
                    };
    
                    /**
                     * Encodes the specified SubmitClarificationMessage message. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.ISubmitClarificationMessage} message SubmitClarificationMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubmitClarificationMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.clarification != null && message.hasOwnProperty("clarification"))
                            $root.acmcsus.debugjudge.Clarification.encode(message.clarification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified SubmitClarificationMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.ISubmitClarificationMessage} message SubmitClarificationMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubmitClarificationMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SubmitClarificationMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage} SubmitClarificationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubmitClarificationMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.clarification = $root.acmcsus.debugjudge.Clarification.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a SubmitClarificationMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage} SubmitClarificationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubmitClarificationMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a SubmitClarificationMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubmitClarificationMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.clarification != null && message.hasOwnProperty("clarification")) {
                            var error = $root.acmcsus.debugjudge.Clarification.verify(message.clarification);
                            if (error)
                                return "clarification." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a SubmitClarificationMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage} SubmitClarificationMessage
                     */
                    SubmitClarificationMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage();
                        if (object.clarification != null) {
                            if (typeof object.clarification !== "object")
                                throw TypeError(".acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage.clarification: object expected");
                            message.clarification = $root.acmcsus.debugjudge.Clarification.fromObject(object.clarification);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SubmitClarificationMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage} message SubmitClarificationMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubmitClarificationMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.clarification = null;
                        if (message.clarification != null && message.hasOwnProperty("clarification"))
                            object.clarification = $root.acmcsus.debugjudge.Clarification.toObject(message.clarification, options);
                        return object;
                    };
    
                    /**
                     * Converts this SubmitClarificationMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.C2SMessage.SubmitClarificationMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubmitClarificationMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return SubmitClarificationMessage;
                })();
    
                return C2SMessage;
            })();
    
            debugjudge.S2CMessage = (function() {
    
                /**
                 * Properties of a S2CMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IS2CMessage
                 * @property {acmcsus.debugjudge.IS2TMessage|null} [s2tMessage] S2CMessage s2tMessage
                 * @property {acmcsus.debugjudge.IS2JMessage|null} [s2jMessage] S2CMessage s2jMessage
                 * @property {acmcsus.debugjudge.IS2AMessage|null} [s2aMessage] S2CMessage s2aMessage
                 * @property {acmcsus.debugjudge.IS2AJMessage|null} [s2ajMessage] S2CMessage s2ajMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IDebugMessage|null} [debugMessage] S2CMessage debugMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IAlertMessage|null} [alertMessage] S2CMessage alertMessage
                 * @property {acmcsus.debugjudge.S2CMessage.ILoginResultMessage|null} [loginResultMessage] S2CMessage loginResultMessage
                 * @property {acmcsus.debugjudge.S2CMessage.INotificationMessage|null} [notificationMessage] S2CMessage notificationMessage
                 * @property {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangedMessage|null} [competitionStateChangedMessage] S2CMessage competitionStateChangedMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IScoreboardUpdateMessage|null} [scoreboardUpdateMessage] S2CMessage scoreboardUpdateMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage|null} [reloadSubmissionMessage] S2CMessage reloadSubmissionMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage|null} [reloadSubmissionsMessage] S2CMessage reloadSubmissionsMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage|null} [reloadProblemsMessage] S2CMessage reloadProblemsMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IReloadClarificationMessage|null} [reloadClarificationMessage] S2CMessage reloadClarificationMessage
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
                 * @member {acmcsus.debugjudge.IS2TMessage|null|undefined} s2tMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.s2tMessage = null;
    
                /**
                 * S2CMessage s2jMessage.
                 * @member {acmcsus.debugjudge.IS2JMessage|null|undefined} s2jMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.s2jMessage = null;
    
                /**
                 * S2CMessage s2aMessage.
                 * @member {acmcsus.debugjudge.IS2AMessage|null|undefined} s2aMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.s2aMessage = null;
    
                /**
                 * S2CMessage s2ajMessage.
                 * @member {acmcsus.debugjudge.IS2AJMessage|null|undefined} s2ajMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.s2ajMessage = null;
    
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
    
                /**
                 * S2CMessage reloadSubmissionMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage|null|undefined} reloadSubmissionMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.reloadSubmissionMessage = null;
    
                /**
                 * S2CMessage reloadSubmissionsMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage|null|undefined} reloadSubmissionsMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.reloadSubmissionsMessage = null;
    
                /**
                 * S2CMessage reloadProblemsMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage|null|undefined} reloadProblemsMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.reloadProblemsMessage = null;
    
                /**
                 * S2CMessage reloadClarificationMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.IReloadClarificationMessage|null|undefined} reloadClarificationMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.reloadClarificationMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * S2CMessage value.
                 * @member {"s2tMessage"|"s2jMessage"|"s2aMessage"|"s2ajMessage"|"debugMessage"|"alertMessage"|"loginResultMessage"|"notificationMessage"|"competitionStateChangedMessage"|"scoreboardUpdateMessage"|"reloadSubmissionMessage"|"reloadSubmissionsMessage"|"reloadProblemsMessage"|"reloadClarificationMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                Object.defineProperty(S2CMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["s2tMessage", "s2jMessage", "s2aMessage", "s2ajMessage", "debugMessage", "alertMessage", "loginResultMessage", "notificationMessage", "competitionStateChangedMessage", "scoreboardUpdateMessage", "reloadSubmissionMessage", "reloadSubmissionsMessage", "reloadProblemsMessage", "reloadClarificationMessage"]),
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
                        $root.acmcsus.debugjudge.S2TMessage.encode(message.s2tMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.s2jMessage != null && message.hasOwnProperty("s2jMessage"))
                        $root.acmcsus.debugjudge.S2JMessage.encode(message.s2jMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.s2aMessage != null && message.hasOwnProperty("s2aMessage"))
                        $root.acmcsus.debugjudge.S2AMessage.encode(message.s2aMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.s2ajMessage != null && message.hasOwnProperty("s2ajMessage"))
                        $root.acmcsus.debugjudge.S2AJMessage.encode(message.s2ajMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.debugMessage != null && message.hasOwnProperty("debugMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.DebugMessage.encode(message.debugMessage, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                    if (message.alertMessage != null && message.hasOwnProperty("alertMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.AlertMessage.encode(message.alertMessage, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                    if (message.loginResultMessage != null && message.hasOwnProperty("loginResultMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.encode(message.loginResultMessage, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                    if (message.notificationMessage != null && message.hasOwnProperty("notificationMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.NotificationMessage.encode(message.notificationMessage, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
                    if (message.competitionStateChangedMessage != null && message.hasOwnProperty("competitionStateChangedMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.encode(message.competitionStateChangedMessage, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                    if (message.scoreboardUpdateMessage != null && message.hasOwnProperty("scoreboardUpdateMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.encode(message.scoreboardUpdateMessage, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
                    if (message.reloadSubmissionMessage != null && message.hasOwnProperty("reloadSubmissionMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage.encode(message.reloadSubmissionMessage, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
                    if (message.reloadSubmissionsMessage != null && message.hasOwnProperty("reloadSubmissionsMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage.encode(message.reloadSubmissionsMessage, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
                    if (message.reloadProblemsMessage != null && message.hasOwnProperty("reloadProblemsMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage.encode(message.reloadProblemsMessage, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
                    if (message.reloadClarificationMessage != null && message.hasOwnProperty("reloadClarificationMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage.encode(message.reloadClarificationMessage, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
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
                            message.s2tMessage = $root.acmcsus.debugjudge.S2TMessage.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.s2jMessage = $root.acmcsus.debugjudge.S2JMessage.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.s2aMessage = $root.acmcsus.debugjudge.S2AMessage.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.s2ajMessage = $root.acmcsus.debugjudge.S2AJMessage.decode(reader, reader.uint32());
                            break;
                        case 17:
                            message.debugMessage = $root.acmcsus.debugjudge.S2CMessage.DebugMessage.decode(reader, reader.uint32());
                            break;
                        case 18:
                            message.alertMessage = $root.acmcsus.debugjudge.S2CMessage.AlertMessage.decode(reader, reader.uint32());
                            break;
                        case 19:
                            message.loginResultMessage = $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.decode(reader, reader.uint32());
                            break;
                        case 20:
                            message.notificationMessage = $root.acmcsus.debugjudge.S2CMessage.NotificationMessage.decode(reader, reader.uint32());
                            break;
                        case 21:
                            message.competitionStateChangedMessage = $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangedMessage.decode(reader, reader.uint32());
                            break;
                        case 22:
                            message.scoreboardUpdateMessage = $root.acmcsus.debugjudge.S2CMessage.ScoreboardUpdateMessage.decode(reader, reader.uint32());
                            break;
                        case 23:
                            message.reloadSubmissionMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage.decode(reader, reader.uint32());
                            break;
                        case 24:
                            message.reloadSubmissionsMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage.decode(reader, reader.uint32());
                            break;
                        case 25:
                            message.reloadProblemsMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage.decode(reader, reader.uint32());
                            break;
                        case 26:
                            message.reloadClarificationMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage.decode(reader, reader.uint32());
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
                            var error = $root.acmcsus.debugjudge.S2TMessage.verify(message.s2tMessage);
                            if (error)
                                return "s2tMessage." + error;
                        }
                    }
                    if (message.s2jMessage != null && message.hasOwnProperty("s2jMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2JMessage.verify(message.s2jMessage);
                            if (error)
                                return "s2jMessage." + error;
                        }
                    }
                    if (message.s2aMessage != null && message.hasOwnProperty("s2aMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2AMessage.verify(message.s2aMessage);
                            if (error)
                                return "s2aMessage." + error;
                        }
                    }
                    if (message.s2ajMessage != null && message.hasOwnProperty("s2ajMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2AJMessage.verify(message.s2ajMessage);
                            if (error)
                                return "s2ajMessage." + error;
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
                    if (message.reloadSubmissionMessage != null && message.hasOwnProperty("reloadSubmissionMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage.verify(message.reloadSubmissionMessage);
                            if (error)
                                return "reloadSubmissionMessage." + error;
                        }
                    }
                    if (message.reloadSubmissionsMessage != null && message.hasOwnProperty("reloadSubmissionsMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage.verify(message.reloadSubmissionsMessage);
                            if (error)
                                return "reloadSubmissionsMessage." + error;
                        }
                    }
                    if (message.reloadProblemsMessage != null && message.hasOwnProperty("reloadProblemsMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage.verify(message.reloadProblemsMessage);
                            if (error)
                                return "reloadProblemsMessage." + error;
                        }
                    }
                    if (message.reloadClarificationMessage != null && message.hasOwnProperty("reloadClarificationMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage.verify(message.reloadClarificationMessage);
                            if (error)
                                return "reloadClarificationMessage." + error;
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
                        message.s2tMessage = $root.acmcsus.debugjudge.S2TMessage.fromObject(object.s2tMessage);
                    }
                    if (object.s2jMessage != null) {
                        if (typeof object.s2jMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.s2jMessage: object expected");
                        message.s2jMessage = $root.acmcsus.debugjudge.S2JMessage.fromObject(object.s2jMessage);
                    }
                    if (object.s2aMessage != null) {
                        if (typeof object.s2aMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.s2aMessage: object expected");
                        message.s2aMessage = $root.acmcsus.debugjudge.S2AMessage.fromObject(object.s2aMessage);
                    }
                    if (object.s2ajMessage != null) {
                        if (typeof object.s2ajMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.s2ajMessage: object expected");
                        message.s2ajMessage = $root.acmcsus.debugjudge.S2AJMessage.fromObject(object.s2ajMessage);
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
                    if (object.reloadSubmissionMessage != null) {
                        if (typeof object.reloadSubmissionMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.reloadSubmissionMessage: object expected");
                        message.reloadSubmissionMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage.fromObject(object.reloadSubmissionMessage);
                    }
                    if (object.reloadSubmissionsMessage != null) {
                        if (typeof object.reloadSubmissionsMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.reloadSubmissionsMessage: object expected");
                        message.reloadSubmissionsMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage.fromObject(object.reloadSubmissionsMessage);
                    }
                    if (object.reloadProblemsMessage != null) {
                        if (typeof object.reloadProblemsMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.reloadProblemsMessage: object expected");
                        message.reloadProblemsMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage.fromObject(object.reloadProblemsMessage);
                    }
                    if (object.reloadClarificationMessage != null) {
                        if (typeof object.reloadClarificationMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.reloadClarificationMessage: object expected");
                        message.reloadClarificationMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage.fromObject(object.reloadClarificationMessage);
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
                        object.s2tMessage = $root.acmcsus.debugjudge.S2TMessage.toObject(message.s2tMessage, options);
                        if (options.oneofs)
                            object.value = "s2tMessage";
                    }
                    if (message.s2jMessage != null && message.hasOwnProperty("s2jMessage")) {
                        object.s2jMessage = $root.acmcsus.debugjudge.S2JMessage.toObject(message.s2jMessage, options);
                        if (options.oneofs)
                            object.value = "s2jMessage";
                    }
                    if (message.s2aMessage != null && message.hasOwnProperty("s2aMessage")) {
                        object.s2aMessage = $root.acmcsus.debugjudge.S2AMessage.toObject(message.s2aMessage, options);
                        if (options.oneofs)
                            object.value = "s2aMessage";
                    }
                    if (message.s2ajMessage != null && message.hasOwnProperty("s2ajMessage")) {
                        object.s2ajMessage = $root.acmcsus.debugjudge.S2AJMessage.toObject(message.s2ajMessage, options);
                        if (options.oneofs)
                            object.value = "s2ajMessage";
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
                    if (message.reloadSubmissionMessage != null && message.hasOwnProperty("reloadSubmissionMessage")) {
                        object.reloadSubmissionMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage.toObject(message.reloadSubmissionMessage, options);
                        if (options.oneofs)
                            object.value = "reloadSubmissionMessage";
                    }
                    if (message.reloadSubmissionsMessage != null && message.hasOwnProperty("reloadSubmissionsMessage")) {
                        object.reloadSubmissionsMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage.toObject(message.reloadSubmissionsMessage, options);
                        if (options.oneofs)
                            object.value = "reloadSubmissionsMessage";
                    }
                    if (message.reloadProblemsMessage != null && message.hasOwnProperty("reloadProblemsMessage")) {
                        object.reloadProblemsMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage.toObject(message.reloadProblemsMessage, options);
                        if (options.oneofs)
                            object.value = "reloadProblemsMessage";
                    }
                    if (message.reloadClarificationMessage != null && message.hasOwnProperty("reloadClarificationMessage")) {
                        object.reloadClarificationMessage = $root.acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage.toObject(message.reloadClarificationMessage, options);
                        if (options.oneofs)
                            object.value = "reloadClarificationMessage";
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
                     * @property {acmcsus.debugjudge.IProfile|null} [profile] LoginResultMessage profile
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
                     * LoginResultMessage profile.
                     * @member {acmcsus.debugjudge.IProfile|null|undefined} profile
                     * @memberof acmcsus.debugjudge.S2CMessage.LoginResultMessage
                     * @instance
                     */
                    LoginResultMessage.prototype.profile = null;
    
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
                        if (message.profile != null && message.hasOwnProperty("profile"))
                            $root.acmcsus.debugjudge.Profile.encode(message.profile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                            case 2:
                                message.profile = $root.acmcsus.debugjudge.Profile.decode(reader, reader.uint32());
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
                        if (message.profile != null && message.hasOwnProperty("profile")) {
                            var error = $root.acmcsus.debugjudge.Profile.verify(message.profile);
                            if (error)
                                return "profile." + error;
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
                        if (object.profile != null) {
                            if (typeof object.profile !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.LoginResultMessage.profile: object expected");
                            message.profile = $root.acmcsus.debugjudge.Profile.fromObject(object.profile);
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
                        if (options.defaults) {
                            object.value = options.enums === String ? "UNKNOWN" : 0;
                            object.profile = null;
                        }
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = options.enums === String ? $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.LoginResult[message.value] : message.value;
                        if (message.profile != null && message.hasOwnProperty("profile"))
                            object.profile = $root.acmcsus.debugjudge.Profile.toObject(message.profile, options);
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
    
                S2CMessage.ReloadProblemsMessage = (function() {
    
                    /**
                     * Properties of a ReloadProblemsMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface IReloadProblemsMessage
                     * @property {acmcsus.debugjudge.Problem.IList|null} [problems] ReloadProblemsMessage problems
                     */
    
                    /**
                     * Constructs a new ReloadProblemsMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a ReloadProblemsMessage.
                     * @implements IReloadProblemsMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage=} [properties] Properties to set
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage
                     * @instance
                     */
                    ReloadProblemsMessage.prototype.problems = null;
    
                    /**
                     * Creates a new ReloadProblemsMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage} ReloadProblemsMessage instance
                     */
                    ReloadProblemsMessage.create = function create(properties) {
                        return new ReloadProblemsMessage(properties);
                    };
    
                    /**
                     * Encodes the specified ReloadProblemsMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage} message ReloadProblemsMessage message or plain object to encode
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
                     * Encodes the specified ReloadProblemsMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadProblemsMessage} message ReloadProblemsMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReloadProblemsMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReloadProblemsMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage} ReloadProblemsMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReloadProblemsMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage();
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage} ReloadProblemsMessage
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage} ReloadProblemsMessage
                     */
                    ReloadProblemsMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage();
                        if (object.problems != null) {
                            if (typeof object.problems !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage.problems: object expected");
                            message.problems = $root.acmcsus.debugjudge.Problem.List.fromObject(object.problems);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReloadProblemsMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage} message ReloadProblemsMessage
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadProblemsMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReloadProblemsMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReloadProblemsMessage;
                })();
    
                S2CMessage.ReloadSubmissionMessage = (function() {
    
                    /**
                     * Properties of a ReloadSubmissionMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface IReloadSubmissionMessage
                     * @property {acmcsus.debugjudge.ISubmission|null} [submission] ReloadSubmissionMessage submission
                     */
    
                    /**
                     * Constructs a new ReloadSubmissionMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a ReloadSubmissionMessage.
                     * @implements IReloadSubmissionMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage=} [properties] Properties to set
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage
                     * @instance
                     */
                    ReloadSubmissionMessage.prototype.submission = null;
    
                    /**
                     * Creates a new ReloadSubmissionMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage} ReloadSubmissionMessage instance
                     */
                    ReloadSubmissionMessage.create = function create(properties) {
                        return new ReloadSubmissionMessage(properties);
                    };
    
                    /**
                     * Encodes the specified ReloadSubmissionMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage} message ReloadSubmissionMessage message or plain object to encode
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
                     * Encodes the specified ReloadSubmissionMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadSubmissionMessage} message ReloadSubmissionMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReloadSubmissionMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReloadSubmissionMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage} ReloadSubmissionMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReloadSubmissionMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage();
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage} ReloadSubmissionMessage
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage} ReloadSubmissionMessage
                     */
                    ReloadSubmissionMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage();
                        if (object.submission != null) {
                            if (typeof object.submission !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage.submission: object expected");
                            message.submission = $root.acmcsus.debugjudge.Submission.fromObject(object.submission);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReloadSubmissionMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage} message ReloadSubmissionMessage
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReloadSubmissionMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReloadSubmissionMessage;
                })();
    
                S2CMessage.ReloadSubmissionsMessage = (function() {
    
                    /**
                     * Properties of a ReloadSubmissionsMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface IReloadSubmissionsMessage
                     * @property {acmcsus.debugjudge.Submission.IList|null} [submissions] ReloadSubmissionsMessage submissions
                     */
    
                    /**
                     * Constructs a new ReloadSubmissionsMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a ReloadSubmissionsMessage.
                     * @implements IReloadSubmissionsMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage=} [properties] Properties to set
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage
                     * @instance
                     */
                    ReloadSubmissionsMessage.prototype.submissions = null;
    
                    /**
                     * Creates a new ReloadSubmissionsMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage} ReloadSubmissionsMessage instance
                     */
                    ReloadSubmissionsMessage.create = function create(properties) {
                        return new ReloadSubmissionsMessage(properties);
                    };
    
                    /**
                     * Encodes the specified ReloadSubmissionsMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage} message ReloadSubmissionsMessage message or plain object to encode
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
                     * Encodes the specified ReloadSubmissionsMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadSubmissionsMessage} message ReloadSubmissionsMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReloadSubmissionsMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReloadSubmissionsMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage} ReloadSubmissionsMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReloadSubmissionsMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage();
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage} ReloadSubmissionsMessage
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage} ReloadSubmissionsMessage
                     */
                    ReloadSubmissionsMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage();
                        if (object.submissions != null) {
                            if (typeof object.submissions !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage.submissions: object expected");
                            message.submissions = $root.acmcsus.debugjudge.Submission.List.fromObject(object.submissions);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReloadSubmissionsMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage} message ReloadSubmissionsMessage
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
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadSubmissionsMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReloadSubmissionsMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReloadSubmissionsMessage;
                })();
    
                S2CMessage.ReloadClarificationMessage = (function() {
    
                    /**
                     * Properties of a ReloadClarificationMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface IReloadClarificationMessage
                     * @property {acmcsus.debugjudge.IClarification|null} [clarification] ReloadClarificationMessage clarification
                     */
    
                    /**
                     * Constructs a new ReloadClarificationMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a ReloadClarificationMessage.
                     * @implements IReloadClarificationMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadClarificationMessage=} [properties] Properties to set
                     */
                    function ReloadClarificationMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReloadClarificationMessage clarification.
                     * @member {acmcsus.debugjudge.IClarification|null|undefined} clarification
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage
                     * @instance
                     */
                    ReloadClarificationMessage.prototype.clarification = null;
    
                    /**
                     * Creates a new ReloadClarificationMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadClarificationMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage} ReloadClarificationMessage instance
                     */
                    ReloadClarificationMessage.create = function create(properties) {
                        return new ReloadClarificationMessage(properties);
                    };
    
                    /**
                     * Encodes the specified ReloadClarificationMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadClarificationMessage} message ReloadClarificationMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReloadClarificationMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.clarification != null && message.hasOwnProperty("clarification"))
                            $root.acmcsus.debugjudge.Clarification.encode(message.clarification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReloadClarificationMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.IReloadClarificationMessage} message ReloadClarificationMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReloadClarificationMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReloadClarificationMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage} ReloadClarificationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReloadClarificationMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.clarification = $root.acmcsus.debugjudge.Clarification.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReloadClarificationMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage} ReloadClarificationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReloadClarificationMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReloadClarificationMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReloadClarificationMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.clarification != null && message.hasOwnProperty("clarification")) {
                            var error = $root.acmcsus.debugjudge.Clarification.verify(message.clarification);
                            if (error)
                                return "clarification." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a ReloadClarificationMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage} ReloadClarificationMessage
                     */
                    ReloadClarificationMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage();
                        if (object.clarification != null) {
                            if (typeof object.clarification !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage.clarification: object expected");
                            message.clarification = $root.acmcsus.debugjudge.Clarification.fromObject(object.clarification);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReloadClarificationMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage} message ReloadClarificationMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReloadClarificationMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.clarification = null;
                        if (message.clarification != null && message.hasOwnProperty("clarification"))
                            object.clarification = $root.acmcsus.debugjudge.Clarification.toObject(message.clarification, options);
                        return object;
                    };
    
                    /**
                     * Converts this ReloadClarificationMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2CMessage.ReloadClarificationMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReloadClarificationMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReloadClarificationMessage;
                })();
    
                return S2CMessage;
            })();
    
            debugjudge.T2SMessage = (function() {
    
                /**
                 * Properties of a T2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IT2SMessage
                 * @property {acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage|null} [submissionCreateMessage] T2SMessage submissionCreateMessage
                 */
    
                /**
                 * Constructs a new T2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a T2SMessage.
                 * @implements IT2SMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IT2SMessage=} [properties] Properties to set
                 */
                function T2SMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * T2SMessage submissionCreateMessage.
                 * @member {acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage|null|undefined} submissionCreateMessage
                 * @memberof acmcsus.debugjudge.T2SMessage
                 * @instance
                 */
                T2SMessage.prototype.submissionCreateMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * T2SMessage value.
                 * @member {"submissionCreateMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.T2SMessage
                 * @instance
                 */
                Object.defineProperty(T2SMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["submissionCreateMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new T2SMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.T2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IT2SMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.T2SMessage} T2SMessage instance
                 */
                T2SMessage.create = function create(properties) {
                    return new T2SMessage(properties);
                };
    
                /**
                 * Encodes the specified T2SMessage message. Does not implicitly {@link acmcsus.debugjudge.T2SMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.T2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IT2SMessage} message T2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                T2SMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.submissionCreateMessage != null && message.hasOwnProperty("submissionCreateMessage"))
                        $root.acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage.encode(message.submissionCreateMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified T2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.T2SMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.T2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IT2SMessage} message T2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                T2SMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a T2SMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.T2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.T2SMessage} T2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                T2SMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.T2SMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.submissionCreateMessage = $root.acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage.decode(reader, reader.uint32());
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
                 * @memberof acmcsus.debugjudge.T2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.T2SMessage} T2SMessage
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
                 * @memberof acmcsus.debugjudge.T2SMessage
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
                            var error = $root.acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage.verify(message.submissionCreateMessage);
                            if (error)
                                return "submissionCreateMessage." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a T2SMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.T2SMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.T2SMessage} T2SMessage
                 */
                T2SMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.T2SMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.T2SMessage();
                    if (object.submissionCreateMessage != null) {
                        if (typeof object.submissionCreateMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.T2SMessage.submissionCreateMessage: object expected");
                        message.submissionCreateMessage = $root.acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage.fromObject(object.submissionCreateMessage);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a T2SMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.T2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.T2SMessage} message T2SMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                T2SMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.submissionCreateMessage != null && message.hasOwnProperty("submissionCreateMessage")) {
                        object.submissionCreateMessage = $root.acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage.toObject(message.submissionCreateMessage, options);
                        if (options.oneofs)
                            object.value = "submissionCreateMessage";
                    }
                    return object;
                };
    
                /**
                 * Converts this T2SMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.T2SMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                T2SMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                T2SMessage.SubmissionCreateMessage = (function() {
    
                    /**
                     * Properties of a SubmissionCreateMessage.
                     * @memberof acmcsus.debugjudge.T2SMessage
                     * @interface ISubmissionCreateMessage
                     * @property {acmcsus.debugjudge.ISubmission|null} [submission] SubmissionCreateMessage submission
                     */
    
                    /**
                     * Constructs a new SubmissionCreateMessage.
                     * @memberof acmcsus.debugjudge.T2SMessage
                     * @classdesc Represents a SubmissionCreateMessage.
                     * @implements ISubmissionCreateMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage=} [properties] Properties to set
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
                     * @memberof acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage
                     * @instance
                     */
                    SubmissionCreateMessage.prototype.submission = null;
    
                    /**
                     * Creates a new SubmissionCreateMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage
                     * @static
                     * @param {acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage} SubmissionCreateMessage instance
                     */
                    SubmissionCreateMessage.create = function create(properties) {
                        return new SubmissionCreateMessage(properties);
                    };
    
                    /**
                     * Encodes the specified SubmissionCreateMessage message. Does not implicitly {@link acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage
                     * @static
                     * @param {acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage} message SubmissionCreateMessage message or plain object to encode
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
                     * Encodes the specified SubmissionCreateMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage
                     * @static
                     * @param {acmcsus.debugjudge.T2SMessage.ISubmissionCreateMessage} message SubmissionCreateMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubmissionCreateMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SubmissionCreateMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage} SubmissionCreateMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubmissionCreateMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage();
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
                     * @memberof acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage} SubmissionCreateMessage
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
                     * @memberof acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage
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
                     * @memberof acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage} SubmissionCreateMessage
                     */
                    SubmissionCreateMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage();
                        if (object.submission != null) {
                            if (typeof object.submission !== "object")
                                throw TypeError(".acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage.submission: object expected");
                            message.submission = $root.acmcsus.debugjudge.Submission.fromObject(object.submission);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SubmissionCreateMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage
                     * @static
                     * @param {acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage} message SubmissionCreateMessage
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
                     * @memberof acmcsus.debugjudge.T2SMessage.SubmissionCreateMessage
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
    
            debugjudge.S2TMessage = (function() {
    
                /**
                 * Properties of a S2TMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IS2TMessage
                 */
    
                /**
                 * Constructs a new S2TMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a S2TMessage.
                 * @implements IS2TMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IS2TMessage=} [properties] Properties to set
                 */
                function S2TMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Creates a new S2TMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.S2TMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2TMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.S2TMessage} S2TMessage instance
                 */
                S2TMessage.create = function create(properties) {
                    return new S2TMessage(properties);
                };
    
                /**
                 * Encodes the specified S2TMessage message. Does not implicitly {@link acmcsus.debugjudge.S2TMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.S2TMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2TMessage} message S2TMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2TMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };
    
                /**
                 * Encodes the specified S2TMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2TMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.S2TMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2TMessage} message S2TMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2TMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a S2TMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.S2TMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.S2TMessage} S2TMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                S2TMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2TMessage();
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
                 * Decodes a S2TMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.S2TMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.S2TMessage} S2TMessage
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
                 * @memberof acmcsus.debugjudge.S2TMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                S2TMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };
    
                /**
                 * Creates a S2TMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.S2TMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.S2TMessage} S2TMessage
                 */
                S2TMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.S2TMessage)
                        return object;
                    return new $root.acmcsus.debugjudge.S2TMessage();
                };
    
                /**
                 * Creates a plain object from a S2TMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.S2TMessage
                 * @static
                 * @param {acmcsus.debugjudge.S2TMessage} message S2TMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                S2TMessage.toObject = function toObject() {
                    return {};
                };
    
                /**
                 * Converts this S2TMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.S2TMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                S2TMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return S2TMessage;
            })();
    
            debugjudge.J2SMessage = (function() {
    
                /**
                 * Properties of a J2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IJ2SMessage
                 * @property {acmcsus.debugjudge.J2SMessage.IStartJudgingMessage|null} [startJudgingMessage] J2SMessage startJudgingMessage
                 * @property {acmcsus.debugjudge.J2SMessage.IStopJudgingMessage|null} [stopJudgingMessage] J2SMessage stopJudgingMessage
                 * @property {acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage|null} [submissionJudgementMessage] J2SMessage submissionJudgementMessage
                 * @property {acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage|null} [judgingPreferencesMessage] J2SMessage judgingPreferencesMessage
                 */
    
                /**
                 * Constructs a new J2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a J2SMessage.
                 * @implements IJ2SMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IJ2SMessage=} [properties] Properties to set
                 */
                function J2SMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * J2SMessage startJudgingMessage.
                 * @member {acmcsus.debugjudge.J2SMessage.IStartJudgingMessage|null|undefined} startJudgingMessage
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @instance
                 */
                J2SMessage.prototype.startJudgingMessage = null;
    
                /**
                 * J2SMessage stopJudgingMessage.
                 * @member {acmcsus.debugjudge.J2SMessage.IStopJudgingMessage|null|undefined} stopJudgingMessage
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @instance
                 */
                J2SMessage.prototype.stopJudgingMessage = null;
    
                /**
                 * J2SMessage submissionJudgementMessage.
                 * @member {acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage|null|undefined} submissionJudgementMessage
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @instance
                 */
                J2SMessage.prototype.submissionJudgementMessage = null;
    
                /**
                 * J2SMessage judgingPreferencesMessage.
                 * @member {acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage|null|undefined} judgingPreferencesMessage
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @instance
                 */
                J2SMessage.prototype.judgingPreferencesMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * J2SMessage value.
                 * @member {"startJudgingMessage"|"stopJudgingMessage"|"submissionJudgementMessage"|"judgingPreferencesMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @instance
                 */
                Object.defineProperty(J2SMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["startJudgingMessage", "stopJudgingMessage", "submissionJudgementMessage", "judgingPreferencesMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new J2SMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IJ2SMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.J2SMessage} J2SMessage instance
                 */
                J2SMessage.create = function create(properties) {
                    return new J2SMessage(properties);
                };
    
                /**
                 * Encodes the specified J2SMessage message. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IJ2SMessage} message J2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                J2SMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.startJudgingMessage != null && message.hasOwnProperty("startJudgingMessage"))
                        $root.acmcsus.debugjudge.J2SMessage.StartJudgingMessage.encode(message.startJudgingMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.stopJudgingMessage != null && message.hasOwnProperty("stopJudgingMessage"))
                        $root.acmcsus.debugjudge.J2SMessage.StopJudgingMessage.encode(message.stopJudgingMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.submissionJudgementMessage != null && message.hasOwnProperty("submissionJudgementMessage"))
                        $root.acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage.encode(message.submissionJudgementMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.judgingPreferencesMessage != null && message.hasOwnProperty("judgingPreferencesMessage"))
                        $root.acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage.encode(message.judgingPreferencesMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified J2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IJ2SMessage} message J2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                J2SMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a J2SMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.J2SMessage} J2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                J2SMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.J2SMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.startJudgingMessage = $root.acmcsus.debugjudge.J2SMessage.StartJudgingMessage.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.stopJudgingMessage = $root.acmcsus.debugjudge.J2SMessage.StopJudgingMessage.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.submissionJudgementMessage = $root.acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.judgingPreferencesMessage = $root.acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage.decode(reader, reader.uint32());
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
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.J2SMessage} J2SMessage
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
                 * @memberof acmcsus.debugjudge.J2SMessage
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
                            var error = $root.acmcsus.debugjudge.J2SMessage.StartJudgingMessage.verify(message.startJudgingMessage);
                            if (error)
                                return "startJudgingMessage." + error;
                        }
                    }
                    if (message.stopJudgingMessage != null && message.hasOwnProperty("stopJudgingMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.J2SMessage.StopJudgingMessage.verify(message.stopJudgingMessage);
                            if (error)
                                return "stopJudgingMessage." + error;
                        }
                    }
                    if (message.submissionJudgementMessage != null && message.hasOwnProperty("submissionJudgementMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage.verify(message.submissionJudgementMessage);
                            if (error)
                                return "submissionJudgementMessage." + error;
                        }
                    }
                    if (message.judgingPreferencesMessage != null && message.hasOwnProperty("judgingPreferencesMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage.verify(message.judgingPreferencesMessage);
                            if (error)
                                return "judgingPreferencesMessage." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a J2SMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.J2SMessage} J2SMessage
                 */
                J2SMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.J2SMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.J2SMessage();
                    if (object.startJudgingMessage != null) {
                        if (typeof object.startJudgingMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.J2SMessage.startJudgingMessage: object expected");
                        message.startJudgingMessage = $root.acmcsus.debugjudge.J2SMessage.StartJudgingMessage.fromObject(object.startJudgingMessage);
                    }
                    if (object.stopJudgingMessage != null) {
                        if (typeof object.stopJudgingMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.J2SMessage.stopJudgingMessage: object expected");
                        message.stopJudgingMessage = $root.acmcsus.debugjudge.J2SMessage.StopJudgingMessage.fromObject(object.stopJudgingMessage);
                    }
                    if (object.submissionJudgementMessage != null) {
                        if (typeof object.submissionJudgementMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.J2SMessage.submissionJudgementMessage: object expected");
                        message.submissionJudgementMessage = $root.acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage.fromObject(object.submissionJudgementMessage);
                    }
                    if (object.judgingPreferencesMessage != null) {
                        if (typeof object.judgingPreferencesMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.J2SMessage.judgingPreferencesMessage: object expected");
                        message.judgingPreferencesMessage = $root.acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage.fromObject(object.judgingPreferencesMessage);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a J2SMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.J2SMessage} message J2SMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                J2SMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.startJudgingMessage != null && message.hasOwnProperty("startJudgingMessage")) {
                        object.startJudgingMessage = $root.acmcsus.debugjudge.J2SMessage.StartJudgingMessage.toObject(message.startJudgingMessage, options);
                        if (options.oneofs)
                            object.value = "startJudgingMessage";
                    }
                    if (message.stopJudgingMessage != null && message.hasOwnProperty("stopJudgingMessage")) {
                        object.stopJudgingMessage = $root.acmcsus.debugjudge.J2SMessage.StopJudgingMessage.toObject(message.stopJudgingMessage, options);
                        if (options.oneofs)
                            object.value = "stopJudgingMessage";
                    }
                    if (message.submissionJudgementMessage != null && message.hasOwnProperty("submissionJudgementMessage")) {
                        object.submissionJudgementMessage = $root.acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage.toObject(message.submissionJudgementMessage, options);
                        if (options.oneofs)
                            object.value = "submissionJudgementMessage";
                    }
                    if (message.judgingPreferencesMessage != null && message.hasOwnProperty("judgingPreferencesMessage")) {
                        object.judgingPreferencesMessage = $root.acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage.toObject(message.judgingPreferencesMessage, options);
                        if (options.oneofs)
                            object.value = "judgingPreferencesMessage";
                    }
                    return object;
                };
    
                /**
                 * Converts this J2SMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.J2SMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                J2SMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                J2SMessage.StartJudgingMessage = (function() {
    
                    /**
                     * Properties of a StartJudgingMessage.
                     * @memberof acmcsus.debugjudge.J2SMessage
                     * @interface IStartJudgingMessage
                     */
    
                    /**
                     * Constructs a new StartJudgingMessage.
                     * @memberof acmcsus.debugjudge.J2SMessage
                     * @classdesc Represents a StartJudgingMessage.
                     * @implements IStartJudgingMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.J2SMessage.IStartJudgingMessage=} [properties] Properties to set
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
                     * @memberof acmcsus.debugjudge.J2SMessage.StartJudgingMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.IStartJudgingMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.J2SMessage.StartJudgingMessage} StartJudgingMessage instance
                     */
                    StartJudgingMessage.create = function create(properties) {
                        return new StartJudgingMessage(properties);
                    };
    
                    /**
                     * Encodes the specified StartJudgingMessage message. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.StartJudgingMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.J2SMessage.StartJudgingMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.IStartJudgingMessage} message StartJudgingMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StartJudgingMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified StartJudgingMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.StartJudgingMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.J2SMessage.StartJudgingMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.IStartJudgingMessage} message StartJudgingMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StartJudgingMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a StartJudgingMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.J2SMessage.StartJudgingMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.J2SMessage.StartJudgingMessage} StartJudgingMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StartJudgingMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.J2SMessage.StartJudgingMessage();
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
                     * @memberof acmcsus.debugjudge.J2SMessage.StartJudgingMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.J2SMessage.StartJudgingMessage} StartJudgingMessage
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
                     * @memberof acmcsus.debugjudge.J2SMessage.StartJudgingMessage
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
                     * @memberof acmcsus.debugjudge.J2SMessage.StartJudgingMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.J2SMessage.StartJudgingMessage} StartJudgingMessage
                     */
                    StartJudgingMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.J2SMessage.StartJudgingMessage)
                            return object;
                        return new $root.acmcsus.debugjudge.J2SMessage.StartJudgingMessage();
                    };
    
                    /**
                     * Creates a plain object from a StartJudgingMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.J2SMessage.StartJudgingMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.StartJudgingMessage} message StartJudgingMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StartJudgingMessage.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this StartJudgingMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.J2SMessage.StartJudgingMessage
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
                     * @memberof acmcsus.debugjudge.J2SMessage
                     * @interface IStopJudgingMessage
                     */
    
                    /**
                     * Constructs a new StopJudgingMessage.
                     * @memberof acmcsus.debugjudge.J2SMessage
                     * @classdesc Represents a StopJudgingMessage.
                     * @implements IStopJudgingMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.J2SMessage.IStopJudgingMessage=} [properties] Properties to set
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
                     * @memberof acmcsus.debugjudge.J2SMessage.StopJudgingMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.IStopJudgingMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.J2SMessage.StopJudgingMessage} StopJudgingMessage instance
                     */
                    StopJudgingMessage.create = function create(properties) {
                        return new StopJudgingMessage(properties);
                    };
    
                    /**
                     * Encodes the specified StopJudgingMessage message. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.StopJudgingMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.J2SMessage.StopJudgingMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.IStopJudgingMessage} message StopJudgingMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StopJudgingMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified StopJudgingMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.StopJudgingMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.J2SMessage.StopJudgingMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.IStopJudgingMessage} message StopJudgingMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StopJudgingMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a StopJudgingMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.J2SMessage.StopJudgingMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.J2SMessage.StopJudgingMessage} StopJudgingMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StopJudgingMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.J2SMessage.StopJudgingMessage();
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
                     * @memberof acmcsus.debugjudge.J2SMessage.StopJudgingMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.J2SMessage.StopJudgingMessage} StopJudgingMessage
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
                     * @memberof acmcsus.debugjudge.J2SMessage.StopJudgingMessage
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
                     * @memberof acmcsus.debugjudge.J2SMessage.StopJudgingMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.J2SMessage.StopJudgingMessage} StopJudgingMessage
                     */
                    StopJudgingMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.J2SMessage.StopJudgingMessage)
                            return object;
                        return new $root.acmcsus.debugjudge.J2SMessage.StopJudgingMessage();
                    };
    
                    /**
                     * Creates a plain object from a StopJudgingMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.J2SMessage.StopJudgingMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.StopJudgingMessage} message StopJudgingMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StopJudgingMessage.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this StopJudgingMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.J2SMessage.StopJudgingMessage
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
                     * @memberof acmcsus.debugjudge.J2SMessage
                     * @interface ISubmissionJudgementMessage
                     * @property {number|null} [teamId] SubmissionJudgementMessage teamId
                     * @property {number|null} [problemId] SubmissionJudgementMessage problemId
                     * @property {number|Long|null} [submissionId] SubmissionJudgementMessage submissionId
                     * @property {acmcsus.debugjudge.SubmissionJudgement|null} [ruling] SubmissionJudgementMessage ruling
                     * @property {string|null} [rulingMessage] SubmissionJudgementMessage rulingMessage
                     */
    
                    /**
                     * Constructs a new SubmissionJudgementMessage.
                     * @memberof acmcsus.debugjudge.J2SMessage
                     * @classdesc Represents a SubmissionJudgementMessage.
                     * @implements ISubmissionJudgementMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage=} [properties] Properties to set
                     */
                    function SubmissionJudgementMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * SubmissionJudgementMessage teamId.
                     * @member {number} teamId
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @instance
                     */
                    SubmissionJudgementMessage.prototype.teamId = 0;
    
                    /**
                     * SubmissionJudgementMessage problemId.
                     * @member {number} problemId
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @instance
                     */
                    SubmissionJudgementMessage.prototype.problemId = 0;
    
                    /**
                     * SubmissionJudgementMessage submissionId.
                     * @member {number|Long} submissionId
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @instance
                     */
                    SubmissionJudgementMessage.prototype.submissionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * SubmissionJudgementMessage ruling.
                     * @member {acmcsus.debugjudge.SubmissionJudgement} ruling
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @instance
                     */
                    SubmissionJudgementMessage.prototype.ruling = 0;
    
                    /**
                     * SubmissionJudgementMessage rulingMessage.
                     * @member {string} rulingMessage
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @instance
                     */
                    SubmissionJudgementMessage.prototype.rulingMessage = "";
    
                    /**
                     * Creates a new SubmissionJudgementMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage} SubmissionJudgementMessage instance
                     */
                    SubmissionJudgementMessage.create = function create(properties) {
                        return new SubmissionJudgementMessage(properties);
                    };
    
                    /**
                     * Encodes the specified SubmissionJudgementMessage message. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage} message SubmissionJudgementMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubmissionJudgementMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamId);
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.problemId);
                        if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.submissionId);
                        if (message.ruling != null && message.hasOwnProperty("ruling"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ruling);
                        if (message.rulingMessage != null && message.hasOwnProperty("rulingMessage"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.rulingMessage);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified SubmissionJudgementMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.ISubmissionJudgementMessage} message SubmissionJudgementMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubmissionJudgementMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SubmissionJudgementMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage} SubmissionJudgementMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubmissionJudgementMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int32();
                                break;
                            case 2:
                                message.problemId = reader.int32();
                                break;
                            case 3:
                                message.submissionId = reader.int64();
                                break;
                            case 4:
                                message.ruling = reader.int32();
                                break;
                            case 5:
                                message.rulingMessage = reader.string();
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
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage} SubmissionJudgementMessage
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
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubmissionJudgementMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId))
                                return "teamId: integer expected";
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            if (!$util.isInteger(message.problemId))
                                return "problemId: integer expected";
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
                        if (message.rulingMessage != null && message.hasOwnProperty("rulingMessage"))
                            if (!$util.isString(message.rulingMessage))
                                return "rulingMessage: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a SubmissionJudgementMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage} SubmissionJudgementMessage
                     */
                    SubmissionJudgementMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage();
                        if (object.teamId != null)
                            message.teamId = object.teamId | 0;
                        if (object.problemId != null)
                            message.problemId = object.problemId | 0;
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
                        if (object.rulingMessage != null)
                            message.rulingMessage = String(object.rulingMessage);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SubmissionJudgementMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage} message SubmissionJudgementMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubmissionJudgementMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.teamId = 0;
                            object.problemId = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.submissionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.submissionId = options.longs === String ? "0" : 0;
                            object.ruling = options.enums === String ? "JUDGEMENT_UNKNOWN" : 0;
                            object.rulingMessage = "";
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            object.teamId = message.teamId;
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            object.problemId = message.problemId;
                        if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                            if (typeof message.submissionId === "number")
                                object.submissionId = options.longs === String ? String(message.submissionId) : message.submissionId;
                            else
                                object.submissionId = options.longs === String ? $util.Long.prototype.toString.call(message.submissionId) : options.longs === Number ? new $util.LongBits(message.submissionId.low >>> 0, message.submissionId.high >>> 0).toNumber() : message.submissionId;
                        if (message.ruling != null && message.hasOwnProperty("ruling"))
                            object.ruling = options.enums === String ? $root.acmcsus.debugjudge.SubmissionJudgement[message.ruling] : message.ruling;
                        if (message.rulingMessage != null && message.hasOwnProperty("rulingMessage"))
                            object.rulingMessage = message.rulingMessage;
                        return object;
                    };
    
                    /**
                     * Converts this SubmissionJudgementMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.J2SMessage.SubmissionJudgementMessage
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
                     * @memberof acmcsus.debugjudge.J2SMessage
                     * @interface IJudgingPreferencesMessage
                     * @property {Object.<string,boolean>|null} [preferences] JudgingPreferencesMessage preferences
                     */
    
                    /**
                     * Constructs a new JudgingPreferencesMessage.
                     * @memberof acmcsus.debugjudge.J2SMessage
                     * @classdesc Represents a JudgingPreferencesMessage.
                     * @implements IJudgingPreferencesMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage=} [properties] Properties to set
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
                     * @memberof acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage
                     * @instance
                     */
                    JudgingPreferencesMessage.prototype.preferences = $util.emptyObject;
    
                    /**
                     * Creates a new JudgingPreferencesMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage} JudgingPreferencesMessage instance
                     */
                    JudgingPreferencesMessage.create = function create(properties) {
                        return new JudgingPreferencesMessage(properties);
                    };
    
                    /**
                     * Encodes the specified JudgingPreferencesMessage message. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage} message JudgingPreferencesMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JudgingPreferencesMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.preferences != null && message.hasOwnProperty("preferences"))
                            for (var keys = Object.keys(message.preferences), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.preferences[keys[i]]).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified JudgingPreferencesMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.IJudgingPreferencesMessage} message JudgingPreferencesMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JudgingPreferencesMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a JudgingPreferencesMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage} JudgingPreferencesMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JudgingPreferencesMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                reader.skip().pos++;
                                if (message.preferences === $util.emptyObject)
                                    message.preferences = {};
                                key = reader.int32();
                                reader.pos++;
                                message.preferences[key] = reader.bool();
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
                     * @memberof acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage} JudgingPreferencesMessage
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
                     * @memberof acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage
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
                                if (!$util.key32Re.test(key[i]))
                                    return "preferences: integer key{k:int32} expected";
                                if (typeof message.preferences[key[i]] !== "boolean")
                                    return "preferences: boolean{k:int32} expected";
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a JudgingPreferencesMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage} JudgingPreferencesMessage
                     */
                    JudgingPreferencesMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage();
                        if (object.preferences) {
                            if (typeof object.preferences !== "object")
                                throw TypeError(".acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage.preferences: object expected");
                            message.preferences = {};
                            for (var keys = Object.keys(object.preferences), i = 0; i < keys.length; ++i)
                                message.preferences[keys[i]] = Boolean(object.preferences[keys[i]]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a JudgingPreferencesMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage
                     * @static
                     * @param {acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage} message JudgingPreferencesMessage
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
                     * @memberof acmcsus.debugjudge.J2SMessage.JudgingPreferencesMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    JudgingPreferencesMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return JudgingPreferencesMessage;
                })();
    
                return J2SMessage;
            })();
    
            debugjudge.S2JMessage = (function() {
    
                /**
                 * Properties of a S2JMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IS2JMessage
                 * @property {acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage|null} [assignedSubmissionMessage] S2JMessage assignedSubmissionMessage
                 * @property {acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage|null} [judgingStatus] S2JMessage judgingStatus
                 */
    
                /**
                 * Constructs a new S2JMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a S2JMessage.
                 * @implements IS2JMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IS2JMessage=} [properties] Properties to set
                 */
                function S2JMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * S2JMessage assignedSubmissionMessage.
                 * @member {acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage|null|undefined} assignedSubmissionMessage
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @instance
                 */
                S2JMessage.prototype.assignedSubmissionMessage = null;
    
                /**
                 * S2JMessage judgingStatus.
                 * @member {acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage|null|undefined} judgingStatus
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @instance
                 */
                S2JMessage.prototype.judgingStatus = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * S2JMessage value.
                 * @member {"assignedSubmissionMessage"|"judgingStatus"|undefined} value
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @instance
                 */
                Object.defineProperty(S2JMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["assignedSubmissionMessage", "judgingStatus"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new S2JMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2JMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.S2JMessage} S2JMessage instance
                 */
                S2JMessage.create = function create(properties) {
                    return new S2JMessage(properties);
                };
    
                /**
                 * Encodes the specified S2JMessage message. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2JMessage} message S2JMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2JMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.assignedSubmissionMessage != null && message.hasOwnProperty("assignedSubmissionMessage"))
                        $root.acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage.encode(message.assignedSubmissionMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.judgingStatus != null && message.hasOwnProperty("judgingStatus"))
                        $root.acmcsus.debugjudge.S2JMessage.JudgingStatusMessage.encode(message.judgingStatus, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified S2JMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2JMessage} message S2JMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2JMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a S2JMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.S2JMessage} S2JMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                S2JMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2JMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.assignedSubmissionMessage = $root.acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.judgingStatus = $root.acmcsus.debugjudge.S2JMessage.JudgingStatusMessage.decode(reader, reader.uint32());
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
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.S2JMessage} S2JMessage
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
                 * @memberof acmcsus.debugjudge.S2JMessage
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
                            var error = $root.acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage.verify(message.assignedSubmissionMessage);
                            if (error)
                                return "assignedSubmissionMessage." + error;
                        }
                    }
                    if (message.judgingStatus != null && message.hasOwnProperty("judgingStatus")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2JMessage.JudgingStatusMessage.verify(message.judgingStatus);
                            if (error)
                                return "judgingStatus." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a S2JMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.S2JMessage} S2JMessage
                 */
                S2JMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.S2JMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.S2JMessage();
                    if (object.assignedSubmissionMessage != null) {
                        if (typeof object.assignedSubmissionMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2JMessage.assignedSubmissionMessage: object expected");
                        message.assignedSubmissionMessage = $root.acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage.fromObject(object.assignedSubmissionMessage);
                    }
                    if (object.judgingStatus != null) {
                        if (typeof object.judgingStatus !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2JMessage.judgingStatus: object expected");
                        message.judgingStatus = $root.acmcsus.debugjudge.S2JMessage.JudgingStatusMessage.fromObject(object.judgingStatus);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a S2JMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @static
                 * @param {acmcsus.debugjudge.S2JMessage} message S2JMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                S2JMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.assignedSubmissionMessage != null && message.hasOwnProperty("assignedSubmissionMessage")) {
                        object.assignedSubmissionMessage = $root.acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage.toObject(message.assignedSubmissionMessage, options);
                        if (options.oneofs)
                            object.value = "assignedSubmissionMessage";
                    }
                    if (message.judgingStatus != null && message.hasOwnProperty("judgingStatus")) {
                        object.judgingStatus = $root.acmcsus.debugjudge.S2JMessage.JudgingStatusMessage.toObject(message.judgingStatus, options);
                        if (options.oneofs)
                            object.value = "judgingStatus";
                    }
                    return object;
                };
    
                /**
                 * Converts this S2JMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.S2JMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                S2JMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                S2JMessage.AssignedSubmissionMessage = (function() {
    
                    /**
                     * Properties of an AssignedSubmissionMessage.
                     * @memberof acmcsus.debugjudge.S2JMessage
                     * @interface IAssignedSubmissionMessage
                     * @property {acmcsus.debugjudge.ISubmission|null} [submission] AssignedSubmissionMessage submission
                     */
    
                    /**
                     * Constructs a new AssignedSubmissionMessage.
                     * @memberof acmcsus.debugjudge.S2JMessage
                     * @classdesc Represents an AssignedSubmissionMessage.
                     * @implements IAssignedSubmissionMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage=} [properties] Properties to set
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
                     * @memberof acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage
                     * @instance
                     */
                    AssignedSubmissionMessage.prototype.submission = null;
    
                    /**
                     * Creates a new AssignedSubmissionMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage} AssignedSubmissionMessage instance
                     */
                    AssignedSubmissionMessage.create = function create(properties) {
                        return new AssignedSubmissionMessage(properties);
                    };
    
                    /**
                     * Encodes the specified AssignedSubmissionMessage message. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage} message AssignedSubmissionMessage message or plain object to encode
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
                     * Encodes the specified AssignedSubmissionMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2JMessage.IAssignedSubmissionMessage} message AssignedSubmissionMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AssignedSubmissionMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an AssignedSubmissionMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage} AssignedSubmissionMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AssignedSubmissionMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage();
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
                     * @memberof acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage} AssignedSubmissionMessage
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
                     * @memberof acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage
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
                     * @memberof acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage} AssignedSubmissionMessage
                     */
                    AssignedSubmissionMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage();
                        if (object.submission != null) {
                            if (typeof object.submission !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage.submission: object expected");
                            message.submission = $root.acmcsus.debugjudge.Submission.fromObject(object.submission);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an AssignedSubmissionMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage} message AssignedSubmissionMessage
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
                     * @memberof acmcsus.debugjudge.S2JMessage.AssignedSubmissionMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AssignedSubmissionMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return AssignedSubmissionMessage;
                })();
    
                S2JMessage.JudgingStatusMessage = (function() {
    
                    /**
                     * Properties of a JudgingStatusMessage.
                     * @memberof acmcsus.debugjudge.S2JMessage
                     * @interface IJudgingStatusMessage
                     * @property {boolean|null} [judging] JudgingStatusMessage judging
                     * @property {string|null} [message] JudgingStatusMessage message
                     */
    
                    /**
                     * Constructs a new JudgingStatusMessage.
                     * @memberof acmcsus.debugjudge.S2JMessage
                     * @classdesc Represents a JudgingStatusMessage.
                     * @implements IJudgingStatusMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage=} [properties] Properties to set
                     */
                    function JudgingStatusMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * JudgingStatusMessage judging.
                     * @member {boolean} judging
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @instance
                     */
                    JudgingStatusMessage.prototype.judging = false;
    
                    /**
                     * JudgingStatusMessage message.
                     * @member {string} message
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @instance
                     */
                    JudgingStatusMessage.prototype.message = "";
    
                    /**
                     * Creates a new JudgingStatusMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2JMessage.JudgingStatusMessage} JudgingStatusMessage instance
                     */
                    JudgingStatusMessage.create = function create(properties) {
                        return new JudgingStatusMessage(properties);
                    };
    
                    /**
                     * Encodes the specified JudgingStatusMessage message. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.JudgingStatusMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage} message JudgingStatusMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JudgingStatusMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.judging != null && message.hasOwnProperty("judging"))
                            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.judging);
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified JudgingStatusMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2JMessage.JudgingStatusMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2JMessage.IJudgingStatusMessage} message JudgingStatusMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JudgingStatusMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a JudgingStatusMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2JMessage.JudgingStatusMessage} JudgingStatusMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JudgingStatusMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2JMessage.JudgingStatusMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.judging = reader.bool();
                                break;
                            case 2:
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
                     * Decodes a JudgingStatusMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2JMessage.JudgingStatusMessage} JudgingStatusMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JudgingStatusMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a JudgingStatusMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    JudgingStatusMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.judging != null && message.hasOwnProperty("judging"))
                            if (typeof message.judging !== "boolean")
                                return "judging: boolean expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a JudgingStatusMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2JMessage.JudgingStatusMessage} JudgingStatusMessage
                     */
                    JudgingStatusMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2JMessage.JudgingStatusMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2JMessage.JudgingStatusMessage();
                        if (object.judging != null)
                            message.judging = Boolean(object.judging);
                        if (object.message != null)
                            message.message = String(object.message);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a JudgingStatusMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2JMessage.JudgingStatusMessage} message JudgingStatusMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JudgingStatusMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.judging = false;
                            object.message = "";
                        }
                        if (message.judging != null && message.hasOwnProperty("judging"))
                            object.judging = message.judging;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        return object;
                    };
    
                    /**
                     * Converts this JudgingStatusMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2JMessage.JudgingStatusMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    JudgingStatusMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return JudgingStatusMessage;
                })();
    
                return S2JMessage;
            })();
    
            debugjudge.A2SMessage = (function() {
    
                /**
                 * Properties of a A2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IA2SMessage
                 * @property {acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage|null} [changeCompetitionStateMessage] A2SMessage changeCompetitionStateMessage
                 */
    
                /**
                 * Constructs a new A2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a A2SMessage.
                 * @implements IA2SMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IA2SMessage=} [properties] Properties to set
                 */
                function A2SMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * A2SMessage changeCompetitionStateMessage.
                 * @member {acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage|null|undefined} changeCompetitionStateMessage
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @instance
                 */
                A2SMessage.prototype.changeCompetitionStateMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * A2SMessage value.
                 * @member {"changeCompetitionStateMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @instance
                 */
                Object.defineProperty(A2SMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["changeCompetitionStateMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new A2SMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IA2SMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.A2SMessage} A2SMessage instance
                 */
                A2SMessage.create = function create(properties) {
                    return new A2SMessage(properties);
                };
    
                /**
                 * Encodes the specified A2SMessage message. Does not implicitly {@link acmcsus.debugjudge.A2SMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IA2SMessage} message A2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                A2SMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.changeCompetitionStateMessage != null && message.hasOwnProperty("changeCompetitionStateMessage"))
                        $root.acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage.encode(message.changeCompetitionStateMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified A2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.A2SMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IA2SMessage} message A2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                A2SMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a A2SMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.A2SMessage} A2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                A2SMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.A2SMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.changeCompetitionStateMessage = $root.acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a A2SMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.A2SMessage} A2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                A2SMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a A2SMessage message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                A2SMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.changeCompetitionStateMessage != null && message.hasOwnProperty("changeCompetitionStateMessage")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage.verify(message.changeCompetitionStateMessage);
                            if (error)
                                return "changeCompetitionStateMessage." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a A2SMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.A2SMessage} A2SMessage
                 */
                A2SMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.A2SMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.A2SMessage();
                    if (object.changeCompetitionStateMessage != null) {
                        if (typeof object.changeCompetitionStateMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.A2SMessage.changeCompetitionStateMessage: object expected");
                        message.changeCompetitionStateMessage = $root.acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage.fromObject(object.changeCompetitionStateMessage);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a A2SMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.A2SMessage} message A2SMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                A2SMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.changeCompetitionStateMessage != null && message.hasOwnProperty("changeCompetitionStateMessage")) {
                        object.changeCompetitionStateMessage = $root.acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage.toObject(message.changeCompetitionStateMessage, options);
                        if (options.oneofs)
                            object.value = "changeCompetitionStateMessage";
                    }
                    return object;
                };
    
                /**
                 * Converts this A2SMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.A2SMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                A2SMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                A2SMessage.ChangeCompetitionStateMessage = (function() {
    
                    /**
                     * Properties of a ChangeCompetitionStateMessage.
                     * @memberof acmcsus.debugjudge.A2SMessage
                     * @interface IChangeCompetitionStateMessage
                     * @property {number|Long|null} [timeMillis] ChangeCompetitionStateMessage timeMillis
                     * @property {acmcsus.debugjudge.CompetitionState|null} [state] ChangeCompetitionStateMessage state
                     */
    
                    /**
                     * Constructs a new ChangeCompetitionStateMessage.
                     * @memberof acmcsus.debugjudge.A2SMessage
                     * @classdesc Represents a ChangeCompetitionStateMessage.
                     * @implements IChangeCompetitionStateMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage=} [properties] Properties to set
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
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
                     * @instance
                     */
                    ChangeCompetitionStateMessage.prototype.timeMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ChangeCompetitionStateMessage state.
                     * @member {acmcsus.debugjudge.CompetitionState} state
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
                     * @instance
                     */
                    ChangeCompetitionStateMessage.prototype.state = 0;
    
                    /**
                     * Creates a new ChangeCompetitionStateMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
                     * @static
                     * @param {acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage} ChangeCompetitionStateMessage instance
                     */
                    ChangeCompetitionStateMessage.create = function create(properties) {
                        return new ChangeCompetitionStateMessage(properties);
                    };
    
                    /**
                     * Encodes the specified ChangeCompetitionStateMessage message. Does not implicitly {@link acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
                     * @static
                     * @param {acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage} message ChangeCompetitionStateMessage message or plain object to encode
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
                     * Encodes the specified ChangeCompetitionStateMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
                     * @static
                     * @param {acmcsus.debugjudge.A2SMessage.IChangeCompetitionStateMessage} message ChangeCompetitionStateMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ChangeCompetitionStateMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ChangeCompetitionStateMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage} ChangeCompetitionStateMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ChangeCompetitionStateMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage();
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
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage} ChangeCompetitionStateMessage
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
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
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
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage} ChangeCompetitionStateMessage
                     */
                    ChangeCompetitionStateMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage();
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
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
                     * @static
                     * @param {acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage} message ChangeCompetitionStateMessage
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
                     * @memberof acmcsus.debugjudge.A2SMessage.ChangeCompetitionStateMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ChangeCompetitionStateMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ChangeCompetitionStateMessage;
                })();
    
                return A2SMessage;
            })();
    
            debugjudge.S2AMessage = (function() {
    
                /**
                 * Properties of a S2AMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IS2AMessage
                 * @property {acmcsus.debugjudge.S2AMessage.IStatusAppendMessage|null} [statusAppendMessage] S2AMessage statusAppendMessage
                 */
    
                /**
                 * Constructs a new S2AMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a S2AMessage.
                 * @implements IS2AMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IS2AMessage=} [properties] Properties to set
                 */
                function S2AMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * S2AMessage statusAppendMessage.
                 * @member {acmcsus.debugjudge.S2AMessage.IStatusAppendMessage|null|undefined} statusAppendMessage
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @instance
                 */
                S2AMessage.prototype.statusAppendMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * S2AMessage value.
                 * @member {"statusAppendMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @instance
                 */
                Object.defineProperty(S2AMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["statusAppendMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new S2AMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2AMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.S2AMessage} S2AMessage instance
                 */
                S2AMessage.create = function create(properties) {
                    return new S2AMessage(properties);
                };
    
                /**
                 * Encodes the specified S2AMessage message. Does not implicitly {@link acmcsus.debugjudge.S2AMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2AMessage} message S2AMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2AMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.statusAppendMessage != null && message.hasOwnProperty("statusAppendMessage"))
                        $root.acmcsus.debugjudge.S2AMessage.StatusAppendMessage.encode(message.statusAppendMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified S2AMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2AMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2AMessage} message S2AMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2AMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a S2AMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.S2AMessage} S2AMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                S2AMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2AMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.statusAppendMessage = $root.acmcsus.debugjudge.S2AMessage.StatusAppendMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a S2AMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.S2AMessage} S2AMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                S2AMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a S2AMessage message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                S2AMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.statusAppendMessage != null && message.hasOwnProperty("statusAppendMessage")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2AMessage.StatusAppendMessage.verify(message.statusAppendMessage);
                            if (error)
                                return "statusAppendMessage." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a S2AMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.S2AMessage} S2AMessage
                 */
                S2AMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.S2AMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.S2AMessage();
                    if (object.statusAppendMessage != null) {
                        if (typeof object.statusAppendMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2AMessage.statusAppendMessage: object expected");
                        message.statusAppendMessage = $root.acmcsus.debugjudge.S2AMessage.StatusAppendMessage.fromObject(object.statusAppendMessage);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a S2AMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @static
                 * @param {acmcsus.debugjudge.S2AMessage} message S2AMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                S2AMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.statusAppendMessage != null && message.hasOwnProperty("statusAppendMessage")) {
                        object.statusAppendMessage = $root.acmcsus.debugjudge.S2AMessage.StatusAppendMessage.toObject(message.statusAppendMessage, options);
                        if (options.oneofs)
                            object.value = "statusAppendMessage";
                    }
                    return object;
                };
    
                /**
                 * Converts this S2AMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.S2AMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                S2AMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                S2AMessage.StatusAppendMessage = (function() {
    
                    /**
                     * Properties of a StatusAppendMessage.
                     * @memberof acmcsus.debugjudge.S2AMessage
                     * @interface IStatusAppendMessage
                     * @property {string|null} [value] StatusAppendMessage value
                     */
    
                    /**
                     * Constructs a new StatusAppendMessage.
                     * @memberof acmcsus.debugjudge.S2AMessage
                     * @classdesc Represents a StatusAppendMessage.
                     * @implements IStatusAppendMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2AMessage.IStatusAppendMessage=} [properties] Properties to set
                     */
                    function StatusAppendMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * StatusAppendMessage value.
                     * @member {string} value
                     * @memberof acmcsus.debugjudge.S2AMessage.StatusAppendMessage
                     * @instance
                     */
                    StatusAppendMessage.prototype.value = "";
    
                    /**
                     * Creates a new StatusAppendMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2AMessage.StatusAppendMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AMessage.IStatusAppendMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2AMessage.StatusAppendMessage} StatusAppendMessage instance
                     */
                    StatusAppendMessage.create = function create(properties) {
                        return new StatusAppendMessage(properties);
                    };
    
                    /**
                     * Encodes the specified StatusAppendMessage message. Does not implicitly {@link acmcsus.debugjudge.S2AMessage.StatusAppendMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2AMessage.StatusAppendMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AMessage.IStatusAppendMessage} message StatusAppendMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StatusAppendMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && message.hasOwnProperty("value"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified StatusAppendMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2AMessage.StatusAppendMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2AMessage.StatusAppendMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AMessage.IStatusAppendMessage} message StatusAppendMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StatusAppendMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a StatusAppendMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2AMessage.StatusAppendMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2AMessage.StatusAppendMessage} StatusAppendMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StatusAppendMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2AMessage.StatusAppendMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.value = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a StatusAppendMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2AMessage.StatusAppendMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2AMessage.StatusAppendMessage} StatusAppendMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StatusAppendMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a StatusAppendMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2AMessage.StatusAppendMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StatusAppendMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value"))
                            if (!$util.isString(message.value))
                                return "value: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a StatusAppendMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2AMessage.StatusAppendMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2AMessage.StatusAppendMessage} StatusAppendMessage
                     */
                    StatusAppendMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2AMessage.StatusAppendMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2AMessage.StatusAppendMessage();
                        if (object.value != null)
                            message.value = String(object.value);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a StatusAppendMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2AMessage.StatusAppendMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AMessage.StatusAppendMessage} message StatusAppendMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StatusAppendMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.value = "";
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = message.value;
                        return object;
                    };
    
                    /**
                     * Converts this StatusAppendMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2AMessage.StatusAppendMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StatusAppendMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return StatusAppendMessage;
                })();
    
                return S2AMessage;
            })();
    
            debugjudge.AJ2SMessage = (function() {
    
                /**
                 * Properties of a AJ2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IAJ2SMessage
                 * @property {acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage|null} [submissionJudgementMessage] AJ2SMessage submissionJudgementMessage
                 */
    
                /**
                 * Constructs a new AJ2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a AJ2SMessage.
                 * @implements IAJ2SMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IAJ2SMessage=} [properties] Properties to set
                 */
                function AJ2SMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * AJ2SMessage submissionJudgementMessage.
                 * @member {acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage|null|undefined} submissionJudgementMessage
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @instance
                 */
                AJ2SMessage.prototype.submissionJudgementMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * AJ2SMessage value.
                 * @member {"submissionJudgementMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @instance
                 */
                Object.defineProperty(AJ2SMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["submissionJudgementMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new AJ2SMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IAJ2SMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.AJ2SMessage} AJ2SMessage instance
                 */
                AJ2SMessage.create = function create(properties) {
                    return new AJ2SMessage(properties);
                };
    
                /**
                 * Encodes the specified AJ2SMessage message. Does not implicitly {@link acmcsus.debugjudge.AJ2SMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IAJ2SMessage} message AJ2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AJ2SMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.submissionJudgementMessage != null && message.hasOwnProperty("submissionJudgementMessage"))
                        $root.acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.encode(message.submissionJudgementMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified AJ2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.AJ2SMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IAJ2SMessage} message AJ2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AJ2SMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a AJ2SMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.AJ2SMessage} AJ2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AJ2SMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.AJ2SMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 3:
                            message.submissionJudgementMessage = $root.acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a AJ2SMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.AJ2SMessage} AJ2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AJ2SMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a AJ2SMessage message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AJ2SMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.submissionJudgementMessage != null && message.hasOwnProperty("submissionJudgementMessage")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.verify(message.submissionJudgementMessage);
                            if (error)
                                return "submissionJudgementMessage." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a AJ2SMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.AJ2SMessage} AJ2SMessage
                 */
                AJ2SMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.AJ2SMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.AJ2SMessage();
                    if (object.submissionJudgementMessage != null) {
                        if (typeof object.submissionJudgementMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.AJ2SMessage.submissionJudgementMessage: object expected");
                        message.submissionJudgementMessage = $root.acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.fromObject(object.submissionJudgementMessage);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a AJ2SMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.AJ2SMessage} message AJ2SMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AJ2SMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.submissionJudgementMessage != null && message.hasOwnProperty("submissionJudgementMessage")) {
                        object.submissionJudgementMessage = $root.acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.toObject(message.submissionJudgementMessage, options);
                        if (options.oneofs)
                            object.value = "submissionJudgementMessage";
                    }
                    return object;
                };
    
                /**
                 * Converts this AJ2SMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.AJ2SMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AJ2SMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                AJ2SMessage.AutoJudgeResultMessage = (function() {
    
                    /**
                     * Properties of an AutoJudgeResultMessage.
                     * @memberof acmcsus.debugjudge.AJ2SMessage
                     * @interface IAutoJudgeResultMessage
                     * @property {number|null} [teamId] AutoJudgeResultMessage teamId
                     * @property {number|null} [problemId] AutoJudgeResultMessage problemId
                     * @property {number|Long|null} [submissionId] AutoJudgeResultMessage submissionId
                     * @property {acmcsus.debugjudge.IExecutionResult|null} [compileResult] AutoJudgeResultMessage compileResult
                     * @property {Object.<string,acmcsus.debugjudge.IExecutionResult>|null} [caseResults] AutoJudgeResultMessage caseResults
                     * @property {acmcsus.debugjudge.SubmissionJudgement|null} [preliminaryJudgement] AutoJudgeResultMessage preliminaryJudgement
                     * @property {string|null} [preliminaryJudgementMessage] AutoJudgeResultMessage preliminaryJudgementMessage
                     */
    
                    /**
                     * Constructs a new AutoJudgeResultMessage.
                     * @memberof acmcsus.debugjudge.AJ2SMessage
                     * @classdesc Represents an AutoJudgeResultMessage.
                     * @implements IAutoJudgeResultMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage=} [properties] Properties to set
                     */
                    function AutoJudgeResultMessage(properties) {
                        this.caseResults = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * AutoJudgeResultMessage teamId.
                     * @member {number} teamId
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @instance
                     */
                    AutoJudgeResultMessage.prototype.teamId = 0;
    
                    /**
                     * AutoJudgeResultMessage problemId.
                     * @member {number} problemId
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @instance
                     */
                    AutoJudgeResultMessage.prototype.problemId = 0;
    
                    /**
                     * AutoJudgeResultMessage submissionId.
                     * @member {number|Long} submissionId
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @instance
                     */
                    AutoJudgeResultMessage.prototype.submissionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * AutoJudgeResultMessage compileResult.
                     * @member {acmcsus.debugjudge.IExecutionResult|null|undefined} compileResult
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @instance
                     */
                    AutoJudgeResultMessage.prototype.compileResult = null;
    
                    /**
                     * AutoJudgeResultMessage caseResults.
                     * @member {Object.<string,acmcsus.debugjudge.IExecutionResult>} caseResults
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @instance
                     */
                    AutoJudgeResultMessage.prototype.caseResults = $util.emptyObject;
    
                    /**
                     * AutoJudgeResultMessage preliminaryJudgement.
                     * @member {acmcsus.debugjudge.SubmissionJudgement} preliminaryJudgement
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @instance
                     */
                    AutoJudgeResultMessage.prototype.preliminaryJudgement = 0;
    
                    /**
                     * AutoJudgeResultMessage preliminaryJudgementMessage.
                     * @member {string} preliminaryJudgementMessage
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @instance
                     */
                    AutoJudgeResultMessage.prototype.preliminaryJudgementMessage = "";
    
                    /**
                     * Creates a new AutoJudgeResultMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @static
                     * @param {acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage} AutoJudgeResultMessage instance
                     */
                    AutoJudgeResultMessage.create = function create(properties) {
                        return new AutoJudgeResultMessage(properties);
                    };
    
                    /**
                     * Encodes the specified AutoJudgeResultMessage message. Does not implicitly {@link acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @static
                     * @param {acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage} message AutoJudgeResultMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AutoJudgeResultMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamId);
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.problemId);
                        if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.submissionId);
                        if (message.compileResult != null && message.hasOwnProperty("compileResult"))
                            $root.acmcsus.debugjudge.ExecutionResult.encode(message.compileResult, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.caseResults != null && message.hasOwnProperty("caseResults"))
                            for (var keys = Object.keys(message.caseResults), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                                $root.acmcsus.debugjudge.ExecutionResult.encode(message.caseResults[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.preliminaryJudgement != null && message.hasOwnProperty("preliminaryJudgement"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.preliminaryJudgement);
                        if (message.preliminaryJudgementMessage != null && message.hasOwnProperty("preliminaryJudgementMessage"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.preliminaryJudgementMessage);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified AutoJudgeResultMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @static
                     * @param {acmcsus.debugjudge.AJ2SMessage.IAutoJudgeResultMessage} message AutoJudgeResultMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AutoJudgeResultMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an AutoJudgeResultMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage} AutoJudgeResultMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AutoJudgeResultMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int32();
                                break;
                            case 2:
                                message.problemId = reader.int32();
                                break;
                            case 3:
                                message.submissionId = reader.int64();
                                break;
                            case 4:
                                message.compileResult = $root.acmcsus.debugjudge.ExecutionResult.decode(reader, reader.uint32());
                                break;
                            case 5:
                                reader.skip().pos++;
                                if (message.caseResults === $util.emptyObject)
                                    message.caseResults = {};
                                key = reader.int32();
                                reader.pos++;
                                message.caseResults[key] = $root.acmcsus.debugjudge.ExecutionResult.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.preliminaryJudgement = reader.int32();
                                break;
                            case 7:
                                message.preliminaryJudgementMessage = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an AutoJudgeResultMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage} AutoJudgeResultMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AutoJudgeResultMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an AutoJudgeResultMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AutoJudgeResultMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId))
                                return "teamId: integer expected";
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            if (!$util.isInteger(message.problemId))
                                return "problemId: integer expected";
                        if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                            if (!$util.isInteger(message.submissionId) && !(message.submissionId && $util.isInteger(message.submissionId.low) && $util.isInteger(message.submissionId.high)))
                                return "submissionId: integer|Long expected";
                        if (message.compileResult != null && message.hasOwnProperty("compileResult")) {
                            var error = $root.acmcsus.debugjudge.ExecutionResult.verify(message.compileResult);
                            if (error)
                                return "compileResult." + error;
                        }
                        if (message.caseResults != null && message.hasOwnProperty("caseResults")) {
                            if (!$util.isObject(message.caseResults))
                                return "caseResults: object expected";
                            var key = Object.keys(message.caseResults);
                            for (var i = 0; i < key.length; ++i) {
                                if (!$util.key32Re.test(key[i]))
                                    return "caseResults: integer key{k:int32} expected";
                                {
                                    var error = $root.acmcsus.debugjudge.ExecutionResult.verify(message.caseResults[key[i]]);
                                    if (error)
                                        return "caseResults." + error;
                                }
                            }
                        }
                        if (message.preliminaryJudgement != null && message.hasOwnProperty("preliminaryJudgement"))
                            switch (message.preliminaryJudgement) {
                            default:
                                return "preliminaryJudgement: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.preliminaryJudgementMessage != null && message.hasOwnProperty("preliminaryJudgementMessage"))
                            if (!$util.isString(message.preliminaryJudgementMessage))
                                return "preliminaryJudgementMessage: string expected";
                        return null;
                    };
    
                    /**
                     * Creates an AutoJudgeResultMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage} AutoJudgeResultMessage
                     */
                    AutoJudgeResultMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage();
                        if (object.teamId != null)
                            message.teamId = object.teamId | 0;
                        if (object.problemId != null)
                            message.problemId = object.problemId | 0;
                        if (object.submissionId != null)
                            if ($util.Long)
                                (message.submissionId = $util.Long.fromValue(object.submissionId)).unsigned = false;
                            else if (typeof object.submissionId === "string")
                                message.submissionId = parseInt(object.submissionId, 10);
                            else if (typeof object.submissionId === "number")
                                message.submissionId = object.submissionId;
                            else if (typeof object.submissionId === "object")
                                message.submissionId = new $util.LongBits(object.submissionId.low >>> 0, object.submissionId.high >>> 0).toNumber();
                        if (object.compileResult != null) {
                            if (typeof object.compileResult !== "object")
                                throw TypeError(".acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.compileResult: object expected");
                            message.compileResult = $root.acmcsus.debugjudge.ExecutionResult.fromObject(object.compileResult);
                        }
                        if (object.caseResults) {
                            if (typeof object.caseResults !== "object")
                                throw TypeError(".acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.caseResults: object expected");
                            message.caseResults = {};
                            for (var keys = Object.keys(object.caseResults), i = 0; i < keys.length; ++i) {
                                if (typeof object.caseResults[keys[i]] !== "object")
                                    throw TypeError(".acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage.caseResults: object expected");
                                message.caseResults[keys[i]] = $root.acmcsus.debugjudge.ExecutionResult.fromObject(object.caseResults[keys[i]]);
                            }
                        }
                        switch (object.preliminaryJudgement) {
                        case "JUDGEMENT_UNKNOWN":
                        case 0:
                            message.preliminaryJudgement = 0;
                            break;
                        case "JUDGEMENT_SUCCESS":
                        case 1:
                            message.preliminaryJudgement = 1;
                            break;
                        case "JUDGEMENT_FAILURE":
                        case 2:
                            message.preliminaryJudgement = 2;
                            break;
                        }
                        if (object.preliminaryJudgementMessage != null)
                            message.preliminaryJudgementMessage = String(object.preliminaryJudgementMessage);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an AutoJudgeResultMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @static
                     * @param {acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage} message AutoJudgeResultMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AutoJudgeResultMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.caseResults = {};
                        if (options.defaults) {
                            object.teamId = 0;
                            object.problemId = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.submissionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.submissionId = options.longs === String ? "0" : 0;
                            object.compileResult = null;
                            object.preliminaryJudgement = options.enums === String ? "JUDGEMENT_UNKNOWN" : 0;
                            object.preliminaryJudgementMessage = "";
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            object.teamId = message.teamId;
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            object.problemId = message.problemId;
                        if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                            if (typeof message.submissionId === "number")
                                object.submissionId = options.longs === String ? String(message.submissionId) : message.submissionId;
                            else
                                object.submissionId = options.longs === String ? $util.Long.prototype.toString.call(message.submissionId) : options.longs === Number ? new $util.LongBits(message.submissionId.low >>> 0, message.submissionId.high >>> 0).toNumber() : message.submissionId;
                        if (message.compileResult != null && message.hasOwnProperty("compileResult"))
                            object.compileResult = $root.acmcsus.debugjudge.ExecutionResult.toObject(message.compileResult, options);
                        var keys2;
                        if (message.caseResults && (keys2 = Object.keys(message.caseResults)).length) {
                            object.caseResults = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.caseResults[keys2[j]] = $root.acmcsus.debugjudge.ExecutionResult.toObject(message.caseResults[keys2[j]], options);
                        }
                        if (message.preliminaryJudgement != null && message.hasOwnProperty("preliminaryJudgement"))
                            object.preliminaryJudgement = options.enums === String ? $root.acmcsus.debugjudge.SubmissionJudgement[message.preliminaryJudgement] : message.preliminaryJudgement;
                        if (message.preliminaryJudgementMessage != null && message.hasOwnProperty("preliminaryJudgementMessage"))
                            object.preliminaryJudgementMessage = message.preliminaryJudgementMessage;
                        return object;
                    };
    
                    /**
                     * Converts this AutoJudgeResultMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.AJ2SMessage.AutoJudgeResultMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AutoJudgeResultMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return AutoJudgeResultMessage;
                })();
    
                return AJ2SMessage;
            })();
    
            debugjudge.S2AJMessage = (function() {
    
                /**
                 * Properties of a S2AJMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IS2AJMessage
                 * @property {acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage|null} [executeSubmission] S2AJMessage executeSubmission
                 * @property {acmcsus.debugjudge.S2AJMessage.IReloadLanguagesMessage|null} [reloadLanguagesMessage] S2AJMessage reloadLanguagesMessage
                 */
    
                /**
                 * Constructs a new S2AJMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a S2AJMessage.
                 * @implements IS2AJMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IS2AJMessage=} [properties] Properties to set
                 */
                function S2AJMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * S2AJMessage executeSubmission.
                 * @member {acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage|null|undefined} executeSubmission
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @instance
                 */
                S2AJMessage.prototype.executeSubmission = null;
    
                /**
                 * S2AJMessage reloadLanguagesMessage.
                 * @member {acmcsus.debugjudge.S2AJMessage.IReloadLanguagesMessage|null|undefined} reloadLanguagesMessage
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @instance
                 */
                S2AJMessage.prototype.reloadLanguagesMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * S2AJMessage value.
                 * @member {"executeSubmission"|"reloadLanguagesMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @instance
                 */
                Object.defineProperty(S2AJMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["executeSubmission", "reloadLanguagesMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new S2AJMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2AJMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.S2AJMessage} S2AJMessage instance
                 */
                S2AJMessage.create = function create(properties) {
                    return new S2AJMessage(properties);
                };
    
                /**
                 * Encodes the specified S2AJMessage message. Does not implicitly {@link acmcsus.debugjudge.S2AJMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2AJMessage} message S2AJMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2AJMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.executeSubmission != null && message.hasOwnProperty("executeSubmission"))
                        $root.acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage.encode(message.executeSubmission, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.reloadLanguagesMessage != null && message.hasOwnProperty("reloadLanguagesMessage"))
                        $root.acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage.encode(message.reloadLanguagesMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified S2AJMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2AJMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2AJMessage} message S2AJMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2AJMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a S2AJMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.S2AJMessage} S2AJMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                S2AJMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2AJMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.executeSubmission = $root.acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.reloadLanguagesMessage = $root.acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a S2AJMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.S2AJMessage} S2AJMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                S2AJMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a S2AJMessage message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                S2AJMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.executeSubmission != null && message.hasOwnProperty("executeSubmission")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage.verify(message.executeSubmission);
                            if (error)
                                return "executeSubmission." + error;
                        }
                    }
                    if (message.reloadLanguagesMessage != null && message.hasOwnProperty("reloadLanguagesMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage.verify(message.reloadLanguagesMessage);
                            if (error)
                                return "reloadLanguagesMessage." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a S2AJMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.S2AJMessage} S2AJMessage
                 */
                S2AJMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.S2AJMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.S2AJMessage();
                    if (object.executeSubmission != null) {
                        if (typeof object.executeSubmission !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2AJMessage.executeSubmission: object expected");
                        message.executeSubmission = $root.acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage.fromObject(object.executeSubmission);
                    }
                    if (object.reloadLanguagesMessage != null) {
                        if (typeof object.reloadLanguagesMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2AJMessage.reloadLanguagesMessage: object expected");
                        message.reloadLanguagesMessage = $root.acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage.fromObject(object.reloadLanguagesMessage);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a S2AJMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @static
                 * @param {acmcsus.debugjudge.S2AJMessage} message S2AJMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                S2AJMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.executeSubmission != null && message.hasOwnProperty("executeSubmission")) {
                        object.executeSubmission = $root.acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage.toObject(message.executeSubmission, options);
                        if (options.oneofs)
                            object.value = "executeSubmission";
                    }
                    if (message.reloadLanguagesMessage != null && message.hasOwnProperty("reloadLanguagesMessage")) {
                        object.reloadLanguagesMessage = $root.acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage.toObject(message.reloadLanguagesMessage, options);
                        if (options.oneofs)
                            object.value = "reloadLanguagesMessage";
                    }
                    return object;
                };
    
                /**
                 * Converts this S2AJMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.S2AJMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                S2AJMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                S2AJMessage.ExecuteSubmissionMessage = (function() {
    
                    /**
                     * Properties of an ExecuteSubmissionMessage.
                     * @memberof acmcsus.debugjudge.S2AJMessage
                     * @interface IExecuteSubmissionMessage
                     * @property {acmcsus.debugjudge.ISubmission|null} [submission] ExecuteSubmissionMessage submission
                     */
    
                    /**
                     * Constructs a new ExecuteSubmissionMessage.
                     * @memberof acmcsus.debugjudge.S2AJMessage
                     * @classdesc Represents an ExecuteSubmissionMessage.
                     * @implements IExecuteSubmissionMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage=} [properties] Properties to set
                     */
                    function ExecuteSubmissionMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExecuteSubmissionMessage submission.
                     * @member {acmcsus.debugjudge.ISubmission|null|undefined} submission
                     * @memberof acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage
                     * @instance
                     */
                    ExecuteSubmissionMessage.prototype.submission = null;
    
                    /**
                     * Creates a new ExecuteSubmissionMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage} ExecuteSubmissionMessage instance
                     */
                    ExecuteSubmissionMessage.create = function create(properties) {
                        return new ExecuteSubmissionMessage(properties);
                    };
    
                    /**
                     * Encodes the specified ExecuteSubmissionMessage message. Does not implicitly {@link acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage} message ExecuteSubmissionMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExecuteSubmissionMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.submission != null && message.hasOwnProperty("submission"))
                            $root.acmcsus.debugjudge.Submission.encode(message.submission, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExecuteSubmissionMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AJMessage.IExecuteSubmissionMessage} message ExecuteSubmissionMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExecuteSubmissionMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExecuteSubmissionMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage} ExecuteSubmissionMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExecuteSubmissionMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage();
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
                     * Decodes an ExecuteSubmissionMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage} ExecuteSubmissionMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExecuteSubmissionMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExecuteSubmissionMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExecuteSubmissionMessage.verify = function verify(message) {
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
                     * Creates an ExecuteSubmissionMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage} ExecuteSubmissionMessage
                     */
                    ExecuteSubmissionMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage();
                        if (object.submission != null) {
                            if (typeof object.submission !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage.submission: object expected");
                            message.submission = $root.acmcsus.debugjudge.Submission.fromObject(object.submission);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExecuteSubmissionMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage} message ExecuteSubmissionMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExecuteSubmissionMessage.toObject = function toObject(message, options) {
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
                     * Converts this ExecuteSubmissionMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2AJMessage.ExecuteSubmissionMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExecuteSubmissionMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ExecuteSubmissionMessage;
                })();
    
                S2AJMessage.ReloadLanguagesMessage = (function() {
    
                    /**
                     * Properties of a ReloadLanguagesMessage.
                     * @memberof acmcsus.debugjudge.S2AJMessage
                     * @interface IReloadLanguagesMessage
                     * @property {acmcsus.debugjudge.ProgrammingLanguage.IList|null} [value] ReloadLanguagesMessage value
                     */
    
                    /**
                     * Constructs a new ReloadLanguagesMessage.
                     * @memberof acmcsus.debugjudge.S2AJMessage
                     * @classdesc Represents a ReloadLanguagesMessage.
                     * @implements IReloadLanguagesMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2AJMessage.IReloadLanguagesMessage=} [properties] Properties to set
                     */
                    function ReloadLanguagesMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReloadLanguagesMessage value.
                     * @member {acmcsus.debugjudge.ProgrammingLanguage.IList|null|undefined} value
                     * @memberof acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage
                     * @instance
                     */
                    ReloadLanguagesMessage.prototype.value = null;
    
                    /**
                     * Creates a new ReloadLanguagesMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AJMessage.IReloadLanguagesMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage} ReloadLanguagesMessage instance
                     */
                    ReloadLanguagesMessage.create = function create(properties) {
                        return new ReloadLanguagesMessage(properties);
                    };
    
                    /**
                     * Encodes the specified ReloadLanguagesMessage message. Does not implicitly {@link acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AJMessage.IReloadLanguagesMessage} message ReloadLanguagesMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReloadLanguagesMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && message.hasOwnProperty("value"))
                            $root.acmcsus.debugjudge.ProgrammingLanguage.List.encode(message.value, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReloadLanguagesMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AJMessage.IReloadLanguagesMessage} message ReloadLanguagesMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReloadLanguagesMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReloadLanguagesMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage} ReloadLanguagesMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReloadLanguagesMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.value = $root.acmcsus.debugjudge.ProgrammingLanguage.List.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReloadLanguagesMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage} ReloadLanguagesMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReloadLanguagesMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReloadLanguagesMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReloadLanguagesMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value")) {
                            var error = $root.acmcsus.debugjudge.ProgrammingLanguage.List.verify(message.value);
                            if (error)
                                return "value." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a ReloadLanguagesMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage} ReloadLanguagesMessage
                     */
                    ReloadLanguagesMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage();
                        if (object.value != null) {
                            if (typeof object.value !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage.value: object expected");
                            message.value = $root.acmcsus.debugjudge.ProgrammingLanguage.List.fromObject(object.value);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReloadLanguagesMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage} message ReloadLanguagesMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReloadLanguagesMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.value = null;
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = $root.acmcsus.debugjudge.ProgrammingLanguage.List.toObject(message.value, options);
                        return object;
                    };
    
                    /**
                     * Converts this ReloadLanguagesMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2AJMessage.ReloadLanguagesMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReloadLanguagesMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReloadLanguagesMessage;
                })();
    
                return S2AJMessage;
            })();
    
            debugjudge.S2BMessage = (function() {
    
                /**
                 * Properties of a S2BMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IS2BMessage
                 * @property {acmcsus.debugjudge.S2BMessage.IBalloonAssignmentMessage|null} [balloonAssignment] S2BMessage balloonAssignment
                 */
    
                /**
                 * Constructs a new S2BMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a S2BMessage.
                 * @implements IS2BMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IS2BMessage=} [properties] Properties to set
                 */
                function S2BMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * S2BMessage balloonAssignment.
                 * @member {acmcsus.debugjudge.S2BMessage.IBalloonAssignmentMessage|null|undefined} balloonAssignment
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @instance
                 */
                S2BMessage.prototype.balloonAssignment = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * S2BMessage value.
                 * @member {"balloonAssignment"|undefined} value
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @instance
                 */
                Object.defineProperty(S2BMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["balloonAssignment"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new S2BMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2BMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.S2BMessage} S2BMessage instance
                 */
                S2BMessage.create = function create(properties) {
                    return new S2BMessage(properties);
                };
    
                /**
                 * Encodes the specified S2BMessage message. Does not implicitly {@link acmcsus.debugjudge.S2BMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2BMessage} message S2BMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2BMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.balloonAssignment != null && message.hasOwnProperty("balloonAssignment"))
                        $root.acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage.encode(message.balloonAssignment, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified S2BMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2BMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @static
                 * @param {acmcsus.debugjudge.IS2BMessage} message S2BMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                S2BMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a S2BMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.S2BMessage} S2BMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                S2BMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2BMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.balloonAssignment = $root.acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a S2BMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.S2BMessage} S2BMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                S2BMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a S2BMessage message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                S2BMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.balloonAssignment != null && message.hasOwnProperty("balloonAssignment")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage.verify(message.balloonAssignment);
                            if (error)
                                return "balloonAssignment." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a S2BMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.S2BMessage} S2BMessage
                 */
                S2BMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.S2BMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.S2BMessage();
                    if (object.balloonAssignment != null) {
                        if (typeof object.balloonAssignment !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2BMessage.balloonAssignment: object expected");
                        message.balloonAssignment = $root.acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage.fromObject(object.balloonAssignment);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a S2BMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @static
                 * @param {acmcsus.debugjudge.S2BMessage} message S2BMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                S2BMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.balloonAssignment != null && message.hasOwnProperty("balloonAssignment")) {
                        object.balloonAssignment = $root.acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage.toObject(message.balloonAssignment, options);
                        if (options.oneofs)
                            object.value = "balloonAssignment";
                    }
                    return object;
                };
    
                /**
                 * Converts this S2BMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.S2BMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                S2BMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                S2BMessage.BalloonAssignmentMessage = (function() {
    
                    /**
                     * Properties of a BalloonAssignmentMessage.
                     * @memberof acmcsus.debugjudge.S2BMessage
                     * @interface IBalloonAssignmentMessage
                     * @property {number|null} [teamId] BalloonAssignmentMessage teamId
                     * @property {number|null} [problemId] BalloonAssignmentMessage problemId
                     */
    
                    /**
                     * Constructs a new BalloonAssignmentMessage.
                     * @memberof acmcsus.debugjudge.S2BMessage
                     * @classdesc Represents a BalloonAssignmentMessage.
                     * @implements IBalloonAssignmentMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2BMessage.IBalloonAssignmentMessage=} [properties] Properties to set
                     */
                    function BalloonAssignmentMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * BalloonAssignmentMessage teamId.
                     * @member {number} teamId
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @instance
                     */
                    BalloonAssignmentMessage.prototype.teamId = 0;
    
                    /**
                     * BalloonAssignmentMessage problemId.
                     * @member {number} problemId
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @instance
                     */
                    BalloonAssignmentMessage.prototype.problemId = 0;
    
                    /**
                     * Creates a new BalloonAssignmentMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2BMessage.IBalloonAssignmentMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage} BalloonAssignmentMessage instance
                     */
                    BalloonAssignmentMessage.create = function create(properties) {
                        return new BalloonAssignmentMessage(properties);
                    };
    
                    /**
                     * Encodes the specified BalloonAssignmentMessage message. Does not implicitly {@link acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2BMessage.IBalloonAssignmentMessage} message BalloonAssignmentMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BalloonAssignmentMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamId);
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.problemId);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified BalloonAssignmentMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2BMessage.IBalloonAssignmentMessage} message BalloonAssignmentMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BalloonAssignmentMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a BalloonAssignmentMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage} BalloonAssignmentMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BalloonAssignmentMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int32();
                                break;
                            case 2:
                                message.problemId = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a BalloonAssignmentMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage} BalloonAssignmentMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BalloonAssignmentMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a BalloonAssignmentMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BalloonAssignmentMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId))
                                return "teamId: integer expected";
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            if (!$util.isInteger(message.problemId))
                                return "problemId: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a BalloonAssignmentMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage} BalloonAssignmentMessage
                     */
                    BalloonAssignmentMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage();
                        if (object.teamId != null)
                            message.teamId = object.teamId | 0;
                        if (object.problemId != null)
                            message.problemId = object.problemId | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a BalloonAssignmentMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage} message BalloonAssignmentMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BalloonAssignmentMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.teamId = 0;
                            object.problemId = 0;
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            object.teamId = message.teamId;
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            object.problemId = message.problemId;
                        return object;
                    };
    
                    /**
                     * Converts this BalloonAssignmentMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2BMessage.BalloonAssignmentMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BalloonAssignmentMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return BalloonAssignmentMessage;
                })();
    
                return S2BMessage;
            })();
    
            debugjudge.B2SMessage = (function() {
    
                /**
                 * Properties of a B2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IB2SMessage
                 * @property {acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage|null} [balloonDeliveredMessage] B2SMessage balloonDeliveredMessage
                 */
    
                /**
                 * Constructs a new B2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a B2SMessage.
                 * @implements IB2SMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IB2SMessage=} [properties] Properties to set
                 */
                function B2SMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * B2SMessage balloonDeliveredMessage.
                 * @member {acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage|null|undefined} balloonDeliveredMessage
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @instance
                 */
                B2SMessage.prototype.balloonDeliveredMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * B2SMessage value.
                 * @member {"balloonDeliveredMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @instance
                 */
                Object.defineProperty(B2SMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["balloonDeliveredMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new B2SMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IB2SMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.B2SMessage} B2SMessage instance
                 */
                B2SMessage.create = function create(properties) {
                    return new B2SMessage(properties);
                };
    
                /**
                 * Encodes the specified B2SMessage message. Does not implicitly {@link acmcsus.debugjudge.B2SMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IB2SMessage} message B2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                B2SMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.balloonDeliveredMessage != null && message.hasOwnProperty("balloonDeliveredMessage"))
                        $root.acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage.encode(message.balloonDeliveredMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified B2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.B2SMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IB2SMessage} message B2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                B2SMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a B2SMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.B2SMessage} B2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                B2SMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.B2SMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.balloonDeliveredMessage = $root.acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a B2SMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.B2SMessage} B2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                B2SMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a B2SMessage message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                B2SMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.balloonDeliveredMessage != null && message.hasOwnProperty("balloonDeliveredMessage")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage.verify(message.balloonDeliveredMessage);
                            if (error)
                                return "balloonDeliveredMessage." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a B2SMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.B2SMessage} B2SMessage
                 */
                B2SMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.B2SMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.B2SMessage();
                    if (object.balloonDeliveredMessage != null) {
                        if (typeof object.balloonDeliveredMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.B2SMessage.balloonDeliveredMessage: object expected");
                        message.balloonDeliveredMessage = $root.acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage.fromObject(object.balloonDeliveredMessage);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a B2SMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.B2SMessage} message B2SMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                B2SMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.balloonDeliveredMessage != null && message.hasOwnProperty("balloonDeliveredMessage")) {
                        object.balloonDeliveredMessage = $root.acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage.toObject(message.balloonDeliveredMessage, options);
                        if (options.oneofs)
                            object.value = "balloonDeliveredMessage";
                    }
                    return object;
                };
    
                /**
                 * Converts this B2SMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.B2SMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                B2SMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                B2SMessage.BalloonDeliveredMessage = (function() {
    
                    /**
                     * Properties of a BalloonDeliveredMessage.
                     * @memberof acmcsus.debugjudge.B2SMessage
                     * @interface IBalloonDeliveredMessage
                     * @property {number|null} [teamId] BalloonDeliveredMessage teamId
                     * @property {number|null} [problemId] BalloonDeliveredMessage problemId
                     */
    
                    /**
                     * Constructs a new BalloonDeliveredMessage.
                     * @memberof acmcsus.debugjudge.B2SMessage
                     * @classdesc Represents a BalloonDeliveredMessage.
                     * @implements IBalloonDeliveredMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage=} [properties] Properties to set
                     */
                    function BalloonDeliveredMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * BalloonDeliveredMessage teamId.
                     * @member {number} teamId
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @instance
                     */
                    BalloonDeliveredMessage.prototype.teamId = 0;
    
                    /**
                     * BalloonDeliveredMessage problemId.
                     * @member {number} problemId
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @instance
                     */
                    BalloonDeliveredMessage.prototype.problemId = 0;
    
                    /**
                     * Creates a new BalloonDeliveredMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @static
                     * @param {acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage} BalloonDeliveredMessage instance
                     */
                    BalloonDeliveredMessage.create = function create(properties) {
                        return new BalloonDeliveredMessage(properties);
                    };
    
                    /**
                     * Encodes the specified BalloonDeliveredMessage message. Does not implicitly {@link acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @static
                     * @param {acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage} message BalloonDeliveredMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BalloonDeliveredMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamId);
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.problemId);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified BalloonDeliveredMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @static
                     * @param {acmcsus.debugjudge.B2SMessage.IBalloonDeliveredMessage} message BalloonDeliveredMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BalloonDeliveredMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a BalloonDeliveredMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage} BalloonDeliveredMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BalloonDeliveredMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int32();
                                break;
                            case 2:
                                message.problemId = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a BalloonDeliveredMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage} BalloonDeliveredMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BalloonDeliveredMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a BalloonDeliveredMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BalloonDeliveredMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId))
                                return "teamId: integer expected";
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            if (!$util.isInteger(message.problemId))
                                return "problemId: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a BalloonDeliveredMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage} BalloonDeliveredMessage
                     */
                    BalloonDeliveredMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage();
                        if (object.teamId != null)
                            message.teamId = object.teamId | 0;
                        if (object.problemId != null)
                            message.problemId = object.problemId | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a BalloonDeliveredMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @static
                     * @param {acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage} message BalloonDeliveredMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BalloonDeliveredMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.teamId = 0;
                            object.problemId = 0;
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            object.teamId = message.teamId;
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            object.problemId = message.problemId;
                        return object;
                    };
    
                    /**
                     * Converts this BalloonDeliveredMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.B2SMessage.BalloonDeliveredMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BalloonDeliveredMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return BalloonDeliveredMessage;
                })();
    
                return B2SMessage;
            })();
    
            debugjudge.R2SMessage = (function() {
    
                /**
                 * Properties of a R2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IR2SMessage
                 * @property {acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage|null} [message] R2SMessage message
                 */
    
                /**
                 * Constructs a new R2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a R2SMessage.
                 * @implements IR2SMessage
                 * @constructor
                 * @param {acmcsus.debugjudge.IR2SMessage=} [properties] Properties to set
                 */
                function R2SMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * R2SMessage message.
                 * @member {acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage|null|undefined} message
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @instance
                 */
                R2SMessage.prototype.message = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * R2SMessage value.
                 * @member {"message"|undefined} value
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @instance
                 */
                Object.defineProperty(R2SMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["message"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new R2SMessage instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IR2SMessage=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.R2SMessage} R2SMessage instance
                 */
                R2SMessage.create = function create(properties) {
                    return new R2SMessage(properties);
                };
    
                /**
                 * Encodes the specified R2SMessage message. Does not implicitly {@link acmcsus.debugjudge.R2SMessage.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IR2SMessage} message R2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                R2SMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message != null && message.hasOwnProperty("message"))
                        $root.acmcsus.debugjudge.R2SMessage.RegisterTeamMessage.encode(message.message, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified R2SMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.R2SMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.IR2SMessage} message R2SMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                R2SMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a R2SMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.R2SMessage} R2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                R2SMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.R2SMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.message = $root.acmcsus.debugjudge.R2SMessage.RegisterTeamMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a R2SMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.R2SMessage} R2SMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                R2SMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a R2SMessage message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                R2SMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.message != null && message.hasOwnProperty("message")) {
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.R2SMessage.RegisterTeamMessage.verify(message.message);
                            if (error)
                                return "message." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a R2SMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.R2SMessage} R2SMessage
                 */
                R2SMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.R2SMessage)
                        return object;
                    var message = new $root.acmcsus.debugjudge.R2SMessage();
                    if (object.message != null) {
                        if (typeof object.message !== "object")
                            throw TypeError(".acmcsus.debugjudge.R2SMessage.message: object expected");
                        message.message = $root.acmcsus.debugjudge.R2SMessage.RegisterTeamMessage.fromObject(object.message);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a R2SMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @static
                 * @param {acmcsus.debugjudge.R2SMessage} message R2SMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                R2SMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.message != null && message.hasOwnProperty("message")) {
                        object.message = $root.acmcsus.debugjudge.R2SMessage.RegisterTeamMessage.toObject(message.message, options);
                        if (options.oneofs)
                            object.value = "message";
                    }
                    return object;
                };
    
                /**
                 * Converts this R2SMessage to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.R2SMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                R2SMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                R2SMessage.RegisterTeamMessage = (function() {
    
                    /**
                     * Properties of a RegisterTeamMessage.
                     * @memberof acmcsus.debugjudge.R2SMessage
                     * @interface IRegisterTeamMessage
                     * @property {number|null} [teamId] RegisterTeamMessage teamId
                     * @property {number|null} [problemId] RegisterTeamMessage problemId
                     * @property {number|Long|null} [submissionId] RegisterTeamMessage submissionId
                     * @property {acmcsus.debugjudge.SubmissionJudgement|null} [ruling] RegisterTeamMessage ruling
                     */
    
                    /**
                     * Constructs a new RegisterTeamMessage.
                     * @memberof acmcsus.debugjudge.R2SMessage
                     * @classdesc Represents a RegisterTeamMessage.
                     * @implements IRegisterTeamMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage=} [properties] Properties to set
                     */
                    function RegisterTeamMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegisterTeamMessage teamId.
                     * @member {number} teamId
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @instance
                     */
                    RegisterTeamMessage.prototype.teamId = 0;
    
                    /**
                     * RegisterTeamMessage problemId.
                     * @member {number} problemId
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @instance
                     */
                    RegisterTeamMessage.prototype.problemId = 0;
    
                    /**
                     * RegisterTeamMessage submissionId.
                     * @member {number|Long} submissionId
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @instance
                     */
                    RegisterTeamMessage.prototype.submissionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * RegisterTeamMessage ruling.
                     * @member {acmcsus.debugjudge.SubmissionJudgement} ruling
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @instance
                     */
                    RegisterTeamMessage.prototype.ruling = 0;
    
                    /**
                     * Creates a new RegisterTeamMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @static
                     * @param {acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.R2SMessage.RegisterTeamMessage} RegisterTeamMessage instance
                     */
                    RegisterTeamMessage.create = function create(properties) {
                        return new RegisterTeamMessage(properties);
                    };
    
                    /**
                     * Encodes the specified RegisterTeamMessage message. Does not implicitly {@link acmcsus.debugjudge.R2SMessage.RegisterTeamMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @static
                     * @param {acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage} message RegisterTeamMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegisterTeamMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamId);
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.problemId);
                        if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.submissionId);
                        if (message.ruling != null && message.hasOwnProperty("ruling"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ruling);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegisterTeamMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.R2SMessage.RegisterTeamMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @static
                     * @param {acmcsus.debugjudge.R2SMessage.IRegisterTeamMessage} message RegisterTeamMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegisterTeamMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegisterTeamMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.R2SMessage.RegisterTeamMessage} RegisterTeamMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegisterTeamMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.R2SMessage.RegisterTeamMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int32();
                                break;
                            case 2:
                                message.problemId = reader.int32();
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
                     * Decodes a RegisterTeamMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.R2SMessage.RegisterTeamMessage} RegisterTeamMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegisterTeamMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegisterTeamMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegisterTeamMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId))
                                return "teamId: integer expected";
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            if (!$util.isInteger(message.problemId))
                                return "problemId: integer expected";
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
                     * Creates a RegisterTeamMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.R2SMessage.RegisterTeamMessage} RegisterTeamMessage
                     */
                    RegisterTeamMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.R2SMessage.RegisterTeamMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.R2SMessage.RegisterTeamMessage();
                        if (object.teamId != null)
                            message.teamId = object.teamId | 0;
                        if (object.problemId != null)
                            message.problemId = object.problemId | 0;
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
                     * Creates a plain object from a RegisterTeamMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @static
                     * @param {acmcsus.debugjudge.R2SMessage.RegisterTeamMessage} message RegisterTeamMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegisterTeamMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.teamId = 0;
                            object.problemId = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.submissionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.submissionId = options.longs === String ? "0" : 0;
                            object.ruling = options.enums === String ? "JUDGEMENT_UNKNOWN" : 0;
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            object.teamId = message.teamId;
                        if (message.problemId != null && message.hasOwnProperty("problemId"))
                            object.problemId = message.problemId;
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
                     * Converts this RegisterTeamMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.R2SMessage.RegisterTeamMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegisterTeamMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegisterTeamMessage;
                })();
    
                return R2SMessage;
            })();
    
            return debugjudge;
        })();
    
        return acmcsus;
    })();

    return $root;
});
