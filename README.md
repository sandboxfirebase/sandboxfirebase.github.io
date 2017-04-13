# Overview of sandboxfirebase.github.io

A simple sandbox for testing firebase web apps available at:

**https://sandboxfirebase.github.io**

# How To Use It

Go to:

https://console.firebase.google.com/

and use the appropriate credentials and grab the apikey, domain and msgid then put those three strings in the Url like this:

https://sandboxfireboase.github.io/#AbCd!my-fir-domname-e1a1b_123

Where `AbCd` is the `apikey`, `my-fir-domname-e1a1b` is the `domainname` (and also the **dbname** ) and finally the `123` is the `msgid`. This can be found if you login into [console]() , go to **Overview** and look for **Add Firebase to your web app** and grab the code that looks like:  

![firebaseconfig](https://cloud.githubusercontent.com/assets/27415034/25003861/5c995c7e-2049-11e7-9861-a8837e379d31.jpg)

# Technology Stack

Static `html` for front-end and `mongo-db` and other `dynamic applications` in the back-end provided by google.
