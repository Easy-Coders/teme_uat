
// script to determine mobile platform//

  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


    var theme='md';
    if( isMobile.iOS()) 
      theme='ios';    

    if( isMobile.Android()) 
      theme='md';

    var $ = Dom7;
    var app = new Framework7({
        root: '#app',
        theme:theme,
        panel: {
             swipe: true,
             visibleBreakpoint: 1024,
          }
     });


    var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27').split(' ')
      },
      {
        values: ('am pm').split(' ')
      },
    ]
});


var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device',
  cols: [
    {
      textAlign: 'center',
      values: ['same day', '1 day before',,'2 day before','3 day before','4 day before','5 day before','6 day before','7 day before']
    }
  ]
});




$('.open-vertical').on('click', function () {
  app.dialog.create({
    title: 'Choose your method',

    buttons: [
      {
        text: '<i class="fa fa-plus-square"></i> &nbsp;Conctraceptive pill',
      },
      {
        text: '<i class="fa fa-plus-square"></i> &nbsp;Conctraceptive pill',
      },
      {
        text: '<i class="fa fa-plus-square"></i> &nbsp;Injection',
      },
      {
        text: '<i class="fa fa-plus-square"></i> &nbsp;V-Ring',
      },
       {
        text: '<i class="fa fa-plus-square"></i> &nbsp;Patch',
      },
    ],
    verticalButtons: true,
    cssClass: 'appdialog'
  }).open();
});






      
     $('.hide-navbar').on('click', function () {
      app.panel.close('.panel-left');
     });

     $('.panel-left').on('panel:open', function () {
           console.log('Panel left: open');
     });
     $('.panel-left').on('panel:opened', function () {
           console.log('Panel left: opened');
     });

