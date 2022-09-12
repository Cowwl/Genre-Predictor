from fastapi import FastAPI
from fastai.vision.all import *
from fastaudio.core.all import *
from fastaudio.augment.all import *
from fastaudio.ci import skip_if_ci
import timm
import path
from torch.distributions.beta import Beta

app = FastAPI()



@app.get("/")
async def root():
    return {"message": "Hello World"}