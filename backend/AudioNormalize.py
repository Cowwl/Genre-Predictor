from fastai.vision.all import *
from fastaudio.core.all import *
from fastaudio.augment.all import *

class AudioNormalize(Transform):
    "Normalizes a single `AudioTensor`."

    def encodes(self, x: AudioTensor):
        return (x - x.mean()) / x.std()