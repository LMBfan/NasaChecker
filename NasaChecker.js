const https = require('https');

/**
 * Pass the data to send as `event.data`, and the request options as
 * `event.options`. For more information see the HTTPS module documentation
 * at https://nodejs.org/api/https.html.
 *
 * Will succeed with the response body.
 */
exports.handler = (event, context, callback) => {
    var url = process.env.NASA_URL;
    var urlQuery = url + "?" + "detailed=" + event.detailed + "&api_key=" + event.api_key;
    console.log(urlQuery)
    const req = https.request(urlQuery, (res) => {
        let body = '';
        let myResponse = "Error, unrecognized return format\n";
        console.log('Status:', res.statusCode);
        console.log('Headers:', JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Successfully processed HTTPS response');
            // If we know it's JSON, parse it
            if (res.headers['content-type'].substring('application/json') != -1) {
                body = JSON.parse(body);
                if (body.element_count === undefined) {
                    myResponse = "Uh oh, unexpected error.  Maybe Bad API key?\n";
                }
                else {
                    myResponse = "NASA is tracking " + body.element_count + " Near Earth Objects today\n";
                }
            };
            var fullResponse = {
                'statusCode': 200,
                'headers': { 'Content-Type': 'application/json' },
                'body': myResponse
            }
            callback(null, fullResponse);
        });
    });
    req.on('error', callback);
    req.end();
};

