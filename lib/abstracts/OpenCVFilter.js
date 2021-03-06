/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('tribemedia-kurento-client-js');

var ChecktypeError = kurentoClient.checkType.ChecktypeError;

var Filter = require('tribemedia-kurento-client-core-js').abstracts.Filter;


/**
 * @classdesc
 *  Generic OpenCV Filter
 *
 * @abstract
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:filters/abstracts.OpenCVFilter
 */
function OpenCVFilter(){
  OpenCVFilter.super_.call(this);
};
inherits(OpenCVFilter, Filter);


/**
 * @alias module:filters/abstracts.OpenCVFilter.constructorParams
 */
OpenCVFilter.constructorParams = {
};

/**
 * @alias module:filters/abstracts.OpenCVFilter.events
 *
 * @extends module:core/abstracts.Filter.events
 */
OpenCVFilter.events = Filter.events;


/**
 * Checker for {@link filters/abstracts.OpenCVFilter}
 *
 * @memberof module:filters/abstracts
 *
 * @param {external:String} key
 * @param {module:filters/abstracts.OpenCVFilter} value
 */
function checkOpenCVFilter(key, value)
{
  if(!(value instanceof OpenCVFilter))
    throw ChecktypeError(key, OpenCVFilter, value);
};


module.exports = OpenCVFilter;

OpenCVFilter.check = checkOpenCVFilter;
