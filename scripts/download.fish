#!/usr/bin/env fish

if not test -d storage
    echo 'storage dir is not exists'
    return 1
end

cd storage
aria2c -i manifest.aria2.txt
