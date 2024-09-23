import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

        <script type="application/javascript">
          window.tiledeskSettings=
          {
              projectid: "<CHANGE_IT>",
              fullscreenMode: true,
              open:true,
          };
          (function(d, s, id) {
            var w=window; var d=document; var i=function(){i.c(arguments);};
            i.q=[]; i.c=function(args){i.q.push(args);}; w.Tiledesk=i;
            var js, fjs=d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js=d.createElement(s);
            js.id=id; js.async=true; js.src="https://widget.tiledesk.com/v6/launch.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document,'script','tiledesk-jssdk'));

          window.addEventListener('load', (event)=> {
            document.dispatchEvent(new Event('mousemove'))
          })
        </script>
    </head>
    <body>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView 
        originWhitelist={['*']} 
        //source={{ html: htmlContent }} 
        source={require('../../assets/widget.html')}
        style={{ flex: 1 }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
