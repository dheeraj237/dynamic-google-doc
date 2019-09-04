import requests
import urllib.parse
from datetime import datetime

API_ENDPOINT = "https://script.google.com/macros/s/DOCUMENT_ID_XXXXXXXXXXXXX/exec"

# name of the keywords and respective values to replace via google script
data = {
    "title": "my title",
    "subtitle": "my subtitle",
    "date": "27-june-2019",
    "url": "www.myscript.com",
    "name": "xxxxx"
}

response = requests.get(API_ENDPOINT, params= data)
response = requests.post(url = API_ENDPOINT, data = data)
print("file generated >",response.content.decode('utf-8'))
response = requests.get(response.content)
# print(type(response.content))
with open("generated_doc.pdf", "wb") as f:
    f.write(response.content)
print("file downloaded")

