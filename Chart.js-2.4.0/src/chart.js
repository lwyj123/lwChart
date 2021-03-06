/**
 * @namespace Chart
 */
var Chart = require('./core/core.js')();

require('./core/core.helpers')(Chart);
require('./core/core.canvasHelpers')(Chart);
require('./core/core.element')(Chart);
require('./core/core.controller')(Chart);
require('./core/core.datasetController')(Chart);
require('./core/core.layoutService')(Chart);
require('./core/core.scaleService')(Chart);
require('./core/core.plugin.js')(Chart);
require('./core/core.ticks.js')(Chart);
require('./core/core.scale')(Chart);
require('./core/core.title')(Chart);
require('./core/core.legend')(Chart);
require('./core/core.interaction')(Chart);
require('./core/core.tooltip')(Chart);

require('./elements/element.arc')(Chart);
require('./elements/element.line')(Chart);
require('./elements/element.point')(Chart);

require('./scales/scale.linearbase.js')(Chart);
require('./scales/scale.category')(Chart);
require('./scales/scale.linear')(Chart);

// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
require('./controllers/controller.line')(Chart);

require('./charts/Chart.Line')(Chart);
require('./charts/Chart.Scatter')(Chart);

window.Chart = module.exports = Chart;
