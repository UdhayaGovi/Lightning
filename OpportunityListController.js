({
    // ## function call on component load 
   init: function (cmp, event, helper) {
        cmp.set('v.mycolumns', [
            { label: 'Opportunity Name', fieldName: 'Name', type: 'text'},
            { label: 'Account Name', fieldName: 'AccountName', type: 'Id'},
            { label: 'Expected Revenue', fieldName: 'ExpectedRevenue', type: 'number'},
            { label: 'Stage', fieldName: 'StageName', type: 'text'},
            { label: 'Close Date', fieldName: 'CloseDate', type: 'date'}
            
        ]);
        helper.getData(cmp);
    },
    // ## function call to set selected rows 
    getSelectedRows: function (cmp, event) {
        var selectedRows = event.getParam('selectedRows');
        cmp.set('v.myselecteddata',selectedRows);
    },
    // ## function call to download as CSV
    downloadAsCSV : function(component,event,helper){
        
        // get the  Selected Records from myselecteddata attribute
        var stockData = component.get("v.myselecteddata");
        
        if (stockData== null) {alert('Select Opportunities to Download');}
        // call the helper function which "return" the CSV data as a String   
        var csv = helper.convertArrayOfObjectsToCSV(component,stockData);   
         if (csv == null){return;} 
        
        // ####--code for create a temp. <a> html tag [link tag] for download the CSV file--####     
	     var hiddenElement = document.createElement('a');
          hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
          hiddenElement.target = '_self'; // 
          hiddenElement.download = 'ExportData.csv';  // CSV file Name* you can change it.[only name not .csv] 
          document.body.appendChild(hiddenElement); // Required for FireFox browser
    	  hiddenElement.click(); // using click() js function to download csv file
      }
})
