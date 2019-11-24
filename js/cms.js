var CLIENT_ID = '';
var API_KEY = '';
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    getContent();
  }, function(error) {
    console.log(JSON.stringify(error, null, 2));
  });
}

function getContent() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1OvVawhUkfFhMdxuuAB9g4KQ8MdGNI8mAqlf6XIZNA3s',
    range: 'Sheet1!A1:B',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      var row = range.values[0];
      $('#1').text(row[1]);
      $('body').show();
    }
  }, function(response) {
    console.log('Error: ' + response.result.error.message);
  });
}

$(function () {
  $('body').hide();
});
