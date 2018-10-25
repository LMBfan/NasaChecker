# NasaChecker
Code used for the NasaChecker Lambda.   Goal was to eventually provide lots 
of options to allow users to get data on exactly what NASA was tracking on a
given day.  Started with just a count of the Near Earth Objects being
tracked today.   Never got further due to issues getting code through the
API Gateway and Postman....

NasaChecker.js -- Code for the lambda function
NasaChecker-Postman-Tests.postman_collection.json -- Postman collection

So, the lambda function works and returns valid data when tested within the
Lambda area (or when the code is properly exercised from terminal.  It has 
something wrong when invoking through API Gateway or Postman that I was
unable to figure out.   Clearly, I've got an asynchronous issue, but I was
unable to track it down.


Access the AWS environment by logging into 
Account: 179257691424
User: VeriToll-user
PW: VeriToll2018

:
