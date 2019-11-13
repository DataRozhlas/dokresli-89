import "./byeie"; // loučíme se s IE

const data = {
  dozitiM: [{ year: 1989, value: 68.1 }, { year: 1990, value: 67.6 }, { year: 1991, value: 68.2 }, { year: 1992, value: 68.5 }, { year: 1993, value: 69.3 }, { year: 1994, value: 69.5 }, { year: 1995, value: 69.7 }, { year: 1996, value: 70.4 }, { year: 1997, value: 70.5 }, { year: 1998, value: 71.1 }, { year: 1999, value: 71.4 }, { year: 2000, value: 71.6 }, { year: 2001, value: 72.0 }, { year: 2002, value: 72.1 }, { year: 2003, value: 72.1 }, { year: 2004, value: 72.6 }, { year: 2005, value: 72.9 }, { year: 2006, value: 73.4 }, { year: 2007, value: 73.7 }, { year: 2008, value: 74.0 }, { year: 2009, value: 74.2 }, { year: 2010, value: 74.4 }, { year: 2011, value: 74.7 }, { year: 2012, value: 75.0 }, { year: 2013, value: 75.2 }, { year: 2014, value: 75.7 }, { year: 2015, value: 75.6 }, { year: 2016, value: 76.0 }],
  dozitiZ: [{ year: 1989, value: 75.5 }, { year: 1990, value: 75.4 }, { year: 1991, value: 75.8 }, { year: 1992, value: 76.2 }, { year: 1993, value: 76.5 }, { year: 1994, value: 76.7 }, { year: 1995, value: 76.7 }, { year: 1996, value: 77.4 }, { year: 1997, value: 77.5 }, { year: 1998, value: 78.0 }, { year: 1999, value: 78.1 }, { year: 2000, value: 78.4 }, { year: 2001, value: 78.5 }, { year: 2002, value: 78.7 }, { year: 2003, value: 78.6 }, { year: 2004, value: 79.2 }, { year: 2005, value: 79.3 }, { year: 2006, value: 79.9 }, { year: 2007, value: 80.1 }, { year: 2008, value: 80.3 }, { year: 2009, value: 80.3 }, { year: 2010, value: 80.6 }, { year: 2011, value: 80.8 }, { year: 2012, value: 81.0 }, { year: 2013, value: 81.2 }, { year: 2014, value: 81.7 }, { year: 2015, value: 81.5 }, { year: 2016, value: 81.8 }],
  narozeni: [{ year: 1989, value: 22.5 }, { year: 1990, value: 22.5 }, { year: 1991, value: 22.4 }, { year: 1992, value: 22.5 }, { year: 1993, value: 22.6 }, { year: 1994, value: 22.9 }, { year: 1995, value: 23.3 }, { year: 1996, value: 23.7 }, { year: 1997, value: 24.0 }, { year: 1998, value: 24.4 }, { year: 1999, value: 24.6 }, { year: 2000, value: 24.9 }, { year: 2001, value: 25.3 }, { year: 2002, value: 25.6 }, { year: 2003, value: 25.9 }, { year: 2004, value: 26.3 }, { year: 2005, value: 26.6 }, { year: 2006, value: 26.9 }, { year: 2007, value: 27.1 }, { year: 2008, value: 27.3 }, { year: 2009, value: 27.4 }, { year: 2010, value: 27.6 }, { year: 2011, value: 27.8 }, { year: 2012, value: 27.9 }, { year: 2013, value: 28.1 }, { year: 2014, value: 28.1 }, { year: 2015, value: 28.2 }, { year: 2016, value: 28.2 }],
  rozvody: [{ year: 1989, value: 37.1 }, { year: 1990, value: 38.0 }, { year: 1991, value: 34.8 }, { year: 1992, value: 33.9 }, { year: 1993, value: 36.2 }, { year: 1994, value: 37.5 }, { year: 1995, value: 38.4 }, { year: 1996, value: 41.8 }, { year: 1997, value: 42.1 }, { year: 1998, value: 43.1 }, { year: 1999, value: 32.5 }, { year: 2000, value: 41.4 }, { year: 2001, value: 44.7 }, { year: 2002, value: 45.7 }, { year: 2003, value: 48.0 }, { year: 2004, value: 49.3 }, { year: 2005, value: 47.3 }, { year: 2006, value: 48.7 }, { year: 2007, value: 48.7 }, { year: 2008, value: 49.6 }, { year: 2009, value: 46.8 }, { year: 2010, value: 50.0 }, { year: 2011, value: 46.2 }, { year: 2012, value: 44.5 }, { year: 2013, value: 47.8 }, { year: 2014, value: 46.7 }, { year: 2015, value: 46.5 }, { year: 2016, value: 45.2 }],
  prirustek: [{ year: 1989, value: 1459.0 }, { year: 1990, value: 624.0 }, { year: 1991, value: 2876.0 }, { year: 1992, value: 11781.0 }, { year: 1993, value: 5476.0 }, { year: 1994, value: 9942.0 }, { year: 1995, value: 9999.0 }, { year: 1996, value: 10129.0 }, { year: 1997, value: 12075.0 }, { year: 1998, value: 9488.0 }, { year: 1999, value: 8774.0 }, { year: 2000, value: 6539.0 }, { year: 2001, value: -8551.0 }, { year: 2002, value: 12290.0 }, { year: 2003, value: 25789.0 }, { year: 2004, value: 18635.0 }, { year: 2005, value: 36229.0 }, { year: 2006, value: 34720.0 }, { year: 2007, value: 83945.0 }, { year: 2008, value: 71790.0 }, { year: 2009, value: 28344.0 }, { year: 2010, value: 15648.0 }, { year: 2011, value: 16889.0 }, { year: 2012, value: 10293.0 }, { year: 2013, value: -1297.0 }, { year: 2014, value: 21661.0 }, { year: 2015, value: 15977.0 }, { year: 2016, value: 20064.0 }],
  knihy: [{ year: 2000, value: 11965.0 }, { year: 2001, value: 14321.0 }, { year: 2002, value: 14278.0 }, { year: 2003, value: 16451.0 }, { year: 2004, value: 15749.0 }, { year: 2005, value: 15350.0 }, { year: 2006, value: 17019.0 }, { year: 2007, value: 18029.0 }, { year: 2008, value: 18520.0 }, { year: 2009, value: 17598.0 }, { year: 2010, value: 17054.0 }, { year: 2011, value: 18985.0 }, { year: 2012, value: 17247.0 }, { year: 2013, value: 17876.0 }, { year: 2014, value: 18379.0 }, { year: 2015, value: 18282.0 }, { year: 2016, value: 17815.0 }],
};

const postResult = () => false;

grafokres.grafokres({
  elem: "#graf1",
  data: data.dozitiM,
  cutoff: 1997,
  interval: "year",
  btnFn: postResult,
  // yMin: 0,
  // yMax: 0,
});

grafokres.grafokres({
  elem: "#graf2",
  data: data.dozitiZ,
  cutoff: 1997,
  interval: "year",
  btnFn: postResult,
});

grafokres.grafokres({
  elem: "#graf3",
  data: data.narozeni,
  cutoff: 1997,
  interval: "year",
  btnFn: postResult,
});

grafokres.grafokres({
  elem: "#graf4",
  data: data.rozvody,
  cutoff: 1997,
  interval: "year",
  btnFn: postResult,
  yFormat: "x + ' %'",
});

grafokres.grafokres({
  elem: "#graf5",
  data: data.prirustek,
  cutoff: 1997,
  interval: "year",
  btnFn: postResult,
  yMin: -100000,
  yMax: 100000,
});

grafokres.grafokres({
  elem: "#graf6",
  data: data.knihy,
  cutoff: 2005,
  interval: "year",
  btnFn: postResult,
  yMin: -100000,
  yMax: 100000,
});
