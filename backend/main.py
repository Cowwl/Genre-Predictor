#!/usr/bin/env python
# coding: utf-8

# In[1]:


from fastai.vision.all import *
from fastaudio.core.all import *
from fastaudio.augment.all import *
from fastaudio.ci import skip_if_ci
import timm
from torch.distributions.beta import Beta
from fastapi import FastAPI
from pydantic import BaseModel
from loguru import logger
from fastapi.middleware.cors import CORSMiddleware
import json


# In[2]:


import pathlib
temp = pathlib.PosixPath
pathlib.PosixPath = pathlib.WindowsPath


# In[3]:


class AudioNormalize(Transform):
    "Normalizes a single `AudioTensor`."
    def encodes(self, x:AudioTensor): return (x-x.mean()) / x.std()


# In[4]:


def get_x(r): 
  return path/'genres_original'/r['filename'].split('.')[0]/str(r['filename'])


# In[5]:


app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
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
    model = load_learner(Path('D:/Academics/ML Stuff/Genre Predictor/export_r18.pkl'))
    return {'message': 'Loaded!'}
@app.get('/')
def index():
    return {'message': 'This is the homepage of the API '}
@app.get('/predict')
def get_music_category():
    ResultsArr = []
    audio = AudioTensor.create("C:/Users/anubh/Downloads/Music/MIDDLE-OF-THE-NIGHT.wav")
    pred,pred_idx,probs = model.predict(audio)
    sorted, indices = torch.sort(probs, descending = True)
    for i in range(0,5):
        Prediction = model.dls.vocab[indices[i]]
        prob = float(sorted[i])
        results = {
        "Prediction" : Prediction,
        "Probability" : prob
        }
        ResultsArr.append(results)
    return ResultsArr


# In[6]:


from pyngrok import ngrok

ngrok_tunnel = ngrok.connect(8000)

ngrok_tunnel


# In[7]:


import nest_asyncio
import uvicorn

nest_asyncio.apply()
uvicorn.run(app, port=8000)


# In[ ]:




