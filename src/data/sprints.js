// http://www.objgen.com/json/models/loUno
/*
function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function formatDate(d) {
    d = new Date(d)
    var month = '' + (d.getMonth() + 1),
    	day = '' + d.getDate(),
    	year = d.getFullYear();

    return [year, month, day].join('-');
}

// describe week using mondays
var monday = getMonday(new Date());
formatDate(monday); // 2017-1-30 (monday)
var friday = monday;
friday.setDate(monday.getDate() + 4);
formatDate(friday); // 2017-2-4 (friday)

*/

const sprints = {
  "2017-2-6": {
    "start": "2-6",
    "end": "2-10",
    "epics": [
      "Site-Workflow",
      "Rich-Text"
    ]
  },
  "2017-2-13": {
    "start": "2-13",
    "end": "2-17",
    "epics": [
      "Site-Workflow"
    ]
  },
  "2017-2-20": {
    "start": "2-20",
    "end": "2-24",
    "epics": [
      "Site-Workflow"
    ]
  },
  "2017-2-27": {
    "start": "2-27",
    "end": "3-3",
    "epics": [
      "Site-Workflow"
    ]
  },
  "2017-3-6": {
    "start": "3-6",
    "end": "3-10",
    "epics": [
      "Rich-Text"
    ]
  },
  "2017-3-13": {
    "start": "3-13",
    "end": "3-17",
    "epics": [
      "Rich-Text"
    ]
  },
  "2017-3-20": {
    "start": "3-20",
    "end": "3-24"
  }
};


export default sprints;
