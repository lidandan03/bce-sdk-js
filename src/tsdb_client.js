/**
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * @file src/face_client.js
<<<<<<< HEAD
 * @author lidandan
=======
 * @author dan
>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
 */

/* eslint-env node */
/* eslint max-params:[0,10] */

var util = require('util');
var u = require('underscore');
<<<<<<< HEAD
var H = require('./headers');

var HttpClient = require('./http_client');
=======
var url = require('url');
var path = require('path');

var strings = require('./strings');
var HttpClient = require('./http_client');
var config = require('./config');
>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
var BceBaseClient = require('./bce_base_client');

/**
 *TSDB service api
 *
<<<<<<< HEAD
=======
 * @see http://***
 *
>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
 * @constructor
 * @param {Object} config The tsdb client configuration.
 * @extends {BceBaseClient}
 */

function TsdbClient(config) {
    BceBaseClient.call(this, config, 'tsdb', true);

    /**
     * @type {HttpClient}
     */
    this._httpAgent = null;
}
util.inherits(TsdbClient, BceBaseClient);

// --- B E G I N ---

<<<<<<< HEAD
TsdbClient.prototype.writeDatapoints = function (database, datapoints, options) {
    options = options || {};
    var params = {
        database: database,
        query: ''
    };
    var url = '/v1/datapoint';
    return this.sendRequest('POST', url, {
        body: JSON.stringify({datapoints: datapoints}),
        params: params,
        config: options.config
    });
};

TsdbClient.prototype.getMetrics = function (database, options) {
=======
TsdbClient.prototype.getMetrics = function(database, options) {
>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
    var options = options || {};
    var params = {
        database: database,
        query: ''
    };
<<<<<<< HEAD
=======

>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
    return this.sendRequest('GET', '/v1/metric', {
        params: params,
        config: options.config
    });
};

<<<<<<< HEAD
TsdbClient.prototype.getTags = function (database, metricName, options) {
=======
TsdbClient.prototype.getTags = function(database, metricName, options) {
>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
    var options = options || {};
    var url = '/v1/metric/' + metricName + '/tag';
    var params = {
        database: database,
        metricName: metricName,
        query: ''
    };

    return this.sendRequest('GET', url, {
        params: params,
        config: options.config
    });
};

<<<<<<< HEAD
TsdbClient.prototype.getFields = function (database, metricName, options) {
=======
TsdbClient.prototype.getFields = function(database, metricName, options) {
>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
    var options = options || {};
    var url = '/v1/metric/' + metricName + '/field';
    var params = {
        database: database,
        metricName: metricName,
        query: ''
    };
<<<<<<< HEAD
    return this.sendRequest('GET', url, {
        params: params,
        config: options.config
    });
};

TsdbClient.prototype.getDatapoints = function (database, queryList, options) {
    var options = options || {};
    var url = '/v1/datapoint';
    var params = u.extend({
            database: database,
            query: '',
            disablePresampling: false
        },
        u.pick(options, 'disablePresampling')
    );
    var headers = {};
    headers[H.CONTENT_TYPE] = 'application/json; charset=UTF-8';
    return this.sendRequest('PUT', url, {
        headers: headers,
        body: JSON.stringify({queries: queryList}),
        params: params,
        config: options.config
    });
};

TsdbClient.prototype.getDatapoints = function (database, queryList, options) {
    var options = options || {};
    var url = '/v1/datapoint';

    var params = u.extend({
            database: database,
            query: JSON.stringify({queries: queryList}),
            disablePresampling: false
        },
        u.pick(options, 'disablePresampling')
    );
    var headers = {};
    headers[H.CONTENT_TYPE] = 'application/json; charset=UTF-8';
    return this.sendRequest('GET', url, {
        headers: headers,
=======

    return this.sendRequest('GET', url, {
>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
        params: params,
        config: options.config
    });
};

// --- E N D ---

<<<<<<< HEAD
TsdbClient.prototype.sendRequest = function (httpMethod, resource, varArgs) {
=======
TsdbClient.prototype.sendRequest = function(httpMethod, resource, varArgs) {
>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
    var defaultArgs = {
        metricName: null,
        database: null,
        key: null,
        body: null,
        headers: {},
        params: {},
        config: {},
        outputStream: null
    };
    var args = u.extend(defaultArgs, varArgs);

    var config = u.extend({}, this.config, args.config);

    var client = this;
    var agent = this._httpAgent = new HttpClient(config);
    var httpContext = {
        httpMethod: httpMethod,
        resource: resource,
        args: args,
        config: config
    };
<<<<<<< HEAD
    u.each(['progress', 'error', 'abort'], function (eventName) {
        agent.on(eventName, function (evt) {
=======

    u.each(['progress', 'error', 'abort'], function(eventName) {
        agent.on(eventName, function(evt) {
>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
            client.emit(eventName, evt, httpContext);
        });
    });

    return this._httpAgent.sendRequest(httpMethod, resource, args.body,
        args.headers, args.params, u.bind(this.createSignature, this),
        args.outputStream
    );
};
<<<<<<< HEAD
module.exports = TsdbClient;
=======
module.exports = TsdbClient;
>>>>>>> 7ea0172ce853b7057a039699e994533c243cf665
