from copyreg import pickle
from fastapi import FastAPI
from fastai.vision.all import *
from fastaudio.core.all import *
from fastaudio.augment.all import *
from fastaudio.ci import skip_if_ci
import timm
import path
from torch.distributions.beta import Beta

class AudioNormalize(Transform):
    "Normalizes a single `AudioTensor`."
    def encodes(self, x:AudioTensor): return (x-x.mean()) / x.std()

app = FastAPI()
model1 = load_learner('D:/Leak-Detection/Genre-Predictor/backend/models/export_r18.pkl')
model2 = load_learner('D:/Leak-Detection/Genre-Predictor/backend/models/export_r34.pkl')
@app.get("/")
async def root():
    return {"message": "Welcome to the Predictor API"}