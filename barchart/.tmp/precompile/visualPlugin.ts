import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var barchartD001286611854918AA4FF14E0EC74ABD: IVisualPlugin = {
    name: 'barchartD001286611854918AA4FF14E0EC74ABD',
    displayName: 'A simple barchart',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["barchartD001286611854918AA4FF14E0EC74ABD"] = barchartD001286611854918AA4FF14E0EC74ABD;
}

export default barchartD001286611854918AA4FF14E0EC74ABD;