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
             * @enum {string}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} WAITING=1 WAITING value
             * @property {number} STARTED=2 STARTED value
             * @property {number} PAUSED=3 PAUSED value
             * @property {number} STOPPED=5 STOPPED value
             */
            debugjudge.CompetitionState = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "WAITING"] = 1;
                values[valuesById[2] = "STARTED"] = 2;
                values[valuesById[3] = "PAUSED"] = 3;
                values[valuesById[5] = "STOPPED"] = 5;
                return values;
            })();
    
            debugjudge.StateChangedEvent = (function() {
    
                /**
                 * Properties of a StateChangedEvent.
                 * @memberof acmcsus.debugjudge
                 * @interface IStateChangedEvent
                 * @property {number|Long} [timeMillis] StateChangedEvent timeMillis
                 * @property {acmcsus.debugjudge.CompetitionState} [currentState] StateChangedEvent currentState
                 */
    
                /**
                 * Constructs a new StateChangedEvent.
                 * @memberof acmcsus.debugjudge
                 * @classdesc Represents a StateChangedEvent.
                 * @constructor
                 * @param {acmcsus.debugjudge.IStateChangedEvent=} [properties] Properties to set
                 */
                function StateChangedEvent(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * StateChangedEvent timeMillis.
                 * @member {number|Long}timeMillis
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @instance
                 */
                StateChangedEvent.prototype.timeMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * StateChangedEvent currentState.
                 * @member {acmcsus.debugjudge.CompetitionState}currentState
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @instance
                 */
                StateChangedEvent.prototype.currentState = 0;
    
                /**
                 * Creates a new StateChangedEvent instance using the specified properties.
                 * @function create
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @static
                 * @param {acmcsus.debugjudge.IStateChangedEvent=} [properties] Properties to set
                 * @returns {acmcsus.debugjudge.StateChangedEvent} StateChangedEvent instance
                 */
                StateChangedEvent.create = function create(properties) {
                    return new StateChangedEvent(properties);
                };
    
                /**
                 * Encodes the specified StateChangedEvent message. Does not implicitly {@link acmcsus.debugjudge.StateChangedEvent.verify|verify} messages.
                 * @function encode
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @static
                 * @param {acmcsus.debugjudge.IStateChangedEvent} message StateChangedEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StateChangedEvent.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.timeMillis != null && message.hasOwnProperty("timeMillis"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timeMillis);
                    if (message.currentState != null && message.hasOwnProperty("currentState"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.currentState);
                    return writer;
                };
    
                /**
                 * Encodes the specified StateChangedEvent message, length delimited. Does not implicitly {@link acmcsus.debugjudge.StateChangedEvent.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @static
                 * @param {acmcsus.debugjudge.IStateChangedEvent} message StateChangedEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StateChangedEvent.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a StateChangedEvent message from the specified reader or buffer.
                 * @function decode
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {acmcsus.debugjudge.StateChangedEvent} StateChangedEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StateChangedEvent.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.acmcsus.debugjudge.StateChangedEvent();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.timeMillis = reader.int64();
                            break;
                        case 2:
                            message.currentState = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a StateChangedEvent message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {acmcsus.debugjudge.StateChangedEvent} StateChangedEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StateChangedEvent.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a StateChangedEvent message.
                 * @function verify
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StateChangedEvent.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.timeMillis != null && message.hasOwnProperty("timeMillis"))
                        if (!$util.isInteger(message.timeMillis) && !(message.timeMillis && $util.isInteger(message.timeMillis.low) && $util.isInteger(message.timeMillis.high)))
                            return "timeMillis: integer|Long expected";
                    if (message.currentState != null && message.hasOwnProperty("currentState"))
                        switch (message.currentState) {
                        default:
                            return "currentState: enum value expected";
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
                 * Creates a StateChangedEvent message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {acmcsus.debugjudge.StateChangedEvent} StateChangedEvent
                 */
                StateChangedEvent.fromObject = function fromObject(object) {
                    if (object instanceof $root.acmcsus.debugjudge.StateChangedEvent)
                        return object;
                    var message = new $root.acmcsus.debugjudge.StateChangedEvent();
                    if (object.timeMillis != null)
                        if ($util.Long)
                            (message.timeMillis = $util.Long.fromValue(object.timeMillis)).unsigned = false;
                        else if (typeof object.timeMillis === "string")
                            message.timeMillis = parseInt(object.timeMillis, 10);
                        else if (typeof object.timeMillis === "number")
                            message.timeMillis = object.timeMillis;
                        else if (typeof object.timeMillis === "object")
                            message.timeMillis = new $util.LongBits(object.timeMillis.low >>> 0, object.timeMillis.high >>> 0).toNumber();
                    switch (object.currentState) {
                    case "UNKNOWN":
                    case 0:
                        message.currentState = 0;
                        break;
                    case "WAITING":
                    case 1:
                        message.currentState = 1;
                        break;
                    case "STARTED":
                    case 2:
                        message.currentState = 2;
                        break;
                    case "PAUSED":
                    case 3:
                        message.currentState = 3;
                        break;
                    case "STOPPED":
                    case 5:
                        message.currentState = 5;
                        break;
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a StateChangedEvent message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @static
                 * @param {acmcsus.debugjudge.StateChangedEvent} message StateChangedEvent
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StateChangedEvent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.timeMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.timeMillis = options.longs === String ? "0" : 0;
                        object.currentState = options.enums === String ? "UNKNOWN" : 0;
                    }
                    if (message.timeMillis != null && message.hasOwnProperty("timeMillis"))
                        if (typeof message.timeMillis === "number")
                            object.timeMillis = options.longs === String ? String(message.timeMillis) : message.timeMillis;
                        else
                            object.timeMillis = options.longs === String ? $util.Long.prototype.toString.call(message.timeMillis) : options.longs === Number ? new $util.LongBits(message.timeMillis.low >>> 0, message.timeMillis.high >>> 0).toNumber() : message.timeMillis;
                    if (message.currentState != null && message.hasOwnProperty("currentState"))
                        object.currentState = options.enums === String ? $root.acmcsus.debugjudge.CompetitionState[message.currentState] : message.currentState;
                    return object;
                };
    
                /**
                 * Converts this StateChangedEvent to JSON.
                 * @function toJSON
                 * @memberof acmcsus.debugjudge.StateChangedEvent
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StateChangedEvent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return StateChangedEvent;
            })();
    
            return debugjudge;
        })();
    
        return acmcsus;
    })();

    return $root;
});
