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
             * @property {number} SUCCESS=0 SUCCESS value
             * @property {number} FAILURE=1 FAILURE value
             * @property {number} DEFERRED=2 DEFERRED value
             */
            debugjudge.SubmissionJudgement = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SUCCESS"] = 0;
                values[valuesById[1] = "FAILURE"] = 1;
                values[valuesById[2] = "DEFERRED"] = 2;
                return values;
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
                        return new $root.acmcsus.debugjudge.C2SMessage.T2SMessage();
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
                    T2SMessage.toObject = function toObject() {
                        return {};
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
                            if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.submissionId);
                            if (message.ruling != null && message.hasOwnProperty("ruling"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ruling);
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
                                    message.submissionId = reader.int64();
                                    break;
                                case 2:
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
                            case "SUCCESS":
                            case 0:
                                message.ruling = 0;
                                break;
                            case "FAILURE":
                            case 1:
                                message.ruling = 1;
                                break;
                            case "DEFERRED":
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
                                    object.submissionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.submissionId = options.longs === String ? "0" : 0;
                                object.ruling = options.enums === String ? "SUCCESS" : 0;
                            }
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
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * S2CMessage value.
                 * @member {"s2tMessage"|"s2jMessage"|"debugMessage"|"alertMessage"|"loginResultMessage"|"notificationMessage"|"competitionStateChangedMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                Object.defineProperty(S2CMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["s2tMessage", "s2jMessage", "debugMessage", "alertMessage", "loginResultMessage", "notificationMessage", "competitionStateChangedMessage"]),
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
    
                S2CMessage.S2TMessage = (function() {
    
                    /**
                     * Properties of a S2TMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface IS2TMessage
                     * @property {acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage|null} [submissionResultMessage] S2TMessage submissionResultMessage
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
                     * S2TMessage submissionResultMessage.
                     * @member {acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage|null|undefined} submissionResultMessage
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @instance
                     */
                    S2TMessage.prototype.submissionResultMessage = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * S2TMessage value.
                     * @member {"submissionResultMessage"|undefined} value
                     * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                     * @instance
                     */
                    Object.defineProperty(S2TMessage.prototype, "value", {
                        get: $util.oneOfGetter($oneOfFields = ["submissionResultMessage"]),
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
                        if (message.submissionResultMessage != null && message.hasOwnProperty("submissionResultMessage"))
                            $root.acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage.encode(message.submissionResultMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                                message.submissionResultMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage.decode(reader, reader.uint32());
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
                        if (message.submissionResultMessage != null && message.hasOwnProperty("submissionResultMessage")) {
                            properties.value = 1;
                            {
                                var error = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage.verify(message.submissionResultMessage);
                                if (error)
                                    return "submissionResultMessage." + error;
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
                        if (object.submissionResultMessage != null) {
                            if (typeof object.submissionResultMessage !== "object")
                                throw TypeError(".acmcsus.debugjudge.S2CMessage.S2TMessage.submissionResultMessage: object expected");
                            message.submissionResultMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage.fromObject(object.submissionResultMessage);
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
                        if (message.submissionResultMessage != null && message.hasOwnProperty("submissionResultMessage")) {
                            object.submissionResultMessage = $root.acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage.toObject(message.submissionResultMessage, options);
                            if (options.oneofs)
                                object.value = "submissionResultMessage";
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
    
                    S2TMessage.SubmissionJudgedMessage = (function() {
    
                        /**
                         * Properties of a SubmissionJudgedMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                         * @interface ISubmissionJudgedMessage
                         * @property {number|Long|null} [submissionId] SubmissionJudgedMessage submissionId
                         * @property {acmcsus.debugjudge.SubmissionJudgement|null} [result] SubmissionJudgedMessage result
                         */
    
                        /**
                         * Constructs a new SubmissionJudgedMessage.
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage
                         * @classdesc Represents a SubmissionJudgedMessage.
                         * @implements ISubmissionJudgedMessage
                         * @constructor
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage=} [properties] Properties to set
                         */
                        function SubmissionJudgedMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * SubmissionJudgedMessage submissionId.
                         * @member {number|Long} submissionId
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @instance
                         */
                        SubmissionJudgedMessage.prototype.submissionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * SubmissionJudgedMessage result.
                         * @member {acmcsus.debugjudge.SubmissionJudgement} result
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @instance
                         */
                        SubmissionJudgedMessage.prototype.result = 0;
    
                        /**
                         * Creates a new SubmissionJudgedMessage instance using the specified properties.
                         * @function create
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage=} [properties] Properties to set
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage} SubmissionJudgedMessage instance
                         */
                        SubmissionJudgedMessage.create = function create(properties) {
                            return new SubmissionJudgedMessage(properties);
                        };
    
                        /**
                         * Encodes the specified SubmissionJudgedMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage.verify|verify} messages.
                         * @function encode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage} message SubmissionJudgedMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SubmissionJudgedMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.submissionId);
                            if (message.result != null && message.hasOwnProperty("result"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified SubmissionJudgedMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.ISubmissionJudgedMessage} message SubmissionJudgedMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SubmissionJudgedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a SubmissionJudgedMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage} SubmissionJudgedMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SubmissionJudgedMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.submissionId = reader.int64();
                                    break;
                                case 2:
                                    message.result = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a SubmissionJudgedMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage} SubmissionJudgedMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SubmissionJudgedMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a SubmissionJudgedMessage message.
                         * @function verify
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SubmissionJudgedMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                                if (!$util.isInteger(message.submissionId) && !(message.submissionId && $util.isInteger(message.submissionId.low) && $util.isInteger(message.submissionId.high)))
                                    return "submissionId: integer|Long expected";
                            if (message.result != null && message.hasOwnProperty("result"))
                                switch (message.result) {
                                default:
                                    return "result: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            return null;
                        };
    
                        /**
                         * Creates a SubmissionJudgedMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage} SubmissionJudgedMessage
                         */
                        SubmissionJudgedMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage)
                                return object;
                            var message = new $root.acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage();
                            if (object.submissionId != null)
                                if ($util.Long)
                                    (message.submissionId = $util.Long.fromValue(object.submissionId)).unsigned = false;
                                else if (typeof object.submissionId === "string")
                                    message.submissionId = parseInt(object.submissionId, 10);
                                else if (typeof object.submissionId === "number")
                                    message.submissionId = object.submissionId;
                                else if (typeof object.submissionId === "object")
                                    message.submissionId = new $util.LongBits(object.submissionId.low >>> 0, object.submissionId.high >>> 0).toNumber();
                            switch (object.result) {
                            case "SUCCESS":
                            case 0:
                                message.result = 0;
                                break;
                            case "FAILURE":
                            case 1:
                                message.result = 1;
                                break;
                            case "DEFERRED":
                            case 2:
                                message.result = 2;
                                break;
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a SubmissionJudgedMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @static
                         * @param {acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage} message SubmissionJudgedMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SubmissionJudgedMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.submissionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.submissionId = options.longs === String ? "0" : 0;
                                object.result = options.enums === String ? "SUCCESS" : 0;
                            }
                            if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                                if (typeof message.submissionId === "number")
                                    object.submissionId = options.longs === String ? String(message.submissionId) : message.submissionId;
                                else
                                    object.submissionId = options.longs === String ? $util.Long.prototype.toString.call(message.submissionId) : options.longs === Number ? new $util.LongBits(message.submissionId.low >>> 0, message.submissionId.high >>> 0).toNumber() : message.submissionId;
                            if (message.result != null && message.hasOwnProperty("result"))
                                object.result = options.enums === String ? $root.acmcsus.debugjudge.SubmissionJudgement[message.result] : message.result;
                            return object;
                        };
    
                        /**
                         * Converts this SubmissionJudgedMessage to JSON.
                         * @function toJSON
                         * @memberof acmcsus.debugjudge.S2CMessage.S2TMessage.SubmissionJudgedMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SubmissionJudgedMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return SubmissionJudgedMessage;
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
                         * @property {number|Long|null} [submissionId] AssignedSubmissionMessage submissionId
                         * @property {number|Long|null} [submissionId2] AssignedSubmissionMessage submissionId2
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
                         * AssignedSubmissionMessage submissionId.
                         * @member {number|Long} submissionId
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @instance
                         */
                        AssignedSubmissionMessage.prototype.submissionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * AssignedSubmissionMessage submissionId2.
                         * @member {number|Long} submissionId2
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @instance
                         */
                        AssignedSubmissionMessage.prototype.submissionId2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * AssignedSubmissionMessage value.
                         * @member {"submissionId"|"submissionId2"|undefined} value
                         * @memberof acmcsus.debugjudge.S2CMessage.S2JMessage.AssignedSubmissionMessage
                         * @instance
                         */
                        Object.defineProperty(AssignedSubmissionMessage.prototype, "value", {
                            get: $util.oneOfGetter($oneOfFields = ["submissionId", "submissionId2"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
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
                            if (message.submissionId != null && message.hasOwnProperty("submissionId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.submissionId);
                            if (message.submissionId2 != null && message.hasOwnProperty("submissionId2"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.submissionId2);
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
                                    message.submissionId = reader.int64();
                                    break;
                                case 2:
                                    message.submissionId2 = reader.int64();
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
                            var properties = {};
                            if (message.submissionId != null && message.hasOwnProperty("submissionId")) {
                                properties.value = 1;
                                if (!$util.isInteger(message.submissionId) && !(message.submissionId && $util.isInteger(message.submissionId.low) && $util.isInteger(message.submissionId.high)))
                                    return "submissionId: integer|Long expected";
                            }
                            if (message.submissionId2 != null && message.hasOwnProperty("submissionId2")) {
                                if (properties.value === 1)
                                    return "value: multiple values";
                                properties.value = 1;
                                if (!$util.isInteger(message.submissionId2) && !(message.submissionId2 && $util.isInteger(message.submissionId2.low) && $util.isInteger(message.submissionId2.high)))
                                    return "submissionId2: integer|Long expected";
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
                            if (object.submissionId != null)
                                if ($util.Long)
                                    (message.submissionId = $util.Long.fromValue(object.submissionId)).unsigned = false;
                                else if (typeof object.submissionId === "string")
                                    message.submissionId = parseInt(object.submissionId, 10);
                                else if (typeof object.submissionId === "number")
                                    message.submissionId = object.submissionId;
                                else if (typeof object.submissionId === "object")
                                    message.submissionId = new $util.LongBits(object.submissionId.low >>> 0, object.submissionId.high >>> 0).toNumber();
                            if (object.submissionId2 != null)
                                if ($util.Long)
                                    (message.submissionId2 = $util.Long.fromValue(object.submissionId2)).unsigned = false;
                                else if (typeof object.submissionId2 === "string")
                                    message.submissionId2 = parseInt(object.submissionId2, 10);
                                else if (typeof object.submissionId2 === "number")
                                    message.submissionId2 = object.submissionId2;
                                else if (typeof object.submissionId2 === "object")
                                    message.submissionId2 = new $util.LongBits(object.submissionId2.low >>> 0, object.submissionId2.high >>> 0).toNumber();
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
                            if (message.submissionId != null && message.hasOwnProperty("submissionId")) {
                                if (typeof message.submissionId === "number")
                                    object.submissionId = options.longs === String ? String(message.submissionId) : message.submissionId;
                                else
                                    object.submissionId = options.longs === String ? $util.Long.prototype.toString.call(message.submissionId) : options.longs === Number ? new $util.LongBits(message.submissionId.low >>> 0, message.submissionId.high >>> 0).toNumber() : message.submissionId;
                                if (options.oneofs)
                                    object.value = "submissionId";
                            }
                            if (message.submissionId2 != null && message.hasOwnProperty("submissionId2")) {
                                if (typeof message.submissionId2 === "number")
                                    object.submissionId2 = options.longs === String ? String(message.submissionId2) : message.submissionId2;
                                else
                                    object.submissionId2 = options.longs === String ? $util.Long.prototype.toString.call(message.submissionId2) : options.longs === Number ? new $util.LongBits(message.submissionId2.low >>> 0, message.submissionId2.high >>> 0).toNumber() : message.submissionId2;
                                if (options.oneofs)
                                    object.value = "submissionId2";
                            }
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
