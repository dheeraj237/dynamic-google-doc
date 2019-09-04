# dynamic-google-doc

## google script to create dynamic google doc on base template

### Step 1 Create Sample Doc

create a sample google document template with specific keywords to replace them via string replace method in our later google scripts.

![Create Sample Doc](https://github.com/dheerusuthar/dynamic-google-doc/blob/master/images/document.jpg)

### Step 2 Go to Script Editor

After creating sample doc got to Tool > Script Editor from menu.

![Go to Script Editor](https://github.com/dheerusuthar/dynamic-google-doc/blob/master/images/script1.jpg)

### Step 3 Write Script Code

Now paste the code from file `google_script.gs` in this repo to editor.

![Script Code](https://github.com/dheerusuthar/dynamic-google-doc/blob/master/images/script2.jpg)

### Step 4 Replace template document Id

After adding the script code replace the `DOCUMENT_ID_XXXXXXXXXXXXX` to the id of your template id marked in the red box in below image.

![Document ID](https://github.com/dheerusuthar/dynamic-google-doc/blob/master/images/document_id.jpg)

### Step 5 Save script and publish

by replacing document id you are ready the save the script and publish/deploy it as webapp in google. you need to give the access and execute roles permissions this webapp.

![Deploy Webapp](https://github.com/dheerusuthar/dynamic-google-doc/blob/master/images/document_id.jpg)

### After deploying the script as webapp you will get `REST API ENDPOINT` for `GET` request. Replace this urls endpoint in the file `download_dynamic_doc.py` an edit the json data for parameter to get your dynamic google doc url in console and downloaded file in current dir.
