#!/bin/bash
?
USERDATA="C:\Users\Zira\AppData\Local\Google\Chrome\User Data"
GOOGLE_EMAIL="jennifer.frechette.test@gmail.com"
GOOGLE_PWD="jennifertest"
?
test="USERDATA=$USERDATA GOOGLE_EMAIL="$GOOGLE_EMAIL" GOOGLE_PWD="$GOOGLE_PWD" ./node_modules/codeceptjs/bin/codecept.js run --reporter mocha-multi"
?
echo $test
eval $test