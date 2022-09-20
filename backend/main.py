from fastapi import FastAPI
from fastai.vision.all import *
from fastaudio.core.all import *
from fastaudio.augment.all import *
from fastaudio.ci import skip_if_ci
import timm
import path
from torch.distributions.beta import Beta
import AudioNormalize
import torchaudio
import torchaudio.functional as F
import torchaudio.transforms as T


def get_x(r):
    return path / 'genres_original' / r['filename'].split('.')[0] / str(
        r['filename'])


learn1 = load_learner(
    'D:/Leak-Detection/Genre-Predictor/backend/models/export_r34.pkl'
)

audio = AudioTensor.create(
    'C:/Users/anubh/Downloads/Music/MIDDLE-OF-THE-NIGHT.wav'
)

pred, pred_idx, probs = learn1.predict(audio)
sorted, indices = torch.sort(probs, descending=True)
for i in range(0, 5):
    print(
        f'Prediction: {learn1.dls.vocab[indices[i]]}; Probability: {sorted[i]:.04f}'
    )

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Welcome to the Predictor API"}