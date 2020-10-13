// var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'TwilioVoice', 'coolMethod', [arg0]);
// };
var delegate = {}
var TwilioVoice = {

    TwilioVoiceClient: function() {
        return this;
    }
}

TwilioVoice.TwilioVoiceClient.prototype.call = function(token, params) {
    Cordova.exec(null,null,"TwilioVoice","call",[token, params]);
}

TwilioVoice.TwilioVoiceClient.prototype.sendDigits = function(digits) {
    Cordova.exec(null,null,"TwilioVoice","sendDigits",[digits]);
}

TwilioVoice.TwilioVoiceClient.prototype.disconnect = function() {
    Cordova.exec(null,null,"TwilioVoice","disconnect",null);
}

TwilioVoice.TwilioVoiceClient.prototype.rejectCallInvite = function() {
    Cordova.exec(null,null,"TwilioVoice","rejectCallInvite",null);
}

TwilioVoice.TwilioVoiceClient.prototype.acceptCallInvite = function() {
    Cordova.exec(null,null,"TwilioVoice","acceptCallInvite",null);
}

TwilioVoice.TwilioVoiceClient.prototype.setSpeaker = function(mode) {
    // "on" or "off"        
    Cordova.exec(null, null, "TwilioVoice", "setSpeaker", [mode]);
}

TwilioVoice.TwilioVoiceClient.prototype.muteCall = function() {
    Cordova.exec(null, null, "TwilioVoice", "muteCall", null);
}

TwilioVoice.TwilioVoiceClient.prototype.unmuteCall = function() {
    Cordova.exec(null, null, "TwilioVoice", "unmuteCall", null);
}

TwilioVoice.TwilioVoiceClient.prototype.isCallMuted = function(fn) {
    Cordova.exec(fn, null, "TwilioVoice", "isCallMuted", null);
}

TwilioVoice.TwilioVoiceClient.prototype.initialize = function(token) {

    var error = function(error) {
        //TODO: Handle errors here
        if(delegate['onerror']) delegate['onerror'](error)
    }

    var success = function(callback) {
        var argument = callback['arguments'];
        if (delegate[callback['callback']]) delegate[callback['callback']](argument);
    }


    Cordova.exec(success,error,"TwilioVoice","initializeWithAccessToken",[token]);
}

TwilioVoice.TwilioVoiceClient.prototype.error = function(fn) {
    delegate['onerror'] = fn;
}

TwilioVoice.TwilioVoiceClient.prototype.clientinitialized = function(fn) {
    delegate['onclientinitialized'] = fn;
}


TwilioVoice.TwilioVoiceClient.prototype.callinvitereceived = function(fn) {
    delegate['oncallinvitereceived'] = fn;
}

TwilioVoice.TwilioVoiceClient.prototype.callinvitecanceled = function(fn) {
    delegate['oncallinvitecanceled'] = fn;
}

TwilioVoice.TwilioVoiceClient.prototype.calldidconnect = function(fn) {
    delegate['oncalldidconnect'] = fn;
}

TwilioVoice.TwilioVoiceClient.prototype.calldiddisconnect = function(fn) {
    delegate['oncalldiddisconnect'] = fn;
}

TwilioVoice.install = function() {
    if (!window.Twilio) window.Twilio = {};
    if (!window.Twilio.TwilioVoiceClient) window.Twilio.TwilioVoiceClient = new TwilioVoice.TwilioVoiceClient();
}
TwilioVoice.install();

module.exports = TwilioVoice;
