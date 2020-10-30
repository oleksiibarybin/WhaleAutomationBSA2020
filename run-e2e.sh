#!/bin/bash
?
USERDATA="C:\\Users\\Oleksii Barybin\\AppData\\Local\\Google\\Chrome\\User Data"
GOOGLE_EMAIL="barybinoleksii@gmail.com"
GOOGLE_PWD="mellohgmail1982"
?
test="USERDATA=$USERDATA GOOGLE_EMAIL="$GOOGLE_EMAIL" GOOGLE_PWD="$GOOGLE_PWD" ./node_modules/codeceptjs/bin/codecept.js run --reporter mocha-multi"
?
echo $test
eval $test