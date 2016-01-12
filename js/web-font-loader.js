      //Create web-font-loader to achive better speed of page loading
      WebFontConfig = {
        google: {
         families: ["Open Sans Condensed:400,700"]
        }
      };
      (function(d) {
        var wf = d.createElement("script"), s = d.scripts[0];
        wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js";
        s.parentNode.insertBefore(wf, s);
      })(document);
