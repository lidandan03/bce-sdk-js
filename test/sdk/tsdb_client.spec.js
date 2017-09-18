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
 * @file test/sdk/tsdb_client.spec.js
 * @author dan
 */

var util = require('util');
var path = require('path');
var fs = require('fs');

var Q = require('q');
var u = require('underscore');
var expect = require('expect.js');
var debug = require('debug')('tsdb_client.spec');

var config = require('../config');
var crypto = require('../../src/crypto');
var helper = require('./helper');

var TsdbClient = require('../../src/tsdb_client');


describe('TsdbClient', function() {
    var client;
    var fail;
    var database;

    this.timeout(10 * 60 * 1000);

    beforeEach(function() {

        fail = helper.fail(this);
        client = new TsdbClient(config.tsdb);
        
    });

    afterEach(function() {
        // nothing
    });;

    function delay(ms) {
        var deferred = Q.defer();
        setTimeout(deferred.resolve, ms);
        return deferred.promise;
    }

    it('ok', function () {});

    it('getMetrics', function() {
        const database = 'testgetmetriclists2';
        return client.getMetrics(database)
            .then(function(response) {
                debug('%j', response);
                var metrics = response.body.metrics;
                expect(metrics).not.to.be(undefined);
                console.log(metrics[0]);
                expect(metrics[0]).to.eql('humidity');
                expect(metrics[1]).to.eql('pm25');
                expect(metrics[2]).to.eql('precipitation');
                expect(metrics[3]).to.eql('temperature');
                expect(metrics[4]).to.eql('wind');  
            }).catch(function (error) {
                if (error.code == 'AccessDenied') {
                    expect(error.status_code).to.eql(403);
                    expect(error.message).to.eql('Database does not exist');
                    expect(error.code).to.eql('AccessDenied');
                }
                else {
                    fail(error);
                }
        });
    });
});