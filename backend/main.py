#!/usr/bin/env python
# coding: utf-8

# In[ ]:


from fastai.vision.all import *
from fastaudio.core.all import *
from fastaudio.augment.all import *
import uvicorn
from fastaudio.ci import skip_if_ci
import timm
from torch.distributions.beta import Beta
from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from loguru import logger
import nest_asyncio
from fastapi.middleware.cors import CORSMiddleware
import json


# In[ ]:


# import pathlib
# temp = pathlib.PosixPath
# pathlib.PosixPath = pathlib.WindowsPath


# In[ ]:


class AudioNormalize(Transform):
    "Normalizes a single `AudioTensor`."
    def encodes(self, x:AudioTensor): return (x-x.mean()) / x.std()


# In[ ]:


def get_x(r): 
  return path/'genres_original'/r['filename'].split('.')[0]/str(r['filename'])


# In[ ]:


app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
    "https://genrify-85adbhpec-cowwl.vercel.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def load_model():
    global model
    model = load_learner(Path('D:/Leak-Detection/Genre-Predictor/backend/models'))
    return {'message': 'Loaded!'}
@app.get('/')
def index():
    return {'message': 'This is the homepage of the API '}
@app.post('/predict')
async def get_music_category(file: Union[UploadFile, None] = None):
#     if not file:
#         return {"message": "No upload file sent"}
#     else:
#         return {"filename": file.filename}
    contents = await file.read()
    file = open('demo.wav', 'wb')
    file.write(contents)
    file.close()
    ResultsArr = []
    audio = AudioTensor.create(Path('demo.wav'))
    pred,pred_idx,probs = model.predict(audio)
    sorted, indices = torch.sort(probs, descending = True)
    for i in range(0,5):
        Prediction = model.dls.vocab[indices[i]]
        prob = float(sorted[i])
        results = {'Prediction' : Prediction,'Probability' : prob}
        ResultsArr.append(results)
    return ResultsArr

if __name__ == "__main__":
    nest_asyncio.apply()
    uvicorn.run("main:app", port=8000)


# In[ ]:


# from pyngrok import ngrok

# ngrok_tunnel = ngrok.connect(8000)

# ngrok_tunnel

