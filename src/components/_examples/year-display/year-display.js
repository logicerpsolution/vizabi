//Year Display
define([
    'd3',
    'base/component',
    'base/utils'
], function(d3, Component, utils) {


    var YearDisplay = Component.extend({

		/*
         * INIT:
         * Executed once, before template loading
         */
        init: function(context, options) {
            this.name = "year-display";
            this.template = "components/_examples/year-display/year-display";
            this.tool = context;
            
            this._super(context, options);
        },

        /*
         * POSTRENDER:
         * Executed after template is loaded
         * Ideally, it contains instantiations related to template
         */
        postRender: function() {
            this.update();
        },


        /*
         * UPDATE:
         * Executed whenever data is changed
         * Ideally, it contains only operations related to data events
         */
        update: function() {
            var time = this.model.get("value");
            time = time.toFixed(0);
            this.element.html(time);
        },

        /*
         * RESIZE:
         * Executed whenever the container is resized
         * Ideally, it contains only operations related to size
         */
        resize: function() {
            //code here
        },


    });

    return YearDisplay;

});