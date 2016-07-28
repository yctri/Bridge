﻿    // @source ArraySegment.js

    Bridge.define('System.ArraySegment', {
        constructor: function (array, offset, count) {
	    this.$initialize();
            this.array = array;
            this.offset = offset || 0;
            this.count = count || array.length;
        },

        getArray: function () {
            return this.array;
        },

        getCount: function () {
            return this.count;
        },

        getOffset: function () {
            return this.offset;
        }
    });
