#!/bin/bash
?
USERDATA="C:\Users\Oksana\AppData\Local\Google\Chrome\User Data"
GOOGLE_EMAIL="corgifoxy97@gmail.com"
GOOGLE_PWD="zxc@123456789"
?
test="USERDATA=$USERDATA GOOGLE_EMAIL="$GOOGLE_EMAIL" GOOGLE_PWD="$GOOGLE_PWD" ./node_modules/codeceptjs/bin/codecept.js run --reporter mocha-multi"
?
echo $test
eval $test