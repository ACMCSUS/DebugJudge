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
    
            debugjudge.C2SMessage = (function() {
    
                /**
                 * Properties of a C2SMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IC2SMessage
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
                 * @member {"loginMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.C2SMessage
                 * @instance
                 */
                Object.defineProperty(C2SMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["loginMessage"]),
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
                    if (message.loginMessage != null && message.hasOwnProperty("loginMessage")) {
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
    
                return C2SMessage;
            })();
    
            debugjudge.S2CMessage = (function() {
    
                /**
                 * Properties of a S2CMessage.
                 * @memberof acmcsus.debugjudge
                 * @interface IS2CMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IDebugMessage|null} [debugMessage] S2CMessage debugMessage
                 * @property {acmcsus.debugjudge.S2CMessage.IAlertMessage|null} [alertMessage] S2CMessage alertMessage
                 * @property {acmcsus.debugjudge.S2CMessage.ILoginResultMessage|null} [loginResultMessage] S2CMessage loginResultMessage
                 * @property {acmcsus.debugjudge.S2CMessage.INotificationMessage|null} [notificationMessage] S2CMessage notificationMessage
                 * @property {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage|null} [competitionStateChangeMessage] S2CMessage competitionStateChangeMessage
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
                 * S2CMessage competitionStateChangeMessage.
                 * @member {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage|null|undefined} competitionStateChangeMessage
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                S2CMessage.prototype.competitionStateChangeMessage = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * S2CMessage value.
                 * @member {"debugMessage"|"alertMessage"|"loginResultMessage"|"notificationMessage"|"competitionStateChangeMessage"|undefined} value
                 * @memberof acmcsus.debugjudge.S2CMessage
                 * @instance
                 */
                Object.defineProperty(S2CMessage.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["debugMessage", "alertMessage", "loginResultMessage", "notificationMessage", "competitionStateChangeMessage"]),
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
                    if (message.debugMessage != null && message.hasOwnProperty("debugMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.DebugMessage.encode(message.debugMessage, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.alertMessage != null && message.hasOwnProperty("alertMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.AlertMessage.encode(message.alertMessage, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.loginResultMessage != null && message.hasOwnProperty("loginResultMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.encode(message.loginResultMessage, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.notificationMessage != null && message.hasOwnProperty("notificationMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.NotificationMessage.encode(message.notificationMessage, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.competitionStateChangeMessage != null && message.hasOwnProperty("competitionStateChangeMessage"))
                        $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.encode(message.competitionStateChangeMessage, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
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
                        case 5:
                            message.debugMessage = $root.acmcsus.debugjudge.S2CMessage.DebugMessage.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.alertMessage = $root.acmcsus.debugjudge.S2CMessage.AlertMessage.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.loginResultMessage = $root.acmcsus.debugjudge.S2CMessage.LoginResultMessage.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.notificationMessage = $root.acmcsus.debugjudge.S2CMessage.NotificationMessage.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.competitionStateChangeMessage = $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.decode(reader, reader.uint32());
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
                    if (message.debugMessage != null && message.hasOwnProperty("debugMessage")) {
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
                    if (message.competitionStateChangeMessage != null && message.hasOwnProperty("competitionStateChangeMessage")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        {
                            var error = $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.verify(message.competitionStateChangeMessage);
                            if (error)
                                return "competitionStateChangeMessage." + error;
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
                    if (object.competitionStateChangeMessage != null) {
                        if (typeof object.competitionStateChangeMessage !== "object")
                            throw TypeError(".acmcsus.debugjudge.S2CMessage.competitionStateChangeMessage: object expected");
                        message.competitionStateChangeMessage = $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.fromObject(object.competitionStateChangeMessage);
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
                    if (message.competitionStateChangeMessage != null && message.hasOwnProperty("competitionStateChangeMessage")) {
                        object.competitionStateChangeMessage = $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.toObject(message.competitionStateChangeMessage, options);
                        if (options.oneofs)
                            object.value = "competitionStateChangeMessage";
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
                        case "SUCCESS":
                        case 0:
                            message.value = 0;
                            break;
                        case "FAILURE":
                        case 1:
                            message.value = 1;
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
                            object.value = options.enums === String ? "SUCCESS" : 0;
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
                     * @property {number} SUCCESS=0 SUCCESS value
                     * @property {number} FAILURE=1 FAILURE value
                     */
                    LoginResultMessage.LoginResult = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "SUCCESS"] = 0;
                        values[valuesById[1] = "FAILURE"] = 1;
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
    
                S2CMessage.CompetitionStateChangeMessage = (function() {
    
                    /**
                     * Properties of a CompetitionStateChangeMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @interface ICompetitionStateChangeMessage
                     * @property {number|Long|null} [timeMillis] CompetitionStateChangeMessage timeMillis
                     * @property {acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.CompetitionState|null} [state] CompetitionStateChangeMessage state
                     */
    
                    /**
                     * Constructs a new CompetitionStateChangeMessage.
                     * @memberof acmcsus.debugjudge.S2CMessage
                     * @classdesc Represents a CompetitionStateChangeMessage.
                     * @implements ICompetitionStateChangeMessage
                     * @constructor
                     * @param {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage=} [properties] Properties to set
                     */
                    function CompetitionStateChangeMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CompetitionStateChangeMessage timeMillis.
                     * @member {number|Long} timeMillis
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @instance
                     */
                    CompetitionStateChangeMessage.prototype.timeMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * CompetitionStateChangeMessage state.
                     * @member {acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.CompetitionState} state
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @instance
                     */
                    CompetitionStateChangeMessage.prototype.state = 0;
    
                    /**
                     * Creates a new CompetitionStateChangeMessage instance using the specified properties.
                     * @function create
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage=} [properties] Properties to set
                     * @returns {acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage} CompetitionStateChangeMessage instance
                     */
                    CompetitionStateChangeMessage.create = function create(properties) {
                        return new CompetitionStateChangeMessage(properties);
                    };
    
                    /**
                     * Encodes the specified CompetitionStateChangeMessage message. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.verify|verify} messages.
                     * @function encode
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage} message CompetitionStateChangeMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CompetitionStateChangeMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.timeMillis != null && message.hasOwnProperty("timeMillis"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timeMillis);
                        if (message.state != null && message.hasOwnProperty("state"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CompetitionStateChangeMessage message, length delimited. Does not implicitly {@link acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.ICompetitionStateChangeMessage} message CompetitionStateChangeMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CompetitionStateChangeMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CompetitionStateChangeMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage} CompetitionStateChangeMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CompetitionStateChangeMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage();
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
                     * Decodes a CompetitionStateChangeMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage} CompetitionStateChangeMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CompetitionStateChangeMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CompetitionStateChangeMessage message.
                     * @function verify
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CompetitionStateChangeMessage.verify = function verify(message) {
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
                            case 5:
                                break;
                            }
                        return null;
                    };
    
                    /**
                     * Creates a CompetitionStateChangeMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage} CompetitionStateChangeMessage
                     */
                    CompetitionStateChangeMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage)
                            return object;
                        var message = new $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage();
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
                        case 5:
                            message.state = 5;
                            break;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CompetitionStateChangeMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @static
                     * @param {acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage} message CompetitionStateChangeMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CompetitionStateChangeMessage.toObject = function toObject(message, options) {
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
                            object.state = options.enums === String ? $root.acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.CompetitionState[message.state] : message.state;
                        return object;
                    };
    
                    /**
                     * Converts this CompetitionStateChangeMessage to JSON.
                     * @function toJSON
                     * @memberof acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CompetitionStateChangeMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * CompetitionState enum.
                     * @name acmcsus.debugjudge.S2CMessage.CompetitionStateChangeMessage.CompetitionState
                     * @enum {string}
                     * @property {number} UNKNOWN=0 UNKNOWN value
                     * @property {number} WAITING=1 WAITING value
                     * @property {number} STARTED=2 STARTED value
                     * @property {number} PAUSED=3 PAUSED value
                     * @property {number} STOPPED=5 STOPPED value
                     */
                    CompetitionStateChangeMessage.CompetitionState = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "UNKNOWN"] = 0;
                        values[valuesById[1] = "WAITING"] = 1;
                        values[valuesById[2] = "STARTED"] = 2;
                        values[valuesById[3] = "PAUSED"] = 3;
                        values[valuesById[5] = "STOPPED"] = 5;
                        return values;
                    })();
    
                    return CompetitionStateChangeMessage;
                })();
    
                return S2CMessage;
            })();
    
            return debugjudge;
        })();
    
        return acmcsus;
    })();

    return $root;
});
