﻿import "./byeie"; // loučíme se s IE
const data = {
  doziti:[{"year":1800,"value":30.46},{"year":1810,"value":30.62},{"year":1820,"value":30.81},{"year":1830,"value":30.91},{"year":1840,"value":30.98},{"year":1850,"value":31.1},{"year":1860,"value":29.91},{"year":1870,"value":31.09},{"year":1880,"value":31.59},{"year":1890,"value":32.01},{"year":1900,"value":32.04},{"year":1910,"value":34.29},{"year":1920,"value":34.46},{"year":1930,"value":38.64},{"year":1940,"value":40.74},{"year":1950,"value":47.72},{"year":1960,"value":49.92},{"year":1970,"value":59.19},{"year":1980,"value":62.55},{"year":1990,"value":65.1},{"year":2000,"value":66.82},{"year":2010,"value":70.33},{"year":2020,"value":73.34}],
  demokracie:[{"year":1820,"value":0.92},{"year":1830,"value":1.16},{"year":1840,"value":1.46},{"year":1850,"value":4.93},{"year":1860,"value":2.95},{"year":1870,"value":3.88},{"year":1880,"value":9.25},{"year":1890,"value":10.08},{"year":1900,"value":11.97},{"year":1910,"value":13.02},{"year":1920,"value":19.62},{"year":1930,"value":16.9},{"year":1940,"value":9.37},{"year":1950,"value":31.41},{"year":1960,"value":38.52},{"year":1970,"value":33.35},{"year":1980,"value":35.21},{"year":1990,"value":43.33},{"year":2000,"value":56.08},{"year":2010,"value":54.26}],
  katastrofy:[{"year":"1900","value":450.3313},{"year":"1910","value":333.7244},{"year":"1920","value":873.3432},{"year":"1930","value":970.6603},{"year":"1940","value":388.2758},{"year":"1950","value":213.81},{"year":"1960","value":175.6932},{"year":"1970","value":102.4111},{"year":"1980","value":85.4706},{"year":"1990","value":122.399},{"year":"2000","value":93.6641},{"year":"2010","value":64.978375}],
  deti:[{"year":1800,"value":43.3},{"year":1820,"value":42.7},{"year":1840,"value":40.4},{"year":1860,"value":41.4},{"year":1880,"value":38},{"year":1900,"value":36.2},{"year":1920,"value":32.1},{"year":1940,"value":23.9},{"year":1960,"value":18.5},{"year":1970,"value":14.49},{"year":1980,"value":11.64},{"year":1990,"value":9.06},{"year":2000,"value":7.59},{"year":2010,"value":5.17}],
  gramotnost:[{"year":1800,"value":12.05},{"year":1820,"value":12.05},{"year":1870,"value":18.74},{"year":1880,"value":19.63},{"year":1890,"value":20.52},{"year":1900,"value":21.4},{"year":1910,"value":26.45},{"year":1920,"value":31.62},{"year":1930,"value":32.53},{"year":1940,"value":41.88},{"year":1950,"value":35.96},{"year":1960,"value":41.62},{"year":1970,"value":55.62},{"year":1980,"value":56.05},{"year":1990,"value":68.25},{"year":2000,"value":81.88},{"year":2010,"value":85.3}],
  chudoba:[{"year":1820,"value":94.4},{"year":1850,"value":92.5},{"year":1870,"value":89.6},{"year":1890,"value":85.7},{"year":1910,"value":82.4},{"year":1929,"value":75.9},{"year":1950,"value":71.9},{"year":1960,"value":64.3},{"year":1970,"value":60.1},{"year":1981,"value":43.96},{"year":1984,"value":40.84},{"year":1987,"value":36.96},{"year":1990,"value":36.91},{"year":1993,"value":34.79},{"year":2000,"value":29.08},{"year":2002,"value":26.29},{"year":2005,"value":20.92},{"year":2008,"value":18.65},{"year":2010,"value":16.27}]
};

grafokres.grafokres({
	elem: "#graf1",
	data: data.doziti,
	cutoff: 1940,
	interval: "decade",
	btnFn: postResult,
});

grafokres.grafokres({
	elem: "#graf2",
	data: data.demokracie,
	cutoff: 1940,
	interval: "decade",
	btnFn: postResult,
	yFormat: "x + ' %'"
});

grafokres.grafokres({
	elem: "#graf3",
	data: data.katastrofy,
	cutoff: 1950,
	interval: "decade",
	btnFn: postResult,
	yMin: 0,
	yMax: 1000
});

grafokres.grafokres({
	elem: "#graf4",
	data: data.deti,
	cutoff: 1940,
	interval: "decade",
	btnFn: postResult,
	yFormat: "x + ' %'"
});

grafokres.grafokres({
	elem: "#graf5",
	data: data.gramotnost,
	cutoff: 1960,
	interval: "decade",
	btnFn: postResult,
	yFormat: "x + ' %'"
});

grafokres.grafokres({
	elem: "#graf6",
	data: data.chudoba,
	cutoff: 1950,
	interval: "decade",
	btnFn: postResult,
	yFormat: "x + ' %'"
});

const postResult = () => console.log("ok!")

